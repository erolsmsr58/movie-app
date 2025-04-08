import { ReactElement } from "react";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import MovieCard from "../components/MovieCard/MovieCard";
import { useFeaturedMovies } from "../hooks/useFeaturedMovies";
import { Movie } from "../../typings/Movie";

const Featured = (): ReactElement => {
    const { featuredMovies, isLoading, isError } = useFeaturedMovies();

    return (
        <Stack gap={6}>
            <Heading>Featured Movies</Heading>

            {isLoading ? (
                <Text>Loading...</Text>
            ) : isError ? (
                <Text>Error loading featured movies</Text>
            ) : (
                featuredMovies && (
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                        {featuredMovies.map((movie: Movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} showFullDetails={false} />
                        ))}
                    </SimpleGrid>
                )
            )}
        </Stack>
    );
};

export default Featured;
