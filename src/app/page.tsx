
// Lib
import { fetchAllClasses } from '@/lib/trainerApiFetch'

// Components
import WelcomeOverlay from "@/containers/WelcomeOverlay";
import FeaturedClassHero from "@/components/FeaturedClassHero";
import ClassRecommendations from '@/containers/ClassRecommendations';

// Styles
import '@/styles/front-page-style.scss';


export default async function HomePage() {
	const allClasses = await fetchAllClasses();
	
	return (
		<main className='front-page-main'>
			<FeaturedClassHero />

			<h2 className='front-page-main__h2'>Classes for you</h2>
			<ClassRecommendations classes={ allClasses } />
			<WelcomeOverlay />
		</main>
	);
}
