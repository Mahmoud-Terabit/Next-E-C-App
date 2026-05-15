



export const getBrandDetails = async ()=>{
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b`)
    const data = response.json()

    return data
}

