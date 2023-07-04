import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoAdd } from "react-icons/io5";
import { Box, Button, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { useTasksListStore } from "../store/tasksListStore";

const TaskForm = () => {
  const [inputValue, setInputValue] = useState("");

  const { addTask } = useTasksListStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue("");
      addTask({ id: uuidv4(), name: inputValue, isCompleted: false });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg="#e9edf1" p="7px" mb="55px" mx="50px" rounded="7px">
      <InputGroup>
        <InputLeftElement>
          <Button type="submit" bg="transparent" _hover={{ backgroundColor: "tranparent" }} _focus={{ backgroundColor: "transparent" }}>
            <Icon as={IoAdd} fontSize={25} />
          </Button>
        </InputLeftElement>
        <Input type="text" value={inputValue} maxLength={90} border="none" focusBorderColor="transparent" autoComplete="off" id="newTask" name="task" placeholder="Add task" onChange={handleChange} />
      </InputGroup>
    </Box>
  );
};

export default TaskForm;
