import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function CardTask() {

  return (
    <Card className="w-[350px] h-[300px]">
      <CardHeader>
        <CardTitle className="flex">Título
        <div className="flex justify-end w-full">
            <DropdownMenu>
              <DropdownMenuTrigger><Button variant="ghost"><Pencil size={18} className="" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Excluir</DropdownMenuItem>
              </DropdownMenuContent>
           </DropdownMenu></div>
        </CardTitle>
      </CardHeader>
     
          <div className="absolute top-full left-[calc(100% + 10px)] mt-[10px]">
            
          </div>
      
      <CardContent>
        <div className="mt-10">Descrição</div>
        
      </CardContent>
      
    </Card>
  );
}
