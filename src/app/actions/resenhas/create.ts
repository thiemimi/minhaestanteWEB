"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    const data = {
      nome: formData.get("nome"),
      icone: "book"
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "aplication/json"
      }

    }

    const resp = await fetch (`${process.env.API_BASE_URL}/resenha`, options)

    if (resp.status == 200) redirect("/resenhas")
  }
