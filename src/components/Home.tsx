import { Flex } from '@chakra-ui/react';
import TaskContainer from './TaskContainer';
import Sidebar from './Sidebar';

function Home() {
  return (
    <Flex height="100vh">
      <Sidebar />
      <TaskContainer />
    </Flex>
  );
}

export default Home;
