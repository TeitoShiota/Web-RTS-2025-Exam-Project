import Image from "next/image"
import { loadingImage } from '@/assets/loadingImages';

// Styles
import './asset-image-style.scss';

export default function AssetImage({
    asset,
    alt = '',
    additionalClassNames
}: {
    asset: TrainerApiAssetObject,
    alt?: string,
    additionalClassNames?: string
}){
    if ( process.env.NODE_ENV === 'production' ){
        const apiUri = process.env.TRAINER_API_URI || 'https://wu-11-lasse-k-k-trainer-api.onrender.com'
        // Regex to check if asset url is on localhost
        const image_url = ( asset?.url )?.replace( /http:\/\/localhost:4000/, apiUri )

        
        return (
            <Image
                className={`asset-image-base${ additionalClassNames !== undefined ? ` ${ additionalClassNames }` : ''}`}
                alt={ alt }
                src={ 
                image_url
            }
            placeholder={ loadingImage }
            quality={100}
            width={600}
            height={600}
            sizes="100vw"
            />
        )   
    } else {
        return (
            <Image
                className={`asset-image-base${ additionalClassNames !== undefined ? ` ${ additionalClassNames }` : ''}`}
                alt={ alt }
                src={ 
                asset?.url
            }
            placeholder={ loadingImage }
            quality={100}
            width={600}
            height={600}
            sizes="100vw"
            />
        )   
    }
}