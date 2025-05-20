"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PiggyBank, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export default function InvestimentosPage() {
  const [perfilRisco, setPerfilRisco] = useState(50);
  const [valorInvestimento, setValorInvestimento] = useState("");

  const handleInvestir = () => {
    toast({
      title: "Investimento realizado com sucesso!",
      description: `Você investiu R$ ${valorInvestimento} no produto selecionado.`,
    });
    setValorInvestimento("");
  };

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Investimentos</h1>
        <p className="text-muted-foreground">Gerencie seus investimentos e explore novas oportunidades</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total investido</CardDescription>
            <CardTitle className="text-3xl font-bold">R$ 12.450,32</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-emerald-500">
                <TrendingUp className="h-4 w-4" />
                <span>+2,4% este mês</span>
              </div>
              <span className="text-sm text-muted-foreground">+R$ 298,80</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Rendimento anual</CardDescription>
            <CardTitle className="text-3xl font-bold">9,8%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-emerald-500">
                <TrendingUp className="h-4 w-4" />
                <span>+1,2% vs. CDI</span>
              </div>
              <span className="text-sm text-muted-foreground">CDI: 8,6%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Distribuição</CardDescription>
            <CardTitle className="text-3xl font-bold">4 produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Renda fixa: 70%</span>
              <span className="text-sm text-muted-foreground">Renda variável: 30%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="carteira" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="carteira">Minha carteira</TabsTrigger>
          <TabsTrigger value="oportunidades">Oportunidades</TabsTrigger>
          <TabsTrigger value="perfil">Perfil de investidor</TabsTrigger>
        </TabsList>
        <TabsContent value="carteira">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seus investimentos</CardTitle>
                  <CardDescription>
                    Acompanhe o desempenho dos seus investimentos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <PiggyBank className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">CDB Banco XYZ</p>
                            <p className="text-sm text-muted-foreground">Renda Fixa • Vencimento: 15/05/2027</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200">
                          Baixo risco
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Valor investido</p>
                          <p className="text-lg font-medium">R$ 5.000,00</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-fore\
