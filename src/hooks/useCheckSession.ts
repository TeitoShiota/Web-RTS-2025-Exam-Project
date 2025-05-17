import { verifySession } from '@/lib/dal';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

export function useCheckSession() {
    'use client';

    const [ isLoggedIn, setIsLoggedIn  ] = useState<boolean>(false);
    const [ loadingIsLoggedInState, setLoadingIsLoggedInState ] = useState<boolean>(true);
    

    const checkSession = async () => {
        try {
            if ( loadingIsLoggedInState === true){
                const sessionStatus = (await verifySession());
                const userSessionStatus = await sessionStatus
                setIsLoggedIn( userSessionStatus )
            }
        } catch (error) {
            throw new Error(`Something went wrong with the signup\n Error:\n ${error}`)
        }
    }


    useEffect(() =>{

    }, [])

    return {
        isLoggedIn,
        setIsLoggedIn,
        checkSession
    };
}