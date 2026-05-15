import React from 'react'
import Image from 'next/image';
import SingleCard from '@/app/_components/SingleCard/SingleCard';
import { ProductType } from '@/types/Allproduct.type';
import Link from 'next/link';
import { GetSpecificBrandType } from '@/types/GetSpecificBrand';





export default async function BrandDetails({params} : {params : GetSpecificBrandType}) {
  const { brandsDetails } = await params

  const brandResponse = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${brandsDetails}`
  )
  const brandJson = await brandResponse.json()

  const productsResponse = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${brandsDetails}`
  )
  const productsJson = await productsResponse.json()

  const brand = brandJson.data
  const products: ProductType[] = productsJson.data ?? []

  if (!brand) {
    return <div className='w-[90%] mx-auto my-7'>Brand not found</div>
  }

  return (
    <>
      {products.length > 0 ? <div className="bg-linear-to-br from-[#16A049] to-[#4ADE80] h-48 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center ">
          {/* Breadcrumb */}
          {/* <div className="text-sm opacity-80 mb-6">
          Home / Brands
        </div> */}

          {/* Main Content */}
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="w-18 h-18 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
              <Image
                src={brand.image}
                alt={brand.name}
                width={52}
                height={52}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{brand.name}</h1>
              <p className="text-purple-100 mt-1 text-lg">
                Explore {brand.name} products
              </p>
            </div>
          </div>
        </div>
      </div> : ""}

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
          <Link href="/products" className='inline-block text-white bg-green-500 px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition-all duration-300'>View All Products</Link>
        </div>
      )}
    </>
  )
}
