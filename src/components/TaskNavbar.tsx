import { Flex, Heading } from "@chakra-ui/react";
import BackgroundSelector from "./BackgroundSelector";
import { ChangeBackground } from "../types";

const TaskNavbar = ({ changeBackground }: { changeBackground: ChangeBackground }) => {
  return (
    <Flex bg="red" justify="space-between" align="center" w="85%" mx="auto" mt="20px">
      <Heading as="h3">Task title</Heading>
      <BackgroundSelector changeBackground={changeBackground} />
    </Flex>
  );
};

export default TaskNavbar;
