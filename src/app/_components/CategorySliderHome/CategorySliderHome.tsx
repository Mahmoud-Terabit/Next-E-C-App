import { getCategory } from '@/api/Category.api'
import { CategoryHome } from '@/types/Category.type';
import Image from 'next/image';
import React from 'react'

export default async function CategorySliderHome({data} : {data : CategoryHome}) {

    // const data = await getCategory()

    console.log("ALL CATEGORIES",data);
    
  return (
    <>
        <div className=' my-8'>
                <div className="inner flex flex-wrap p-10 items-center justify-center">
                    {data.map((category, index) => 
                    <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 '>
                        <div className='bg-white shadow-md border border-gray-100 rounded-2xl p-6 h-full flex flex-col items-center justify-center transition-transform hover:scale-105'>
                            <div className='w-24 h-24 rounded-full overflow-hidden'>
                                <Image width={500} height={500} className='w-full h-full object-cover' src={category.image} alt="" />
                            </div>
                            <div className='w-full py-4 text-center'>
                                <h4 className='font-bol'>{category.name}</h4>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
    </>
  )
}
