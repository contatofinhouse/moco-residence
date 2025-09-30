import { Building2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/contexts/DataContext";

const Header = () => {
  const { condominioInfo } = useData();

  const handleWhatsAppContact = () => {
    const phoneNumber = condominioInfo.telefone;
    const message = "Olá! Gostaria de mais informações sobre o condomínio.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-luxury-navy">Residencial Premium</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#unidades" className="text-luxury-gray hover:text-primary transition-colors">
              Unidades
            </a>
            <a href="#condominio" className="text-luxury-gray hover:text-primary transition-colors">
              O Condomínio
            </a>
            <Button 
              variant="outline" 
              onClick={handleWhatsAppContact}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Contato</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;