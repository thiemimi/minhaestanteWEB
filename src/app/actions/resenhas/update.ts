"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any,formData: FormData){
    await new Promise(r => setTimeout(r, 1000))

    const id = formData.get("id")
    const data = {
      tituloResenha: formData.get("tituloResenha"),
      descricaoResenha: formData.get("conteudoResenha"),
      nota: formData.get("nota"),
      icone: formData.get("book")
    }

    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }

    }

    const resp = await fetch (`${process.env.API_BASE_URL}/resenha/${id}`, options)

    if (resp.ok){
      redirect("/resenha")
    }
    
    if (resp.status == 400){
      return{
        messageNome: "validação falhou"
      }
    }

    if (resp.status == 404){
      return{
        messageNome: "resenha não encontrada"
      }
    }
    
    
  }
