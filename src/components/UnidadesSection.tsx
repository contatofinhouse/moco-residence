import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MessageCircle } from "lucide-react";
import apto1 from "@/assets/apto-1.jpg";
import apto2 from "@/assets/apto-2.jpg";
import apto3 from "@/assets/apto-3.jpg";

interface Unidade {
  id: number;
  nome: string;
  imagem: string;
  preco: string;
  quartos: number;
  banheiros: number;
  area: string;
  descricao: string;
  status: "Disponível" | "Reservado";
}

const unidades: Unidade[] = [
  {
    id: 1,
    nome: "Apartamento Garden",
    imagem: apto1,
    preco: "R$ 850.000",
    quartos: 3,
    banheiros: 2,
    area: "95m²",
    descricao: "Apartamento no térreo com área privativa externa, acabamentos de primeira linha e vista para área verde.",
    status: "Disponível"
  },
  {
    id: 2,
    nome: "Apartamento Premium",
    imagem: apto2,
    preco: "R$ 920.000",
    quartos: 3,
    banheiros: 2,
    area: "102m²",
    descricao: "Unidade com varanda gourmet, suíte master com closet e cozinha planejada com ilha central.",
    status: "Disponível"
  },
  {
    id: 3,
    nome: "Cobertura Duplex",
    imagem: apto3,
    preco: "R$ 1.200.000",
    quartos: 4,
    banheiros: 3,
    area: "145m²",
    descricao: "Cobertura duplex com terraço privativo, churrasqueira e vista panorâmica da cidade.",
    status: "Reservado"
  }
];

const UnidadesSection = () => {
  const handleWhatsAppVisita = (unidade: string) => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = `Olá! Gostaria de agendar uma visita para o ${unidade} no Residencial Premium.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
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
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative">
                <img 
                  src={unidade.imagem} 
                  alt={unidade.nome}
                  className="w-full h-64 object-cover"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${
                    unidade.status === 'Disponível' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  }`}
                >
                  {unidade.status}
                </Badge>
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
                
                <Button 
                  onClick={() => handleWhatsAppVisita(unidade.nome)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
                  disabled={unidade.status === 'Reservado'}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>
                    {unidade.status === 'Disponível' ? 'Agendar Visita' : 'Indisponível'}
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnidadesSection;