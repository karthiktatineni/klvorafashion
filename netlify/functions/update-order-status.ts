import { Handler } from "@netlify/functions";
import { neon } from "@netlify/neon";
import Twilio from "twilio";

const sql = neon();

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const twilioClient = Twilio(accountSid, authToken);
const twilioNumber = "whatsapp:" + process.env.TWILIO_WHATSAPP_NUMBER!;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    if (!event.body) {
      return { statusCode: 400, body: "Missing body" };
    }

    // Twilio sends data as x-www-form-urlencoded
    const params = new URLSearchParams(event.body);
    const from = params.get("From"); // WhatsApp number
    const body = params.get("Body"); // Customer reply

    if (!from || !body) {
      return { statusCode: 400, body: "Missing data" };
    }

    const phone = from.replace("whatsapp:", ""); // remove 'whatsapp:'

    // Determine status from reply
    let newStatus: string;
    const reply = body.trim().toLowerCase();
    if (reply === "yes") newStatus = "confirmed";
    else if (reply === "no") newStatus = "cancelled";
    else {
      await twilioClient.messages.create({
        from: twilioNumber,
        to: from,
        body: "Please reply YES to confirm your order or NO to cancel."
      });
      return { statusCode: 200, body: "Waiting for valid response" };
    }

    // Update latest pending order for this phone
    const [updatedOrder] = await sql`
      UPDATE orders
      SET status = ${newStatus}
      WHERE phone = ${phone} AND status = 'pending'
      ORDER BY created_at DESC
      LIMIT 1
      RETURNING *
    `;

    // Send confirmation back
    await twilioClient.messages.create({
      from: twilioNumber,
      to: from,
      body: `Your order has been ${newStatus.toUpperCase()}. Thank you!`
    });

    return { statusCode: 200, body: "Order status updated" };
  } catch (err: any) {
    console.error("Error updating order status:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};
