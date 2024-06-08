import Image from "next/image";
import { BarChart4, Command, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import Page from '@/app/page';
import profilePic from "../public/logo.png"

export default function Aside() {
  return (
    <div >
      <div className = "bg-logo text-white flex-auto w-[300px] h-full  p-2 " > {/* Ajustar - a logo não ta fixa */}

        <div className="flex justify-center" >
          <Link href="/">
           <Image 
          src={profilePic} alt="logo"
          width={200}
          height={200}
          />
          </Link>
        </div>
       


        <div style={{ position: "fixed" }}>
          <div className = " mb-[60px] ml-[40px] text-xl font-aleo "> 
          <Link href="/"> Task Tracker</Link> </div>
            <div className = "ml-7 space-y-5">
              <div className="flex w-[230px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden"><Command className="m-0 p-0"/>
              <Link href="/">
                <span className="ml-4">Boards</span>
                </Link>
              </div>
              <div className="flex w-[230px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden"><Users/>
              <Link href="equipes">
                <span className="ml-4">Equipes</span>
                </Link>
              </div>  
              <div className="flex w-[230px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden"><BarChart4/>
              <Link href="reports">
                <span className="ml-4">Relatórios</span>
              </Link>
              </div>
              <div className="flex w-[230px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden "><Settings/>
              <Link href="updates">
                <span className="ml-4">Ajustes</span>
              </Link>
              </div>

              <div>

                
              </div>
                
          </div>


        </div>

    </div>
    </div>)}