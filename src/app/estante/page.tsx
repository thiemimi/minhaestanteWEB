import NavBar from "@/components/NavBar";
import EstanteItem  from "./EstanteItem";
import { Plus } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getEstantes} from "../actions/estante/get";


interface Resenha{
  id: number,
  tituloLivro: string,
  genero: string,
  autor: string,
  StatusLeitura: string
}

export default async function Estante() {

  const estantes: Estante[] = await getEstantes()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="estante"/>

      <section className="min-w-[850px] p-8 m-4" style={{ backgroundColor: '#E6D6C1', width: '910px', boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '40px'} }>

        <div className="flex items-center justify-between p-4">
          <h2 className="text-3xl font-bold text-violet-950 p-2" style={{ color: "#321F18" }}>MEUS LIVROS</h2>
          <Link href="/estante/new">
            <Button radius="full" startContent={<Plus/>} style={{ backgroundColor: '#B98256' } }>Cadastrar livro</Button>
          </Link>
        </div>
        
        <div id="data">
          {estantes?.map(estante => <EstanteItem estante={estante}/>)}
        </div>  

      
      </section>
      
    </main>
  );
}
