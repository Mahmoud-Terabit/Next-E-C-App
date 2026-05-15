


export const getAllProducts = async ()=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`,{cache:"default"})
    const { data } = await response.json()

    return data
}
