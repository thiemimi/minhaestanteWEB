"use client"

import { Autocomplete, AutocompleteItem, Input, Textarea, input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { SubmitButton } from "@/components/SubmitButton";
import { icons } from "@/app/utils/icons";
import Icon from "@/components/Icon";
import { useFormState } from "react-dom";
import { update } from "@/app/actions/resenhas/update";

const initialState = {
    messageNome: '',
    conteudoResenha: ''
}
  

export function EditForm(resenha: Resenha){

    const [state, formAction] = useFormState(update, initialState)

    return(
        
        <form action={formAction} className="flex flex-col gap-3 p-10 m-6 rounded min-w-[700px]"style={{ backgroundColor: '#E6D6C1',boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)' , borderRadius: '40px'} }>
            <input type="hidden" name="id" value={resenha.id} />
            <h2 className="text-2xl font-bold"style={{ color: "#744938" }}>EDITAR RESENHA {resenha.tituloResenha}</h2>
            <Input
                key="tituloResenha"
                label="Titulo da resenha"
                labelPlacement={"outside"}
                name="tituloResenha"
                defaultValue={resenha.tituloResenha}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
           {state?.conteudoResenha !== undefined && (
          <Textarea 
            key="conteudoResenha"
            label="Conteudo da resenha"
            labelPlacement={"outside"}
            name="conteudoResenha" 
            defaultValue={resenha.conteudoResenha}
            disableAutosize
            classNames={{
              input: "resize-y min-h-[150px]",
            }}
          />
        )}
            <Input 
                key="nota"
                label ="Nota"
                defaultValue={resenha.nota.toString()}
                labelPlacement={"outside"}
                name="nota"
            />
            
            <div className="flex justify-between mt-4">
                <Link href="/resenha">
                <Button radius='full'variant="bordered" startContent={<ArrowLeft/>}style={{ color: "#744938" }}>Cancelar</Button>
                </Link>
                <SubmitButton/>
            
            </div>
      </form>
      
    )
}