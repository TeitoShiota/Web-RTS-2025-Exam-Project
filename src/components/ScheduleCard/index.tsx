import Link from 'next/link'
import './schedule-card-style.scss'

export default function ScheduleCard({
    classInfo
} : {
    classInfo: TrainerApiClassObject
}) {
    return (
        <Link
            className="schedule-card"
            href={ `/class/${ classInfo?.id }` }
        >
            <div className='schedule-card__date-info'>
                <p>{ classInfo?.classDay }</p>
                <p>{ classInfo?.classTime }</p>
            </div>
            <h3>{ classInfo?.className }</h3>
            <hr />
        </Link>
    )
}