import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MessageCircle, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import UnidadeModal from "./UnidadeModal";
import { useData } from "@/contexts/DataContext";

const UnidadesSection = () => {
  const { unidades, condominioInfo } = useData();
  const [selectedUnidade, setSelectedUnidade] = useState<any>(null);
  const [currentImages, setCurrentImages] = useState<{[key: number]: number}>({});

  const handleWhatsAppVisita = (unidade: string) => {
    const phoneNumber = condominioInfo.telefone;
    const message = `Olá! Gostaria de agendar uma visita para o ${unidade} no Residencial Premium.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const nextImage = (unidadeId: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [unidadeId]: ((prev[unidadeId] || 0) + 1) % unidades.find(u => u.id === unidadeId)!.imagens.length
    }));
  };

  const prevImage = (unidadeId: number) => {
    const unidade = unidades.find(u => u.id === unidadeId)!;
    setCurrentImages(prev => ({
      ...prev,
      [unidadeId]: (prev[unidadeId] || 0) === 0 ? unidade.imagens.length - 1 : (prev[unidadeId] || 0) - 1
    }));
  };

  return (
    <>
      <section id="unidades" className="py-20 bg-luxury-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-navy mb-6">
              Unidades Disponíveis
            </h2>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
              Escolha entre nossas opções de apartamentos com acabamentos de luxo, 
              design contemporâneo e a melhor localização da região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unidades.map((unidade) => (
              <Card 
                key={unidade.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative">
                  <img 
                    src={unidade.imagens[currentImages[unidade.id] || 0]} 
                    alt={unidade.nome}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Controles do Slideshow */}
                  {unidade.imagens.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(unidade.id);
                        }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(unidade.id);
                        }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      unidade.status === 'Disponível' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-yellow-500 hover:bg-yellow-600'
                    }`}
                  >
                    {unidade.status}
                  </Badge>

                  {/* Indicador de mais fotos */}
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {(currentImages[unidade.id] || 0) + 1} / {unidade.imagens.length}
                  </div>

                  {/* Botão Ver Mais */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute bottom-2 left-2 bg-white/90 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedUnidade(unidade);
                    }}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Ver Mais
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-luxury-navy">{unidade.nome}</h3>
                    <span className="text-2xl font-bold text-primary">{unidade.preco}</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-4 text-luxury-gray">
                    <div className="flex items-center space-x-2">
                      <Bed className="h-4 w-4" />
                      <span>{unidade.quartos}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="h-4 w-4" />
                      <span>{unidade.banheiros}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="h-4 w-4" />
                      <span>{unidade.area}</span>
                    </div>
                  </div>
                  
                  <p className="text-luxury-gray mb-6 leading-relaxed">
                    {unidade.descricao}
                  </p>
                  
                  <div className="space-y-2">
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppVisita(unidade.nome);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
                      disabled={unidade.status === 'Reservado'}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>
                        {unidade.status === 'Disponível' ? 'Agendar Visita' : 'Indisponível'}
                      </span>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedUnidade(unidade);
                      }}
                    >
                      Ver Detalhes Completos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <UnidadeModal 
        unidade={selectedUnidade}
        isOpen={!!selectedUnidade}
        onClose={() => setSelectedUnidade(null)}
      />
    </>
  );
};

export default UnidadesSection;