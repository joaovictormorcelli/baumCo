"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowDownLeft,
  ArrowUpRight,
  Download,
  Filter,
  Search,
  ShoppingBag,
  Utensils,
  Home,
  Car,
  CreditCard,
  Plane,
  Coffee,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Dados simulados de transações
const transacoes = [
  {
    id: 1,
    descricao: "Supermercado Extra",
    data: "07/05/2025",
    hora: "14:30",
    valor: -156.78,
    categoria: "Alimentação",
    icone: ShoppingBag,
  },
  {
    id: 2,
    descricao: "Transferência recebida - Maria Silva",
    data: "06/05/2025",
    hora: "09:15",
    valor: 1200.0,
    categoria: "Transferência",
    icone: ArrowDownLeft,
  },
  {
    id: 3,
    descricao: "Restaurante Sabor & Arte",
    data: "06/05/2025",
    hora: "20:45",
    valor: -89.9,
    categoria: "Alimentação",
    icone: Utensils,
  },
  {
    id: 4,
    descricao: "Aluguel",
    data: "05/05/2025",
    hora: "08:00",
    valor: -1500.0,
    categoria: "Moradia",
    icone: Home,
  },
  {
    id: 5,
    descricao: "Pagamento de fatura",
    data: "04/05/2025",
    hora: "10:30",
    valor: -2340.56,
    categoria: "Cartão de crédito",
    icone: CreditCard,
  },
  {
    id: 6,
    descricao: "Salário",
    data: "30/04/2025",
    hora: "07:00",
    valor: 5800.0,
    categoria: "Salário",
    icone: ArrowDownLeft,
  },
  {
    id: 7,
    descricao: "Posto de gasolina",
    data: "28/04/2025",
    hora: "18:45",
    valor: -150.0,
    categoria: "Transporte",
    icone: Car,
  },
  {
    id: 8,
    descricao: "Cafeteria",
    data: "27/04/2025",
    hora: "10:15",
    valor: -18.5,
    categoria: "Alimentação",
    icone: Coffee,
  },
  {
    id: 9,
    descricao: "Passagem aérea",
    data: "25/04/2025",
    hora: "09:30",
    valor: -1200.0,
    categoria: "Viagem",
    icone: Plane,
  },
  {
    id: 10,
    descricao: "Transferência enviada - João Pedro",
    data: "23/04/2025",
    hora: "14:00",
    valor: -350.0,
    categoria: "Transferência",
    icone: ArrowUpRight,
  },
]

