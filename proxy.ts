import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {

    const {pathname} = request.nextUrl
    console.log(pathname);
    
    
    //const pageIsAuth = pathname === "/login" || "/register"
    const pageIsAuth = ["/login","/register"].includes(pathname)
    console.log(pageIsAuth);
    

    const token = await getToken({req: request})
    console.log(token);
    
    if(token && pageIsAuth){
        return NextResponse.redirect(new URL('/', request.url))
    }

    if(!token && !pageIsAuth){
        return NextResponse.redirect(new URL('/login', request.url))
    }

//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ['/','/cart','/brands','/categories','/login','/register','/products'],
}

// export const config = {
//   matcher: '/about/:path*',
// }


