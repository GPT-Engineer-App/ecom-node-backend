import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <HStack spacing={4} padding={4}>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/order">
        Order
      </Button>
    </HStack>
  );
}

export default Navigation;
