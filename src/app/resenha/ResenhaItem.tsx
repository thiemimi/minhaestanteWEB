"use client"

import { DropDownAction } from "@/components/DropDownAction";
import Icon from "@/components/Icon";
import { ChevronDown } from "lucide-react";
import { destroy } from "../actions/resenhas/destroy";
import { toast } from "react-hot-toast"

interface ResenhaItemProps {
    resenha: {
        id: number,
        tituloResenha: string,
	    conteudoResenha: string,
	    icone: string,
        nota: number
    }
}

export default function ResenhaItem(props: ResenhaItemProps){
    const { resenha } = props

    function handleDelete(){
        toast.promise(
            destroy(resenha.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso",
               error: "Erro ao excluir.",
             }
           );
    }
    return(
        <div key={resenha.id} className="inline-block justify-between bg-purple-950 rounded min-w-[250px] min-h-[200px] p-4 m-4" id="data-row">
            <div className="flex gap-1 justify-between">
                <Icon name={resenha.icone}/> 
                <span>{resenha.tituloResenha}</span>
                <DropDownAction onDelete={handleDelete}/>
            </div>
        </div>
    )
}