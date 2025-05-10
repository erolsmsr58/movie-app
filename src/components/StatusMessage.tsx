import { Text } from "@chakra-ui/react";
import { type LoadingStatus } from "../../typings/LoadingStatus";

const StatusMessage = ({ status }: { status: LoadingStatus }) => {
    const message = status === "loading"
        ? "Loading movies..."
        : "Error loading movies!";

    return <Text>{message}</Text>;
};

export default StatusMessage;
