import { Movie } from "./Movie";

export type SearchResults = {
    detailedMovies: Movie[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    isDetailsLoading: boolean;
};
