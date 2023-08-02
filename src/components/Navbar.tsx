import { Flex, Heading, Image } from "@chakra-ui/react"
import TaskListContainer from "./TaskListContainer";
import { useCurrentUserStore } from "../store/currentUserStore";

const Navbar = () => {

  const { currentUser } = useCurrentUserStore();

  return (
    <Flex flexDirection="column" bg="brown" display={{sm: "none", md: "flex"}}>
        <Flex bg="red" align="center" gap="10px" py="10px" mb="4rem">
            <Image src={currentUser?.profilePhoto} rounded="50%" width="4em" ml="10px" />
            <Heading as="h4" fontSize="1.3em">{currentUser?.name}</Heading>
        </Flex>
        <TaskListContainer />
    </Flex>
  )
}

export default Navbar;
