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

export function CardReports() {

  return (
   <Card className="w-[350px] h-[300px]">
    <CardHeader>
        <CardTitle>Relatórios de Atividades</CardTitle>
        <CardDescription>Colocar a última atualização</CardDescription>
    </CardHeader>
    <CardContent>
        Descrição
    </CardContent>
    <CardFooter className="mt-[60px]">
    <Link href=""> <span className={buttonVariants({ variant: "outline" })}>Visualizar - Não sei onde a página vai abrir </span>
    </Link>
 
    </CardFooter>
   </Card> 
  )
}
