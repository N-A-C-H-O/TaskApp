import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoList } from "react-icons/io5";

const TaskListItem = () => {
  return (
    <Box bg="yellow" mb="20px" p="8px" cursor="pointer">
      <Flex align="center" gap="10px">
        <Icon as={IoList} fontSize={20}></Icon>
        <Text>Test</Text>
      </Flex>
    </Box>
  );
};

export default TaskListItem;
