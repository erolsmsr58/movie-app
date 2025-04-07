import { Box, Stack, Heading, List, Image, Text } from "@chakra-ui/react";
import MovieDetail from "./MovieDetail";
import { MockMovie } from "../../tests/MockMovie";

const MovieCard = ({ movie }: { movie: typeof MockMovie }) => (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Box display="flex" justifyContent="center" mb={4}>
            <Image
                src={movie.poster}
                alt={`Poster of ${movie.title}`}
                objectFit="contain"
                maxH="400px"
                borderRadius="md"
            />
        </Box>
        <Stack gap={3}>
            <Heading size="md">
                {movie.title}
                <Text as="span" fontSize="sm" color="gray.500">
                    ({movie.released})
                </Text>
            </Heading>

            <MovieDetail label="Type" value={movie.type} />
            <MovieDetail label="Year" value={movie.year} />
            <MovieDetail label="Rated" value={movie.rated} />

            <MovieDetail
                label="Genre"
                value={
                    <List.Root pl={4}>
                        {movie.genre.map((g, i) => (
                            <List.Item key={i}>{g}</List.Item>
                        ))}
                    </List.Root>
                }
            />

            <MovieDetail label="Director" value={movie.director} />

            <MovieDetail
                label="Actors"
                value={
                    <List.Root pl={4}>
                        {movie.actors.map((actor, i) => (
                            <List.Item key={i}>{actor}</List.Item>
                        ))}
                    </List.Root>
                }
            />

            <MovieDetail label="Plot" value={movie.plot} />
            <MovieDetail label="Awards" value={movie.awards} />
        </Stack>
    </Box>
);

export default MovieCard;
