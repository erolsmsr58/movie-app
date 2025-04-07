
import { ReactElement } from "react";
import { Heading, Stack, Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { MockMovie } from "../../tests/MockMovie";

const Featured = (): ReactElement => {
    return (
        <Stack gap={6}>
            <Box>
                <Heading mb={3}>
                    Featured Movies
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    <MovieCard movie={MockMovie} />
                    <MovieCard movie={{ ...MockMovie, title: "Interstellar", year: "2014" }} />
                </SimpleGrid>
            </Box>
        </Stack>
    );
};

export default Featured;
