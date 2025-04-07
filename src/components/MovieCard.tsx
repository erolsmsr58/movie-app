import { Box, Stack, Heading, Image, Text } from "@chakra-ui/react";
import MovieDetail from "./MovieDetail";

// TODO Fix the any here and replace with Movie typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MovieCard = ({ movie }: { movie: any }) => (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Box display="flex" justifyContent="center" mb={4}>
            <Image
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                alt={`Poster of ${movie.Title}`}
                objectFit="contain"
                maxH="400px"
                borderRadius="md"
            />
        </Box>
        <Stack gap={3}>
            <Heading size="md">
                {movie.Title}
                <Text as="span" fontSize="sm" color="gray.500">
                    ({movie.Year})
                </Text>
            </Heading>

            <MovieDetail label="Type" value={movie.Type} />
            <MovieDetail label="Year" value={movie.Year} />
            <MovieDetail label="Rated" value={movie.Rated || "N/A"} />
        </Stack>
    </Box>
);

export default MovieCard;
