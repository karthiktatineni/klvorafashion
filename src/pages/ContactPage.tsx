import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xyzrjgoo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll respond within 24 hours.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send message right now.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground opacity-0 animate-fade-up stagger-1">
            Contact Us
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed opacity-0 animate-fade-up stagger-2">
            We're here to help. Reach out with any questions about orders,
            products, or anything else.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm tracking-widest uppercase text-foreground mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm tracking-wide focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm tracking-widest uppercase text-foreground mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm tracking-wide focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm tracking-widest uppercase text-foreground mb-3">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-6 bg-secondary border border-border text-foreground font-body text-sm tracking-wide focus:outline-none focus:border-primary transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm tracking-widest uppercase text-foreground mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-6 bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm tracking-wide focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" variant="champagne" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right side (unchanged) */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">
                Visit Us
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm tracking-widest uppercase text-foreground mb-2">
                      Flagship Store
                    </h3>
                    <p className="font-body text-muted-foreground"></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm tracking-widest uppercase text-foreground mb-2">
                      Phone
                    </h3>
                    <p className="font-body text-muted-foreground">
                      +91 91821 25082
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm tracking-widest uppercase text-foreground mb-2">
                      Email
                    </h3>
                    <p className="font-body text-muted-foreground">
                      klvorafashion@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm tracking-widest uppercase text-foreground mb-2">
                      Hours
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Monday - Saturday: 10am - 8pm<br />
                      Sunday: 11am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12 pt-12 border-t border-border">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Quick Help
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-body text-foreground mb-1">Returns</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      10-day return policy on all unworn items with original tags.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-body text-foreground mb-1">Size Guide</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Contact us for personalized sizing assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
