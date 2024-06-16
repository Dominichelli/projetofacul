"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";

type CadUserValues = z.infer<typeof formSchema>;
interface UsernewProps {
  image: string;
  emailgit: string;
}
const formSchema = z.object({
  name: z.string().min(2),
  cargo: z.string().min(1),
});

const DialogUser: React.FC<UsernewProps> = ({ image, emailgit }) => {
  const router = useRouter();
  const form = useForm<CadUserValues>({
    resolver: zodResolver(formSchema),
  });
  // Atualize a função onSubmit no seu componente Equipes
  const onSubmit = async (data: CadUserValues) => {
    try {
      const response = await fetch("/api/auth/caduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: emailgit,
          image: image,
          cargoTitle: data.cargo,
        }),
      });

      if (!response.ok) {
        throw new Error("Falhou para criar o usuario");
      }

      const newUser = await response.json();
      console.log("Usuario cadastrado com sucesso", newUser);

      // Redirecione ou atualize a UI conforme necessário
      router.push("/teamwork"); // Exemplo: redirecionar para a página de equipes
    } catch (error) {
      console.error("Erro criando o usuario:", error);
    }
  };
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Olá, tudo bem?</DialogTitle>
          <DialogDescription>
            Vimos que você ainda não se cadastrou ainda com a gente
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome aqui" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Seu email</FormLabel>
              <FormControl>
                <Input value={emailgit} disabled />
              </FormControl>
            </FormItem>

            <FormField
              control={form.control}
              name="cargo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Setor</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o seu Setor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Setor</SelectLabel>
                        <SelectItem value="DEV">Dev</SelectItem>
                        <SelectItem value="MARKETING">Marketing</SelectItem>
                        <SelectItem value="FINANCEIRO">Financeiro</SelectItem>
                        <SelectItem value="ADM">Adm</SelectItem>
                        <SelectItem value="COMERCIAL">Comercial</SelectItem>
                        <SelectItem value="LOGISTICA">Logistica</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Cadastrar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUser;
