import { useQuery } from "@tanstack/react-query";

import { getMovieDetails } from "../services/MovieService";
import { API_CALL_STALE_TIME, FEATURED_MOVIES_IMDB_IDS } from "../../constants";

const FEATURED_IMDB_IDS = FEATURED_MOVIES_IMDB_IDS;

export const useFeaturedMovies = () => {
    const {
        data: featuredMovies,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["featured-movies", FEATURED_IMDB_IDS],
        queryFn: async () => {
            const movies = await Promise.all(
                FEATURED_IMDB_IDS.map((imdbID: string) => getMovieDetails(imdbID))
            );
            return movies;
        },
        staleTime: API_CALL_STALE_TIME
    });

    return {
        featuredMovies,
        isLoading,
        isError,
        error
    };
};
