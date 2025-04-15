import { JSX } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

import MovieCard from "../MovieCard";
import { Movie } from "../../../typings/Movie";
import { SearchResultsProps } from "../../../typings/SearchResultsProps";
import { MAX_SEARCH_RESULTS } from "../../../constants";

const SearchResults = ({ isDetailsLoading, detailedMovies }: SearchResultsProps): JSX.Element => {
    return (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={4}>
            {isDetailsLoading ? (
                <Box>Loading detailed movie info...</Box>
            ) : (
                detailedMovies?.slice(0, MAX_SEARCH_RESULTS).map((movie: Movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} data-testid="movie-card" />
                ))
            )}
        </SimpleGrid>
    );
};

export default SearchResults;
