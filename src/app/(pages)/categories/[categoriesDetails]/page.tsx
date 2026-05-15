import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SingleCard from '@/app/_components/SingleCard/SingleCard'
import { ProductType } from '@/types/Allproduct.type'
import { GetSpecificCategoryType } from '@/types/GetSpecificCategory'

export default async function CategoriesDetails({params} : {params : GetSpecificCategoryType}) {
  const { categoriesDetails } = await params

  const categoryResponse = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoriesDetails}`
  )
  const categoryJson = await categoryResponse.json()

  const productsResponse = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoriesDetails}`
  )
  const productsJson = await productsResponse.json()

  const category = categoryJson.data
  const products: ProductType[] = productsJson.data ?? []

  if (!category) {
    return <div className='w-[90%] mx-auto my-7'>Category not found</div>
  }

  return (
    <>
      {products.length > 0 ? (
        <div className='bg-linear-to-br from-[#16A049] to-[#4ADE80] h-48 text-white py-8 px-6'>
          <div className='max-w-7xl mx-auto h-full flex flex-col justify-center'>
            <div className='flex items-center gap-5'>
              <div className='w-18 h-18 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden p-2'>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={52}
                  height={52}
                  className='max-w-full max-h-full object-contain'
                />
              </div>

              <div>
                <h1 className='text-4xl font-bold tracking-tight'>{category.name}</h1>
                <p className='text-purple-100 mt-1 text-lg'>
                  Explore {category.name} products
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      {products.length > 0 ? (
        <div className='flex flex-wrap w-[90%] mx-auto my-7'>
          {products.map((currentProduct) => (
            <div
              key={currentProduct.id}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
            >
              <div className='p-2'>
                <SingleCard currentProduct={currentProduct} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='w-[90%] mx-auto my-7 text-center text-gray-500 '>
          <p>No Products Found</p>
          <p>No products match your current filters.</p>
          <Link
            href='/products'
            className='inline-block text-white bg-green-500 px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition-all duration-300'
          >
            View All Products
          </Link>
        </div>
      )}
    </>
  )
}
