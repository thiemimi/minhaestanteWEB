import NavBar from "@/components/NavBar";
import ResenhaItem  from "./ResenhaItem";
import { Plus } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getResenhas } from "../actions/resenhas/get";


interface Resenha{
  id: number,
  tituloResenha: string,
  conteudoResenha: string,
  icone: string,
  nota: number
}

export default async function Resenha() {

  const resenhas: Resenha[] = await getResenhas()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <section className="min-w-[850px] p-8 m-4" style={{ backgroundColor: '#E6D6C1', width: '910px', boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '40px'} }>

        <div className="flex items-center justify-between p-4">
          <h2 className="text-3xl font-bold text-violet-950 p-2" style={{ color: "#321F18" }}>MINHAS RESENHAS</h2>
          <Link href="/resenha/new">
            <Button radius="full" startContent={<Plus/>} style={{ backgroundColor: '#B98256' } }>Nova Resenha</Button>
          </Link>
        </div>
        
        <div id="data">
          {resenhas?.map(resenha => <ResenhaItem resenha={resenha}/>)}
        </div>  

      
      </section>
      
    </main>
  );
}
