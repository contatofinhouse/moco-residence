import { Unidade } from "@/contexts/DataContext";
import apto1 from "@/assets/apto-1.jpg";
import apto1_2 from "@/assets/apto-1-2.jpg";
import apto1_3 from "@/assets/apto-1-3.jpg";
import apto1_4 from "@/assets/apto-1-4.jpg";
import apto1_5 from "@/assets/apto-1-5.jpg";
import apto1_6 from "@/assets/apto-1-6.jpg";
import apto2 from "@/assets/apto-2.jpg";
import apto2_2 from "@/assets/apto-2-2.jpg";
import apto2_3 from "@/assets/apto-2-3.jpg";
import apto2_4 from "@/assets/apto-2-4.jpg";
import apto2_5 from "@/assets/apto-2-5.jpg";
import apto2_6 from "@/assets/apto-2-6.jpg";
import apto3 from "@/assets/apto-3.jpg";
import apto3_2 from "@/assets/apto-3-2.jpg";
import apto3_3 from "@/assets/apto-3-3.jpg";
import apto3_4 from "@/assets/apto-3-4.jpg";
import apto3_5 from "@/assets/apto-3-5.jpg";
import apto3_6 from "@/assets/apto-3-6.jpg";
import apto4 from "@/assets/apto-4.jpg";
import apto4_2 from "@/assets/apto-4-2.jpg";
import apto4_3 from "@/assets/apto-4-3.jpg";
import apto4_4 from "@/assets/apto-4-4.jpg";
import apto4_5 from "@/assets/apto-4-5.jpg";
import apto4_6 from "@/assets/apto-4-6.jpg";
import apto5 from "@/assets/apto-5.jpg";
import apto5_2 from "@/assets/apto-5-2.jpg";
import apto5_3 from "@/assets/apto-5-3.jpg";
import apto5_4 from "@/assets/apto-5-4.jpg";
import apto5_5 from "@/assets/apto-5-5.jpg";
import apto5_6 from "@/assets/apto-5-6.jpg";

export const defaultUnidades: Unidade[] = [
  {
    id: 1,
    nome: "Apartamento Garden",
    imagens: [apto1, apto1_2, apto1_3, apto1_4, apto1_5, apto1_6],
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
    imagens: [apto2, apto2_2, apto2_3, apto2_4, apto2_5, apto2_6],
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
    imagens: [apto3, apto3_2, apto3_3, apto3_4, apto3_5, apto3_6],
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
    imagens: [apto4, apto4_2, apto4_3, apto4_4, apto4_5, apto4_6],
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
    imagens: [apto5, apto5_2, apto5_3, apto5_4, apto5_5, apto5_6],
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
