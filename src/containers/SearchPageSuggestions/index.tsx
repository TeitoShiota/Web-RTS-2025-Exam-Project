'use client'

import ClassCard from "@/components/ClassCard"
import TrainerCard from "@/components/TrainerCard"

export default function SearchPageSuggestions(
    {
        classesData,
        trainersData
    } : {
        classesData: TrainerApiClassObject[]
        trainersData : TrainerApiTrainerObject[]
    }
) {
    return (
        <>
            <h3>Popular Classes</h3>
            <section>
                {
                    classesData !== undefined ? (
                        classesData?.map( ( classItem ) => {
                            return (
                                <ClassCard classInfo={ classItem } key={`classcard-${ classItem?.id }`}/>
                            )
                        } )
                    ) : (
                        null
                    )
                }
            </section>

            <h3>Popular Trainers</h3>
            <section>
                {
                    trainersData !== undefined ? (
                        trainersData?.map( ( trainer ) => {
                            return (
                                <TrainerCard trainer={ trainer } key={`classcard-${ trainer?.id }`}/>
                            )
                        } )
                    ) : (
                        null
                    )
                }
            </section>
        </>
    )
}