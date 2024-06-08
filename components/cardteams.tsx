import * as React from "react"
import { useState } from "react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react"
import Link from 'next/link'

export function CardTeams() {

  return (
   <Card className="w-[350px] h-[300px]">
    <CardHeader>
        <CardTitle>Equipe</CardTitle>
        <CardDescription>Aquelas bolinhas das Equipes - Não sei como será feito aqui</CardDescription>
    </CardHeader>
    <CardContent>
        Descrição
    </CardContent>
    <CardFooter className="mt-[60px] flex justify-end">
     <Button variant="ghost" className="">Detalhes</Button>
    
 
    </CardFooter>
   </Card> 
  )
}
