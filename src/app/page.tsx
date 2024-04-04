import Image from "next/image";
import NavBar from "@/components/NavBar";
import { ChevronDown } from "lucide-react";

export default function Home() {

  const resenhas = [
    {
      id: 1,
      nome: "Resenha",
      baba: "seila"
    },
    {
      id: 2,
      nome: "Resenha2",
      baba: "sei la"
    },
    {
      id: 3,
      nome: "Resenha3",
      baba: "sei la"
    }

  ]
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <section className="rounded min-w-[1000px] p-4 m-4">
      
        <div className="flex p-2">
          <h2 className="text-2xl font-semibold p-2">Minhas Resenhas</h2>
          <button className="text-l bg-red-300 rounded p-2 m-1">Nova resenha</button>
        </div>
        <div id="data">
          {resenhas.map(resenha => {
            return(
              <div key={resenha.id} className="inline-block justify-between bg-green-800 rounded min-w-[250px] min-h-[200px] p-4 m-4" id="data-row">
                <div className="flex gap-1 justify-between">
                  <span>{resenha.nome}</span>
                  <ChevronDown/>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      
    </main>
  );
}
