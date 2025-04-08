import { ReactElement } from "react";
import { Heading, Stack, Input, Box, Text } from "@chakra-ui/react";

import SearchResults from "../components/SearchResults";
import { useSearchStore } from "../store";
import { useSearchMovies } from "../hooks/useSearchMovies";

const Search = (): ReactElement => {
    const { query, setQuery } = useSearchStore();
    const { detailedMovies, isLoading, isError, isDetailsLoading } = useSearchMovies(query);

    return (
        <Stack gap={6}>
            <Heading>Search Movies</Heading>
            <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search movie title..."
                />
            </Stack>

            <Box>
                <Heading size="md" mb={3}>
                    Search Results
                </Heading>

                {isLoading
                    ? <Text>Loading...</Text>
                    : isError
                        ? <Text>Error loading featured movies</Text>
                        : <SearchResults isDetailsLoading={isDetailsLoading} detailedMovies={detailedMovies} />
                }
            </Box>
        </Stack>
    );
};

export default Search;
