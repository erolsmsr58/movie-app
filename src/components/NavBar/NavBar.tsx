import { ReactElement } from "react";
import { HStack } from "@chakra-ui/react";

import NavLinkButton from "./NavLinkButton";

const NavBar = (): ReactElement => (
  <HStack gap={4} mb={6}>
    <NavLinkButton to="/">Search</NavLinkButton>
    <NavLinkButton to="/featured">Featured</NavLinkButton>
  </HStack>
);

export default NavBar;
