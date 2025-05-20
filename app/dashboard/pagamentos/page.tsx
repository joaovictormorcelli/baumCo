"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, Scan, Shield } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export default function PagamentosPage() {
  const [codigoBarras, setCodigoBarras] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [agendarPagamento, setAgendarPagamento] = useState(false)
  const [dataPagamento, setDataPagamento] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (codigoBarras.length < 10) {
      toast({
        title: "Código de barras inválido",
        description: "Por favor, insira um código de barras válido.",
        variant: "destructive",
      })
      return
    }
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    toast({
      title: "Pagamento realizado com sucesso!",
      description: agendarPagamento
        ? `Seu pagamento foi agendado para ${dataPagamento}.`
        : "Seu pagamento foi processado e você receberá uma confirmação em breve.",
    })
    setShowConfirmation(false)
    setCodigoBarras("")
    setAgendarPagamento(false)
    setDataPagamento("")
  }

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Pagamentos</h1>
        <p className="text-muted-foreground">Pague contas e boletos de forma rápida e segura</p>
      </div>

      <Tabs defaultValue="boleto" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="boleto">Boleto</TabsTrigger>
          <TabsTrigger value="contas">Contas e serviços</TabsTrigger>
        </TabsList>
        <TabsContent value="boleto">
          <Card>
            <CardHeader>
              <CardTitle>Pagamento de boleto</CardTitle>
              <CardDescription>Pague boletos bancários, contas de consumo e tributos.</CardDescription>
            </CardHeader>
            <CardContent>
              {!showConfirmation ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="codigo-barras">Código de barras</Label>
                      <div className="flex mt-1">
                        <Input
                          id="codigo-barras"
                          placeholder="Digite ou escaneie o código de barras"
                          className="rounded-r-none"
                          value={codigoBarras}
                          onChange={(e) => setCodigoBarras(e.target.value)}
                          required
                        />
                        <Button type="button" variant="outline" className="rounded-l-none" size="icon">
                          <Scan className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Você também pode escanear o código de barras usando a câmera do seu dispositivo.
                      </p>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch id="agendar" checked={agendarPagamento} onCheckedChange={setAgendarPagamento} />
                        <Label htmlFor="agendar">Agendar pagamento</Label>
                      </div>
                    </div>

                    {agendarPagamento && (
                      <div>
                        <Label htmlFor="data-pagamento">Data de pagamento</Label>
                        <Input
                          id="data-pagamento"
                          type="date"
                          value={dataPagamento}
                          onChange={(e) => setDataPagamento(e.target.value)}
                          required={agendarPagamento}
                        />
                      </div>
                    )}
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tipo</span>
                      <span className="text-sm font-medium">Boleto</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Beneficiário</span>
                      <span className="text-sm font-medium">Empresa XYZ Ltda.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Valor</span>
                      <span className="text-sm font-medium">R$ 189,90</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Vencimento</span>
                      <span className="text-sm font-medium">15/05/2025</span>
                    </div>
                    {agendarPagamento && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Data de pagamento</span>
                        <span className="text-sm font-medium">{dataPagamento}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    <p className="text-sm">Confirme o pagamento usando sua autenticação de dois fatores</p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {!showConfirmation ? (
                <>
                  <Button variant="outline">Cancelar</Button>
                  <Button onClick={handleSubmit}>Continuar</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                    Voltar
                  </Button>
                  <Button onClick={handleConfirm}>Confirmar pagamento</Button>
                </>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="contas">
          <Card>
            <CardHeader>
              <CardTitle>Contas e serviços</CardTitle>
              <CardDescription>Pague contas de água, luz, telefone, internet e outros serviços.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex flex-col gap-2 justify-center">
                  <FileText className="h-6 w-6" />
                  <span>Água</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 justify-center">
                  <FileText className="h-6 w-6" />
                  <span>Luz</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 justify-center">
                  <FileText className="h-6 w-6" />
                  <span>Telefone</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 justify-center">
                  <FileText className="h-6 w-6" />
                  <span>Internet</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 justify-center">
                  <FileText className="h-6 w-6" />
                  <span>TV</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 justify-center">
                  <FileText className="h-6 w-6" />
                  <span>Outros</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Pagamentos agendados</CardTitle>
          <CardDescription>Visualize e gerencie seus pagamentos agendados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Fatura de cartão de crédito</p>
                  <p className="text-sm text-muted-foreground">Vencimento: 10/06/2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">R$ 1.850,75</p>
                <p className="text-xs text-muted-foreground">Agendado para 09/06/2025</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Internet</p>
                  <p className="text-sm text-muted-foreground">Vencimento: 15/05/2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">R$ 129,90</p>
                <p className="text-xs text-muted-foreground">Agendado para 15/05/2025</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Aluguel</p>
                  <p className="text-sm text-muted-foreground">Vencimento: 05/06/2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">R$ 1.500,00</p>
                <p className="text-xs text-muted-foreground">Agendado para 05/06/2025</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pagamentos automáticos</CardTitle>
          <CardDescription>Configure pagamentos recorrentes para suas contas mensais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Netflix</p>
                  <p className="text-sm text-muted-foreground">Mensal • Dia 15</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium">R$ 39,90</p>
                <div className="flex items-center space-x-2">
                  <Switch id="netflix-auto" defaultChecked />
                  <Label htmlFor="netflix-auto" className="sr-only">
                    Ativo
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Spotify</p>
                  <p className="text-sm text-muted-foreground">Mensal • Dia 10</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium">R$ 19,90</p>
                <div className="flex items-center space-x-2">
                  <Switch id="spotify-auto" defaultChecked />
                  <Label htmlFor="spotify-auto" className="sr-only">
                    Ativo
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Academia</p>
                  <p className="text-sm text-muted-foreground">Mensal • Dia 5</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium">R$ 99,90</p>
                <div className="flex items-center space-x-2">
                  <Switch id="academia-auto" defaultChecked />
                  <Label htmlFor="academia-auto" className="sr-only">
                    Ativo
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">Adicionar novo pagamento automático</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
