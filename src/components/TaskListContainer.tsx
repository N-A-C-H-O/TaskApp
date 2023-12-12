import { Box, Button, Flex } from '@chakra-ui/react';
import { TaskList } from '../types';
import { useTasksListStore } from '../store/tasksListStore';
import { v4 as uuidv4 } from 'uuid';
import TaskListItem from './TaskListItem';
import colors from '../global/colors';

const TaskListContainer = () => {
  const { items, createOne } = useTasksListStore();

  const createList = (): void => {
    const newList: TaskList = {
      id: uuidv4(),
      name: 'New list',
      icon: '📝',
      totalTasks: 0,
      tasks: []
    };

    createOne(newList);
  };

  return (
    <Flex flexDirection="column" justify="space-between" bg={colors.lighter} h="100%">
      <Box h="100%" maxH="25rem" overflowY="auto">
        {items.map(item => {
          return <TaskListItem key={item.id} taskList={item} />;
        })}
      </Box>
      <Button bg={colors.background} color={colors.lightest} transitionDuration="0.3s" w="80%" _hover={{ bg: colors.deep }} mb="25px" mx="auto" display="block" onClick={() => createList()}>
        Create list
      </Button>
    </Flex>
  );
};

export default TaskListContainer;
