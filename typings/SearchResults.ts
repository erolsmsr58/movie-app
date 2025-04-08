import { Movie } from "./Movie";

export interface SearchResults {
    detailedMovies: Movie[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    isDetailsLoading: boolean;
};
