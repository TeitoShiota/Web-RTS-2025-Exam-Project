'use client';

import { useClassSignup } from "@/hooks/useClassSignup";

// Styles
import './class-signup-button.scss';

export default function ClassSignupButton({
    classId,
    userId,
    userToken
} : {
    classId : TrainerApiClassObject['id'],
    userId : TrainerApiUser['id'],
    userToken : TrainerApiSessionObject['token']
}) {
    const { isSignedUp, LoadingSignedUpState, signupHandler, loadedRef } = useClassSignup( { classId, userId, userToken } );
    
    loadedRef.current = false


    return (
        <button
            className="class-detail-page-main__hero__button"
            type="button"
            onClick={ () => signupHandler() }
            disabled={ LoadingSignedUpState }
        >
            {
                isSignedUp === false  || isSignedUp === undefined ? (
                    'Leave'
                ) : (
                    'Sign up'
                )
            }
        </button>
    )
}