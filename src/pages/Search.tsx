import { ReactElement } from "react";
import { Heading, Stack, Input, Button, Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { MockMovie } from "../../tests/MockMovie";

const Search = (): ReactElement => {
    return (
        <Stack gap={6}>
            <Heading>Search Movies</Heading>

            <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                <Input placeholder="Search movie title..." />
                <Button colorScheme="teal">Search</Button>
            </Stack>

            <Box>
                <Heading size="md" mb={3}>
                    Search Results
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                    <MovieCard movie={MockMovie} />
                    <MovieCard movie={{ ...MockMovie, title: "The Matrix", year: "1999" }} />
                    <MovieCard movie={{ ...MockMovie, title: "Tenet", year: "2020" }} />
                    <MovieCard movie={{ ...MockMovie, title: "Avatar", year: "2009" }} />
                    <MovieCard movie={{ ...MockMovie, title: "Joker", year: "2019" }} />
                </SimpleGrid>
            </Box>
        </Stack>
    );
};

export default Search;
