"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any,formData: FormData){
    await new Promise(r => setTimeout(r, 3000))

    const data = {
      tituloResenha: formData.get("tituloResenha"),
      conteudoResenha: formData.get("conteudoResenha"),
      nota: formData.get("nota"),
      estante: {
        id: formData.get("estante")
      }
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }

    }

    const resp = await fetch (process.env.API_BASE_URL + "/resenha", options)

    if (resp.ok){
      redirect("/resenha")
    }
    
    if (resp.status == 400){
      return{
        messageNome: "validação falhou"
      }
    }
    
  }
