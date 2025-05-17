import Link from "next/link";

// Styles
import './search-card.scss'
import AssetImage from "../AssetImage";

export default function SearchResultCard({
    searchResult,
} : {
    searchResult:  TrainerApiClassObject & TrainerApiTrainerObject ;
}){

    
    const name = (searchResult?.className ? searchResult?.className : searchResult?.trainerName);

    const asset = ( searchResult?.asset )

    return (
            <Link
                href={
                    searchResult?.className && `/class/${ searchResult?.id }` ||
                    searchResult?.trainerName && `/trainer/${ searchResult?.id }`
                }
                className="search-card"
            >
                <AssetImage
                    additionalClassNames="search-card__image"
                    alt={`Picture of dans practice for the ${ name } team.`}
                    asset={ asset }
                /> 
                <div className="search-card__image__content">
                    <p>
                        {
                                searchResult?.className && 'Class' ||
                                searchResult?.trainerName && 'Trainer'
                        }
                    </p>
                    <hr />
                    <h3>
                        {
                            name
                        }
                    </h3>
                </div>

            </Link>
    )
}