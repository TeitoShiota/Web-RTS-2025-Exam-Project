import Link from "next/link"
export default function NotFoundPage(){
    return(
        <main className="center-content">
            <h2
                style={{
                    color: 'black',
                    textAlign: 'center'
                }}
            >Page Not found</h2>
            <Link 
                style={{
                    backgroundColor: '#E4E4E4',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '2rem'
                }}
            href={ '/' }>Return home</Link>
        </main>
    )
}