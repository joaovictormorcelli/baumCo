"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  CreditCard,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  PiggyBank,
  Settings,
  Wallet,
  BarChart,
  DollarSign,
  BookOpen,
  Users,
  Target,
  Calendar,
} from "lucide-react"
import { ModeToggle } from "@/components/theme-toggle"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [notifications, setNotifications] = useState(3)

  const navigation = [
    { name: "Início", href: "/dashboard", icon: Home },
    { name: "Extrato", href: "/dashboard/extrato", icon: BarChart },
    { name: "Transferências", href: "/dashboard/transferencias", icon: Wallet },
    { name: "Pagamentos", href: "/dashboard/pagamentos", icon: DollarSign },
    { name: "Cartões", href: "/dashboard/cartoes", icon: CreditCard },
    { name: "Planejamento", href: "/dashboard/planejamento", icon: Target },
    { name: "Investimentos", href: "/dashboard/investimentos", icon: PiggyBank },
    { name: "Conta Conjunta", href: "/dashboard/conta-conjunta", icon: Users },
    { name: "Agendamentos", href: "/dashboard/agendamentos", icon: Calendar },
    { name: "Educação Financeira", href: "/dashboard/educacao", icon: BookOpen },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex items-center gap-2 pb-4 pt-2">
                  <PiggyBank className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">BancoDigital</span>
                </div>
                <nav className="flex flex-col gap-2 pt-4">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                          pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2">
              <PiggyBank className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold hidden md:inline-block">BancoDigital</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {notifications}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <ModeToggle />
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden md:flex w-64 flex-col border-r bg-background">
          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="border-t p-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard/configuracoes"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <Settings className="h-5 w-5" />
                Configurações
              </Link>
              <Link
                href="/dashboard/suporte"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <HelpCircle className="h-5 w-5" />
                Suporte
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <LogOut className="h-5 w-5" />
                Sair
              </Link>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
