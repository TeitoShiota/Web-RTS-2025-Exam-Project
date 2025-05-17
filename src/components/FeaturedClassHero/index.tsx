import Link from "next/link";

// Lib
import { fetchSingleAsset } from "@/lib/trainerApiFetch";
import { fetchAllClasses } from '@/lib/trainerApiFetch'

//Components
import AssetImage from "@/components/AssetImage";

import './featured-class-hero-style.scss';

export default async function FeaturedClassHero(){
    
    const allClasses = await fetchAllClasses();
    const featuredClass = await allClasses[ Math.floor(Math.random()*allClasses.length) ]
    
    const featuredClassAsset = await fetchSingleAsset( featuredClass?.assetId );
    return (
        <Link
            href={`/class/${ featuredClass?.id }`}
            className="featured-class-hero"
        >
            <AssetImage asset={ featuredClassAsset } alt={ featuredClass?.className } />
            <h2>{ featuredClass?.className ? featuredClass?.className : null }</h2>
        </Link>
    )
}