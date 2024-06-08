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
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Switch } from "@/components/ui/switch"


  export default function UpDates() {
    return (
      <div className='flex'>
  
        <Aside />
  
        <div className="bg-fundo w-full pb-10 flex justify-center items-center">
          <div className="mt-9 h-[calc(100vh - 100px)] flex flex-col justify-center">
            <div className="flex justify-between items-center text-2xl font-aleo">
              <div>Ajustes</div>
              <div className="flex space-x-4 mr-[80px]">
                <span className="mr-4"><Moon /></span>
                <span><Circle size={30} color="#A9A9A9" /></span>
              </div>
            </div>
          
          <div className='mt-[100px]'>
          <div  className='flex space-x-8 mb-[120px]'> {/*Ajustar, não está indo até o fim da página  */}
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Perfil</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4 ">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Seu Nome" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type='email' id='email' placeholder="nome@example.com"></Input>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="senha">Senha</Label>
                        <Input type='password' id='senha'></Input>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>Salvar</Button>
                </CardFooter>
              </Card>
  
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Integração</CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="webhook">Integração Webhook</Label>
                        <Input id="name" placeholder="https://hooks.slack.com/services/..." />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="link_foto">Foto de perfil</Label>
                        <Input type='name' id='link_foto' placeholder="Insira o link da foto"></Input>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between mt-[60px]">
                  <Button>Salvar</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
          
            