'use client'

import NavBar from "@/components/NavBar";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { create } from "@/app/actions/resenhas/create";
import { SubmitButton } from "@/components/SubmitButton";
import { useFormState } from "react-dom";

export default async function CadastrarResenha() {

  const initialState = {
    messageNome: '',
  }
  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <form action={formAction} className="flex flex-col gap-3 bg-purple-700 p-6 m-6 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Resenha</h2>
        <Input
          key="tituloResenha"
          label="Titulo da resenha"
          labelPlacement={"outside"}
          name="tituloResenha"
          isInvalid={state?.messageNome != ''}
          errorMessage={state?.messageNome}
          />
          <Input 
          key="conteudoResenha"
          label="Conteudo da resenha"
          labelPlacement={"outside"}
          name="ConteudoResenha"
          />
          <Input 
          key="nota"
          label ="Nota"
          labelPlacement={"outside"}
          name="nota"
          />
          
          <div className="flex justify-between mt-4">
            <Link href="/resenha">
              <Button variant="bordered" startContent={<ArrowLeft/>}>Cancelar</Button>
            </Link>
            <SubmitButton/>
           
          </div>
      </form>
      
    </main>
  );
}
