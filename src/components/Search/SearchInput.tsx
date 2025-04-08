import { ReactElement } from "react";
import { Input, Stack } from "@chakra-ui/react";

import { SearchInputProps } from "../../../typings/SearchInputProps";

const SearchInput = ({ query, setQuery }: SearchInputProps): ReactElement => {
    return (
        <Stack direction={{ base: "column", sm: "row" }} gap={3}>
            <Input
                id="search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search movie title..."
                aria-label="Movie title"
                role="searchbox"
            />
        </Stack>
    );
};

export default SearchInput;
