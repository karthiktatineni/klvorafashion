import { Button } from "@/components/ui/button";
import collection3 from "@/assets/collection-3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="image-reveal aspect-[4/5] overflow-hidden">
              <img
                src={collection3}
                alt="Klvora tailored menswear - charcoal blazer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Crafted for
              <span className="italic text-primary"> Distinction</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="font-body text-lg">
                Founded in 2025, Klvora emerged from a vision to redefine contemporary 
                men's fashion. Our philosophy centers on the belief that true elegance 
                lies in exceptional craftsmanship and timeless design.
              </p>
              <p className="font-body">
                Every piece in our collection is thoughtfully designed and 
                meticulously crafted by skilled artisans using only the finest materials. 
                We believe in slow fashion—creating investment pieces that transcend seasons 
                and trends.
              </p>
            </div>

            {/* Stats */}
            

            <Link to="/contact">
              <Button variant="hero" className="mt-12">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
