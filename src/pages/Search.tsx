import { ReactElement } from "react";
import { Heading, Stack, Box } from "@chakra-ui/react";

import SearchInput from "../components/Search/SearchInput";
import SearchResults from "../components/Search/SearchResults";
import SearchStatusMessage from "../components/Search/SearchStatusMessage";
import { useSearchStore } from "../store";
import { useSearchMovies } from "../hooks/useSearchMovies";

const Search = (): ReactElement => {
    const { query, setQuery } = useSearchStore();
    const { detailedMovies, isLoading, isError, isDetailsLoading } = useSearchMovies(query);

    return (
        <Stack gap={6}>
            <Heading>Search Movies</Heading>

            <SearchInput query={query} setQuery={setQuery} />

            <Box>
                <Heading size="md" mb={3}>
                    Search Results
                </Heading>

                {isLoading || isError ? (
                    <SearchStatusMessage status={isLoading ? "loading" : "error"} />
                ) : (
                    <SearchResults isDetailsLoading={isDetailsLoading} detailedMovies={detailedMovies} />
                )}
            </Box>
        </Stack>
    );
};

export default Search;
