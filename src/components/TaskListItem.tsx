import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoList } from "react-icons/io5";
import { TaskList } from "../types";
import { useTasksListStore } from "../store/tasksListStore";

const TaskListItem = ({taskList}: {taskList: TaskList}) => {

  const { selectOne } = useTasksListStore();

  return (
    <Box bg="yellow" mb="20px" p="8px" cursor="pointer" onClick={() => selectOne(taskList.id)}>
      <Flex align="center" gap="10px">
        <Icon as={IoList} fontSize={20}></Icon>
        <Text>{taskList.name}</Text>
      </Flex>
    </Box>
  );
};

export default TaskListItem;
