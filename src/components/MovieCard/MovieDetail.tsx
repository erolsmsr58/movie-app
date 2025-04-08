import { ReactElement } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";
import { MovieDetailProps } from "../../../typings/MovieDetailProps";

const MovieDetail = ({ label, value }: MovieDetailProps): ReactElement => (
    <Stack direction="row" gap={1} align="start">
        <Text as="span" fontWeight="semibold" minW="80px">
            {label}:
        </Text>
        <Box>{value}</Box>
    </Stack>
);

export default MovieDetail;
