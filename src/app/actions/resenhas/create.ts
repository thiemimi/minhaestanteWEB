"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    await new Promise(r => setTimeout(r, 3000))

    const data = {
      tituloResenha: formData.get("tituloResenha"),
      descricaoResenha: formData.get("conteudoResenha"),
      nota: formData.get("nota"),
      icone: "book"
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }

    }

    const resp = await fetch (process.env.API_BASE_URL + "/resenha", options)

    if (resp.status == 201) redirect("/resenha")
  }
