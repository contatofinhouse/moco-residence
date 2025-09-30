import { useState } from "react";
import { useData } from "@/contexts/DataContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const { unidades, updateUnidade, condominioInfo, updateCondominioInfo } = useData();
  const [selectedUnidade, setSelectedUnidade] = useState(unidades[0]?.id);

  const currentUnidade = unidades.find(u => u.id === selectedUnidade);

  const handleUnidadeUpdate = (field: string, value: any) => {
    if (!selectedUnidade) return;
    updateUnidade(selectedUnidade, { [field]: value });
    toast({
      title: "Atualizado!",
      description: "Informações da unidade atualizadas com sucesso.",
    });
  };

  const handleCondominioUpdate = (field: string, value: string) => {
    updateCondominioInfo({ [field]: value });
    toast({
      title: "Atualizado!",
      description: "Informações do condomínio atualizadas com sucesso.",
    });
  };

  const handleCaracteristicaChange = (index: number, value: string) => {
    if (!currentUnidade) return;
    const newCaracteristicas = [...currentUnidade.caracteristicas];
    newCaracteristicas[index] = value;
    updateUnidade(selectedUnidade, { caracteristicas: newCaracteristicas });
  };

  const addCaracteristica = () => {
    if (!currentUnidade) return;
    const newCaracteristicas = [...currentUnidade.caracteristicas, ""];
    updateUnidade(selectedUnidade, { caracteristicas: newCaracteristicas });
  };

  const removeCaracteristica = (index: number) => {
    if (!currentUnidade) return;
    const newCaracteristicas = currentUnidade.caracteristicas.filter((_, i) => i !== index);
    updateUnidade(selectedUnidade, { caracteristicas: newCaracteristicas });
  };

  return (
    <div className="min-h-screen bg-luxury-light">
      <div className="container mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o site
        </Button>

        <h1 className="text-4xl font-bold text-luxury-navy mb-8">Painel Administrativo</h1>

        <Tabs defaultValue="unidades" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="unidades">Unidades</TabsTrigger>
            <TabsTrigger value="condominio">Condomínio</TabsTrigger>
          </TabsList>

          {/* Tab de Unidades */}
          <TabsContent value="unidades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Selecione a Unidade</CardTitle>
              </CardHeader>
              <CardContent>
                <Select 
                  value={selectedUnidade?.toString()} 
                  onValueChange={(value) => setSelectedUnidade(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {unidades.map(unidade => (
                      <SelectItem key={unidade.id} value={unidade.id.toString()}>
                        {unidade.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {currentUnidade && (
              <Card>
                <CardHeader>
                  <CardTitle>Editar {currentUnidade.nome}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input 
                        id="nome"
                        value={currentUnidade.nome}
                        onChange={(e) => handleUnidadeUpdate("nome", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preco">Preço</Label>
                      <Input 
                        id="preco"
                        value={currentUnidade.preco}
                        onChange={(e) => handleUnidadeUpdate("preco", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quartos">Quartos</Label>
                      <Input 
                        id="quartos"
                        type="number"
                        value={currentUnidade.quartos}
                        onChange={(e) => handleUnidadeUpdate("quartos", Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="banheiros">Banheiros</Label>
                      <Input 
                        id="banheiros"
                        type="number"
                        value={currentUnidade.banheiros}
                        onChange={(e) => handleUnidadeUpdate("banheiros", Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Área</Label>
                      <Input 
                        id="area"
                        value={currentUnidade.area}
                        onChange={(e) => handleUnidadeUpdate("area", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select 
                        value={currentUnidade.status}
                        onValueChange={(value) => handleUnidadeUpdate("status", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Disponível">Disponível</SelectItem>
                          <SelectItem value="Reservado">Reservado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="entrega">Entrega</Label>
                      <Input 
                        id="entrega"
                        value={currentUnidade.entrega}
                        onChange={(e) => handleUnidadeUpdate("entrega", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="andar">Andar</Label>
                      <Input 
                        id="andar"
                        value={currentUnidade.andar}
                        onChange={(e) => handleUnidadeUpdate("andar", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição Curta</Label>
                    <Textarea 
                      id="descricao"
                      value={currentUnidade.descricao}
                      onChange={(e) => handleUnidadeUpdate("descricao", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricaoCompleta">Descrição Completa</Label>
                    <Textarea 
                      id="descricaoCompleta"
                      value={currentUnidade.descricaoCompleta}
                      onChange={(e) => handleUnidadeUpdate("descricaoCompleta", e.target.value)}
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Características</Label>
                    {currentUnidade.caracteristicas.map((caracteristica, index) => (
                      <div key={index} className="flex gap-2">
                        <Input 
                          value={caracteristica}
                          onChange={(e) => handleCaracteristicaChange(index, e.target.value)}
                        />
                        <Button 
                          variant="destructive" 
                          onClick={() => removeCaracteristica(index)}
                        >
                          Remover
                        </Button>
                      </div>
                    ))}
                    <Button onClick={addCaracteristica} variant="outline">
                      Adicionar Característica
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Tab de Condomínio */}
          <TabsContent value="condominio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Condomínio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título</Label>
                  <Input 
                    id="titulo"
                    value={condominioInfo.titulo}
                    onChange={(e) => handleCondominioUpdate("titulo", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subtitulo">Subtítulo</Label>
                  <Input 
                    id="subtitulo"
                    value={condominioInfo.subtitulo}
                    onChange={(e) => handleCondominioUpdate("subtitulo", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao1">Descrição 1</Label>
                  <Textarea 
                    id="descricao1"
                    value={condominioInfo.descricao1}
                    onChange={(e) => handleCondominioUpdate("descricao1", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao2">Descrição 2</Label>
                  <Textarea 
                    id="descricao2"
                    value={condominioInfo.descricao2}
                    onChange={(e) => handleCondominioUpdate("descricao2", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input 
                    id="endereco"
                    value={condominioInfo.endereco}
                    onChange={(e) => handleCondominioUpdate("endereco", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone (WhatsApp)</Label>
                  <Input 
                    id="telefone"
                    value={condominioInfo.telefone}
                    onChange={(e) => handleCondominioUpdate("telefone", e.target.value)}
                    placeholder="5511999999999"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
