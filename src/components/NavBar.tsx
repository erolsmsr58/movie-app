import { HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack gap={4} mb={6}>
      {/*
        It is possible you see an error on the `to` prop on both Button components in this file on VSCode. The
        reason for this is TypeScript not correctly picking up the correct typings, as typings from Chakra
        and React Router DOM are colliding. This is common when combining Chakra with React Router DOM.
        The code does compile and run perfectly because we are properly passing as={RouterLink}, which is
        still rendering a Link component underneath.
      */}
      <Button as={RouterLink} to="/" variant="solid">
        Search
      </Button>
      <Button as={RouterLink} to="/featured" variant="solid">
        Featured
      </Button>
    </HStack>
  );
};

export default NavBar;
