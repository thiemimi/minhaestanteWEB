'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";
import { Icon } from "./Icon";

interface EstanteSelectProps  {
    estantes: Array<Estante>,
    onChange?: ChangeEventHandler
}

export function EstanteSelect({estantes, onChange}: EstanteSelectProps) {

    return (
        <Select
            items={estantes}
            label="Livro"
            name="estante"
            placeholder="Selecione um livro"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(estante) => 
                <SelectItem key={estante.tituloLivro} startContent={<Icon name={estante.icone} />}>
                    {estante.tituloLivro}
                </SelectItem>
            }
        </Select>
    )
}