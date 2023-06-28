import { Flex, Heading, Image } from "@chakra-ui/react"
import ListContainer from "./ListContainer";

const Navbar = () => {
  return (
    <Flex flexDirection="column" justify="space-between" display={{sm: "none", md: "flex"}} my="10px">
        <Flex bg="red" align="center" gap="10px">
            <Image src="https://xsgames.co/randomusers/assets/avatars/male/29.jpg" rounded="50%" width="4em" ml="10px" />
            <Heading as="h4" fontSize="1.3em">John Doe</Heading>
        </Flex>
        <ListContainer />
    </Flex>
  )
}

export default Navbar;
