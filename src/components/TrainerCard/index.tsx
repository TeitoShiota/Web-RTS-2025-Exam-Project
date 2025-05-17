import Link from "next/link";

import { fetchSingleAsset } from "@/lib/trainerApiFetch"


import AssetImage from "../AssetImage"


// Styles
import './trainer-card.scss';

export default async function TrainerCard({
    trainer
} : {
    trainer : TrainerApiTrainerObjectSimple
}) {

    const trainerAsset = ( await fetchSingleAsset( trainer?.assetId ))

    return (
        <Link
            href={`/trainer/${trainer?.id}`}
            className="trainer-card"
        >
            <AssetImage
                asset={ trainerAsset }
                alt={`Picture of trainer ${ trainer?.trainerName }`}
                additionalClassNames="trainer-card__image"
            />
            <h3 className="trainer-card__name">{ trainer?.trainerName }</h3>
        </Link>
    )
}