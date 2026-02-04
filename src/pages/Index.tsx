import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
