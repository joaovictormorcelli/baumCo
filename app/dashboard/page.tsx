import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  DollarSign,
  PiggyBank,
  Wallet,
  BarChart3,
  ShoppingBag,
  Home,
  Utensils,
  BookOpen,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Olá, João</h1>
          <p className="text-muted-foreground">Bem-vindo ao seu painel financeiro</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Wallet className="h-4 w-4" />
            Transferir
          </Button>
          <Button className="gap-2">
            <DollarSign className="h-4 w-4" />
            Pagar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Saldo disponível</CardDescription>
            <CardTitle className="text-3xl font-bold">R$ 5.240,00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Atualizado há 2 minutos</span>
              <Link href="/dashboard/extrato">
                <Button variant="ghost" size="sm" className="gap-1">
                  Ver extrato
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Cartão de crédito</CardDescription>
            <CardTitle className="text-3xl font-bold">R$ 1.850,75</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Limite disponível</span>
                <span>R$ 8.149,25</span>
              </div>
              <Progress value={18.5} className="h-2" />
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Fechamento em 15 dias</span>
                <Link href="/dashboard/cartoes">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Ver fatura
                    <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Investimentos</CardDescription>
            <CardTitle className="text-3xl font-bold">R$ 12.450,32</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-emerald-500">
                <ArrowUpRight className="h-3 w-3" />
                <span>+2,4% este mês</span>
              </div>
              <Link href="/dashboard/investimentos">
                <Button variant="ghost" size="sm" className="gap-1">
                  Ver detalhes
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Transações recentes</CardTitle>
            <CardDescription>Suas últimas movimentações financeiras</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="todas">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="todas">Todas</TabsTrigger>
                <TabsTrigger value="entradas">Entradas</TabsTrigger>
                <TabsTrigger value="saidas">Saídas</TabsTrigger>
              </TabsList>
              <TabsContent value="todas" className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Supermercado Extra</p>
                      <p className="text-xs text-muted-foreground">Hoje, 14:30</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">- R$ 156,78</p>
                </div>
                <div className="flex items-center justify-between py-3 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ArrowDownLeft className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Transferência recebida</p>
                      <p className="text-xs text-muted-foreground">Ontem, 09:15</p>
                    </div>
                  </div>
                  <p className="font-medium text-emerald-500">+ R$ 1.200,00</p>
                </div>
                <div className="flex items-center justify-between py-3 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Restaurante Sabor & Arte</p>
                      <p className="text-xs text-muted-foreground">Ontem, 20:45</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">- R$ 89,90</p>
                </div>
                <div className="flex items-center justify-between py-3 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Home className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Aluguel</p>
                      <p className="text-xs text-muted-foreground">15/04/2025</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">- R$ 1.500,00</p>
                </div>
                <div className="flex items-center justify-between py-3 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Pagamento de fatura</p>
                      <p className="text-xs text-muted-foreground">10/04/2025</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">- R$ 2.340,56</p>
                </div>
              </TabsContent>
              <TabsContent value="entradas" className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ArrowDownLeft className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Transferência recebida</p>
                      <p className="text-xs text-muted-foreground">Ontem, 09:15</p>
                    </div>
                  </div>
                  <p className="font-medium text-emerald-500">+ R$ 1.200,00</p>
                </div>
                <div className="flex items-center justify-between py-3 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ArrowDownLeft className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Salário</p>
                      <p className="text-xs text-muted-foreground">05/04/2025</p>
                    </div>
                  </div>
                  <p className="font-medium text-emerald-500">+ R$ 5.800,00</p>
                </div>
              </TabsContent>
              <TabsContent value="saidas" className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Supermercado Extra</p>
                      <p className="text-xs text-muted-foreground">Hoje, 14:30</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">- R$ 156,78</p>
                </div>
                <div className="flex items-center justify-between py-3 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Restaurante Sabor & Arte</p>
                      <p className="text-xs text-muted-foreground">Ontem, 20:45</p>
                    </div>
                  </div>
                  <p className="font-medium text-red-500">- R$ 89,90</p>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-4 text-center">
              <Link href="/dashboard/extrato">
                <Button variant="outline" size="sm">
                  Ver todas as transações
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumo financeiro</CardTitle>
            <CardDescription>Análise dos seus gastos mensais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-muted/40 rounded-md mb-6">
              <BarChart3 className="h-16 w-16 text-muted-foreground/60" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Moradia</span>
                  <span className="text-sm font-medium">R$ 1.800,00</span>
                </div>
                <Progress value={36} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Alimentação</span>
                  <span className="text-sm font-medium">R$ 1.200,00</span>
                </div>
                <Progress value={24} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Transporte</span>
                  <span className="text-sm font-medium">R$ 800,00</span>
                </div>
                <Progress value={16} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Lazer</span>
                  <span className="text-sm font-medium">R$ 600,00</span>
                </div>
                <Progress value={12} className="h-2" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/dashboard/planejamento">
                <Button variant="outline" size="sm">
                  Ver planejamento completo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Metas de economia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Viagem para Europa</span>
                  <span className="text-xs">65%</span>
                </div>
                <Progress value={65} className="h-2" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">R$ 6.500 / R$ 10.000</span>
                  <span className="text-xs text-muted-foreground">Faltam 5 meses</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Novo carro</span>
                  <span className="text-xs">30%</span>
                </div>
                <Progress value={30} className="h-2" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">R$ 15.000 / R$ 50.000</span>
                  <span className="text-xs text-muted-foreground">Faltam 18 meses</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cartões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Cartão Platinum</p>
                    <p className="text-xs text-muted-foreground">**** 4589</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Cartão Digital</p>
                    <p className="text-xs text-muted-foreground">**** 7821</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Investimentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <PiggyBank className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">CDB Banco XYZ</p>
                    <p className="text-xs text-muted-foreground">Renda Fixa</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">R$ 5.000,00</p>
                  <p className="text-xs text-emerald-500">+8,5% a.a.</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <PiggyBank className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tesouro Direto</p>
                    <p className="text-xs text-muted-foreground">Renda Fixa</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">R$ 7.450,32</p>
                  <p className="text-xs text-emerald-500">+11,2% a.a.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Educação Financeira</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Como investir em ações</p>
                    <p className="text-xs text-muted-foreground">Artigo • 5 min</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Planejamento financeiro</p>
                    <p className="text-xs text-muted-foreground">Vídeo • 12 min</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
