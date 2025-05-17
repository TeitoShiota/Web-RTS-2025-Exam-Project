import ClassCard from "@/components/ClassCard"

import './class-recommendations-style.scss';

export default function ClassRecommendations({
    classes
} : {
    classes: TrainerApiClassObject[]
}){
    return (
        <section className="class-recommendations-container">
            {
                classes?.map(( item ) => {
                    return (
                        <ClassCard classInfo={ item } key={ item.id }/>
                    )
                })
            }
        </section>
    )
}