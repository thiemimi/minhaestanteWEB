import { DropDownAction } from "@/components/DropDownAction";
import Icon from "@/components/Icon";
import { ChevronDown } from "lucide-react";

interface ResenhaItemProps {
    resenha: {
        id: number,
        nome: string,
        status: string
    }
}

export default function CategoriaItem(props: ResenhaItemProps){
    const { resenha } = props
    return(
        <div key={resenha.id} className="inline-block justify-between bg-purple-950 rounded min-w-[250px] min-h-[200px] p-4 m-4" id="data-row">
            <div className="flex gap-1 justify-between">
                <Icon name={resenha.status}/> 
                <span>{resenha.nome}</span>
                <DropDownAction />
            </div>
        </div>
    )
}