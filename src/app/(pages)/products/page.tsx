import { getAllProducts } from '@/api/AllProducts.api'
import SingleCard from '@/app/_components/SingleCard/SingleCard';
import { ProductType } from '@/types/Allproduct.type';
import React from 'react'

export default async function Products() {


  // لو حبيت اضيف وقت للداتا
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // const response = await fetch("https://ecommerce.routemisr.com/api/v1/products")
  // const { data } = await response.json()

  // console.log(data);

  const data = await getAllProducts()
  // console.log(data);



  return (
    <>

      {/* page background top */}
      <div className="bg-linear-to-br from-[#16A049] to-[#4ADE80] h-48 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center ">
          {/* Breadcrumb */}
          {/* <div className="text-sm opacity-80 mb-6">
          Home / Brands
        </div> */}

          {/* Main Content */}
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.8292 14.0933C33.4385 14.7847 34.4874 14.937 35.2784 14.4155C36.1397 13.8413 36.3741 12.6753 35.7999 11.814L32.9874 7.59521C32.8233 7.34912 32.6006 7.14404 32.337 6.99756L20.5889 0.470215C19.4581 -0.156738 18.0811 -0.156738 16.9444 0.470215L5.20221 6.9917C4.8858 7.16748 4.63385 7.42529 4.46392 7.7417L1.62213 13.0093C0.883846 14.3804 1.39947 16.0854 2.77056 16.8237L4.70416 17.8608V20.9839C4.70416 22.3315 5.43072 23.5796 6.6026 24.2476L16.9151 30.0894C18.0635 30.7397 19.4639 30.7397 20.6124 30.0894L30.9249 24.2476C32.1026 23.5796 32.8233 22.3374 32.8233 20.9839V14.0991L32.8292 14.0933ZM18.7667 13.519L9.97174 8.63232L18.7667 3.74561L27.5616 8.63232L18.7667 13.519ZM16.335 16.4605L15.087 19.1675L5.37213 13.9644L6.86041 11.1987L16.335 16.4605Z" fill="white" />
              </svg>
            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight">All Products</h1>
              <p className="text-purple-100 mt-1 text-lg">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap w-[90%] mx-auto my-7'>
        {data.map((currentProduct : ProductType) => <div key={currentProduct.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
          <div className='p-2'>
            <SingleCard currentProduct={currentProduct} />
          </div>
        </div>)}
      </div>

    </>
  )
}
