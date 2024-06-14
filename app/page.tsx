'use client';
import { useState } from 'react';
import Image from "next/image";
import { BarChart4, Command, Settings, Users, Moon, Search, Circle } from 'lucide-react';
import Aside from "../components/aside";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CardTask } from "@/components/cardtask";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProps } from 'next/app';
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Home() {
  useState();
  return (
    <div className="flex">
      <Aside />

      <div className="bg-fundo w-full pb-10">
        <div className="ml-[80px] mt-9">
          <div className="flex justify-between items-center text-2xl font-aleo">
            <div className="inset-y-0 right-0">Meu KanBan</div>
            <div className="flex space-x-4 mr-[80px]">
             
              <span><Circle size={30} color="#A9A9A9" /></span>
            </div>

          </div>
        </div>

        <div className="pt-[80px]">
      
          <div className="flex ml-10 text-[17px]">
          Filtrar <span className="ml-11"> <Search size={20} color="#A9A9A9"/></span>
          <div><Input className="w-[1000px] h-[32px] p-2 border-2 bg-search"/></div>
          </div>
        
        </div>
        <div className='flex justify-end'>
        <Button variant="outline" className='m-10 flex justify-end'>
          <Dialog>
            <DialogTrigger>Criar Nova Tarefa</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar nova tarefa</DialogTitle>
                <DialogDescription>
                 Preencha  os campos abaixo para criar uma nova tarefa
                </DialogDescription>
              </DialogHeader>
              <Label htmlFor='NomeTarefa'>Nome da Tarefa</Label> 
              <Input/>
              <Label>Descrição</Label>
              <Textarea/>
              <Label>Selecionar Responsável da tarefa</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o Responsável"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user1">Usuário 1</SelectItem>
                  <SelectItem value="user2">Usuário 2</SelectItem>
                  <SelectItem value="user3">Usuário 3</SelectItem>
                </SelectContent>
              </Select>
              <Label>Selecionar Status da tarefa</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione Status"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fazer">Fazer</SelectItem>
                  <SelectItem value="Fazendo">Fazendo</SelectItem>
                  <SelectItem value="feito">Feito</SelectItem>
                  
                </SelectContent>
              </Select>
              <div className='flex justify-end'>
                    <Button variant="outline">Cancelar</Button>
                    <Button className='bg-logo text-white ml-4'>Salvar</Button>
                    
              </div>
            </DialogContent>
          </Dialog>

        </Button></div>
          
        
          

          
      <div className="flex">
        <div className="ml-[45px] mt-[40px]">
          <div className="ml-[25px] font-semibold">A Fazer</div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
        </div>

        <div className="ml-[45px] mt-[40px]">
          <div className="ml-[25px] font-semibold">Fazendo</div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
        </div>

        <div className="ml-[45px] mt-[40px]">
          <div className="ml-[25px] font-semibold">Feito</div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
          <div className=" mt-[18px]">
           <CardTask/>
          </div>
      

    </div>
      
    </div>
        

      </div>

      

    </div>

  );
}
