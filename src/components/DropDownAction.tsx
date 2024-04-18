'use client' 

import { destroy } from "@/app/actions/resenhas/destroy";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropDownActionProps{
    onEdit: MouseEventHandler
    onDelete: MouseEventHandler
}
export function DropDownAction({onEdit, onDelete}: DropDownActionProps){
    return(
    <Dropdown>
        <DropdownTrigger>
           <ChevronDown/>
        </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions" className="text-danger">

        <DropdownItem 
            key="edit" 
            startContent={<Pencil/>}
            onClick={onEdit}
            
            >
                Editar
        </DropdownItem>



        <DropdownItem  
            key="delete" 
            startContent={<Trash/>}
            className="text-danger" 
            color="danger"
            onClick={onDelete}>
            Apagar
        </DropdownItem>
    </DropdownMenu>
    </Dropdown>
    )
}