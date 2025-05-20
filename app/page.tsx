import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Smartphone, CreditCard, PiggyBank } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PiggyBank className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">BancoDigital</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Recursos
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefícios
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre nós
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/cadastro">
              <Button>Abrir conta</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Seu banco digital completo na palma da sua mão
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Conta digital gratuita, cartões sem anuidade, investimentos e muito mais. Tudo em um só lugar, de
                  forma simples e segura.
                </p>
                <div className="flex gap-4">
                  <Link href="/cadastro">
                    <Button size="lg" className="gap-2">
                      Abrir sua conta <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Conhecer recursos
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="absolute transform rotate-[-6deg]">
                  <div className="w-64 h-[400px] bg-gradient-to-br from-primary to-primary-foreground rounded-3xl shadow-xl border border-primary/20 p-4">
                    <div className="flex justify-between items-center mb-8">
                      <PiggyBank className="h-8 w-8 text-white" />
                      <div className="w-12 h-8 bg-white/20 rounded-md"></div>
                    </div>
                    <div className="space-y-2 mb-8">
                      <div className="h-6 w-32 bg-white/20 rounded-md"></div>
                      <div className="h-10 w-48 bg-white/30 rounded-md"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-12 bg-white/10 rounded-lg"></div>
                      <div className="h-12 bg-white/10 rounded-lg"></div>
                      <div className="h-12 bg-white/10 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Recursos completos para sua vida financeira</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tudo o que você precisa para gerenciar seu dinheiro de forma inteligente e segura.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conta Digital</h3>
                <p className="text-muted-foreground">
                  Abra sua conta 100% digital em minutos, sem burocracia e sem taxas de manutenção.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cartões Digitais</h3>
                <p className="text-muted-foreground">
                  Cartões de débito e crédito virtuais com cashback, milhas e parcelamento.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Segurança Avançada</h3>
                <p className="text-muted-foreground">
                  Autenticação multifator, biometria e criptografia para proteger seus dados.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <PiggyBank className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BancoDigital</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 BancoDigital. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
