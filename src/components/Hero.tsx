import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";

const carouselImages = [
  { src: carousel1, alt: "Men's streetwear fashion" },
  { src: carousel2, alt: "Women's elegant fashion" },
  { src: carousel3, alt: "Kids trendy fashion" },
  { src: carousel4, alt: "Couple streetwear fashion" },
  { src: carousel5, alt: "Women's winter fashion" },
  { src: carousel6, alt: "Men's leather jacket fashion" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <div className="overflow-hidden mb-4">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[0.95] opacity-0 animate-fade-up stagger-1">
              KLVORA
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium italic text-primary leading-[0.95] opacity-0 animate-fade-up stagger-2">
              Fashionwear
            </h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden mb-12">
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-fade-up stagger-3">
              Discover our curated collection of contemporary luxury and street fashion for 
              men, women, and kids. Impeccable style meets timeless design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-4">
            <Link to="/collections">
              <Button variant="hero" size="lg" className="group">
                Explore Collection
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/new-arrivals">
              <Button variant="minimal" size="lg">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-primary" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in stagger-5">
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
