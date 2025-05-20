"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, PiggyBank } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  cpf: z.string().min(11, { message: "CPF inválido" }),
  dataNascimento: z.string().min(1, { message: "Data de nascimento é obrigatória" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(10, { message: "Telefone inválido" }),
  endereco: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres" }),
  cidade: z.string().min(2, { message: "Cidade é obrigatória" }),
  estado: z.string().min(2, { message: "Estado é obrigatório" }),
  cep: z.string().min(8, { message: "CEP inválido" }),
})

export default function CadastroPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [documentos, setDocumentos] = useState<File[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      telefone: "",
      endereco: "",
      cidade: "",
      estado: "",
      cep: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (step === 1) {
      setStep(2)
    } else {
      // Simulação de envio para API
      console.log({ ...values, documentos })
      toast({
        title: "Cadastro enviado com sucesso!",
        description: "Seus dados serão analisados e você receberá um email em breve.",
      })
      router.push("/cadastro/sucesso")
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setDocumentos(Array.from(e.target.files))
    }
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BancoDigital</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Abra sua conta digital</CardTitle>
              <CardDescription>
                Preencha seus dados pessoais para começar o processo de abertura de conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={step === 1 ? "dados-pessoais" : "documentos"} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="dados-pessoais">Dados Pessoais</TabsTrigger>
                  <TabsTrigger value="documentos" disabled={step === 1}>
                    Documentos
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="dados-pessoais">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="nome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Digite seu nome completo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cpf"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CPF</FormLabel>
                              <FormControl>
                                <Input placeholder="000.000.000-00" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="dataNascimento"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Data de nascimento</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="seu@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="telefone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone</FormLabel>
                              <FormControl>
                                <Input placeholder="(00) 00000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Endereço</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="endereco"
                            render={({ field }) => (
                              <FormItem className="col-span-2">
                                <FormLabel>Endereço</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Rua, número, complemento" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="cidade"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                  <Input placeholder="Sua cidade" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="estado"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                  <Input placeholder="UF" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="cep"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CEP</FormLabel>
                                <FormControl>
                                  <Input placeholder="00000-000" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit">Próximo</Button>
                      </div>
                    </form>
                  </Form>
                </TabsContent>
                <TabsContent value="documentos">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Documentos para verificação</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Envie uma foto do seu documento de identidade (RG ou CNH) e um comprovante de residência.
                          </p>
                          <div className="border-2 border-dashed rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                            <div className="mb-4">
                              <p className="text-sm text-muted-foreground mb-2">
                                Arraste e solte seus arquivos aqui ou clique para selecionar
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Formatos aceitos: JPG, PNG ou PDF (máx. 5MB)
                              </p>
                            </div>
                            <Input
                              type="file"
                              multiple
                              className="hidden"
                              id="documentos"
                              onChange={handleFileChange}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("documentos")?.click()}
                            >
                              Selecionar arquivos
                            </Button>
                          </div>
                          {documentos.length > 0 && (
                            <div className="mt-4">
                              <p className="text-sm font-medium mb-2">Arquivos selecionados:</p>
                              <ul className="text-sm text-muted-foreground">
                                {documentos.map((doc, index) => (
                                  <li key={index}>{doc.name}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                          Voltar
                        </Button>
                        <Button type="submit">Enviar cadastro</Button>
                      </div>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-xs text-muted-foreground">
                Ao prosseguir, você concorda com nossos Termos de Uso e Política de Privacidade.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
