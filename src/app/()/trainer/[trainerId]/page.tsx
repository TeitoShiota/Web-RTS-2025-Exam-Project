import Link from "next/link";


// Lib
import { fetchSingleTrainer } from "@/lib/trainerApiFetch";


// Components
import AssetImage from '@/components/AssetImage'


// Styles
import './trainer-page-style.scss'

export default async function TrainerPage({
    params
} : {
    params: Promise<{ trainerId : string }>
}) {
    const trainerId = ( await params )?.trainerId as string;

        const trainerInfo = await fetchSingleTrainer( await trainerId );
    

    if ( !trainerInfo?.id ){
        return (
            <main className="center-content">
            <h2
                style={{
                    color: 'black',
                    textAlign: 'center'
                }}
            >Trainer Not Found</h2>
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

    return (
        <main className="trainer-page-main">
            <div className="class-detail-page-main__hero">
                <AssetImage
                    asset={ trainerInfo?.asset }
                    alt={`Picture of ${ trainerInfo?.trainerName }`}
                    additionalClassNames="trainer-page-main__image"
                />

            </div>
            <h3>{ trainerInfo?.trainerName }</h3>
        </main>
    )
}