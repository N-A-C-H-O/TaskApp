import { Flex, Heading, Image } from "@chakra-ui/react"
import ListContainer from "./ListContainer";

const Navbar = () => {
  return (
    <Flex flexDirection="column" bg="brown" display={{sm: "none", md: "flex"}}>
        <Flex bg="red" align="center" gap="10px" py="10px" mb="4rem">
            <Image src="https://xsgames.co/randomusers/assets/avatars/male/29.jpg" rounded="50%" width="4em" ml="10px" />
            <Heading as="h4" fontSize="1.3em">John Doe</Heading>
        </Flex>
        <ListContainer />
    </Flex>
  )
}

export default Navbar;
