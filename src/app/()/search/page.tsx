import SearchContainer from "@/containers/SearchContainer"

// Lib
import { fetchAllClasses, fetchAllTrainers } from "@/lib/trainerApiFetch";

// Styles
import './search-page-style.scss';

export default async function SearchPage(){

    const classes = await fetchAllClasses();
    const trainers = await fetchAllTrainers();

    return(
        <main className="search-page-main">
            <h2>Search</h2>
            <SearchContainer classesData={ classes } trainersData={ trainers } />
        </main>
    )
}