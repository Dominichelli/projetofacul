"use client";
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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Moon, Plus, Search } from "lucide-react";
import { Aside } from "./aside";
import { redirect, useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { TB_Card, TB_Equipe, user } from "@prisma/client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { SheetSide } from "./asidemobile";
import UserButton from "./userbutton";

type TeamFormValues = z.infer<typeof formSchema>;

interface EquipesProps {
  Users: user[];
  Equipe: TB_Equipe[];
  Cards: TB_Card[];
  self: user;
}
const formSchema = z.object({
  name: z.string().min(2),
  desc: z.string().min(4),
  setor: z.string().min(1),
});

const Equipes: React.FC<EquipesProps> = ({ Users, Equipe, Cards, self }) => {
  const router = useRouter();
  const form = useForm<TeamFormValues>({
    resolver: zodResolver(formSchema),
  });
  // Atualize a função onSubmit no seu componente Equipes
  const onSubmit = async (data: TeamFormValues) => {
    try {
      const response = await fetch("/api/createTeamwork", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          desc: data.desc,
          setor: data.setor,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create teamwork");
      }

      const newTeamwork = await response.json();
      console.log("Teamwork created successfully", newTeamwork);

      // Redirecione ou atualize a UI conforme necessário
      router.push("/teamwork"); // Exemplo: redirecionar para a página de equipes
    } catch (error) {
      console.error("Error creating teamwork:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:block lg:block ">
        <Aside />
      </div>
      <div className="block md:hidden lg:hidden">
        <SheetSide />
      </div>
      <main className="flex-1 p-6 md:p-8 bg-[#F4F7FD] dark:bg-gray-900">
        <header className="flex justify-between items-center mb-10 ml">
          <h1 className="text-3xl font-aleo text-[#2D3436] dark:text-white ml-[60px]">
            Equipes
          </h1>
          <div className="flex items-center space-x-4">
            <Toggle
              aria-label="Toggle dark mode"
              className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </Toggle>
            <UserButton user={self} />
          </div>
          
        </header>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="fixed bottom-6 rigt-6 md:bottom-8 md:right-8 bg-logo">
                <Plus className="h-6 w-6"/>
                <span className="sr-only">Criar Equipe  </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Criar nova equipe</DialogTitle>
                <DialogDescription>
                  Preencha os campos abaixo para criar uma nova equipe.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Equipe</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desc"
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
                    name="setor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Selecione o setor da equipe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o seu Setor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Setor</SelectLabel>
                              <SelectItem value="1">Dev</SelectItem>
                              <SelectItem value="2">Marketing</SelectItem>
                              <SelectItem value="3">Financeiro</SelectItem>
                              <SelectItem value="4">Adm</SelectItem>
                              <SelectItem value="5">Comercial</SelectItem>
                              <SelectItem value="6">Logistica</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="mr-2" variant="secondary">
                        Cancelar
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button type="submit">Criar equipe</Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          <div className="flex ml-10 text-[17px]">
          Filtrar <span className="ml-11"> <Search size={20} color="#A9A9A9"/></span>
          <div><Input className="w-[1000px] h-[32px] p-2 border-2 bg-search"/></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Equipe.map((team) => {
            const teamMembers = Users.filter(
              (user) => user.id_cargoXuser === team.id_cargo
            );
            const teamTasks = Cards.filter(
              (card) => card.id_equipe === team.id
            );

            return (
              <Card
                key={team.id}
                className="bg-white dark:bg-gray-800 dark:text-white  text-sm"
              >
                <CardHeader>
                  <CardTitle className="text-base">{team.titulo}</CardTitle>
                  <div className="flex items-center space-x-2">
                    {teamMembers.map((member) => (
                      <Avatar key={member.id} className="size-8">
                        <AvatarImage
                          alt={member.name}
                          src={
                            member.image ||
                            "/placeholder.svg?height=32&width=32"
                          }
                        />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div >
                </CardHeader>
                <CardContent>
                  <p>{team.descricao}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="secondary">
                    {teamMembers.length} membros
                  </Badge>
                  <div className="flex justify-end">
                    <Dialog >
                    <DialogTrigger asChild>
                      <Button variant="secondary">Ver detalhes</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-xl">
                      <DialogHeader>
                        <DialogTitle>{team.titulo}</DialogTitle>
                        <DialogDescription>{team.descricao}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-6">
                        <div>
                          <h3 className="text-lg font-medium">Participantes</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <ScrollArea className="h-[170px] w-full">
                              {teamMembers.map((member) => (
                                <div
                                  key={member.id}
                                  className="flex items-center gap-4 py-2"
                                >
                                  <Avatar>
                                    <AvatarImage
                                      alt={member.name}
                                      src={
                                        member.image ||
                                        "/placeholder.svg?height=32&width=32"
                                      }
                                    />
                                    <AvatarFallback>
                                      {member.name[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{member.name}</p>
                                  </div>
                                </div>
                              ))}
                            </ScrollArea>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">
                            Tarefas em Andamento
                          </h3>
                          <div className="grid gap-4 mt-2">
                            <ScrollArea className="h-[170px] w-full">
                              {teamTasks.map((task) => (
                                <Card key={task.id}>
                                  <CardContent>
                                    <div className="flex items-center pt-2 justify-between">
                                      <p className="font-medium">
                                        {task.titulo}
                                      </p>
                                      <Badge
                                        className={`${
                                          task.status === "Fazendo"
                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                            : task.status === "Finalizado"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                            : task.status === "Fazer"
                                            ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                                            : ""
                                        }`}
                                        variant="outline"
                                      >
                                        {task.status}
                                      </Badge>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </ScrollArea>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  </div>
                  
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default Equipes;
