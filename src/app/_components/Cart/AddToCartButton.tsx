"use client"

import { handelAddToCart } from '@/api/Cart';
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';

export default function AddToCartButton({ productId }: { productId: string }) {

    const [isLoding, setIsLoding] = useState(false)

    async function addToCart(productId: string) {
        try {
            setIsLoding(true)
            const response = await handelAddToCart(productId)
            console.log("response",response);
            if (response.status == "success") {
                toast.success(response.message, { position: "top-center" })
            }
        } catch (error) {
            toast.error("something went wrong", { position: "top-center"})
            console.log(error);
        }finally{
            setIsLoding(false)
        }

    }



    return (
        <>

            <Button
                onClick={() => addToCart(productId)}
                // onClick={() => handelAddToCart()} 
                disabled={isLoding} 
                className={`h-9 w-9 rounded-full p-0 text-lg text-white bg-green-500 ${isLoding ? "cursor-not-allowed" : "cursor-pointer"} hover:bg-green-600`}
                variant="outline"
            >
                {isLoding ? <><LoaderCircle className='animate-spin w-4 h-4' /></> : "+"}
            </Button>

        </>
    )
}
