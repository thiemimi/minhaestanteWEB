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

      <section className="rounded min-w-[800px] p-6 m-4">
      
        <div className="flex items-center">
          <h2 className="text-3xl font-semibold text-violet-950 p-2">Minhas Resenhas</h2>
          <Link href="/resenha/new">
            <Button startContent={<Plus/>} className="bg-violet-500">Nova Resenha</Button>
          </Link>
        </div>
        
        <div id="data">
          {resenhas?.map(resenha => <ResenhaItem resenha={resenha}/>)}
        </div>  

      
      </section>
      
    </main>
  );
}
