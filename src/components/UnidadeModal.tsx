import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Bed, 
  Bath, 
  Square, 
  MessageCircle,
  Play,
  MapPin,
  Calendar,
  DollarSign
} from "lucide-react";

interface UnidadeCompleta {
  id: number;
  nome: string;
  imagens: string[];
  preco: string;
  quartos: number;
  banheiros: number;
  area: string;
  descricao: string;
  descricaoCompleta: string;
  status: "Disponível" | "Reservado";
  videoUrl?: string;
  caracteristicas: string[];
  entrega: string;
  andar: string;
}

interface UnidadeModalProps {
  unidade: UnidadeCompleta | null;
  isOpen: boolean;
  onClose: () => void;
}

const UnidadeModal = ({ unidade, isOpen, onClose }: UnidadeModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!unidade) return null;

  const handleWhatsAppVisita = () => {
    const phoneNumber = "5511999999999";
    const message = `Olá! Gostaria de agendar uma visita para o ${unidade.nome} no Residencial Premium.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === unidade.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? unidade.imagens.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-luxury-navy flex items-center justify-between">
            {unidade.nome}
            <Badge 
              className={`${
                unidade.status === 'Disponível' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              {unidade.status}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Slideshow de Imagens */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={unidade.imagens[currentImageIndex]} 
                alt={`${unidade.nome} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              {unidade.imagens.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {unidade.imagens.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto">
              {unidade.imagens.map((imagem, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={imagem} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Vídeo Placeholder */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <Play className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-luxury-gray">Tour Virtual 360°</p>
              <p className="text-sm text-muted-foreground">Clique para assistir</p>
            </div>
          </div>

          {/* Informações Detalhadas */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-primary">{unidade.preco}</span>
              <div className="flex items-center space-x-4 text-luxury-gray">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span>{unidade.quartos}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="h-4 w-4" />
                  <span>{unidade.banheiros}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Square className="h-4 w-4" />
                  <span>{unidade.area}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Andar: {unidade.andar}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Entrega: {unidade.entrega}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-luxury-navy mb-2">Descrição</h4>
              <p className="text-luxury-gray leading-relaxed">
                {unidade.descricaoCompleta}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-luxury-navy mb-2">Características</h4>
              <ul className="grid grid-cols-1 gap-2">
                {unidade.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-center space-x-2 text-luxury-gray">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleWhatsAppVisita}
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
                disabled={unidade.status === 'Reservado'}
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>
                  {unidade.status === 'Disponível' ? 'Agendar Visita' : 'Indisponível'}
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  const message = `Olá! Gostaria de receber mais informações e a tabela de preços do ${unidade.nome}.`;
                  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Solicitar Tabela de Preços
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UnidadeModal;