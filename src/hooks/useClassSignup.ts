import { useState, useEffect, useRef } from 'react';

import { signupForClass, leaveClass, getClassSignedUpStatus } from '@/actions/user-actions';

export function useClassSignup(
    {
        classId,
        userId,
        userToken
    } : {
        classId: TrainerApiClassObject['id'],
        userId: TrainerApiUser['id'],
        userToken: TrainerApiSessionObject['token']
    }
) {
    'use client';

    const [ isSignedUp, setIsSignedUp ] = useState<boolean>();
    const [ LoadingSignedUpState, setLoadingSignedUpState ] = useState<boolean>();
    const loadedRef = useRef(false);



    function signupHandler(){
        if ( LoadingSignedUpState === false ){
            try {
                if ( !isSignedUp === false ){
                    // setLoadingSignedUpState(true)
                    signupForClass( classId, userId, userToken );
                    loadedRef.current = false;
                } else if (  !isSignedUp === true ){
                    // setLoadingSignedUpState(true)
                    leaveClass( classId, userId, userToken );
                    loadedRef.current = false;
                } else {
                    
                }
            } catch (error) {
                throw new Error(`Something went wrong with the signup\n Error:\n ${error}`)
            } finally {
                setLoadingSignedUpState(false)
                // loadedRef.current = true;
            }
        }
    }

    useEffect(() => {
        const updateIsSingedUp = async () => {
            const classes = (await getClassSignedUpStatus( classId, userId, userToken ))
            if ( classes?.length >= 1 ){
                setIsSignedUp( false );
                loadedRef.current = true;
            } else {
                setIsSignedUp( true );
                loadedRef.current = true;

            }
        }
        if ( !loadedRef.current ){
            try {
                setLoadingSignedUpState(true);
                updateIsSingedUp();
            } catch (error) {
                throw new Error(`Something went wrong with the signup\n Error:\n ${error}`)
            } finally {
                setLoadingSignedUpState(false);
                
            }
        }
    }, [ loadedRef, isSignedUp]);

    return {
        isSignedUp,
        LoadingSignedUpState,
        signupHandler,
        loadedRef
    };
}