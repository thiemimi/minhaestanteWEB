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
      nome: "Resenha",
      baba: "sei la"
    },
    {
      id: 3,
      nome: "Resenha",
      baba: "sei la"
    }

  ]
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <section className="bg-green-400 rounded min-w-[1000px] p-4 m-4">
        <h2 className="text-2xl font-semibold">Minhas Resenhas</h2>
        <div id="data">
          {resenhas.map(resenha => {
            return(
              <div key={resenha.id} className="flex justify-between bg-green-800 rounded min-w-[150px] min-h-[100px] p-4 m-4" id="data-row">
                <div className="flex gap-1">
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
