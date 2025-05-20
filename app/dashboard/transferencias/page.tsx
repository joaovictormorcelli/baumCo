"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { QrCode, Shield } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"

export default function TransferenciasPage() {
  const [transferType, setTransferType] = useState("pix")
  const [amount, setAmount] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    toast({
      title: "Transferência realizada com sucesso!",
      description: `R$ ${amount} foram transferidos.`,
    })
    setShowConfirmation(false)
    setAmount("")
  }

  const contatos = [
    { id: 1, nome: "Maria Silva", banco: "BancoDigital", tipo: "Pix", chave: "maria@email.com" },
    { id: 2, nome: "Carlos Oliveira", banco: "Banco ABC", tipo: "Pix", chave: "carlos@email.com" },
    { id: 3, nome: "Ana Souza", banco: "BancoDigital", tipo: "Pix", chave: "ana@email.com" },
    { id: 4, nome: "Pedro Santos", banco: "Banco XYZ", tipo: "Conta", agencia: "1234", conta: "56789-0" },
  ]

  return (
    <div className="container p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Transferências</h1>
        <p className="text-muted-foreground">Realize transferências para outras contas</p>
      </div>

      <Tabs value={transferType} onValueChange={setTransferType} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pix">PIX</TabsTrigger>
          <TabsTrigger value="ted">TED</TabsTrigger>
          <TabsTrigger value="doc">DOC</TabsTrigger>
        </TabsList>
        <TabsContent value="pix">
          <Card>
            <CardHeader>
              <CardTitle>Transferência via PIX</CardTitle>
              <CardDescription>
                Transferências instantâneas para qualquer banco, 24h por dia, 7 dias por semana.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showConfirmation ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Tipo de chave PIX</Label>
                      <RadioGroup defaultValue="cpf" className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cpf" id="cpf" />
                          <Label htmlFor="cpf">CPF/CNPJ</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email" />
                          <Label htmlFor="email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="telefone" id="telefone" />
                          <Label htmlFor="telefone">Telefone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="aleatoria" id="aleatoria" />
                          <Label htmlFor="aleatoria">Chave aleatória</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="chave">Chave PIX</Label>
                      <div className="flex mt-1">
                        <Input id="chave" placeholder="Digite a chave PIX" className="rounded-r-none" />
                        <Button type="button" variant="outline" className="rounded-l-none" size="icon">
                          <QrCode className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="valor">Valor</Label>
                      <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground sm:text-sm">R$</span>
                        </div>
                        <Input
                          id="valor"
                          type="number"
                          placeholder="0,00"
                          className="pl-10"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="descricao">Descrição (opcional)</Label>
                      <Textarea id="descricao" placeholder="Adicione uma descrição para esta transferência" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Contatos recentes</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {contatos.slice(0, 4).map((contato) => (
                        <div
                          key={contato.id}
                          className="flex items-center gap-3 p-2 border rounded-md hover:bg-muted cursor-pointer"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={contato.nome} />
                            <AvatarFallback>{contato.nome.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{contato.nome}</p>
                            <p className="text-xs text-muted-foreground truncate">{contato.chave}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tipo</span>
                      <span className="text-sm font-medium">PIX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Destinatário</span>
                      <span className="text-sm font-medium">Maria Silva</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Chave</span>
                      <span className="text-sm font-medium">maria@email.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Valor</span>
                      <span className="text-sm font-medium">R$ {amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Data</span>
                      <span className="text-sm font-medium">Hoje, {new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                    <p className="text-sm">Confirme a transferência usando sua autenticação de dois fatores</p>
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
                  <Button onClick={handleConfirm}>Confirmar transferência</Button>
                </>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="ted">
          <Card>
            <CardHeader>
              <CardTitle>Transferência via TED</CardTitle>
              <CardDescription>Transferências em até 30 minutos em dias úteis, das 6h30 às 17h.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="banco">Banco</Label>
                    <Select>
                      <SelectTrigger id="banco">
                        <SelectValue placeholder="Selecione o banco" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="001">001 - Banco do Brasil</SelectItem>
                        <SelectItem value="104">104 - Caixa Econômica Federal</SelectItem>
                        <SelectItem value="237">237 - Bradesco</SelectItem>
                        <SelectItem value="341">341 - Itaú</SelectItem>
                        <SelectItem value="033">033 - Santander</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="agencia">Agência</Label>
                      <Input id="agencia" placeholder="Número da agência" />
                    </div>
                    <div>
                      <Label htmlFor="conta">Conta</Label>
                      <Input id="conta" placeholder="Número da conta" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tipo-conta">Tipo de conta</Label>
                    <RadioGroup defaultValue="corrente" className="grid grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="corrente" id="corrente" />
                        <Label htmlFor="corrente">Conta corrente</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poupanca" id="poupanca" />
                        <Label htmlFor="poupanca">Conta poupança</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="nome">Nome do destinatário</Label>
                    <Input id="nome" placeholder="Nome completo" />
                  </div>

                  <div>
                    <Label htmlFor="cpf">CPF/CNPJ do destinatário</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>

                  <div>
                    <Label htmlFor="valor-ted">Valor</Label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-muted-foreground sm:text-sm">R$</span>
                      </div>
                      <Input id="valor-ted" type="number" placeholder="0,00" className="pl-10" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Continuar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="doc">
          <Card>
            <CardHeader>
              <CardTitle>Transferência via DOC</CardTitle>
              <CardDescription>
                Transferências processadas no próximo dia útil, para valores até R$ 4.999,99.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="banco-doc">Banco</Label>
                    <Select>
                      <SelectTrigger id="banco-doc">
                        <SelectValue placeholder="Selecione o banco" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="001">001 - Banco do Brasil</SelectItem>
                        <SelectItem value="104">104 - Caixa Econômica Federal</SelectItem>
                        <SelectItem value="237">237 - Bradesco</SelectItem>
                        <SelectItem value="341">341 - Itaú</SelectItem>
                        <SelectItem value="033">033 - Santander</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="agencia-doc">Agência</Label>
                      <Input id="agencia-doc" placeholder="Número da agência" />
                    </div>
                    <div>
                      <Label htmlFor="conta-doc">Conta</Label>
                      <Input id="conta-doc" placeholder="Número da conta" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tipo-conta-doc">Tipo de conta</Label>
                    <RadioGroup defaultValue="corrente" className="grid grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="corrente" id="corrente-doc" />
                        <Label htmlFor="corrente-doc">Conta corrente</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poupanca" id="poupanca-doc" />
                        <Label htmlFor="poupanca-doc">Conta poupança</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="nome-doc">Nome do destinatário</Label>
                    <Input id="nome-doc" placeholder="Nome completo" />
                  </div>

                  <div>
                    <Label htmlFor="cpf-doc">CPF/CNPJ do destinatário</Label>
                    <Input id="cpf-doc" placeholder="000.000.000-00" />
                  </div>

                  <div>
                    <Label htmlFor="valor-doc">Valor</Label>
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-muted-foreground sm:text-sm">R$</span>
                      </div>
                      <Input id="valor-doc" type="number" placeholder="0,00" className="pl-10" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Continuar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
