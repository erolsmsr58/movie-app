import { ReactElement, useState } from "react";
import {
    Box,
    Image,
    Heading,
    Text,
    Stack,
    Badge,
    List
} from "@chakra-ui/react";

import { MovieCardProps } from "../typings/MovieCardProps";

const MovieCard = ({ movie, showFullDetails = true }: MovieCardProps): ReactElement => {
    const [showFullPlot, setShowFullPlot] = useState(false);

    const genres = movie.Genre.split(",").map((genre) => genre.trim());
    const actors = movie.Actors.split(",").map((actor) => actor.trim());

    const isLongPlot = movie.Plot.length > 200;
    const shouldTruncate = showFullDetails && !showFullPlot;
    const displayedPlot = shouldTruncate
        ? movie.Plot.slice(0, 200) + (isLongPlot ? "..." : "")
        : movie.Plot;

    return (
        <Box
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            p={5}
            bg="white"
        >
            <Image
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image-available.png"}
                alt={`${movie.Title} Poster`}
                borderRadius="md"
                width="100%"
                height="auto"
                objectFit="cover"
            />

            <Stack mt={4} gap={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Heading size="md">{movie.Title}</Heading>
                    {showFullDetails && (
                        <Badge colorScheme="purple" textTransform="capitalize">
                            {movie.Type}
                        </Badge>
                    )}
                </Stack>

                <Text fontSize="sm" color="gray.500">
                    Released: {movie.Year} • Rated: {movie.Rated}
                </Text>

                {showFullDetails && (
                    <Text fontSize="sm" color="gray.500">
                        Rated: {movie.Rated}
                    </Text>
                )}

                {showFullDetails && (
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">
                            Genres:
                        </Text>
                        <List.Root gap={1}>
                            {genres.map((genre, index) => (
                                <List.Item key={index} fontSize="sm">
                                    {genre}
                                </List.Item>
                            ))}
                        </List.Root>
                    </Box>
                )}

                {showFullDetails && (
                    <Text fontSize="sm">
                        <strong>Director:</strong> {movie.Director}
                    </Text>
                )}

                {showFullDetails && (
                    <Box>
                        <Text fontSize="sm" fontWeight="bold">
                            Actors:
                        </Text>
                        <List.Root gap={1}>
                            {actors.map((actor, index) => (
                                <List.Item key={index} fontSize="sm">
                                    {actor}
                                </List.Item>
                            ))}
                        </List.Root>
                    </Box>
                )}

                <Box>
                    <Text fontSize="sm">
                        <strong>Plot:</strong> {displayedPlot}
                        {showFullDetails && isLongPlot && (
                            <Box
                                as="button"
                                onClick={() => setShowFullPlot(!showFullPlot)}
                                color="blue.500"
                                fontWeight="semibold"
                                ml={1}
                            >
                                {showFullPlot ? "Show less" : "Read more"}
                            </Box>
                        )}
                    </Text>
                </Box>

                <Text fontSize="sm" fontStyle="italic" color="green.600">
                    <strong>Awards:</strong> {movie.Awards || "N/A"}
                </Text>
            </Stack>
        </Box>
    );
};

export default MovieCard;
