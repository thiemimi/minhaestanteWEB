export async function getResenhas(){
    await new Promise (r => setTimeout(r, 3000))
    const resp = await fetch(`${process.env.API_BASE_URL}/resenha/`, { next: { revalidate: 0 }})
    return await resp.json()
  }