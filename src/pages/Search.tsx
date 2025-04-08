import { ReactElement } from "react";
import { Heading, Stack, Input, Box, SimpleGrid, Text } from "@chakra-ui/react";

import { useSearchStore } from "../store";
import { useSearchMovies } from "../hooks/useSearchMovies";
import MovieCard from "../components/MovieCard";
import { Movie } from "../typings/Movie";

const Search = (): ReactElement => {
    const { query, setQuery } = useSearchStore();
    const { detailedMovies, isLoading, isError, isDetailsLoading } = useSearchMovies(query);

    return (
        <Stack gap={6}>
            <Heading>Search Movies</Heading>
            <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movie title..."
                />
            </Stack>

            <Box>
                <Heading size="md" mb={3}>
                    Search Results
                </Heading>

                {isLoading ? (
                    <Text>Loading...</Text>
                ) : isError ? (
                    <Text>Error loading featured movies</Text>
                ) : (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                        {isDetailsLoading ? (
                            <Box>Loading detailed movie info...</Box>
                        ) : (
                            detailedMovies?.slice(0, 5).map((movie: Movie) => (
                                <MovieCard key={movie.imdbID} movie={movie} />
                            ))
                        )}
                    </SimpleGrid>
                )}
            </Box>
        </Stack>
    );
};

export default Search;
