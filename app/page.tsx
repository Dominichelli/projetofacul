import Image from "next/image";
import { BarChart4, Command, Settings, Users } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className = "bg-logo text-white flex-auto w-[320px] h-[1000px]  p-2" >
        <div className = "mt-[50px] mb-[60px] ml-[40px] text-xl"> Task Tracker </div>
          <div className = "ml-7 space-y-5">
            <div className="flex"><Command/>
              <span className="ml-4">Boards</span>
            </div>
            <div className="flex"><Users/>
              <span className="ml-4">Equipes</span>
            </div>
            <div className="flex"><BarChart4/>
              <span className="ml-4">Relatórios</span>
            </div>
            <div className="flex"><Settings/>
              <span className="ml-4">Ajustes</span>
            </div>
        </div>
    </div>

      <div className="ml-4">
        <div>Meu KanBan</div>
      </div>

    </div>
    
  );
}
