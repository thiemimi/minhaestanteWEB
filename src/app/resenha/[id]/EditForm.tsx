"use client"

import { Autocomplete, AutocompleteItem, Input, input } from "@nextui-org/react";
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
}
  

export function EditForm(resenha: Resenha){

    const [state, formAction] = useFormState(update, initialState)

    return(
        
        <form action={formAction} className="flex flex-col gap-3 bg-purple-700 p-6 m-6 rounded min-w-[500px]">
            <input type="hidden" name="id" value={resenha.id} />
            <h2 className="text-2xl font-bold">Editar Resenha {resenha.tituloResenha}</h2>
            <Input
                key="tituloResenha"
                label="Titulo da resenha"
                labelPlacement={"outside"}
                name="tituloResenha"
                defaultValue={resenha.tituloResenha}
                isInvalid={state?.messageNome != ''}
                errorMessage={state?.messageNome}
            />
            <Input 
                key="conteudoResenha"
                label="Conteudo da resenha"
                labelPlacement={"outside"}
                defaultValue={resenha.conteudoResenha}
                name="ConteudoResenha"
            />
            <Input 
                key="nota"
                label ="Nota"
                //defaultValue={resenha.nota}
                labelPlacement={"outside"}
                name="nota"
            />
            <Autocomplete
                label="icone"
                placeholder="Procurar icone"
                defaultItems={icons}
                //defaultValue={resenha.icone}
                name="icone"
                labelPlacement={"outside"}
                >
                {(icon) =><AutocompleteItem key={icon.name} startContent={<Icon name={icon.name}/>}>
                            {icon.name}
                            </AutocompleteItem>}
            </Autocomplete>
            
            <div className="flex justify-between mt-4">
                <Link href="/resenha">
                <Button variant="bordered" startContent={<ArrowLeft/>}>Cancelar</Button>
                </Link>
                <SubmitButton/>
            
            </div>
      </form>
      
    )
}