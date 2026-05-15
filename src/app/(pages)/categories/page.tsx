import { getCategory } from '@/api/Category.api'
import CategoryMainNav from '@/app/_components/CategoryMainNav/CategoryMainNav';
import React from 'react'

export default async function categories() {

  const { data } = await getCategory()


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
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.373 0.304688C18.2461 -0.0996094 19.2539 -0.0996094 20.127 0.304688L32.9355 6.22266C33.4336 6.45117 33.75 6.94922 33.75 7.5C33.75 8.05078 33.4336 8.54883 32.9355 8.77734L20.127 14.6953C19.2539 15.0996 18.2461 15.0996 17.373 14.6953L4.56445 8.77734C4.06641 8.54297 3.75 8.04492 3.75 7.5C3.75 6.95508 4.06641 6.45117 4.56445 6.22266L17.373 0.304688ZM6.56836 12.7969L16.1953 17.2441C17.8184 17.9941 19.6875 17.9941 21.3105 17.2441L30.9375 12.7969L32.9355 13.7227C33.4336 13.9512 33.75 14.4492 33.75 15C33.75 15.5508 33.4336 16.0488 32.9355 16.2773L20.127 22.1953C19.2539 22.5996 18.2461 22.5996 17.373 22.1953L4.56445 16.2773C4.06641 16.043 3.75 15.5449 3.75 15C3.75 14.4551 4.06641 13.9512 4.56445 13.7227L6.5625 12.7969H6.56836ZM4.56445 21.2227L6.5625 20.2969L16.1895 24.7441C17.8125 25.4941 19.6816 25.4941 21.3047 24.7441L30.9316 20.2969L32.9297 21.2227C33.4277 21.4512 33.7441 21.9492 33.7441 22.5C33.7441 23.0508 33.4277 23.5488 32.9297 23.7773L20.1211 29.6953C19.248 30.0996 18.2402 30.0996 17.3672 29.6953L4.56445 23.7773C4.06641 23.543 3.75 23.0449 3.75 22.5C3.75 21.9551 4.06641 21.4512 4.56445 21.2227Z" fill="white" />
              </svg>


            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight">All Categories</h1>
              <p className="text-purple-100 mt-1 text-lg">
              Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>

      <CategoryMainNav data={data} />
    </>
  )
}
