import { Flex, Heading, Image } from '@chakra-ui/react';
import TaskListContainer from './TaskListContainer';

const Navbar = () => {
  return (
    <Flex flexDirection="column" bg="brown" display={{ base: 'none', lg: 'flex' }}>
      <Flex bg="red" align="center" gap="10px" py="10px" mb="4rem">
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F07%2F33%2Fba%2F0733ba760b29378474dea0fdbcb97107.png&f=1&nofb=1&ipt=54cbad561a9c81c9e8b7c5ed4b2c8b7c67768d0aa5d4f38213e9b934e970aacf&ipo=images"
          rounded="50%"
          width="4em"
          ml="10px"
        />
        <Heading as="h4" fontSize="1.3em">
          Nacho
        </Heading>
      </Flex>
      <TaskListContainer />
    </Flex>
  );
};

export default Navbar;
