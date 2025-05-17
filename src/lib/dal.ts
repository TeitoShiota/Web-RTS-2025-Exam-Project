'use server';
import 'server-only';

import { getSessionFromCookies } from '@/actions/cookie-actions'


export async function verifySession(){
    try {
        const session = await getSessionFromCookies();

        if (!session?.userId) {
            return false
        }

        if ( session && new Date() > new Date(session?.validUntil) ){
            return false
        }
        
        return true
    } catch ( error ) {
        return false
    }
}

// Copied from previous project