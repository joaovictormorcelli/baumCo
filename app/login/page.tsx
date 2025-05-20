"use client"

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
import { ArrowLeft, Fingerprint, PiggyBank, ShieldCheck } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  senha: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  lembrar: z.boolean().optional(),
})

export default function LoginPage() {
  const router = useRouter()
  const [authMethod, setAuthMethod] = useState("senha")
  const [language, setLanguage] = useState("pt-BR")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      senha: "",
      lembrar: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Simulação de login
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BancoDigital</span>
          </Link>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
              <SelectItem value="en-US">English (US)</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Acesse sua conta</CardTitle>
              <CardDescription>Entre com suas credenciais para acessar sua conta digital.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={authMethod} onValueChange={setAuthMethod} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="senha">Senha</TabsTrigger>
                  <TabsTrigger value="biometria">Biometria</TabsTrigger>
                </TabsList>
                <TabsContent value="senha">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center justify-between">
                        <FormField
                          control={form.control}
                          name="lembrar"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">Lembrar de mim</FormLabel>
                            </FormItem>
                          )}
                        />
                        <Link href="/recuperar-senha" className="text-sm text-primary hover:underline">
                          Esqueci minha senha
                        </Link>
                      </div>
                      <Button type="submit" className="w-full">
                        Entrar
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
                <TabsContent value="biometria">
                  <div className="text-center py-8">
                    <div className="mx-auto mb-6 bg-primary/10 p-4 rounded-full w-fit">
                      <Fingerprint className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Login com biometria</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Use sua impressão digital ou reconhecimento facial para acessar sua conta de forma segura.
                    </p>
                    <Button onClick={() => router.push("/dashboard")} className="w-full">
                      Autenticar com biometria
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-center w-full">
                <div className="h-px flex-1 bg-border"></div>
                <span className="px-4 text-xs text-muted-foreground">ou</span>
                <div className="h-px flex-1 bg-border"></div>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <ShieldCheck className="h-4 w-4" />
                Autenticação multifator
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Não tem uma conta?{" "}
                <Link href="/cadastro" className="text-primary hover:underline">
                  Abra sua conta agora
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
