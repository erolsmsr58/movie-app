import { ReactElement } from "react";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

type NavLinkButtonProps = Omit<ChakraLinkProps, "as" | "href"> & RouterLinkProps;

const NavLinkButton = (props: NavLinkButtonProps): ReactElement => {
    return (
        <ChakraLink
            as={RouterLink}
            px={4}
            py={2}
            rounded="md"
            bg="blue.500"
            color="white"
            _hover={{ bg: "blue.600" }}
            {...props}
        />
    );
};

export default NavLinkButton;
