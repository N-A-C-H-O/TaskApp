import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { CreateList, List } from "../types";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";

const ListContainer = () => {
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
    <Box>
        {
          lists.map(() => {
            return <ListItem />
          })
        }
        <Button bg="red" w="80%" mx="auto" display="block" onClick={() => createList()}>Create list</Button>
    </Box>
  )
}

export default ListContainer;
