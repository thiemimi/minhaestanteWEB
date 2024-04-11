export async function getResenhas(){
    const resp = await fetch(process.env.API_BASE_URL + "/resenha", { next: { revalidate: 0 }})
    return await resp.json()
  }