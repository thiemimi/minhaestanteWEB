'use client'

import NavBar from "@/components/NavBar";
import { Autocomplete, AutocompleteItem, Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { create } from "@/app/actions/resenhas/create";
import { SubmitButton } from "@/components/SubmitButton";
import { useFormState } from "react-dom";

const initialState = {
  messageNome: '',
}

export default function CadastrarEstante() {
  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="estante"/>

      <form action={formAction} className="flex flex-col gap-3 p-10 m-6 rounded min-w-[800px]" style={{ backgroundColor: '#E6D6C1', boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)' , borderRadius: '40px'} }>
        <h2 className="text-2xl font-bold"style={{ color: "#744938" }}>CADASTRAR LIVRO</h2>
        <Input
            key="tituloLivro"
            label="Titulo do livro"
            labelPlacement={"outside"}
            name="tituloLivro"
            isInvalid={state?.messageNome != ''}
            errorMessage={state?.messageNome}
          />
          
          <Input 
            key="genero"
            label ="Genero"
            labelPlacement={"outside"}
            name="genero"
          />
          <Input 
            key="autor"
            label ="Autor"
            labelPlacement={"outside"}
            name="autor"
          />
        
          <div className="flex justify-between mt-4">
            <Link href="/estante">
              <Button variant="bordered" radius="full" startContent={<ArrowLeft/>} style={{ color: "#744938" }}>Cancelar</Button>
            </Link>
            <SubmitButton/>
          </div>

      </form>    
    </main>
  );
}
