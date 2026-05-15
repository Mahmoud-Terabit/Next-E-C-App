"use server"

import { getUserToken } from "@/lib/auth"





export async function handelAddToCart(productID: string) {
    const token = await getUserToken()
    const response = await fetch(`${process.env.BASE_URL}/cart`, {
        method :"POST",
        body: JSON.stringify({ productId: productID }),
        headers: {
            "content-type": "application/json",
            token : token as string
        }
    })
    const data = response.json()
    return data
}



export async function handelGetUserCart() {
    const token = await getUserToken()
    const response = await fetch(`${process.env.BASE_URL}/cart`, {
        method :"GET",
        headers: {
            // "content-type": "application/json",
            token : token as string
        }
    })
    const data = response.json()
    return data
}




export async function handelUpdateToCart(productId : string, count : number) {
    const token = await getUserToken()
    const response = await fetch(`${process.env.BASE_URL}/cart/${productId}`, {
        method :"PUT",
        body: JSON.stringify({ count }),
        headers: {
            "content-type": "application/json",
            token : token as string
        }
    })
    const data = response.json()
    return data
}

export async function handelDelteToCart(productId : string) {
    const token = await getUserToken()
    const response = await fetch(`${process.env.BASE_URL}/cart/${productId}`, {
        method :"DELETE",
        // body: JSON.stringify({ count }),
        headers: {
            // "content-type": "application/json",
            token : token as string
        }
    })
    const data = response.json()
    return data
}


// export async function handelClearToCart(productId : string) 
export async function handelClearToCart() {
    const token = await getUserToken()
    const response = await fetch(`${process.env.BASE_URL}/cart`, {
        method :"DELETE",
        headers: {
            token : token as string
        }
    })
    const data = response.json()
    return data
}






