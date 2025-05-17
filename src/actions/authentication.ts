'use server';
import 'server-only';

import { z } from "zod"
import { redirect } from "next/navigation";

import { setSessionCookies } from '@/actions/cookie-actions'

const authEndpoint = `${ await  process.env.TRAINER_API_URI }/auth/token`
const signupEndpoint = `${ await  process.env.TRAINER_API_ENDPOINT }/users`



/**
 * Handles form submission with validation.
 *
 * @param state - The current state, which can be void or null.
 * @param payload - The form data as a record of key-value pairs.
 * @returns A promise that resolves to an object containing the form data and any validation errors or an error message, or void if successful.
 *
 * The function performs the following steps:
 * 1. Converts the payload to a FormData object.
 * 2. Dynamically assigns form fields to a fields object.
 * 3. Validates the form fields using a Zod schema.
 * 4. If validation fails, returns the form data and formatted validation errors.
 * 5. If validation succeeds, attempts to authenticate the user by sending a POST request to the auth endpoint.
 * 6. Handles various response statuses and returns appropriate error messages if authentication fails.
 * 7. If authentication is successful, processes the response data.
 *
 * @throws An error if an exception occurs during the authentication process.
 */
export async function loginFormAction(
    state: void | null,
    payload: Record<string, string>
): Promise<{
    formData: Record<string, string>;
    errors?: z.ZodFormattedError<{ username: string; password: string; }, string> | undefined;
    error?: z.ZodFormattedError<Record<string, string>, string> | string | undefined;
} | void> {
    const formData = payload as unknown as FormData;

    // assign the form fields to the fields object dynamically
    const fields = Object.fromEntries(
        formData
    ) as Record<string, string>;

    // Validate form fields using a Zod schema
    const schema = z.object({
        username: z.string().min( 1 ).max( 128 ),
        password: z.string().min( 1 ).max( 128 )
    }, z.unknown());

    const validationResult = schema.safeParse(fields);

    if (!validationResult.success) { // returns an error if the form validation wasn't successful
        return {
            formData: fields,
            errors: validationResult.error.format()
        };
    }

    try {
            const response = await fetch( 
                authEndpoint, 
                {
                    cache: 'no-store',
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "username": fields?.username,
                        "password": fields?.password
                    })
                }
            )
    
            if ( response?.status === 401 ){
                return {
                    formData: {
                        username: fields?.username,
                        password: fields?.password
                    },
                    error: 'Incorrect username or password'
                }
            }
    
            if (!response?.ok){
                return {
                    formData: {
                        username: fields?.username,
                        password: fields?.password
                    },
                    error: `An error occurred while logging in\n ${response?.statusText} \n Error code: ${ response?.status }`
                }
            }
    
            const data : TrainerApiSessionObject = await response.json()
    
            setSessionCookies(data)
        } catch (error: Error | unknown) {
        throw new Error(`An error occurred while logging in\n ${error}`);
    }

    redirect( '/' )
}


export async function signupFormAction(
    state: void | null,
    payload: Record<string, string>
): Promise<{
    formData: Record<string, string>;
    errors?: z.ZodFormattedError<{ username: string; password: string; confirmPassword: string }, string> | undefined;
    error?: z.ZodFormattedError<Record<string, string>, string> | string | undefined;
} | void> {
    const formData = payload as unknown as FormData;

    // assign the form fields to the fields object dynamically
    const fields = Object.fromEntries(
        formData
    ) as Record<string, string>;

    // Validate form fields using a Zod schema
    const schema = z.object({
        username: z.string().min( 1 ).max( 128 ),
        password: z.string().min( 1 ).max( 128 ),
        confirmPassword: z.string().min( 1 ).max( 128 )
    }, z.unknown());

    const validationResult = schema.safeParse(fields);

    if (!validationResult.success) { // returns an error if the form validation wasn't successful
        return {
            formData: fields,
            errors: validationResult.error.format()
        };
    }

    if ( fields?.password as string !== fields?.confirmPassword as string ) { // returns an error if the form validation wasn't successful
        return {
            formData: fields,
            error: 'Passwords do not match' 
        };
    }

    try {
            const response = await fetch( 
                signupEndpoint, 
                {
                    cache: 'no-store',
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "username": fields?.username,
                        "password": fields?.password
                    })
                }, 
            )
    
            if ( response?.status === 401 ){
                return {
                    formData: {
                        username: fields?.username,
                        password: fields?.password,
                        confirmPassword: fields?.confirmPassword
                    },
                    error: 'Incorrect username or password'
                }
            }
    
            if (!response?.ok){
                return {
                    formData: {
                        username: fields?.username,
                        password: fields?.password,
                        confirmPassword: fields?.confirmPassword
                    },
                    error: `An error occurred while logging in\n ${response?.statusText} \n Error code: ${ response?.status }`
                }
            }
        } catch (error: Error | unknown) {
        throw new Error(`An error occurred while logging in\n ${error}`);
    }

    redirect( '/login' )
}