import { useState, useEffect } from 'react';



/**
 * Custom hook to perform a basic search on a given dataset.
 *
 * @param {Object} params - The parameters for the search.
 * @param { T[] } params.searchData - The dataset to search through.
 * @param {string} [params.searchDataIndexTarget] - The key in the dataset items to search against. Defaults to 'name'.
 *
 * @returns {T[]} return.searchResults - The results of the search.
 * @returns {string} return.searchQuery - The current search query.
 * @returns {Function} return.setSearchQuery - Function to update the search query.
 */
export function useBasicSearch<T>(
    {
        searchData,
        searchDataIndexTarget
    } : {
        searchData: T[] | (TrainerApiTrainerObject | TrainerApiClassObject)[], //NOTE - The dataset to search through | T[] is a generic type that can be any type
        searchDataIndexTarget?: string
    }
) {
    'use client';

    const [searchResults, setSearchResults] = useState<T[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery.length >= 1) {
            const results = searchData.filter(item => {
                if ( item?.className != undefined ){
                    return (item as { [key: string]: unknown })['className']?.toString().toLowerCase().includes(searchQuery.toLowerCase());
                }
                if ( item?.trainerName != undefined ){
                    return (item as { [key: string]: unknown })['trainerName']?.toString().toLowerCase().includes(searchQuery.toLowerCase());
                }
            }) as T[]; //NOTE - The 'as T[]' syntax is a type assertion that tells TypeScript to treat the filtered results as an array of type T
            console.log(results)
            setSearchResults( results );
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return {
        searchResults,
        searchQuery,
        setSearchQuery
    };
}

// Note - Copied from previous project