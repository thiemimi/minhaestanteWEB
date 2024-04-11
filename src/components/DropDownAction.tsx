'use client' 

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

export function DropDownAction(){
    return(
    <Dropdown>
        <DropdownTrigger>
           <ChevronDown/>
        </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions" className="text-danger">
        <DropdownItem key="edit" startContent={<Pencil/>}>Editar</DropdownItem>
    <DropdownItem key="delete" startContent={<Trash/>}className="text-danger" color="danger">
        Apagar
    </DropdownItem>
    </DropdownMenu>
    </Dropdown>
    )
}