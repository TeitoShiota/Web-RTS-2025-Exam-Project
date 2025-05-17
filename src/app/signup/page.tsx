
// Components
import SignupForm from '@/containers/SignupForm'

// Styles
import './signup-page-style.scss'


export default function SignupPage(){
    return (
        <main className="signup-page-main">
            <h2>Sign up</h2>
            <section className="signup-page-main__content">
                <SignupForm />
            </section>
        </main>
    )
}