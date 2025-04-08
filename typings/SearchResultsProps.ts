import { Movie } from "../typings/Movie";

export type SearchResultsProps = {
    isDetailsLoading: boolean,
    detailedMovies: Movie[] | undefined
};
