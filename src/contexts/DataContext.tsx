import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Unidade {
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
  caracteristicas: string[];
  entrega: string;
  andar: string;
}

export interface CondominioInfo {
  titulo: string;
  subtitulo: string;
  descricao1: string;
  descricao2: string;
  endereco: string;
  telefone: string;
}

interface DataContextType {
  unidades: Unidade[];
  updateUnidade: (id: number, data: Partial<Unidade>) => void;
  condominioInfo: CondominioInfo;
  updateCondominioInfo: (data: Partial<CondominioInfo>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};

const STORAGE_KEY_UNIDADES = "residencial_unidades";
const STORAGE_KEY_CONDOMINIO = "residencial_condominio";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [unidades, setUnidades] = useState<Unidade[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY_UNIDADES);
    return stored ? JSON.parse(stored) : [];
  });

  const [condominioInfo, setCondominioInfo] = useState<CondominioInfo>(() => {
    const stored = localStorage.getItem(STORAGE_KEY_CONDOMINIO);
    return stored ? JSON.parse(stored) : {
      titulo: "O Condomínio",
      subtitulo: "Viva com Exclusividade",
      descricao1: "O Residencial Premium foi projetado para oferecer o máximo em conforto e sofisticação. Localizado no coração da Vila Madalena, oferece fácil acesso aos principais pontos da cidade.",
      descricao2: "Com apenas 48 unidades distribuídas em 12 andares, garantimos privacidade e exclusividade para nossos moradores. Cada detalhe foi pensado para proporcionar uma experiência única de moradia urbana.",
      endereco: "Rua Harmonia, 456 - Vila Madalena, São Paulo",
      telefone: "5511999999999"
    };
  });

  useEffect(() => {
    if (unidades.length > 0) {
      localStorage.setItem(STORAGE_KEY_UNIDADES, JSON.stringify(unidades));
    }
  }, [unidades]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CONDOMINIO, JSON.stringify(condominioInfo));
  }, [condominioInfo]);

  const updateUnidade = (id: number, data: Partial<Unidade>) => {
    setUnidades(prev => prev.map(u => u.id === id ? { ...u, ...data } : u));
  };

  const updateCondominioInfo = (data: Partial<CondominioInfo>) => {
    setCondominioInfo(prev => ({ ...prev, ...data }));
  };

  return (
    <DataContext.Provider value={{ unidades, updateUnidade, condominioInfo, updateCondominioInfo }}>
      {children}
    </DataContext.Provider>
  );
};
