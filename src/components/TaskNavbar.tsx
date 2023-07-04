import { Flex, Heading } from "@chakra-ui/react";
import BackgroundSelector from "./BackgroundSelector";
import { useTasksListStore } from "../store/tasksListStore";

const TaskNavbar = ({ changeBackground }: { changeBackground: (newBackground: string) => void }) => {

  const { selected } = useTasksListStore();

  return (
    <Flex justify="space-between" align="center" w="85%" mx="auto" mt="20px">
      <Heading as="h3">{selected.name}</Heading>
      <BackgroundSelector changeBackground={changeBackground} />
    </Flex>
  );
};

export default TaskNavbar;
