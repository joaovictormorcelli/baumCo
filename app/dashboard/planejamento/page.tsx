"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Edit, Plus, Target, Trash, Home, ShoppingBag, Car, Utensils, Plane, Smartphone } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function PlanejamentoPage() {
  const [activeTab, setActiveTab] = useState("orcamento")
  const [novoOrcamento, setNovoOrcamento] = useState({
    categoria: "",
    valor: "",
  })

  const handleAddOrcamento = () => {
    toast({
      title: "Orçamento adicionado",
      description: `Orçamento de R$ ${novoOrcamento.valor} para ${novoOrcamento.categoria} foi adicionado com sucesso.`,
    })
    setNovoOrcamento({ categoria: "", valor: "" })
  }

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Planejamento Financeiro</h1>
        <p className="text-muted-foreground">Defina metas, orçamentos e acompanhe seu progresso financeiro</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="orcamento">Orçamento</TabsTrigger>
          <TabsTrigger value="metas">Metas</TabsTrigger>
        </TabsList>
        <TabsContent value="orcamento">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Orçamento mensal</CardTitle>
                  <CardDescription>Acompanhe seus gastos por categoria</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Moradia</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">R$ 1.800 / R$ 2.000</span>
                          <span className="text-sm text-muted-foreground">90%</span>
                        </div>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <ShoppingBag className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Alimentação</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">R$ 1.200 / R$ 1.500</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Transporte</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">R$ 800 / R$ 1.000</span>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Lazer</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">R$ 600 / R$ 800</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Assinaturas</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">R$ 250 / R$ 300</span>
                          <span className="text-sm text-muted-foreground">83%</span>
                        </div>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Total gasto</p>
                      <p className="text-2xl font-bold">R$ 4.650,00</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Orçamento total</p>
                      <p className="text-2xl font-bold">R$ 5.600,00</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Disponível</p>
                      <p className="text-2xl font-bold text-emerald-500">R$ 950,00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Análise de gastos</CardTitle>
                  <CardDescription>Visualize a distribuição dos seus gastos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/40 rounded-md mb-6">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/60" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Moradia (32%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Alimentação (21%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Transporte (14%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Lazer (11%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm">Assinaturas (4%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span className="text-sm">Outros (18%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Adicionar orçamento</CardTitle>
                  <CardDescription>Crie um novo orçamento para uma categoria</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="categoria">Categoria</Label>
                      <Select
                        value={novoOrcamento.categoria}
                        onValueChange={(value) => setNovoOrcamento({ ...novoOrcamento, categoria: value })}
                      >
                        <SelectTrigger id="categoria">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moradia">Moradia</SelectItem>
                          <SelectItem value="alimentacao">Alimentação</SelectItem>
                          <SelectItem value="transporte">Transporte</SelectItem>
                          <SelectItem value="lazer">Lazer</SelectItem>
                          <SelectItem value="assinaturas">Assinaturas</SelectItem>
                          <SelectItem value="saude">Saúde</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="valor">Valor mensal (R$)</Label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground sm:text-sm">R$</span>
                        </div>
                        <Input
                          id="valor"
                          type="number"
                          placeholder="0,00"
                          className="pl-10"
                          value={novoOrcamento.valor}
                          onChange={(e) => setNovoOrcamento({ ...novoOrcamento, valor: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleAddOrcamento}>
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar orçamento
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dicas de economia</CardTitle>
                  <CardDescription>Sugestões para otimizar seus gastos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium mb-1">Reduza gastos com alimentação</p>
                      <p className="text-sm text-muted-foreground">
                        Planeje suas refeições semanalmente e faça uma lista de compras para evitar gastos impulsivos.
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium mb-1">Revise suas assinaturas</p>
                      <p className="text-sm text-muted-foreground">
                        Cancele serviços que você não usa com frequência e economize até R$ 100 por mês.
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium mb-1">Economize energia</p>
                      <p className="text-sm text-muted-foreground">
                        Desligue aparelhos da tomada quando não estiverem em uso para reduzir sua conta de luz.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="metas">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Suas metas financeiras</CardTitle>
                  <CardDescription>Acompanhe o progresso das suas metas de economia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Plane className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Viagem para Europa</p>
                            <p className="text-sm text-muted-foreground">Meta: R$ 10.000</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">R$ 6.500 economizados</span>
                          <span className="text-sm">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Início: 10/01/2025</span>
                        <span>Faltam 5 meses</span>
                        <span>Previsão: 10/10/2025</span>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Novo carro</p>
                            <p className="text-sm text-muted-foreground">Meta: R$ 50.000</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">R$ 15.000 economizados</span>
                          <span className="text-sm">30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Início: 05/03/2025</span>
                        <span>Faltam 18 meses</span>
                        <span>Previsão: 05/11/2026</span>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Entrada para apartamento</p>
                            <p className="text-sm text-muted-foreground">Meta: R$ 80.000</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">R$ 12.000 economizados</span>
                          <span className="text-sm">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Início: 15/02/2025</span>
                        <span>Faltam 36 meses</span>
                        <span>Previsão: 15/02/2028</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Simulação de economia</CardTitle>
                  <CardDescription>Veja quanto você pode economizar ao longo do tempo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/40 rounded-md mb-6">
                    <div className="text-center text-muted-foreground">
                      <p>Gráfico de projeção de economia</p>
                      <p className="text-xs">(Visualização simulada)</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-muted-foreground">6 meses</p>
                      <p className="text-lg font-bold">R$ 9.000</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-muted-foreground">1 ano</p>
                      <p className="text-lg font-bold">R$ 18.000</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-muted-foreground">2 anos</p>
                      <p className="text-lg font-bold">R$ 36.000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Criar nova meta</CardTitle>
                  <CardDescription>Defina uma nova meta financeira</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nome-meta">Nome da meta</Label>
                      <Input id="nome-meta" placeholder="Ex: Viagem, Carro, Casa" />
                    </div>
                    <div>
                      <Label htmlFor="valor-meta">Valor total (R$)</Label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground sm:text-sm">R$</span>
                        </div>
                        <Input id="valor-meta" type="number" placeholder="0,00" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="data-meta">Data prevista</Label>
                      <Input id="data-meta" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="valor-mensal">Valor mensal (R$)</Label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground sm:text-sm">R$</span>
                        </div>
                        <Input id="valor-mensal" type="number" placeholder="0,00" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Target className="mr-2 h-4 w-4" />
                    Criar meta
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dicas para atingir metas</CardTitle>
                  <CardDescription>Estratégias para alcançar suas metas financeiras</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium mb-1">Automatize sua economia</p>
                      <p className="text-sm text-muted-foreground">
                        Configure transferências automáticas para sua conta poupança no dia do pagamento.
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium mb-1">Regra 50/30/20</p>
                      <p className="text-sm text-muted-foreground">
                        Destine 50% da sua renda para necessidades, 30% para desejos e 20% para economia e
                        investimentos.
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="font-medium mb-1">Revise suas metas regularmente</p>
                      <p className="text-sm text-muted-foreground">
                        Ajuste suas metas conforme necessário e celebre pequenas conquistas ao longo do caminho.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
