// Actions
import { getSessionFromCookies } from '@/actions/cookie-actions'


// Lib
import { fetchSingleClass } from "@/lib/trainerApiFetch";

// Components
import AssetImage from "@/components/AssetImage";
import Link from 'next/link';

// Styles
import './class-detail-page-style.scss';
import TrainerCard from "@/components/TrainerCard";
import ClassSignupButton from "@/components/ClassSignupButton";

export default async function ClassDetailPage({
    params
} : {
    params: Promise<{ classId : string }>
}){

    const classId = ( await params )?.classId as string;

    const classInfo = await fetchSingleClass( await classId );

    const session = await getSessionFromCookies() || undefined;

    if ( !classInfo?.id ){
        return (
            <main className="center-content">
            <h2
                style={{
                    color: 'black',
                    textAlign: 'center'
                }}
            >Class Not Found</h2>
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

    try {
        return (
            <main className="class-detail-page-main">
                <div className="class-detail-page-main__hero">
                    <AssetImage
                        asset={ classInfo?.asset }
                        alt={`Picture of the ${ classInfo?.className } class`}
                        additionalClassNames="class-detail-page-main__image"
                    />
                    <div className='class-detail-page-main__hero__content'>
                    <h2>{ classInfo?.className }</h2>
                    {
                        session !== undefined ? (
                            
                            <ClassSignupButton 
                            classId={ classId || '' as TrainerApiClassObject['id'] }
                            userId={ session?.userId !== undefined ? session?.userId : '' as TrainerApiUser['id'] }
                            userToken={ session?.token !== undefined ? session?.token : '' as TrainerApiSessionObject['token'] }
                            />
                        ) : (
                            null
                        )
                    }
                    </div>
                </div>
                <section className="class-detail-page-main__schedule-section">
                    <h2 className="class-detail-page-main__schedule-section__heading">Schedule</h2>
                    <div className="class-detail-page-main__schedule-section__timetable">
                        <p className="class-detail-page-main__schedule-section__date">{ classInfo?.classDay }</p>
                        <p className="class-detail-page-main__schedule-section__time">{ classInfo?.classTime }</p>
                    </div>
                </section>
                <p>{ classInfo?.classDescription }</p>
                <section className="class-detail-trainer-section">
                    <h2 className="class-detail-trainer-section__heading">Trainer</h2>
                    <TrainerCard trainer={ classInfo?.trainer } />
                </section>
            </main>
        )
    } catch ( error ){
        return (
            <main>
                <h2></h2>
            </main>
        )
    }
}