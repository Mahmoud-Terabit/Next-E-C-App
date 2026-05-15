import { CategoryHome } from '@/types/Category.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function CategoryMainNav({data} : {data : CategoryHome}) {
    console.log(data);
    
  return (
    <>
        <div className=' my-8'>
                <div className="inner flex flex-wrap p-10 items-center justify-center">
                    {data?.map((category, index) =>
                        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 '>
                            <Link href={`/categories/${category._id}`} className='block h-full'>
                                <div className='group bg-white shadow-md border border-gray-100 rounded-2xl p-6 h-full flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300'>
                                    <div className='w-50 h-60 rounded-2xl overflow-hidden'>
                                        <Image width={500} height={500} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={category.image} alt={category.name || "category"} />
                                    </div>
                                    <div className='w-full py-4 text-center'>
                                        <h4 className='font-bold ransition-colors duration-300 group-hover:text-green-500'>{category.name || 'Unknown Category'}</h4>
                                    </div>
                                    <div className="ml-5 mt-3 flex items-center justify-center gap-1.5 text-green-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:gap-2">
                                        <span className="font-medium">View Subcategories</span>
                                        <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
    </>
  )
}
