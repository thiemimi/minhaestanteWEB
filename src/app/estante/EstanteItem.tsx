"use client"

import { DropDownAction } from "@/components/DropDownAction";
import Icon from "@/components/Icon";
import { ChevronDown } from "lucide-react";
import { destroy } from "../actions/estante/destroy";
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";

interface EstanteItemProps {
    estante: Estante
}

export default function ResenhaItem(props: EstanteItemProps){
    const router = useRouter()
    const { estante } = props

    function handleDelete(){
        toast.promise(
            destroy(estante.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso",
               error: "Erro ao excluir.",
             }
           );
    }
    return(
        <div key={estante.id} className="inline-block justify-between rounded min-w-[250px] min-h-[200px] p-4 m-4" id="data-row"style={{ backgroundColor: '#744938', boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)'} } >
            <div className="flex gap-1 justify-between">
                <div className="flex flex-col">
                    <div>
                        <span>{estante.tituloLivro}</span>
                    </div>
                    
                    <div className="inline-block rounded p-2 m-2">
                        <span>{estante.autor}</span>
                    </div>
                    
                    <div className="inline-block rounded p-2 m-2">
                        <span>{estante.genero}</span>
                    </div>
                </div>
                
                <DropDownAction 
                    onEdit={() => router.push(`/estante/${estante.id}`)}
                    onDelete={handleDelete}/>
            </div>
        </div>
    )
}