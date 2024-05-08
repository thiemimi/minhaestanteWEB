"use client"

import { DropDownAction } from "@/components/DropDownAction";
import { destroy } from "../actions/estante/destroy";
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";

interface EstanteItemProps {
    estante: Estante
}

export function EstanteItem(props: EstanteItemProps){
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
        <div key={estante.id} className="flex justify-between p-2 m-2 rounded" id="data-row"style={{ backgroundColor: '#744938', boxShadow: '-3px 4px 10px rgba(0, 0, 0, 0.1)'} } >
            <div className="flex gap-1 items-center">
                    <Icon name={estante.icone} />
                    <span className="p-2">{estante.tituloLivro}</span>
            </div>
            <DropDownAction 
                    onEdit={() => router.push(`/estante/${estante.id}`)}
                    onDelete={handleDelete}/>
        </div>
    )
}