import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // ⬇️ Your Formspree endpoint
  const FORM_ENDPOINT = "https://formspree.io/f/mqarygpz";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // Send to Formspree
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      toast({
        title: "Welcome to Klvora",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } else {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Stay Connected
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Join Our World
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Subscribe to receive exclusive access to new collections, private events,
            and curated style inspiration delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-14 px-6 bg-secondary border border-border text-foreground placeholder:text-muted-foreground font-body text-sm tracking-wide focus:outline-none focus:border-primary transition-colors duration-300"
              required
            />
            <Button type="submit" variant="champagne" size="lg">
              Subscribe
            </Button>
          </form>

          <p className="font-body text-xs text-muted-foreground mt-6 tracking-wide">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
