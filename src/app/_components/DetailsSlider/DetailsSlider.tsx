
"use client"

import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import { ProductDetailsType } from '@/types/ProductDetailes.type';
import Image from 'next/image';
import { ProductDetailsType } from '@/types/ProductDetailes.type';




export default function DetailsSlider({ data } : {data : ProductDetailsType}) {
    console.log("detailsSlider",data);
    return (
        <>
            <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
                <CarouselContent>
                    {/* index و key بس عشان بيدى انو محتاج key لكن هو مش هيفرق*/}
                    {data.images.map((proimg, index) =>
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">
                                            <Image width={200} height={200} src={proimg} alt="img" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}
