import React, { ReactElement } from "react";
import { Stack, Text, Box } from "@chakra-ui/react";

const MovieDetail = ({ label, value }: {
    label: string;
    value: React.ReactNode;
}): ReactElement => (
    <Stack direction="row" gap={1} align="start">
        <Text as="span" fontWeight="semibold" minW="80px">
            {label}:
        </Text>
        <Box>{value}</Box>
    </Stack>
);

export default MovieDetail;
