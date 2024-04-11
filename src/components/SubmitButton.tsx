'use client'

import { Button } from "@nextui-org/react";
import { Check } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton(){
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className="bg-violet-500" startContent={<Check />} isLoading={pending}>
            Salvar
        </Button>
    )
}