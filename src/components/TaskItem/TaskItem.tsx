import "./TaskItem.css";
import { Task, changeStatus, deleteTask } from "../../types";
import { CloseIcon } from "@chakra-ui/icons"
import { Button, Checkbox, Flex } from "@chakra-ui/react";

const TaskItem = ({ task, deleteTask, changeStatus }: { task: Task, deleteTask: deleteTask, changeStatus: changeStatus }) => {

  const styleCompleted = {
    textDecoration: "line-through",
    color: "blue"
  }

  return (
    <Flex id={task.id} bg="blue.100" justify="space-between" align="center" py="10px" px="15px" m="10px" rounded="7px">
      <Checkbox isChecked={task.isCompleted} onChange={() => changeStatus(task.id)} style={task.isCompleted ? styleCompleted : {}} >{task.name}</Checkbox>
      <Button onClick={() => deleteTask(task.id)} bg="transparent" _hover={{ backgroundColor: "trasnparent" }}>{<CloseIcon />}</Button>
    </Flex>
  )
}

export default TaskItem;
