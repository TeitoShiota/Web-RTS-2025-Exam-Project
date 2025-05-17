import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from '@/lib/dal';


    
export default async function middleware(req: NextRequest): Promise<NextResponse<unknown>> {
    const response : NextResponse = NextResponse.next()
    
    const isAuth = await verifySession();
    console.log( isAuth );
    
    // Checks if user is already logged in and forwards then to home at path 
    try {
        if ( await isAuth && req.nextUrl.pathname === '/login' ){
            const url = req.nextUrl.clone()
            url.pathname = '/'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( `Failed to forward logged in user to Home\n${ error }` );
    }
    // Checks if user is already logged in and forwards then to home at path 
    try {
        if ( await isAuth && req.nextUrl.pathname === '/signup' ){
            const url = req.nextUrl.clone()
            url.pathname = '/'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( `Failed to forward logged in user to Home\n${ error }` );
    }


    try {
        if ( 
            !isAuth &&
            req.nextUrl.pathname == '/schedule' 
        ){
            const url = req.nextUrl.clone()
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }
    } catch ( error ) {
        throw new Error( `Failed to forward non logged in user to /login\n${ error }` );
    }

    
    
    return response
}
    
// Routes Middleware should not run on
export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}

// Modified from previous project