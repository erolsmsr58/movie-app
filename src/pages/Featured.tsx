import { ReactElement } from "react";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import MovieCard from "../components/MovieCard";
import { useFeaturedMovies } from "../hooks/useFeaturedMovies";

const Featured = (): ReactElement => {
    const { data: featuredMovies, isLoading, isError } = useFeaturedMovies();

    return (
        <Stack gap={6}>
            <Heading>Featured Movies</Heading>

            {isLoading ? (
                <Text>Loading...</Text>
            ) : isError ? (
                <Text>Error loading featured movies</Text>
            ) : (
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    {featuredMovies?.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} showFullDetails={false} />
                    ))}
                </SimpleGrid>
            )}
        </Stack>
    );
};

export default Featured;
