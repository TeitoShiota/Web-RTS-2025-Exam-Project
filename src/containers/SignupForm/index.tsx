'use client'
import { useActionState, useEffect } from "react"

import { signupFormAction } from "@/actions/authentication";

import Button from "@/components/Button";

// Styles
import './signup-form-style.scss'


export default function SignupForm(){

    const [formState, formAction, isPending] = useActionState(signupFormAction, null)

    useEffect(function() {
        console.log("formstate", formState)
    }, [formState])

    return (
        <form
            action={ formAction }
            className="login-form"
            noValidate
            >
            <input
                type="text"
                name="username"
                placeholder="username"
                defaultValue={formState?.formData?.username ? String(formState.formData.username) : ""}
                />
                <span>
                    {
                        formState?.errors?.username === undefined ? '' : 'Please fill out the username'
                    }
                </span>
            <input
                type="password"
                name="password"
                placeholder="password"
                defaultValue={formState?.formData?.password ? String(formState.formData.password) : "" } 
                />
            <span>
                    {
                        formState?.errors?.password === undefined ? '' : 'Please fill out the password'
                    }
            </span>
            <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                defaultValue={formState?.formData?.confirmPassword ? String(formState.formData.confirmPassword) : "" } 
                />
            <span>
                    {
                        formState?.errors?.confirmPassword === undefined ? '' : 'Please confirm your password'
                    }
            </span>
            <Button
                text={isPending ? "Signing up" : "Sign up"}
                disabled={isPending}
                />
            <span>
                { formState?.error === undefined ? '' : formState?.error as string}
            </span>
        </form>
    )
}

// Copied from previous project