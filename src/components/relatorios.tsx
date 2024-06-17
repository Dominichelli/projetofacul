/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MfZKOYEzNfK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Toggle } from "@/components/ui/toggle";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Airplay,
  BarChart,
  Bolt,
  Calendar,
  DollarSign,
  Ellipsis,
  LayoutDashboard,
  Moon,
  Plus,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Aside } from "./aside";

export default function Relatorio() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Aside />
      <main className="flex-1 p-6 md:p-8 bg-[#F4F7FD] dark:bg-gray-900">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-[#2D3436] dark:text-white">
            Relatórios.
          </h1>
          <div className="flex items-center space-x-4">
            <Toggle
              aria-label="Toggle dark mode"
              className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </Toggle>
          </div>
        </header>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <Button variant="secondary">Gerar Relatório</Button>
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-md shadow px-4 py-2 w-full">
            <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            <Input
              className="pl-2 w-full bg-transparent text-gray-900 dark:text-gray-100"
              placeholder="Busque por relatórios..."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Relatório de Atividades</CardTitle>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  Última atualização: 10/05/2023
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Relatório detalhado de todas as atividades realizadas pela
                equipe no último mês.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="secondary">Mensal</Badge>
              <Button size="sm" variant="outline">
                Visualizar
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Relatório de Produtividade</CardTitle>
              <div className="flex items-center space-x-2">
                <BarChart className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  Última atualização: 15/04/2023
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Relatório de produtividade da equipe, com métricas de desempenho
                e eficiência.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="secondary">Trimestral</Badge>
              <Button size="sm" variant="outline">
                Visualizar
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Relatório de Custos</CardTitle>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  Última atualização: 20/03/2023
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Relatório detalhado de todos os custos relacionados ao projeto.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="secondary">Anual</Badge>
              <Button size="sm" variant="outline">
                Visualizar
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Relatório de Vendas</CardTitle>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  Última atualização: 05/02/2023
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p>Relatório de vendas e faturamento da equipe de marketing.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="secondary">Mensal</Badge>
              <Button size="sm" variant="outline">
                Visualizar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
