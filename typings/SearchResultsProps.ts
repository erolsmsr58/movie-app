import { Movie } from "../typings/Movie";

export interface SearchResultsProps {
    isDetailsLoading: boolean,
    detailedMovies: Movie[] | undefined
};
