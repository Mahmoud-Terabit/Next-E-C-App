"use client"

import { handelAddToCart } from '@/api/Cart';
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';

export default function AddToCartButtonSecond({ productId }: { productId: string }) {

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
                disabled={isLoding}
                className={`w-[80%] min-h-11 px-5 py-2.5 text-sm font-medium sm:min-h-12 sm:px-6 sm:text-base md:text-lg rounded-lg sm:rounded-xl text-white bg-green-500 transition-colors hover:bg-green-600 ${isLoding ? "cursor-not-allowed opacity-90" : "cursor-pointer"}`}
                variant="outline"
            >
                {isLoding ? (
                    <LoaderCircle className="h-5 w-5 animate-spin sm:h-6 sm:w-6" />
                ) : (
                    "Add to cart"
                )}
            </Button>

        </>
    )
}