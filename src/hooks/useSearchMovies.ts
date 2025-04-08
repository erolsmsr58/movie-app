import { useQuery } from "@tanstack/react-query";

import { searchMovies, getMovieDetails } from "../services/MovieService";
import { useDebounce } from "./useDebounce";
import { Movie } from "../../typings/Movie";
import { SearchResults } from "../../typings/SearchResults";
import { API_DEBOUNCE_DURATION, API_CALL_STALE_TIME } from "../../constants";

export const useSearchMovies = (query: string): SearchResults => {
    const debouncedQuery = useDebounce(query, API_DEBOUNCE_DURATION);

    const {
        data: searchResults,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["movies", debouncedQuery],
        queryFn: () => searchMovies(debouncedQuery),
        enabled: debouncedQuery.length > 0,
        staleTime: API_CALL_STALE_TIME
    });

    const {
        data: detailedMovies,
        isLoading: isDetailsLoading
    } = useQuery({
        queryKey: ["movie-details", searchResults?.map((movie: Movie) => movie.imdbID)],
        queryFn: async () => {
            if (!searchResults) return [];

            const detailedData = await Promise.all(
                searchResults.map((movie: { imdbID: string }) =>
                    getMovieDetails(movie.imdbID)
                )
            );

            return detailedData;
        },
        enabled: !!searchResults && searchResults.length > 0,
        staleTime: API_CALL_STALE_TIME
    });

    return {
        detailedMovies,
        isLoading,
        isError,
        error,
        isDetailsLoading
    };
};
