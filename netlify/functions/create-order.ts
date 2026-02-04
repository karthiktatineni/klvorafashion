import { Handler } from "@netlify/functions";
import { neon } from "@netlify/neon";

// Connect to Neon DB using environment variable
const sql = neon(process.env.DATABASE_URL);

interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  total: number;
  items: OrderItem[];
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    // Parse incoming order data from frontend
    const data: OrderData = JSON.parse(event.body || "{}");

    // Insert order into 'orders' table
    const [order] = await sql`
      INSERT INTO orders (customer_name, phone, email, address, total_price)
      VALUES (${data.name}, ${data.phone}, ${data.email}, ${data.address}, ${data.total})
      RETURNING *
    `;

    // Insert each item into 'order_items' table
    for (const item of data.items) {
      await sql`
        INSERT INTO order_items (order_id, product_name, quantity, price)
        VALUES (${order.id}, ${item.name}, ${item.qty}, ${item.price})
      `;
    }

    // Return success response with inserted order ID
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, orderId: order.id }),
    };
  } catch (err: any) {
    console.error("Error creating order:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
