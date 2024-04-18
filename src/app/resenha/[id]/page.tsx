
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getById } from "@/app/actions/resenhas/get-by-id";
import { EditForm } from "./EditForm";


export default async function EditarResenha({params}: Params) {
  const { id } = params

  const resenha: Resenha = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="resenhas"/>

      <EditForm {...resenha} /> 

    </main>
  );
}
