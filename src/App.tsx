import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    SimpleGrid,
    Stack,
    Separator
} from "@chakra-ui/react";
import MovieCard from "./components/MovieCard";
import { MockMovie } from "../tests/MockMovie";

const App = () => {
    return (
        <Container maxW="6xl" py={10}>
            <Stack gap={10}>
                <Heading>Movie App</Heading>

                {/* Search */}
                <Stack direction={{ base: "column", sm: "row" }} gap={3}>
                    <Input placeholder="Search movie title..." />
                    <Button colorScheme="teal">Search</Button>
                </Stack>

                {/* Search Results */}
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

                <Separator />

                {/* Featured Section */}
                <Box>
                    <Heading size="md" mb={3}>
                        Featured Movies
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                        <MovieCard movie={MockMovie} />
                        <MovieCard movie={{ ...MockMovie, title: "Interstellar", year: "2014" }} />
                    </SimpleGrid>
                </Box>
            </Stack>
        </Container>
    );
};

export default App;
