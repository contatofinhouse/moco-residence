import { Building2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de mais informações sobre o Residencial Premium.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-luxury-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="h-8 w-8 text-primary-glow" />
              <span className="text-2xl font-bold">Residencial Premium</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Viva com sofisticação e conforto no coração da Vila Madalena. 
              Apartamentos de alto padrão com acabamentos de luxo e amenidades completas.
            </p>
            <button 
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Fale Conosco</span>
            </button>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-gray-300">contato@residencialpremium.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-glow mt-1" />
                <span className="text-gray-300">
                  Rua Harmonia, 456<br />
                  Vila Madalena, São Paulo - SP
                </span>
              </div>
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta<br />9h às 18h</p>
              <p>Sábados<br />9h às 14h</p>
              <p>Domingos e Feriados<br />Plantão via WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-gray/30 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Residencial Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;