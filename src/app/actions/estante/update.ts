"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any,formData: FormData){
    await new Promise(r => setTimeout(r, 1000))

    const id = formData.get("id")
    const data = {
      tituloLivro: formData.get("tituloLivro"),
      genero: formData.get("genero"),
      autor: formData.get("autor"),
      icone: formData.get("icone")
    }

    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }

    }

    const resp = await fetch (`${process.env.API_BASE_URL}/estante/${id}`, options)

    if (resp.ok){
      redirect("/estante")
    }
    
    if (resp.status == 400){
      return{
        messageNome: "validação falhou"
      }
    }

    if (resp.status == 404){
      return{
        messageNome: "livro não encontrado"
      }
    }
    
    
  }
