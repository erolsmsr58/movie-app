import { useQuery } from "@tanstack/react-query";

import { getMovieDetails } from "../services/MovieService";
import { Movie } from "../typings/Movie";
import { API_CALL_STALE_TIME } from "../constants";

const FEATURED_IMDB_IDS = ["tt0816692", "tt0104431"];

export const useFeaturedMovies = () => {
    return useQuery<Movie[]>({
        queryKey: ["featured-movies"],
        queryFn: async () => {
            const movies = await Promise.all(
                FEATURED_IMDB_IDS.map((id) => getMovieDetails(id))
            );

            return movies;
        },
        staleTime: API_CALL_STALE_TIME
    });
};
