export async function getEstantes(){
    await new Promise (r => setTimeout(r, 3000))
    const resp = await fetch(`${process.env.API_BASE_URL}/estante`, { next: { revalidate: 0 }})
    return await resp.json()
  }