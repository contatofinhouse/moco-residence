import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MessageCircle, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import UnidadeModal from "./UnidadeModal";
import { useData, Unidade } from "@/contexts/DataContext";
import apto1 from "@/assets/apto-1.jpg";
import apto1_2 from "@/assets/apto-1-2.jpg";
import apto1_3 from "@/assets/apto-1-3.jpg";
import apto2 from "@/assets/apto-2.jpg";
import apto2_2 from "@/assets/apto-2-2.jpg";
import apto2_3 from "@/assets/apto-2-3.jpg";
import apto3 from "@/assets/apto-3.jpg";
import apto3_2 from "@/assets/apto-3-2.jpg";
import apto3_3 from "@/assets/apto-3-3.jpg";
import apto4 from "@/assets/apto-4.jpg";
import apto4_2 from "@/assets/apto-4-2.jpg";
import apto4_3 from "@/assets/apto-4-3.jpg";
import apto5 from "@/assets/apto-5.jpg";
import apto5_2 from "@/assets/apto-5-2.jpg";
import apto5_3 from "@/assets/apto-5-3.jpg";

const defaultUnidades: Unidade[] = [
  {
    id: 1,
    nome: "Apartamento Garden",
    imagens: [apto1, apto1_2, apto1_3],
    preco: "R$ 850.000",
    quartos: 3,
    banheiros: 2,
    area: "95m²",
    descricao: "Apartamento no térreo com área privativa externa, acabamentos de primeira linha e vista para área verde.",
    descricaoCompleta: "Apartamento Garden exclusivo no térreo com área privativa externa de 30m². Conta com acabamentos de primeira linha, pisos em porcelanato, cozinha planejada com ilha central e área gourmet integrada. A suíte master possui closet e banheiro com hidromassagem. Ideal para quem busca contato direto com a natureza sem abrir mão do conforto urbano.",
    status: "Disponível",
    caracteristicas: [
      "Área privativa externa de 30m²",
      "Cozinha planejada com ilha central",
      "Suíte master com closet",
      "Hidromassagem na suíte",
      "Área gourmet integrada",
      "Pisos em porcelanato",
      "Vista para jardim",
      "2 vagas de garagem"
    ],
    entrega: "Dezembro 2024",
    andar: "Térreo"
  },
  {
    id: 2,
    nome: "Apartamento Premium",
    imagens: [apto2, apto2_2, apto2_3],
    preco: "R$ 920.000",
    quartos: 3,
    banheiros: 2,
    area: "102m²",
    descricao: "Unidade com varanda gourmet, suíte master com closet e cozinha planejada com ilha central.",
    descricaoCompleta: "Apartamento Premium localizado nos andares intermediários com varanda gourmet integrada e vista panorâmica. Possui layout inteligente que otimiza todos os espaços, cozinha americana com ilha central em granito, suíte master com closet e banheiro com box blindex. Acabamentos nobres incluem mármore Carrara nos banheiros e deck de madeira na varanda.",
    status: "Disponível",
    caracteristicas: [
      "Varanda gourmet com churrasqueira",
      "Vista panorâmica da cidade",
      "Cozinha americana com ilha",
      "Granito nos bancadas",
      "Mármore Carrara nos banheiros",
      "Deck de madeira na varanda",
      "Closet na suíte master",
      "2 vagas de garagem",
      "Preparação para ar condicionado"
    ],
    entrega: "Janeiro 2025",
    andar: "5° ao 10°"
  },
  {
    id: 3,
    nome: "Cobertura Duplex",
    imagens: [apto3, apto3_2, apto3_3],
    preco: "R$ 1.200.000",
    quartos: 4,
    banheiros: 3,
    area: "145m²",
    descricao: "Cobertura duplex com terraço privativo, churrasqueira e vista panorâmica da cidade.",
    descricaoCompleta: "Cobertura Duplex exclusiva com terraço privativo de 60m² e vista 360° da cidade. No primeiro pavimento: sala ampla, lavabo, cozinha gourmet e suíte. No segundo pavimento: 3 suítes, sendo a master com closet e hidromassagem. O terraço conta com churrasqueira, forno de pizza, jardim vertical e preparação para piscina. Acabamentos de luxo incluem mármore na escada, deck de madeira no terraço e automação residencial.",
    status: "Reservado",
    caracteristicas: [
      "Terraço privativo de 60m²",
      "Vista 360° da cidade",
      "Churrasqueira e forno de pizza",
      "Preparação para piscina",
      "Jardim vertical no terraço",
      "Escada em mármore",
      "Automação residencial",
      "Master suite com hidromassagem",
      "3 vagas de garagem",
      "Elevador privativo"
    ],
    entrega: "Março 2025",
    andar: "11° e 12°"
  },
  {
    id: 4,
    nome: "Studio Moderno",
    imagens: [apto4, apto4_2, apto4_3],
    preco: "R$ 620.000",
    quartos: 1,
    banheiros: 1,
    area: "45m²",
    descricao: "Studio compacto e funcional, ideal para jovens profissionais. Design inteligente que otimiza cada espaço.",
    descricaoCompleta: "Studio Moderno pensado para o estilo de vida urbano contemporâneo. Ambiente integrado com cozinha americana compacta, área de trabalho embutida e soluções inteligentes de armazenamento. Banheiro completo com acabamentos de qualidade e área de serviço integrada. Perfeito para quem busca praticidade e localização privilegiada com investimento acessível.",
    status: "Disponível",
    caracteristicas: [
      "Ambiente totalmente integrado",
      "Cozinha americana compacta",
      "Área de trabalho embutida",
      "Soluções inteligentes de storage",
      "Banheiro completo",
      "Área de serviço integrada",
      "Piso laminado de madeira",
      "1 vaga de garagem",
      "Ideal para investimento"
    ],
    entrega: "Outubro 2024",
    andar: "3° ao 8°"
  },
  {
    id: 5,
    nome: "Apartamento Luxo",
    imagens: [apto5, apto5_2, apto5_3],
    preco: "R$ 1.050.000",
    quartos: 3,
    banheiros: 3,
    area: "120m²",
    descricao: "Apartamento de alto padrão com 3 suítes, varanda gourmet ampla e acabamentos nobres em mármore.",
    descricaoCompleta: "Apartamento Luxo com padrão diferenciado e acabamentos nobres. Possui 3 suítes completas, sendo a master com banheira de hidromassagem e closet personalizado. Sala ampla com pé-direito duplo, cozinha gourmet com ilha em mármore Carrara e adega climatizada. Varanda gourmet de 15m² com churrasqueira e vista privilegiada. Automação residencial completa e sistema de som ambiente.",
    status: "Disponível",
    caracteristicas: [
      "3 suítes completas",
      "Pé-direito duplo na sala",
      "Banheira de hidromassagem",
      "Closet personalizado",
      "Cozinha gourmet com ilha",
      "Adega climatizada",
      "Varanda gourmet 15m²",
      "Automação residencial",
      "Sistema de som ambiente",
      "2 vagas de garagem"
    ],
    entrega: "Fevereiro 2025",
    andar: "8° ao 11°"
  }
];

const UnidadesSection = () => {
  const { unidades: contextUnidades } = useData();
  const [selectedUnidade, setSelectedUnidade] = useState<Unidade | null>(null);
  const [currentImages, setCurrentImages] = useState<{[key: number]: number}>({});
  
  const unidades = contextUnidades.length > 0 ? contextUnidades : defaultUnidades;

  useEffect(() => {
    if (contextUnidades.length === 0) {
      localStorage.setItem("residencial_unidades", JSON.stringify(defaultUnidades));
      window.location.reload();
    }
  }, [contextUnidades]);

  const { condominioInfo } = useData();

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