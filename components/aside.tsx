import Image from "next/image";
import { BarChart4, Command, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import Page from '@/app/page';
import profilePic from "../public/logo.png"

export default function Aside() {
  return (
    <div >
      <div className="bg-logo text-white flex-auto w-[300px] h-full p-2">

  <div style={{ position: "fixed", top: 0, left: 0, zIndex: 999 }}>
    <Link href="/">
      <Image
        src={profilePic}
        alt="logo"
        width={200}
        height={200}
        style={{ width: "100%" }}
      />
    </Link>
  </div>

  <div style={{position:"fixed", marginLeft: "40px", paddingTop: "200px" }}>
    <div className="mb-[45px] text-xl font-aleo">
      <Link href="/"> Task Tracker</Link>{" "}
    </div>
    <div className="ml-7 space-y-5">
      <div className="flex w-[200px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden">
        <Command className="m-0 p-0" />
        <Link href="/">
          <span className="ml-4">Boards</span>
        </Link>
      </div>
      <div className="flex w-[200px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden">
        <Users />
        <Link href="equipes">
          <span className="ml-4">Equipes</span>
        </Link>
      </div>
      
      <div className="flex w-[200px] bg-transparent hover:bg-houver  rounded-lg overflow-hidden ">
        <Settings />
        <Link href="updates">
          <span className="ml-4">Ajustes</span>
        </Link>
      </div>
    </div>
  </div>
</div>
</div>

    );
  }
  