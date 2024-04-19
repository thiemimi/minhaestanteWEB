'use client'

import { Button } from "@nextui-org/react";
import { Check } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton(){
    const { pending } = useFormStatus()

    return (
        <Button radius="full" type="submit"  style={{ backgroundColor: '#744938' } } startContent={<Check />} isLoading={pending}>
            Salvar
        </Button>
    )
}