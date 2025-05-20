import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, PiggyBank } from "lucide-react"

export default function CadastroSucessoPage() {
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

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-full w-fit">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">Cadastro recebido com sucesso!</CardTitle>
            <CardDescription>Seus dados foram enviados e estão em análise pela nossa equipe.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6 text-muted-foreground">
              Você receberá um email com instruções para finalizar a abertura da sua conta digital assim que a
              verificação for concluída.
            </p>
            <div className="p-4 bg-muted rounded-lg mb-4">
              <p className="text-sm font-medium">Próximos passos:</p>
              <ol className="text-sm text-muted-foreground mt-2 text-left list-decimal list-inside">
                <li>Verificação dos seus dados (1-2 dias úteis)</li>
                <li>Confirmação por email</li>
                <li>Criação de senha e acesso ao aplicativo</li>
                <li>Ativação da sua conta digital</li>
              </ol>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
