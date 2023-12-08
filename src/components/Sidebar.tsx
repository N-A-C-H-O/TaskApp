import { Flex, Heading } from '@chakra-ui/react';
import TaskListContainer from './TaskListContainer';

const Sidebar = () => {
  return (
    <Flex flexDirection="column" bg="brown" display={{ base: 'none', md: 'flex' }} flex={1} w={'100%'}>
      <Heading as="h4" fontSize="2em" py={5} textAlign={'center'}>
        Tasks
      </Heading>
      <TaskListContainer />
    </Flex>
  );
};

export default Sidebar;
