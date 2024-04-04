import Image from "next/image";
import NavBar from "@/components/NavBar";
import { ChevronDown } from "lucide-react";
import ResenhaItem  from "./ResenhaItem";

export default function Resenha() {

  const resenhas = [
    {
      id: 1,
      nome: "Resenha",
      status: "book"
    },
    {
      id: 2,
      nome: "Resenha2",
      status: "book-text"
    },
    {
      id: 3,
      nome: "Resenha3",
      status: "book-check"
    }

  ]
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <section className="rounded min-w-[800px] p-4 m-4">
      
        <div className="flex p-2">
          <h2 className="text-3xl font-semibold text-violet-950 p-2">Minhas Resenhas</h2>
          <button className="text-l bg-violet-400 rounded p-2 m-1">Nova resenha</button>
        </div>
        <div id="data">
          {resenhas.map(resenhas => <ResenhaItem resenha = {resenhas}/>)}
        </div>
      </section>
      
    </main>
  );
}
