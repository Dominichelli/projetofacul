import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import {
  Airplay,
  Ellipsis,
  Eye,
  Pencil,
  Search,
  Trash2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { TB_Card, Tb_Comentarios, TB_Equipe, user } from "@prisma/client";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type CardTaskValues = z.infer<typeof formSchema>;
type CardComentValues = z.infer<typeof formSchema1>;

interface CardProps {
  Carde: TB_Card;
  user: user;
  self: user;
  coments: Tb_Comentarios[];
  users: user[];
}
const formSchema = z.object({
  status: z.string().min(1),
});

const formSchema1 = z.object({
  description: z.string().min(1),
});

const Cardtask: React.FC<CardProps> = ({
  Carde,
  user,
  self,
  coments,
  users,
}) => {
  const router = useRouter();
  const form = useForm<CardTaskValues>({
    resolver: zodResolver(formSchema),
  });
  const form1 = useForm<CardComentValues>({
    resolver: zodResolver(formSchema1),
  });
  const onDelete = async () => {
    try {
      const response = await fetch("/api/deleteCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_card: Carde.id, // Assume que `Equipe.id` é passado para o componente
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao deletar o Card!");
      }

      const deleteCard = await response.json();
      console.log("Card criado com sucesso", deleteCard);

      router.refresh();
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };
  const onUpdate = async (data: CardTaskValues) => {
    try {
      const response = await fetch("/api/updateCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_card: Carde.id,
          status: data.status,
          id_update_Card: self.id, // Assume que `Equipe.id` é passado para o componente
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao deletar o Card!");
      }

      const updateCard = await response.json();
      console.log("Card atualizado com sucesso", updateCard);

      router.refresh();
    } catch (error) {
      console.error("Erro ao atualizar o card:", error);
    }
  };
  const onComent = async (data: CardComentValues) => {
    try {
      const response = await fetch("/api/addComent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_card: Carde.id,
          descricao: data.description,
          id_login: self.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha comentar o Card!");
      }

      const comentCard = await response.json();
      console.log("Comentario criado com sucesso", comentCard);

      router.refresh();
    } catch (error) {
      console.error("Erro ao criar o comentario:", error);
    }
  };

  return (
    <Card className="mb-4 bg-white dark:bg-gray-800 dark:text-white text-sm ">
      <CardHeader>
        <CardTitle className="text-base">
          {Carde.titulo}
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <Trash2 size={18}/>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Tem certeza em excluir essa tarefa?</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  Essa ação não podera ser desfeita!
                </DialogDescription>
                <DialogClose>
                  <div className="flex justify-center">
                    <div className="px-10">
                      <Button variant="ghost">Não</Button>
                    </div>
                    <div className="px-10">
                      <Button variant="destructive" onClick={onDelete}>
                        Sim
                      </Button>
                    </div>
                  </div>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent >{Carde.descricao}</CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <Avatar className="size-8 ">
            <AvatarImage src={user.image || "/fallback-image.png"}/>
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>

          <div className="pl-[40px] ">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Alterar status</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Alterar status da tarefa</DialogTitle>
                  <DialogDescription>
                    Mover a tarefa de acordo com o progresso dela
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onUpdate)}
                    className="space-y-8"
                  >
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
                              <SelectItem value="Fazer"> A fazer</SelectItem>
                              <SelectItem value="Fazendo"> Fazendo</SelectItem>
                              <SelectItem value="Finalizado">
                                {" "}
                                Finalizado
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <DialogClose>
                      <div className="flex justify-center">
                        <div className="px-5">
                          <Button variant="outline">Cancelar</Button>
                        </div>
                        <div className="px-5">
                          <Button type="submit" className="bg-logo">Atualizar</Button>
                        </div>
                      </div>
                    </DialogClose>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>{" "}
          </div>
          <div className="pl-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <Eye size={22}/>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{Carde.titulo}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select defaultValue={Carde.status}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Fazer">A fazer</SelectItem>
                          <SelectItem value="Fazendo">Fazendo</SelectItem>
                          <SelectItem value="Finalizado">Finalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <p>{Carde.descricao}</p>
                  </div>
                  <div>
                    <Label>Responsavel</Label>
                    <div className="flex gap-2">
                      <Avatar>
                        <AvatarImage
                          src={user.image || "/fallback-image.png"}
                        />
                        <AvatarFallback>{user.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center">
                        <Label>{user.name}</Label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>Comentarios</Label>
                  </div>
                  <div>
                    {coments
                      .filter((coment) => coment.id_card === Carde.id)
                      .map((coment) => {
                        const foundUser = users.find(
                          (u) => u.id === coment.id_login
                        );
                        return (
                          <div key={coment.id} className="mb-4">
                            <div className="flex items-center gap-2">
                              <Avatar>
                                <AvatarImage
                                  src={
                                    foundUser?.image || "/fallback-image.png"
                                  }
                                />
                                <AvatarFallback>
                                  {foundUser?.name}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex justify-between w-full">
                                <div className="flex flex-col">
                                  <span className="font-medium">
                                    {foundUser?.name}
                                  </span>
                                  <span>{coment.descricao}</span>
                                </div>
                                <span className="text-right">
                                  {coment.createdAt.toLocaleString("pt-BR", {
                                    dateStyle: "short",
                                    timeStyle: "short",
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div>
                    <Form {...form1}>
                      <form onSubmit={form1.handleSubmit(onComent)}>
                        <FormField
                          control={form1.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel> Deixar um comentario</FormLabel>
                              <Textarea {...field} />
                            </FormItem>
                          )}
                        />
                        <div className="pt-4 ">
                          <Button type="submit" className="bg-logo ">Enviar</Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="secondary">Salvar tarefa</Button>
                  <Button>Marcar como Finalizado</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Cardtask;
