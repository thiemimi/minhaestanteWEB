
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getById } from "@/app/actions/estante/get-by-id";
import { EditForm } from "./EditForm";


export default async function EditarEstante({params}: Params) {
  const { id } = params

  const estante: Estante = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="estante"/>

      <EditForm {...estante} /> 

    </main>
  );
}
