import { Toggle } from "@/components/ui/toggle";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { BarChart, Bolt, LayoutDashboard, Moon, Users } from "lucide-react";
import { Aside } from "./aside";

export default function Settings() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Aside />
      <main className="flex-1 p-6 md:p-8 bg-[#F4F7FD] dark:bg-gray-900">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-[#2D3436] dark:text-white">
            Ajustes
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Notificações por email</span>
                  <Switch defaultChecked id="email-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Notificações no aplicativo</span>
                  <Switch defaultChecked id="app-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Notificações no desktop</span>
                  <Switch id="desktop-notifications" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Integração</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="slack-webhook">Slack Webhook</Label>
                  <Input
                    defaultValue="https://hooks.slack.com/services/..."
                    id="slack-webhook"
                  />
                </div>
                <div>
                  <Label htmlFor="github-token">GitHub Token</Label>
                  <Input defaultValue="ghp_..." id="github-token" />
                </div>
                <div>
                  <Label htmlFor="trello-key">Trello Key</Label>
                  <Input defaultValue="abcd1234..." id="trello-key" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Salvar</Button>
            </CardFooter>
          </Card>
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Preferências</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Modo escuro</span>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Exibir barra lateral</span>
                  <Switch defaultChecked id="sidebar" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Exibir avatares</span>
                  <Switch defaultChecked id="avatars" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 dark:text-white">
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="2fa">Autenticação de dois fatores</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="2fa" />
                    <span className="text-gray-500 dark:text-gray-400">
                      Ativar
                    </span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="logout-time">
                    Tempo de logout automático
                  </Label>
                  <Select>
                    <SelectTrigger className="text-gray-500 dark:text-gray-400">
                      <SelectValue placeholder="Selecione o tempo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutos</SelectItem>
                      <SelectItem value="10">10 minutos</SelectItem>
                      <SelectItem value="15">15 minutos</SelectItem>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
