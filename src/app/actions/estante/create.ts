"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any,formData: FormData){
    await new Promise(r => setTimeout(r, 3000))

    const data = {
      tituloLivro: formData.get("tituloLivro"),
      genero: formData.get("genero"),
      autor: formData.get("autor"),
      //StatusLeitura: formData.get("StatusLeitura")
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }

    }
    
    const resp = await fetch (process.env.API_BASE_URL + "/estante", options)

    if (resp.ok){
      redirect("/estante")
    }
    
    if (resp.status == 400){
      return{
        messageNome: "validação falhou"
      }
    }
    
  }
