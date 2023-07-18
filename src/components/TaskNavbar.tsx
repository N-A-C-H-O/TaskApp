import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import BackgroundSelector from "./BackgroundSelector";
import { useTasksListStore } from "../store/tasksListStore";
import { useState } from "react";

const TaskNavbar = ({ changeBackground }: { changeBackground: (newBackground: string) => void }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { selected, changeName } = useTasksListStore();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    value && changeName(value);
  };

  return (
    <Flex justify="space-between" align="center" w="85%" mx="auto" mt="20px">
      <Box width="40%" py="5px">
        {selected.name === "Home" ? (
          <Heading as="h3" fontSize={35} padding={0}>
            {selected.name}
          </Heading>
        ) : isEditing ? (
          <>
            <Input
              onChange={handleChange}
              maxLength={25}
              onBlur={() => setIsEditing(false)}
              width="100%"
              placeholder={selected.name}
              color="white"
              border="none"
              fontSize={35}
              focusBorderColor="transparent"
              fontWeight="bold"
              padding={0}
            />
          </>
        ) : (
          <Heading as="h3" fontSize={35} padding={0} onClick={() => setIsEditing(true)}>
            {selected.name}
          </Heading>
        )}
      </Box>
      <BackgroundSelector changeBackground={changeBackground} />
    </Flex>
  );
};

export default TaskNavbar;
