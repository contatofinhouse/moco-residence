import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnidadesSection from "@/components/UnidadesSection";
import CondominioSection from "@/components/CondominioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <UnidadesSection />
      <CondominioSection />
      <Footer />
    </div>
  );
};

export default Index;