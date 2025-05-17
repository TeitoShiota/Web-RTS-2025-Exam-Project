
// Components
import LoginForm from '@/containers/LoginForm'

// Styles
import './login-page-style.scss'
import Link from 'next/link'


export default function LoginPage(){
    return (
        <main className="login-page-main">
            <h2>Login</h2>
            <section className="login-page-main__content">
                <LoginForm />
                <Link href={'/signup'}>Signup for an account</Link>
            </section>
        </main>
    )
}