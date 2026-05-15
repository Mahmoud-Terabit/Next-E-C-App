import { getAllBrands } from '@/api/AllBrands.api';
import BrandsMain from '@/app/_components/BrandsMain/BrandsMain';
// import { getUserToken } from '@/lib/auth';
// import { authOptions } from '@/lib/authoption'
// import { getServerSession } from 'next-auth'
import React from 'react'

export default async function brands() {

  // const data = await getServerSession(authOptions)

  // // console.log(data,"BRANDS_AUTH_DATA");

  // const response = await getUserToken()
  // console.log("BRANDS_RESPONSE", response);

  const data = await getAllBrands()
  console.log("BRANDS_DATA",data);
  

  return (
    <>
    {/* page background top */}
      <div className="bg-linear-to-br from-[#7F24FE] to-[#C079FF] h-48 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center ">
          {/* Breadcrumb */}
          {/* <div className="text-sm opacity-80 mb-6">
          Home / Brands
        </div> */}

          {/* Main Content */}
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.627 0.416016L30.3106 9.22266C31.9336 10.8691 31.9336 13.5059 30.3106 15.1523L21.1465 24.4277C20.6016 24.9785 19.7109 24.9844 19.1602 24.4395C18.6094 23.8945 18.6035 23.0039 19.1484 22.4531L28.3125 13.1719C28.8516 12.627 28.8516 11.7422 28.3125 11.1973L19.623 2.39648C19.0781 1.8457 19.084 0.955078 19.6348 0.410156C20.1855 -0.134766 21.0762 -0.128906 21.6211 0.421875L21.627 0.416016ZM0 11.5723V3.75C0 1.68164 1.68164 0 3.75 0H11.5723C12.5684 0 13.5234 0.392578 14.2266 1.0957L22.6641 9.5332C24.1289 10.998 24.1289 13.3711 22.6641 14.8359L14.8418 22.6582C13.377 24.123 11.0039 24.123 9.53906 22.6582L1.10156 14.2207C0.398438 13.5176 0.00585951 12.5625 0.00585951 11.5664L0 11.5723ZM8.4375 6.5625C8.4375 6.06522 8.23996 5.58831 7.88832 5.23668C7.53669 4.88504 7.05978 4.6875 6.5625 4.6875C6.06522 4.6875 5.58831 4.88504 5.23667 5.23668C4.88504 5.58831 4.6875 6.06522 4.6875 6.5625C4.6875 7.05978 4.88504 7.53669 5.23667 7.88833C5.58831 8.23996 6.06522 8.4375 6.5625 8.4375C7.05978 8.4375 7.53669 8.23996 7.88832 7.88833C8.23996 7.53669 8.4375 7.05978 8.4375 6.5625Z" fill="white" />
              </svg>

            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Top Brands</h1>
              <p className="text-purple-100 mt-1 text-lg">
                Shop from your favorite brands
              </p>
            </div>
          </div>
        </div>
      </div>

        <BrandsMain data = {data} />

    </>
  )
}