export default function ExtratoPage() {
  const [filtro, setFiltro] = useState("todas")
  const [periodo, setPeriodo] = useState("30dias")
  const [busca, setBusca] = useState("")

  // Filtragem de transações
  const transacoesFiltradas = transacoes.filter((transacao) => {
    // Filtro por tipo (entrada/saída)
    if (filtro === "entradas" && transacao.valor <= 0) return false
    if (filtro === "saidas" && transacao.valor >= 0) return false

    // Filtro por busca
    if (busca && !transacao.descricao.toLowerCase().includes(busca.toLowerCase())) return false

    return true
  })

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Extrato e Histórico</h1>
        <p className="text-muted-foreground">Visualize e filtre suas transações</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={periodo} onValueChange={setPeriodo}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7dias">Últimos 7 dias</SelectItem>
              <SelectItem value="15dias">Últimos 15 dias</SelectItem>
              <SelectItem value="30dias">Últimos 30 dias</SelectItem>
              <SelectItem value="90dias">Últimos 90 dias</SelectItem>
              <SelectItem value="personalizado">Personalizado</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar transação..."
              className="pl-8"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Histórico de transações</CardTitle>
          <CardDescription>Visualize todas as suas transações com detalhes</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={filtro} onValueChange={setFiltro} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="entradas">Entradas</TabsTrigger>
              <TabsTrigger value="saidas">Saídas</TabsTrigger>
            </TabsList>
            <TabsContent value="todas" className="space-y-4">
              <div className="space-y-4">
                {transacoesFiltradas.map((transacao, index) => {
                  const Icon = transacao.icone
                  return (
                    <div key={transacao.id}>
                      {(index === 0 || transacao.data !== transacoesFiltradas[index - 1].data) && (
                        <div className="sticky top-0 bg-background pt-2 pb-1 mb-2">
                          <h3 className="text-sm font-medium">{transacao.data}</h3>
                          <Separator className="mt-1" />
                        </div>
                      )}
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{transacao.descricao}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-muted-foreground">{transacao.hora}</p>
                              <Badge variant="outline" className="text-xs py-0 h-5">
                                {transacao.categoria}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className={`font-medium ${transacao.valor >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                          {transacao.valor >= 0 ? "+" : ""} R$ {Math.abs(transacao.valor).toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
            <TabsContent value="entradas" className="space-y-4">
              {/* Conteúdo idêntico, mas já filtrado pela lógica acima */}
              <div className="space-y-4">
                {transacoesFiltradas.map((transacao, index) => {
                  const Icon = transacao.icone
                  return (
                    <div key={transacao.id}>
                      {(index === 0 || transacao.data !== transacoesFiltradas[index - 1].data) && (
                        <div className="sticky top-0 bg-background pt-2 pb-1 mb-2">
                          <h3 className="text-sm font-medium">{transacao.data}</h3>
                          <Separator className="mt-1" />
                        </div>
                      )}
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{transacao.descricao}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-muted-foreground">{transacao.hora}</p>
                              <Badge variant="outline" className="text-xs py-0 h-5">
                                {transacao.categoria}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="font-medium text-emerald-500">
                          + R$ {Math.abs(transacao.valor).toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
            <TabsContent value="saidas" className="space-y-4">
              {/* Conteúdo idêntico, mas já filtrado pela lógica acima */}
              <div className="space-y-4">
                {transacoesFiltradas.map((transacao, index) => {
                  const Icon = transacao.icone
                  return (
                    <div key={transacao.id}>
                      {(index === 0 || transacao.data !== transacoesFiltradas[index - 1].data) && (
                        <div className="sticky top-0 bg-background pt-2 pb-1 mb-2">
                          <h3 className="text-sm font-medium">{transacao.data}</h3>
                          <Separator className="mt-1" />
                        </div>
                      )}
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{transacao.descricao}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-muted-foreground">{transacao.hora}</p>
                              <Badge variant="outline" className="text-xs py-0 h-5">
                                {transacao.categoria}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="font-medium text-red-500">
                          - R$ {Math.abs(transacao.valor).toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Análise de gastos</CardTitle>
            <CardDescription>Visualize seus gastos por categoria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-muted/40 rounded-md mb-6">
              <div className="text-center text-muted-foreground">
                <p>Gráfico de categorias de gastos</p>
                <p className="text-xs">(Visualização simulada)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm">Moradia</span>
                </div>
                <span className="text-sm font-medium">R$ 1.500,00 (30%)</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Alimentação</span>
                </div>
                <span className="text-sm font-medium">R$ 1.200,00 (24%)</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Transporte</span>
                </div>
                <span className="text-sm font-medium">R$ 800,00 (16%)</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Lazer</span>
                </div>
                <span className="text-sm font-medium">R$ 600,00 (12%)</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm">Outros</span>
                </div>
                <span className="text-sm font-medium">R$ 900,00 (18%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evolução mensal</CardTitle>
            <CardDescription>Compare seus gastos e receitas ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-muted/40 rounded-md mb-6">
              <div className="text-center text-muted-foreground">
                <p>Gráfico de evolução mensal</p>
                <p className="text-xs">(Visualização simulada)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Janeiro</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs">R$ 6.500</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">R$ 5.200</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Fevereiro</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs">R$ 6.800</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">R$ 5.100</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Março</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs">R$ 7.200</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">R$ 5.800</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Abril</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs">R$ 6.900</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">R$ 5.500</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
