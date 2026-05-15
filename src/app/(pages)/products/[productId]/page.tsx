import { handelAddToCart } from '@/api/Cart';
import AddToCartButton from '@/app/_components/Cart/AddToCartButton';
import AddToCartButtonSecond from '@/app/_components/cartTwo/AddToCartButtonSecond';
import DetailsSlider from '@/app/_components/DetailsSlider/DetailsSlider';
import { Button } from '@/components/ui/button';
import { ProductDetailsType } from '@/types/ProductDetailes.type';
import React from 'react'

export default async function ProductDetails({params} : {params : ProductDetailsType}) {

    // product id
    // const {id} = await params  :: the old one from api
    const {productId} = await params
    console.log("paraaaaaaaams",params);
    // const [isAdding, setIsAdding] = useState(false)

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
    const { data } = await response.json()

    console.log( "product details" ,data);

    async function addToCart(productId: string) {
        console.log("add to cart", productId);
        try {
            const response = await handelAddToCart(productId)
            console.log("add to cart response", response);
        } catch (error) {
            console.log("error adding to cart", error);
        }
    }

    return (
        <>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 md:flex-row md:items-start md:gap-8 lg:gap-10">
                <div className="w-full shrink-0 md:w-2/5 lg:w-1/3">
                    <div className="flex justify-center p-4 sm:p-6 md:justify-start">
                        <div className="inner w-full max-w-xs sm:max-w-sm">
                            {/* <img src={data.imageCover} alt="" /> */}
                            {/* {data.images.map((proimg) =>)} */}
                            <DetailsSlider data={data} />
                        </div>
                    </div>
                </div>
                <div className="flex w-full min-w-0 flex-1 flex-col md:w-3/5 lg:w-2/3">
                    <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 sm:text-base">
                        {data.category.name}
                    </h2>
                    <h4 className="mt-1 text-xl font-semibold leading-snug text-gray-900 sm:mt-2 sm:text-2xl lg:text-3xl">
                        {data.title}
                    </h4>
                    <div className="mt-4 flex w-full flex-col gap-4 sm:mt-6 sm:gap-6">
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                            <div>
                                <p className="text-2xl font-bold text-green-600 sm:text-3xl">
                                    {data.price}EGP
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                    {/* <span className='text-yellow-400'>
                    <Star className="w-4 h-4 " />
                  </span> */}
                                    <span className="">
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">{/*!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}<path fill="rgb(255, 212, 59)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" /></svg>
                                    </span>
                                    <span className="text-sm text-gray-600 sm:text-base">{data.ratingsAverage}</span>
                                </div>
                            </div>
                            <div className="flex w-full justify-center md:justify-start">
                                <AddToCartButtonSecond productId={data.id} />
                                {/* <Button
                                    onPress={() => addToCart(data.id)}
                                    // disabled={isAdding}
                                    className='bg-green-500 hover:bg-green-600 text-white w-[80%] transition-all cursor-pointer'
                                    variant="outline"
                                >
                                    {isAdding ? <LoaderCircle className='animate-spin' /> : "Add to cart"}
                                </Button> */}
                                {/* <Button  className='bg-green-500 hover:bg-green-600 text-white w-[80%] transition-all cursor-pointer'>
                                    Add to cart
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
