import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarIcon, X } from "lucide-react";

export default function Home() {
  return (
    <>
    <main className="flex-1">
      <div className="flex justify-evenly items-center m-4">
        <div>
          <div className="radial-progress text-[#31CD63] font-bold" style={{ "--value": 70 }} role="progressbar">
            70%
          </div>
        </div>
        <div className="font-semibold text-2xl">{"Quiz #165"}</div>
        <div>
          <Button variant="ghost" className="hover:bg-transparent cursor-auto">
            <X className="bg-white cursor-pointer rounded-full" size={32}/>
          </Button>
        </div>
      </div>
      <div className="w-[50%] h-2/3 flex flex-col items-center justify-center sm:w-full">
        <h2 className="w-1/2 break-words font-semibold text-2xl text-[#191D63]">{"PREDICT ........................ ........................ ........................ break-words ........................ ........................ ........................ THE TOP LOSER (for tomorrow) across these indices"}</h2>
        <div>
          
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-20 bg-white flex flex-row justify-evenly items-center">
        <div className="text-[#31CD63]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost"><SidebarIcon/></Button>
            </SheetTrigger>
            <Sidebar/>
          </Sheet>
        </div>
        <div className="w-[15%]">
          <Progress value={20} className="bg-[#EDE8E3] h-3"/>
        </div>
        <div>
          <Button variant="ghost" className="bg-[#31CD63] text-white text-sm px-8">CONTINUE</Button>
        </div>
      </div>
    </main>
    </>
  );
}
