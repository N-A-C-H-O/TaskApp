import TaskForm from './TaskForm';
import { useState } from 'react';
import TaskItem from './TaskItem';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react';
import TaskNavbar from './TaskNavbar';
import { useTasksListStore } from '../store/tasksListStore';

const TaskContainer = () => {
  const [background, setBackground] = useState('');

  const { selected } = useTasksListStore();

  const changeBackground = (newBackground: string): void => {
    setBackground(newBackground);
  };

  return (
    <Flex bg={background ? background : '#acafaf'} w={'100%'} flex={{ md: 2, lg: 3, xl: 4, '2xl': 5 }} flexDirection="column" justify="space-between">
      <TaskNavbar changeBackground={changeBackground} />
      <Box my="50px" mx="20px" h="100%" overflowY="auto">
        {selected.tasks
          .filter(task => {
            return !task.isCompleted;
          })
          .map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        {selected.tasks.some(task => {
          return task.isCompleted;
        }) && (
          <>
            <Accordion defaultIndex={[0]} allowMultiple borderColor="transparent">
              <AccordionItem>
                <h2>
                  <AccordionButton bg="#e9edf1" _hover={{ backgroundColor: '#e0e6ef' }}>
                    <AccordionIcon mr="8px" />
                    <Text>Completed</Text>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {selected.tasks
                    .filter(task => {
                      return task.isCompleted;
                    })
                    .map(task => (
                      <TaskItem key={task.id} task={task} />
                    ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </Box>
      <TaskForm />
    </Flex>
  );
};

export default TaskContainer;
