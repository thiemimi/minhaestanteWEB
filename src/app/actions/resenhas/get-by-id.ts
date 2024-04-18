"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.API_BASE_URL}/resenha/${id}`, {next: {revalidate: 0}})

    if(!resp.ok){
        throw new Error("resenha não encontrada!")
    }
    
    return await resp.json()
}