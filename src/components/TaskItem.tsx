import { Task } from '../types';
import { useTasksListStore } from '../store/tasksListStore';
import { IoClose } from 'react-icons/io5';
import { Button, Checkbox, Flex, Icon } from '@chakra-ui/react';
import colors from '../global/colors';

const TaskItem = ({ task }: { task: Task }) => {
  const { deleteTask, changeTaskStatus } = useTasksListStore();

  const styleCompleted = {
    textDecoration: 'line-through',
    color: colors.deep
  };

  return (
    <Flex id={task.id} bg={colors.lighter} justify="space-between" maxW="100%" align="center" py="10px" px="15px" m="10px" rounded="7px">
      <Checkbox
        wordBreak="break-word"
        isChecked={task.isCompleted}
        onChange={() => changeTaskStatus(task.id)}
        style={task.isCompleted ? styleCompleted : {}}
        colorScheme="blue"
        color={colors.deepest}
        sx={{ borderColor: colors.background }}
      >
        {task.name}
      </Checkbox>
      <Button onClick={() => deleteTask(task.id)} bg="transparent" _hover={{ backgroundColor: 'trasnparent' }} _active={{ backgroundColor: 'trasnparent' }}>
        <Icon as={IoClose} fontSize={30} />
      </Button>
    </Flex>
  );
};

export default TaskItem;
