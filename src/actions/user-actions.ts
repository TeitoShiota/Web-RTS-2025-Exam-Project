'use server'
import 'server-only'

import { cookies } from 'next/headers';


/**
 * Deletes the session cookies.
 *
 * @throws Will log an error message if setting the session cookies fails.
 */
export async function deleteSessionCookies( ) {
    try {

        const cookieStore = await cookies();
        cookieStore.delete('session')

    } catch ( error ) {
        throw new Error(`Something went wrong while deleting the cookies.\nError:\n${error}`)
    }
}

export async function getUser( userId: TrainerApiUser['id'], token: string ) : Promise< TrainerApiUserObject | undefined | void> {
    try {
        const response = await fetch(
            `${ await  process.env.TRAINER_API_ENDPOINT }/users/${ userId }`,
            {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ await token }`
                }
            }
        )

        if ( response?.status === 401 ){
            throw new Error(`You are not authorized to fetch this data\n ${response?.statusText}`);
        }

        if (!response?.ok){
            throw new Error(`An error occurred while gettin user data \n ${response?.statusText}`);
        }

        const data = response?.json();

        return data 

    } catch (error) {
    }
    return undefined
}

export async function getClassSignedUpStatus(
    classID: TrainerApiClassObject['id'],
    userId: TrainerApiUser['id'],
    userToken : TrainerApiSessionObject['token']
) : Promise<TrainerApiClassObject[]> {
    try {
        const response = await fetch(
            `${ await  process.env.TRAINER_API_ENDPOINT }/users/${ userId }`,
            {
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ await userToken }`
                }
            }
        )

        if ( response?.status === 401 ){
            throw new Error(`You are not authorized to fetch this data\n ${response?.statusText}`);
        }

        if (!response?.ok){
            throw new Error(`An error occurred while gettin user data \n ${response?.statusText}`);
        }

        const data = await response.json() as TrainerApiUser

        const classes = data?.classes.filter( ( classItem ) =>  classID as string == classItem?.id as string)
        return classes
    } catch (error) {
        throw new Error(`Something went wrong with getting the signup status\n Error:\n ${error}`)
    }
}

export async function signupForClass(
    classID: TrainerApiClassObject['id'],
    userId: TrainerApiUser['id'],
    userToken : TrainerApiSessionObject['token']
){
    const url = `${ await  process.env.TRAINER_API_ENDPOINT }/users/${ userId }/classes/${ classID }`
        try {
            const response = await fetch(
                url,
                {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ await userToken }`
                    }
                }
            )
    
            if ( response?.status === 401 ){
                throw new Error(`You are not authorized to fetch this data\n ${response?.statusText}`);
            }
    
            if (!response?.ok){
                throw new Error(`An error occurred while gettin user data \n ${response?.statusText}`);
            }            
        } catch (error) {
            throw new Error(`Something went wrong with getting the signup status\n Error:\n ${error}`)
        }
}

export async function leaveClass(
    classID: TrainerApiClassObject['id'],
    userId: TrainerApiUser['id'],
    userToken : TrainerApiSessionObject['token']
){
    const url = `${ await  process.env.TRAINER_API_ENDPOINT }/users/${ userId }/classes/${ classID }`
    console.log ( url )
    try {
        const response = await fetch(
            url,
            {
                "method": "DELETE",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ await userToken }`
                }
            }
        )

        if ( response?.status === 401 ){
            throw new Error(`You are not authorized to fetch this data\n ${response?.statusText}`);
        }

        if (!response?.ok){
            throw new Error(`An error occurred while gettin user data \n ${response?.statusText}`);
        }
    } catch (error) {
        throw new Error(`Something went wrong with getting the signup status\n Error:\n ${error}`)
    }
}