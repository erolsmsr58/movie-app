import { ReactElement, useEffect, useRef } from "react";
import { Heading, Stack, Input, Box, SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useSearchStore } from "../store";
import debounce from "lodash.debounce";

const Search = (): ReactElement => {
    const { query, results, loading, setQuery, fetchMovies, setResults } = useSearchStore();

    // Ref to keep track of the latest query
    const queryRef = useRef<string>(query);

    const debouncedSearch = debounce(async (searchQuery: string) => {
        if (searchQuery.trim() !== queryRef.current) return;  // Avoid setting results for old queries
        fetchMovies(searchQuery);
    }, 500);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        queryRef.current = newQuery;
        debouncedSearch(newQuery);
    };

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
        }
    }, [query, setResults]);

    return (
        <Stack gap={6}>
            <Heading>Search Movies</Heading>

            <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                <Input
                    placeholder="Search movie title..."
                    value={query}
                    onChange={handleSearchChange}
                />
                {/* <Button colorScheme="teal" loading={loading} disabled={loading}>
                    Search
                </Button> */}
            </Stack>

            {query && loading && (
                <Text>Loading...</Text>
            )}

            <Box>
                <Heading size="md" mb={3}>
                    Search Results
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                    {/* TODO Add the correct typing here instead of `any` */}
                    {results.map((movie: any, index: number) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </SimpleGrid>
            </Box>
        </Stack>
    );
};

export default Search;
