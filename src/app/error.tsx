'use client'

import { useEffect } from 'react'


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    
    return (
        <main className="center-content">
            <h2
                style={{
                    color: 'black',
                    textAlign: 'center'
                }}
            >Something went wrong!</h2>
            <h3
                style={{
                    color: 'black',
                    textAlign: 'center'
                }}
            >{ error.message }</h3>

            <button
                style={{
                    backgroundColor: '#E4E4E4',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '2rem'
                }}
                onClick={() => reset()}
            >Try again</button>

        </main>
    )
}