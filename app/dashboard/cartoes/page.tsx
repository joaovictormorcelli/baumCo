"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  DollarSign,
  Eye,
  EyeOff,
  Gift,
  Lock,
  Settings,
  ShoppingBag,
  Smartphone,
  Utensils,
  Car,
  Plane,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export default function CartoesPage() {
  const [showCardNumber, setShowCardNumber] = useState(false)
  const [showCVV, setShowCVV] = useState(false)
  const [cartaoAtivo, setCartaoAtivo] = useState("credito")
  const [limiteTemporario, setLimiteTemporario] = useState(8000)

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cartões</h1>
        <p className="text-muted-foreground">Gerencie seus cartões de crédito e débito</p>
      </div>

      <Tabs value={cartaoAtivo} onValueChange={setCartaoAtivo} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="credito">Crédito</TabsTrigger>
          <TabsTrigger value="debito">Débito</TabsTrigger>
        </TabsList>
        <TabsContent value="credito">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Cartão de crédito</CardTitle>
                  <CardDescription>Gerencie seu cartão de crédito e acompanhe seus gastos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-48 bg-gradient-to-r from-primary to-primary-foreground rounded-xl p-6 text-white overflow-hidden mb-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10"></div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-white/70 mb-1">BancoDigital</p>
                        <p className="text-lg font-medium">Platinum</p>
                      </div>
                      <CreditCard className="h-8 w-8" />
                    </div>

                    <div className="mt-6">
                      <p className="text-xs text-white/70 mb-1">Número do cartão</p>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-lg tracking-wider">
                          {showCardNumber ? "5432 1098 7654 3210" : "•••• •••• •••• 3210"}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-white/70 hover:text-white hover:bg-white/10"
                          onClick={() => setShowCardNumber(!showCardNumber)}
                        >
                          {showCardNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div>
                        <p className="text-xs text-white/70 mb-1">Titular</p>
                        <p className="font-medium">JOÃO D SILVA</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70 mb-1">Validade</p>
                        <p className="font-medium">05/28</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70 mb-1">CVV</p>
                        <div className="flex items-center gap-1">
                          <p className="font-medium">{showCVV ? "123" : "•••"}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-5 w-5 text-white/70 hover:text-white hover:bg-white/10"
                            onClick={() => setShowCVV(!showCVV)}
                          >
                            {showCVV ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-medium">Limite utilizado</p>
                        <p className="text-sm font-medium">R$ 1.850,75 de R$ 10.000,00</p>
                      </div>
                      <Progress value={18.5} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <p className="text-xs text-muted-foreground">Limite disponível: R$ 8.149,25</p>
                        <p className="text-xs text-muted-foreground">18,5% utilizado</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Smartphone className="h-4 w-4" />
                        Cartão virtual
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Lock className="h-4 w-4" />
                        Bloquear cartão
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Settings className="h-4 w-4" />
                        Configurações
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <p className="font-medium">Limite temporário</p>
                        </div>
                        <Switch id="limite-temp" />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <Label htmlFor="limite-slider">
                              Ajustar limite: R$ {limiteTemporario.toLocaleString()}
                            </Label>
                            <span className="text-xs text-muted-foreground">Máx: R$ 15.000</span>
                          </div>
                          <Slider
                            id="limite-slider"
                            min={1000}
                            max={15000}
                            step={100}
                            value={[limiteTemporario]}
                            onValueChange={(value) => setLimiteTemporario(value[0])}
                            className="py-4"
                          />
                        </div>
                        <Button className="w-full">Solicitar aumento</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fatura atual</CardTitle>
                  <CardDescription>Período: 10/04/2025 a 10/05/2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Valor da fatura</p>
                      <p className="text-2xl font-bold">R$ 1.850,75</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vencimento</p>
                      <p className="text-lg font-medium">10/05/2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
                        Em aberto
                      </Badge>
                    </div>
                    <Button>Pagar fatura</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ShoppingBag className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Supermercado Extra</p>
                          <p className="text-xs text-muted-foreground">02/05/2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ 356,78</p>
                        <p className="text-xs text-muted-foreground">3x de R$ 118,93</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Utensils className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Restaurante Sabor & Arte</p>
                          <p className="text-xs text-muted-foreground">28/04/2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ 189,90</p>
                        <p className="text-xs text-muted-foreground">2x de R$ 94,95</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Car className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Posto de gasolina</p>
                          <p className="text-xs text-muted-foreground">25/04/2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ 150,00</p>
                        <p className="text-xs text-muted-foreground">À vista</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Plane className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Passagem aérea</p>
                          <p className="text-xs text-muted-foreground">20/04/2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ 1.154,07</p>
                        <p className="text-xs text-muted-foreground">10x de R$ 115,41</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm">
                      Ver fatura completa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vantagens do cartão</CardTitle>
                  <CardDescription>Benefícios exclusivos do seu cartão</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Gift className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Cashback</p>
                        <p className="text-sm text-muted-foreground">1% de volta em todas as compras</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Plane className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Milhas</p>
                        <p className="text-sm text-muted-foreground">Acumule 1,5 pontos a cada R$ 1 gasto</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <ShoppingBag className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Parcelamento</p>
                        <p className="text-sm text-muted-foreground">Até 12x sem juros em lojas parceiras</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Programa de pontos</CardTitle>
                  <CardDescription>Acompanhe e resgate seus pontos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground">Pontos acumulados</p>
                    <p className="text-3xl font-bold">12.450</p>
                  </div>
                  <Progress value={65} className="h-2 mb-2" />
                  <p className="text-xs text-center text-muted-foreground mb-6">
                    Faltam 6.550 pontos para o próximo nível
                  </p>
                  <Button className="w-full">Resgatar pontos</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cartão virtual</CardTitle>
                  <CardDescription>Use seu cartão virtual para compras online</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-36 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-4 text-white overflow-hidden mb-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-white/70 mb-1">BancoDigital</p>
                        <p className="text-sm font-medium">Virtual</p>
                      </div>
                      <Smartphone className="h-6 w-6" />
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-white/70 mb-1">Número do cartão</p>
                      <p className="font-mono text-sm tracking-wider">•••• •••• •••• 4321</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3 w-3" />
                        Ver dados
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Lock className="h-3 w-3" />
                        Bloquear
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <Label htmlFor="compras-online" className="text-sm">
                        Compras online
                      </Label>
                      <Switch id="compras-online" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="compras-internacionais" className="text-sm">
                        Compras internacionais
                      </Label>
                      <Switch id="compras-internacionais" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="debito">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Cartão de débito</CardTitle>
                  <CardDescription>Gerencie seu cartão de débito e acompanhe seus gastos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-48 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl p-6 text-white overflow-hidden mb-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10"></div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-white/70 mb-1">BancoDigital</p>
                        <p className="text-lg font-medium">Débito</p>
                      </div>
                      <CreditCard className="h-8 w-8" />
                    </div>

                    <div className="mt-6">
                      <p className="text-xs text-white/70 mb-1">Número do cartão</p>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-lg tracking-wider">
                          {showCardNumber ? "4321 8765 0987 6543" : "•••• •••• •••• 6543"}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-white/70 hover:text-white hover:bg-white/10"
                          onClick={() => setShowCardNumber(!showCardNumber)}
                        >
                          {showCardNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div>
                        <p className="text-xs text-white/70 mb-1">Titular</p>
                        <p className="font-medium">JOÃO D SILVA</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70 mb-1">Validade</p>
                        <p className="font-medium">05/28</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/70 mb-1">CVV</p>
                        <div className="flex items-center gap-1">
                          <p className="font-medium">{showCVV ? "456" : "•••"}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-5 w-5 text-white/70 hover:text-white hover:bg-white/10"
                            onClick={() => setShowCVV(!showCVV)}
                          >
                            {showCVV ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Smartphone className="h-4 w-4" />
                        Cartão virtual
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Lock className="h-4 w-4" />
                        Bloquear cartão
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Settings className="h-4 w-4" />
                        Configurações
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <p className="font-medium">Limites diários</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <Label htmlFor="limite-compras">Compras</Label>
                            <span className="text-sm">R$ 2.000,00</span>
                          </div>
                          <Slider id="limite-compras" defaultValue={[2000]} max={5000} step={100} className="py-4" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <Label htmlFor="limite-saque">Saques</Label>
                            <span className="text-sm">R$ 1.000,00</span>
                          </div>
                          <Slider id="limite-saque" defaultValue={[1000]} max={3000} step={100} className="py-4" />
                        </div>
                        <Button className="w-full">Salvar alterações</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Últimas transações</CardTitle>
                  <CardDescription>Transações recentes com cartão de débito</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ShoppingBag className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Supermercado</p>
                          <p className="text-xs text-muted-foreground">Hoje, 10:30</p>
                        </div>
                      </div>
                      <p className="font-medium text-red-500">- R$ 87,45</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Utensils className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Restaurante</p>
                          <p className="text-xs text-muted-foreground">Ontem, 13:15</p>
                        </div>
                      </div>
                      <p className="font-medium text-red-500">- R$ 42,90</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Car className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Posto de gasolina</p>
                          <p className="text-xs text-muted-foreground">03/05/2025</p>
                        </div>
                      </div>
                      <p className="font-medium text-red-500">- R$ 150,00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cartão virtual de débito</CardTitle>
                  <CardDescription>Use seu cartão virtual para compras online</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-36 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl p-4 text-white overflow-hidden mb-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-white/70 mb-1">BancoDigital</p>
                        <p className="text-sm font-medium">Virtual Débito</p>
                      </div>
                      <Smartphone className="h-6 w-6" />
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-white/70 mb-1">Número do cartão</p>
                      <p className="font-mono text-sm tracking-wider">•••• •••• •••• 7890</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="h-3 w-3" />
                        Ver dados
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Lock className="h-3 w-3" />
                        Bloquear
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <Label htmlFor="compras-online-debito" className="text-sm">
                        Compras online
                      </Label>
                      <Switch id="compras-online-debito" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="compras-internacionais-debito" className="text-sm">
                        Compras internacionais
                      </Label>
                      <Switch id="compras-internacionais-debito" />
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
