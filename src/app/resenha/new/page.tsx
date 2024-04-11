import NavBar from "@/components/NavBar";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { create } from "@/app/actions/resenhas/create";

export default async function CadastrarResenha() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <form action={create} className="flex flex-col gap-3 bg-violet-600 p-6 m-6 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Resenha</h2>
        <Input
          key="nome"
          label="Nome"
          labelPlacement={"outside"}
          />
          <div className="flex justify-between mt-4">
            <Link href="/resenhas">
              <Button variant="bordered" startContent={<ArrowLeft/>}>Cancelar</Button>
            </Link>
            <Button type="submit" color="primary" startContent={<Check/>}>Salvar</Button>
          </div>
      </form>
      
    </main>
  );
}
