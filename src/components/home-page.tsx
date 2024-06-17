"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Ellipsis, Moon, Plus, Search, Users } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Aside } from "./aside";
import { ModeToggle } from "./darkmode";
import UserButton from "./userbutton";
import { TB_Card, Tb_Comentarios, TB_Equipe, user } from "@prisma/client";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Cardtask from "./cardtask";
import { SheetSide } from "./asidemobile";

type CardFormValues = z.infer<typeof formSchema>;

interface HomePageProps {
  Users: user[];
  Equipe: TB_Equipe;
  self: user;
  Cards: TB_Card[];
  coments: Tb_Comentarios[];
}

const formSchema = z.object({
  titulo: z.string().min(2),
  descricao: z.string().min(4),
  status: z.string().min(1),
  resp: z.string().min(1),
});

export const HomePage: React.FC<HomePageProps> = ({
  Users,
  Equipe,
  self,
  Cards,
  coments,
}) => {
  const router = useRouter();
  const form = useForm<CardFormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: CardFormValues) => {
    try {
      const response = await fetch("/api/createCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: data.titulo,
          descricao: data.descricao,
          status: data.status,
          id_resp: data.resp,
          tag: "", // Se houver uma tag padrão ou campo para tag
          id_update_Card: 0, // Ajuste conforme necessário
          id_comentar: 0, // Ajuste conforme necessário
          id_equipe: Equipe.id, // Assume que `Equipe.id` é passado para o componente
        }),
      });

      if (!response.ok) {
        throw new Error("Falha para criar o Card");
      }

      const newCard = await response.json();
      console.log("Card criado com sucesso", newCard);

      router.refresh();
      console.log(data);
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-full">
      <div className="flex flex-col md:flex-row h-screen w-full ">
      <div className="hidden md:block lg:block h-screen">
        <Aside />
      </div>
      <div className="block md:hidden lg:hidden mt-9 h-[calc(100vh - 100px)] flex flex-col justify-center">
        <SheetSide />
      </div>
      <main className="flex-1 p-6 md:p-8 bg-[#F4F7FD] dark:bg-gray-900 overflow-y-auto">
        <header className="flex justify-between items-center mb-10 ml">
          <h1 className="text-3xl font-aleo  text-[#2D3436] dark:text-white mb-6">
            {Equipe.titulo}
          </h1>
          <div className="flex items-center space-x-4">
            <UserButton user={self} />
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="  font-semibold mb-4 text-[#2D3436] dark:text-white">
              A fazer
            </h2>
            <ScrollArea className="h-[700px] w-full ">
              {Cards.filter(
                (card) =>
                  card.status === "Fazer" && card.id_equipe === Equipe.id
              ).map((card) => {
                const foundUser = Users.find(
                  (user) => user.id === card.id_resp
                );
                const defaultUser = {
                  id: 0,
                  email: "",
                  name: "Unknown",
                  image: null,
                  id_cargoXuser: 0,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                };

                return (
                  <Cardtask
                    key={card.id}
                    Carde={card}
                    user={foundUser || defaultUser}
                    self={self}
                    coments={coments}
                    users={Users} // Filtra o usuário responsável pelo card
                  />
                );
              })}
            </ScrollArea>
          </div>
          <div>
            <h2 className="font-semibold mb-4 text-[#2D3436] dark:text-white">
              Fazendo
            </h2>
            <ScrollArea className="h-[700px] w-full ">
              {Cards.filter(
                (card) =>
                  card.status === "Fazendo" && card.id_equipe === Equipe.id
              ).map((card) => {
                const foundUser = Users.find(
                  (user) => user.id === card.id_resp
                );
                const defaultUser = {
                  id: 0,
                  email: "",
                  name: "Unknown",
                  image: null,
                  id_cargoXuser: 0,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                };
                return (
                  <Cardtask
                    key={card.id}
                    Carde={card}
                    user={foundUser || defaultUser}
                    self={self}
                    coments={coments}
                    users={Users} // Filtra o usuário responsável pelo card
                  />
                );
              })}
            </ScrollArea>
          </div>
          <div>
            <h2 className="font-semibold mb-4 text-[#2D3436] dark:text-white">
              Feito
            </h2>
            <ScrollArea className="h-[700px] w-full">
              {Cards.filter(
                (card) =>
                  card.status === "Finalizado" && card.id_equipe === Equipe.id
              ).map((card) => {
                const foundUser = Users.find(
                  (user) => user.id === card.id_resp
                );
                const defaultUser = {
                  id: 0,
                  email: "",
                  name: "Unknown",
                  image: null,
                  id_cargoXuser: 0,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                };

                return (
                  <Cardtask
                    key={card.id}
                    Carde={card}
                    user={foundUser || defaultUser}
                    self={self}
                    coments={coments}
                    users={Users} // Filtra o usuário responsável pelo card
                  />
                );
              })}
            </ScrollArea>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-logo">
              <Plus className="h-6 w-6" />
              <span className="sr-only">Criar tarefa</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md ">
            <DialogHeader>
              <DialogTitle>Criar uma nova tarefa</DialogTitle>
              <DialogDescription>
                Preencha os campos abaixo para criar uma nova tarefa.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="titulo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Tarefa</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="resp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Selecione o responsavel pela tarefa</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value ? String(field.value) : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o responsável" />
                        </SelectTrigger>
                        <SelectContent>
                          {Users.map((user) => (
                            <SelectItem key={user.id} value={String(user.id)}>
                              {" "}
                              {/* Convertendo o valor para string */}
                              {user.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Selecione o status da tarefa</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fazer">A fazer</SelectItem>
                          <SelectItem value="Fazendo">Fazendo</SelectItem>
                          <SelectItem value="Finalizado">Finalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <DialogFooter >
                  <DialogClose asChild>
                    <Button type="submit" className="bg-logo">Criar tarefa</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </main>
    </div>
</div>
      );
};
