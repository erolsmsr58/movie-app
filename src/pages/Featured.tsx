import { JSX } from "react";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import MovieCard from "../components/MovieCard";
import StatusMessage from "../components/StatusMessage";
import { useFeaturedMovies } from "../hooks/useFeaturedMovies";
import { Movie } from "../../typings/Movie";

const Featured = (): JSX.Element => {
    const { featuredMovies, isLoading, isError } = useFeaturedMovies();

    return (
        <Stack gap={6}>
            <Heading>Featured Movies</Heading>

            {isLoading || isError ? (
                <StatusMessage status={isLoading ? "loading" : "error"} />
            ) : featuredMovies && (
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                    {featuredMovies.map((movie: Movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            showFullDetails={false}
                            data-testid="movie-card"
                        />
                    ))}
                </SimpleGrid>
            )}
        </Stack>
    );
};

export default Featured;
