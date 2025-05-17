'use client'
import { useActionState, useEffect } from "react"

import { loginFormAction } from "@/actions/authentication";

import Button from "@/components/Button";

// Styles
import './login-form-style.scss'


export default function LoginForm(){

    const [formState, formAction, isPending] = useActionState(loginFormAction, null)

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
            <Button
                text={isPending ? "Logging in" : "Login"}
                disabled={isPending}
                />
            <span>
                { formState?.error === undefined ? '' : formState?.error as string}
            </span>
        </form>
    )
}

// Copied from previous project