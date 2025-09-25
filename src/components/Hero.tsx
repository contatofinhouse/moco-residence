import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-condominio.jpg";

const Hero = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de agendar uma visita ao Residencial Premium.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 to-luxury-blue/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            <span className="text-lg font-medium">Empreendimento Premium</span>
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Residencial
            <span className="block text-primary-glow">Premium</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Viva com sofisticação e conforto no coração da cidade. 
            Apartamentos de alto padrão com acabamentos de luxo.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-10 text-lg">
            <MapPin className="h-5 w-5 text-primary-glow" />
            <span>Vila Madalena, São Paulo - SP</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppContact}
              className="bg-primary hover:bg-primary-glow text-white px-8 py-4 text-lg font-semibold"
              style={{ boxShadow: "var(--shadow-luxury)" }}
            >
              Agendar Visita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                document.getElementById('unidades')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="border-white text-white hover:bg-white hover:text-luxury-navy px-8 py-4 text-lg"
            >
              Ver Unidades
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;