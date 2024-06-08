'use client';
import { useState } from 'react';
import Aside from '../../components/aside';
import { Moon, Search, Circle } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { CardTeams } from '@/components/cardteams';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { CardReports } from '@/components/cardreports';


export default function Reports () {
  return (
    <div className='flex'>

      <Aside/>

      <div className="bg-fundo w-full pb-10">
        <div className="ml-[80px] mt-9">
          <div className="flex justify-between items-center text-2xl font-aleo">
            <div className="inset-y-0 right-0">Relatórios</div>
            <div className="flex space-x-4 mr-[80px]">
              <span className="mr-4" ><Moon  /></span>
              <span><Circle size={30} color="#A9A9A9" /></span>
            </div>

          </div>
        </div>

        <div className="pt-[85px]">
      
          <div className="flex ml-10 text-[17px]">
          Filtrar <span className="ml-11"> <Search size={20} color="#A9A9A9"/></span>
          <div><Input className="w-[1000px] h-[32px] p-2 border-2 bg-search"/></div>
          </div>

          <div className='ml-[80%] mt-[50px]'>
          <Link href=""> <span className= {buttonVariants({ variant: "outline" })} >Gerar Relatório</span>
          </Link>
        </div> 
    <div className='flex'>
        <div className='flex mt-[15px]' >
            <div className=" mt-[18px] ml-[40px]">
            <CardReports/>
            </div>
        </div>
        <div className='flex mt-[15px]' >
            <div className=" mt-[18px] ml-[40px]">
            <CardReports/>
            </div>
        </div>
        <div className='flex mt-[15px]' >
            <div className=" mt-[18px] ml-[40px]">
            <CardReports/>
            </div>
        </div>
    </div>

    <div className='flex'>
        <div className='flex mt-[15px]' >
            <div className=" mt-[18px] ml-[40px]">
            <CardReports/>
            </div>
        </div>
        <div className='flex mt-[15px]' >
            <div className=" mt-[18px] ml-[40px]">
            <CardReports/>
            </div>
        </div>
        
    </div>
        

        </div>
    </div>
    </div>
  );
}
