import { Flex, Heading } from '@chakra-ui/react';
import TaskListContainer from './TaskListContainer';
import colors from '../global/colors';

const Sidebar = () => {
  return (
    <Flex flexDirection="column" bg={colors.background} display={{ base: 'none', md: 'flex' }} flex={1} w={'100%'}>
      <Heading as="h4" color={colors.lightest} fontSize="2em" py={10} textAlign={'center'}>
        Tasks
      </Heading>
      <TaskListContainer />
    </Flex>
  );
};

export default Sidebar;
