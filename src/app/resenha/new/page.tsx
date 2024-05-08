import NavBar from "@/components/NavBar";
import { getEstantes } from "@/app/actions/estante/get";
import { Form } from "./Form";


export default async function CadastrarResenhas() {
    const estantes = await getEstantes()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="resenha" />

            <Form estantes={estantes} />
            
        </main>


    )
}