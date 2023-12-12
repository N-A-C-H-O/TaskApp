import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IoAdd } from 'react-icons/io5';
import { Box, Button, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { useTasksListStore } from '../store/tasksListStore';
import colors from '../global/colors';

const TaskForm = () => {
  const [inputValue, setInputValue] = useState('');

  const { addTask } = useTasksListStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue('');
      addTask({ id: uuidv4(), name: inputValue, isCompleted: false });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} bg={colors.lightest} p="7px" mb={{ base: 8, md: 12, lg: 14 }} mx={{ base: 5, md: 12, lg: 14 }} rounded="7px">
      <InputGroup>
        <InputLeftElement>
          {
            <Button type="submit" bg="transparent" _hover={{ backgroundColor: 'tranparent' }} _focus={{ backgroundColor: 'transparent' }}>
              <Icon as={IoAdd} color={colors.deepest} fontSize={25} />
            </Button>
          }
        </InputLeftElement>
        <Input
          type="text"
          color={colors.deepest}
          value={inputValue}
          maxLength={90}
          border="none"
          focusBorderColor="transparent"
          autoComplete="off"
          id="newTask"
          name="task"
          placeholder="Add task"
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
};

export default TaskForm;
