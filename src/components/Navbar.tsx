import { Box, Flex, Heading, Image } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Box display={{sm: "none", md: "block"}}>
        <Flex bg="red" align="center" gap="10px">
            <Image src="https://xsgames.co/randomusers/assets/avatars/male/29.jpg" rounded="50%" width="4em" ml="10px" />
            <Heading as="h4" fontSize="1.3em">John Doe</Heading>
        </Flex>
    </Box>
  )
}

export default Navbar;
