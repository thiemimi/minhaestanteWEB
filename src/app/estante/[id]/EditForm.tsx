"use client"

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { SubmitButton } from "@/components/SubmitButton";
import { useFormState } from "react-dom";
import { update } from "@/app/actions/estante/update";

const initialState = {
    messageNome: '',
}
  

export function EditForm(estante: Estante){

    const [state, formAction] = useFormState(update, initialState)

    return(
        
        <form action={formAction} className="flex flex-col gap-3 p-10 m-6 rounded min-w-[700px]"style={{ backgroundColor: '#E6D6C1',boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)' , borderRadius: '40px'} }>
            <input type="hidden" name="id" value={estante.id} />
            <h2 className="text-2xl font-bold"style={{ color: "#744938" }}>EDITAR LIVRO {estante.tituloLivro}</h2>
            <Input
                key="tituloLivro"
                label="Titulo do livro"
                labelPlacement={"outside"}
                name="tituloLivro"
                defaultValue={estante.tituloLivro}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
        
            <Input 
                key="genero"
                label ="genero"
                defaultValue={estante.genero}
                labelPlacement={"outside"}
                name="genero"
            />

            <Input 
                key="autor"
                label ="autor"
                defaultValue={estante.autor}
                labelPlacement={"outside"}
                name="autor"
            />
            
            <div className="flex justify-between mt-4">
                <Link href="/estante">
                <Button radius='full'variant="bordered" startContent={<ArrowLeft/>}style={{ color: "#744938" }}>Cancelar</Button>
                </Link>
                <SubmitButton/>
            
            </div>
      </form>
      
    )
}