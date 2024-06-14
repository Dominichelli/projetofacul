'use client';
import { useState } from 'react';
import Aside from '../../components/aside';
import { Moon, Search, Circle } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { CardTeams } from '@/components/cardteams';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
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
import { Label } from "@/components/ui/label"

export default function Teams () {
  return (
    <div className='flex'>

      <Aside/>

      <div className="bg-fundo w-full pb-10">
        <div className="ml-[80px] mt-9">
          <div className="flex justify-between items-center text-2xl font-aleo">
            <div className="inset-y-0 right-0 ">Equipes</div>
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

          <div className='flex justify-end'>
          <Button variant="outline" className='m-10 flex justify-end'>
            <Dialog>
              <DialogTrigger>Criar Equipe</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Criar nova equipe</DialogTitle>
                  <DialogDescription>
                    Preencha os campos abaixo para criar uma nova equipe
                  </DialogDescription>
                </DialogHeader>
                <Label htmlFor='NomeEquipe'>Nome da Equipe</Label>
                <Input/>
                <Label>Descrição</Label>
                <Textarea/>
                <Label>Selecione o setor da equipe</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selcione seu setor"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dev">Dev</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="financeiro">Financeiro</SelectItem>
                    <SelectItem value="adm">Administrativo</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                    <SelectItem value="logistica">Logistica</SelectItem>
                  </SelectContent>
                  <div className='flex justify-end'>
                    <Button variant="outline">Cancelar</Button>
                    <Button className='bg-logo text-white ml-4'>Salvar</Button>
                    
              </div>
                </Select>
              </DialogContent>
            </Dialog>

          </Button>

          </div> 

          <div className='flex mt-[15px]' >
            <div className=" mt-[18px] ml-[40px]">
            <CardTeams/>
            </div>

            <div className=" mt-[18px] ml-[40px]">
            <CardTeams/>
            </div>

            <div className=" mt-[18px] ml-[40px]">
            <CardTeams/>
              </div>
          </div>
          
        <div className='flex'>
          <div className=" mt-[18px] ml-[40px]">
           <CardTeams/>
          </div>

          <div className=" mt-[18px] ml-[40px]">
           <CardTeams/>
          </div>

          <div className=" mt-[18px] ml-[40px] mb-7">
           <CardTeams/>
          </div>
        </div>
        
        
          
        
        </div>

        

      </div>

    </div>
  );
}