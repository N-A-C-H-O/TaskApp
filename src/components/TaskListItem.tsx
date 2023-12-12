import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa6';
import { TaskList } from '../types';
import { useTasksListStore } from '../store/tasksListStore';
import colors from '../global/colors';

const TaskListItem = ({ taskList }: { taskList: TaskList }) => {
  const { selectOne, deleteOne } = useTasksListStore();

  return (
    <>
      <Flex align="center" my={5} justify="space-between" bg={colors.lightest} mb="20px" p={3} cursor="pointer" onClick={() => selectOne(taskList.id)}>
        <Flex align="center" gap="10px">
          <Text fontSize={20}>{taskList.icon}</Text>
          <Text color={colors.deepest} fontWeight="bold">
            {taskList.name}
          </Text>
        </Flex>
        <Flex align="center" gap="15px">
          <Text>{taskList.totalTasks}</Text>
          {taskList.name !== 'Home' && (
            <Icon
              onClick={e => {
                deleteOne(taskList.id);
                e.stopPropagation();
              }}
              as={FaTrash}
              fontSize={18}
              color={colors.deepest}
            ></Icon>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default TaskListItem;
