import { Text } from "@chakra-ui/react";

const SearchStatusMessage = ({ status }: { status: "loading" | "error" }) => {
    const message = status === "loading"
        ? "Loading..."
        : "Error loading movies";

    return <Text>{message}</Text>;
};

export default SearchStatusMessage;
