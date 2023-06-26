import { Task, ChangeStatus, DeleteTask } from "../types";
import { IoClose } from "react-icons/io5";
import { Button, Checkbox, Flex, Icon } from "@chakra-ui/react";

const TaskItem = ({ task, deleteTask, changeStatus }: { task: Task; deleteTask: DeleteTask; changeStatus: ChangeStatus }) => {
  const styleCompleted = {
    textDecoration: "line-through",
    color: "#adb0b3",
  };

  return (
    <Flex id={task.id} bg="#e9edf1" justify="space-between" maxW="100%" align="center" py="10px" px="15px" m="10px" rounded="7px">
      <Checkbox
        wordBreak="break-word"
        isChecked={task.isCompleted}
        onChange={() => changeStatus(task.id)}
        style={task.isCompleted ? styleCompleted : {}}
        colorScheme="green"
        sx={{ borderColor: "#a9abad" }}
      >
        {task.name}
      </Checkbox>
      <Button onClick={() => deleteTask(task.id)} color="#7a7c7f" bg="transparent" _hover={{ backgroundColor: "trasnparent" }} _active={{ backgroundColor: "trasnparent" }}>
        <Icon as={IoClose} fontSize={30} />
      </Button>
    </Flex>
  );
};

export default TaskItem;
