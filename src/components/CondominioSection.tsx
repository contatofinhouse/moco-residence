import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Waves, 
  Dumbbell, 
  Trees, 
  Shield, 
  Users,
  MessageCircle,
  MapPin
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useData } from "@/contexts/DataContext";
import condominio1 from "@/assets/condominio-1.jpg";
import condominio2 from "@/assets/condominio-2.jpg";
import condominio3 from "@/assets/condominio-3.jpg";

const amenidades = [
  { icon: Waves, nome: "Piscina Adulto e Infantil", descricao: "Área aquática completa" },
  { icon: Dumbbell, nome: "Academia Completa", descricao: "Equipamentos modernos 24h" },
  { icon: Users, nome: "Salão de Festas", descricao: "Espaço para eventos" },
  { icon: Trees, nome: "Área Verde", descricao: "Jardim e playground" },
  { icon: Car, nome: "Garagem Coberta", descricao: "2 vagas por apartamento" },
  { icon: Shield, nome: "Segurança 24h", descricao: "Portaria e monitoramento" }
];

const CondominioSection = () => {
  const { condominioInfo } = useData();

  const handleWhatsAppInfo = () => {
    const phoneNumber = condominioInfo.telefone;
    const message = "Olá! Gostaria de mais informações sobre o Residencial Premium e suas amenidades.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="condominio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
            {condominioInfo.titulo}
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            Um conceito inovador em moradia que combina localização privilegiada, 
            arquitetura contemporânea e amenidades de clube.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Slideshow */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative">
                    <img 
                      src={condominio1} 
                      alt="Fachada do Residencial Premium"
                      className="rounded-2xl w-full h-96 object-cover"
                      style={{ boxShadow: "var(--shadow-luxury)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/20 to-transparent rounded-2xl" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative">
                    <img 
                      src={condominio2} 
                      alt="Área de lazer com piscina"
                      className="rounded-2xl w-full h-96 object-cover"
                      style={{ boxShadow: "var(--shadow-luxury)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/20 to-transparent rounded-2xl" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative">
                    <img 
                      src={condominio3} 
                      alt="Jardim interno do condomínio"
                      className="rounded-2xl w-full h-96 object-cover"
                      style={{ boxShadow: "var(--shadow-luxury)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/20 to-transparent rounded-2xl" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-luxury-navy">
              {condominioInfo.subtitulo}
            </h3>
            <p className="text-lg text-luxury-gray leading-relaxed">
              {condominioInfo.descricao1}
            </p>
            <p className="text-lg text-luxury-gray leading-relaxed">
              {condominioInfo.descricao2}
            </p>
            
            <div className="flex items-center space-x-3 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">{condominioInfo.endereco}</span>
            </div>
            
            <Button 
              onClick={handleWhatsAppInfo}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Solicitar Informações</span>
            </Button>
          </div>
        </div>

        {/* Amenidades */}
        <div>
          <h3 className="text-3xl font-bold text-luxury-navy text-center mb-12">
            Amenidades e Lazer
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenidades.map((amenidade, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <amenidade.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-luxury-navy mb-2">
                    {amenidade.nome}
                  </h4>
                  <p className="text-luxury-gray">
                    {amenidade.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-luxury-navy mb-4">
            Pronto para conhecer seu novo lar?
          </h3>
          <p className="text-luxury-gray mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e agende uma visita para conhecer todas as 
            unidades disponíveis e as amenidades do Residencial Premium.
          </p>
          <Button 
            onClick={handleWhatsAppInfo}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Falar com Consultor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CondominioSection;