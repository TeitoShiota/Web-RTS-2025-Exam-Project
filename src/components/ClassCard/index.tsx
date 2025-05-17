import Link from "next/link";
import AssetImage from "../AssetImage";

// Styles
import './class-card-style.scss';

export default function ClassCard({
    classInfo
} : {
    classInfo: TrainerApiClassObject;
}){
    return (
        <Link 
            className="class-card"
            href={ `/class/${ classInfo?.id }` }
        >
            <AssetImage
                asset={ classInfo?.asset }
                alt={ `Picture of ${classInfo?.className}` }
                additionalClassNames="class-card__image"
            />
            <p className="class-card__heading">{ classInfo?.className }</p>
        </Link>
    )
}