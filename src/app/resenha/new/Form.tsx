'use client'

import { EstanteSelect }  from "@/components/EstanteSelect";
import { Autocomplete, AutocompleteItem, Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { create } from "@/app/actions/resenhas/create";
import { SubmitButton } from "@/components/SubmitButton";
import { useFormState } from "react-dom";


const initialState = {
  messageNome: '',
  conteudoResenha: ''
}

export function Form(props: { estantes: Array<Estante> }) {
  const { estantes } = props

  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center">

      <form action={formAction} className="flex flex-col gap-3 p-10 m-6 rounded min-w-[800px]" style={{ backgroundColor: '#E6D6C1', boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)' , borderRadius: '40px'} }>
        <h2 className="text-2xl font-bold"style={{ color: "#744938" }}>NOVA RESENHA</h2>
        <Input
            key="tituloResenha"
            label="Titulo da resenha"
            labelPlacement={"outside"}
            name="tituloResenha"
            isInvalid={state?.messageNome != ''}
            errorMessage={state?.messageNome}
          />
          
        {state?.conteudoResenha !== undefined && (
          <Textarea 
            key="conteudoResenha"
            label="Conteudo da resenha"
            labelPlacement={"outside"}
            name="conteudoResenha" 
            disableAutosize
            classNames={{
              input: "resize-y min-h-[150px]",
            }}
          />
        )}
         
          
          <Input 
            key="nota"
            label ="Nota"
            labelPlacement={"outside"}
            name="nota"
          />

          <EstanteSelect estantes={estantes} />
          
          <div className="flex justify-between mt-4">
            <Link href="/resenha">
              <Button variant="bordered" radius="full" startContent={<ArrowLeft/>} style={{ color: "#744938" }}>Cancelar</Button>
            </Link>
            <SubmitButton/>
          </div>

      </form>    
    </main>
  );
}
