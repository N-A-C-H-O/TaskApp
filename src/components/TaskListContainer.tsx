import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CreateList, List } from "../types";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./TaskListItem";

const TaskListContainer = () => {
  const [lists, setLists] = useState<List[]>([]);

  const createList: CreateList = () => {
    const newList: List = {
      id: uuidv4(),
      name: "New list",
      totalTasks: 0,
    }

    setLists([...lists, newList]);
  }

  return (
    <Flex flexDirection="column" justify="space-between" bg="green" h="100%">
        <Box bg="yellowgreen" h="100%" maxH="25rem" overflowY="auto">
          {
            lists.map(() => {
              return <ListItem />
            })
          }
        </Box>
        <Button bg="red" w="80%" mb="25px" mx="auto" display="block" onClick={() => createList()}>Create list</Button>
    </Flex>
  )
}

export default TaskListContainer;
