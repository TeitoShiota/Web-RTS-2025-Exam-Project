'use client';

//components
import SearchCard from '@/components/SearchCard';
import SearchPageSuggestions from '../SearchPageSuggestions';
import { LuSearch, LuSearchX  } from "react-icons/lu";


// Hooks
import { useBasicSearch } from '@/hooks/useBasicSearch';

// Styles
import './search-container-style.scss';


export default function SearchContainer(
    {
        classesData,
        trainersData
    } : {
        classesData: TrainerApiClassObject[]
        trainersData : TrainerApiTrainerObject[]
    }
) {
    const searchData = [ ...classesData, ...trainersData ]

    const { searchResults, searchQuery, setSearchQuery } = useBasicSearch({
        searchData: searchData,
    });


    return (
        <>
            <div className='search-page-main__search-field'>
            {
                    searchQuery?.length > 0 ? (
                        <LuSearchX
                            className='search-page-main__search-field__icon'
                            onClick={() => setSearchQuery('')}
                        />
                    ) : 
                    <LuSearch className='search-page-main__search-field__icon' />
                }
                <input
                    type="search"
                    value={ searchQuery }
                    placeholder='Search classes'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='search-page-main__search-field__input'
                    
                />
            </div>
            <section
                className='search-page-main__search-results'
            >
                {
                    searchResults?.length > 0 ? (
                        <>
                            {searchResults.map((item, index) => (
                                <SearchCard
                                    key={index}
                                    searchResult={ item }
                                />
                            ))}
                        </>
                    ) : (
                        <p>
                            Your search did not give any results. Try to search for something else
                        </p>
                    )
                }
                
            </section>
        </>
    )
}