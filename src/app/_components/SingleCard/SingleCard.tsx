import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types/Allproduct.type';
import AddToCartButton from '../Cart/AddToCartButton';


export default function SingleCard({ currentProduct }: { currentProduct: ProductType }) {

    // console.log(currentProduct);


    // const { data: session } = useSession()
    // const {setCartCounter} = useContext(CartContext)
    // const [isLoding, setIsLoding] = useState(false)

    // --------------------------------------------------------------------------------------------------------------
    // async function handelAddToCart() {
    //   try {
    //     setIsLoding(true)
    //     const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //         "token": (session as any).token
    //       },
    //       body: JSON.stringify({ productId: currentProduct.id })
    //     })
    //     const data = await response.json()
    //     console.log(data, "data of cart");
    //     if(data.status === "success"){
    //       setCartCounter(data.numOfCartItems)
    //       toast.success(data.message , {position: "top-center"})
    //     }else{
    //       toast.error(data.message , {position: "top-center"})
    //     }

    //   } catch (error) {
    //     toast.error("something went wrong" , {position: "top-center"});
    //     console.log(error);
    //   }
    //   finally {
    //     setIsLoding(false)
    //   }
    // }


    return (
        <>
            <Card>
                <Link href={`/products/${currentProduct.id}`}>
                    <CardHeader>
                        <div>
                            <Image width={280} height={280} src={currentProduct.imageCover} alt="img" />
                        </div>
                        <CardDescription>Card Description</CardDescription>
                        {/* <CardAction>Card Action</CardAction> */}
                    </CardHeader>
                    <CardContent>
                        <h4 className='text-green-600 font-medium font-exo'>{currentProduct.category.name}</h4>
                        <p className='line-clamp-1'>{currentProduct.title}</p>
                    </CardContent>
                </Link>
                <CardFooter className=''>
                    <div className='flex w-full'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2'>
                                <div>
                                    <p>{currentProduct.price}EGP</p>
                                </div>
                                <div className='flex'>
                                    {/* <span className='text-yellow-400'>
                    <Star className="w-4 h-4 " />
                  </span> */}
                                    <span className="">
                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">{/*!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}<path fill="rgb(255, 212, 59)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
                                    </span>
                                    <span>{currentProduct.ratingsAverage}</span>
                                </div>
                            </div>
                            <AddToCartButton productId={currentProduct.id} />
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}
