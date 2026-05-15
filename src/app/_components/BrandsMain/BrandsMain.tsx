"use client"


import { BrandsType } from '@/types/GetAllBrands.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export default function BrandsMain({ data }: { data: BrandsType[] }) {
    ; console.log("dataaaaaaaaaaaaa", data);

    return (
        <>
            <div className="container mx-auto py-10 ">
                <div className="flex flex-wrap justify-start">
                    {data?.map((brand) => (
                        <div key={brand._id} className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
                            <Link
                                href={`/brands/${brand._id}`}
                                className="block h-full"
                                onClick={() => console.log("Selected brandssssssssssssssssssssssss:", brand)}
                            >
                                <div className="shadow-2xl bg-white border border-gray-100 rounded-3xl p-6 hover:shadow hover:border-purple-500 transition-all duration-300 group cursor-pointer h-full">
                                    <div className="p-8 bg-gray-50 rounded-2xl h-52 flex items-center justify-center mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                        <Image width={500} height={500} className="w-full h-full object-contain group-hover:scale-125 transition-all duration-300" src={brand.image} alt={brand.name} />
                                    </div>

                                    <div className="text-center transition-colors">
                                        <span className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-purple-700">{brand.name}</span>
                                        {/* href={`/brands/${brand._id}`} */}
                                        <div className="ml-5 mt-3 flex items-center justify-center gap-1.5 text-purple-600 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:gap-2">
                                            <span className="font-medium">View Products</span>
                                            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
