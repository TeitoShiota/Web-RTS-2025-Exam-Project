import { getSessionFromCookies } from "@/actions/cookie-actions"
import { getUser } from "@/actions/user-actions"
import ScheduleCard from "@/components/ScheduleCard";
import { randomUUID } from "crypto";

import './schedule-page-style.scss';

export default async function SchedulePage(){

    const session = await getSessionFromCookies();
    const usersClasses = (await getUser( session?.userId as number | string, session?.token as string))?.classes

    return(
        <main className="schedule-page-main">
            <h2>My Schedule</h2>
            {
                usersClasses?.map( (classItem) => {
                    return (
                        <ScheduleCard classInfo={ classItem } key={ randomUUID() }/>
                    )
                })
            }
        </main>
    )
}