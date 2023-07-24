import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { TaskList } from "../types";
import { useTasksListStore } from "../store/tasksListStore";
import { useState } from "react";
import EmojiSelector from "./EmojiSelector";

const TaskListItem = ({ taskList }: { taskList: TaskList }) => {
  const [isEmojiPicker, setIsEmojiPicker] = useState(false);
  const [inputEmoji, setInputEmoji] = useState("📝");

  const { selectOne, deleteOne } = useTasksListStore();

  return (
    <>
      <Flex align="center" justify="space-between" bg="yellow" mb="20px" p="8px" cursor="pointer" onClick={() => selectOne(taskList.id)}>
        <Flex align="center" gap="10px">
          <Text onClick={() => setIsEmojiPicker(!isEmojiPicker)} fontSize={20}>
            {inputEmoji}
          </Text>
          <Text>{taskList.name}</Text>
        </Flex>
        <Flex align="center" gap="10px">
          <Text>{taskList.totalTasks}</Text>
          {taskList.name !== "Home" && (
            <Icon
              onClick={(e) => {
                deleteOne(taskList.id);
                e.stopPropagation();
              }}
              as={IoClose}
              fontSize={20}
            ></Icon>
          )}
        </Flex>
      </Flex>
      {isEmojiPicker && <EmojiSelector setInputEmoji={setInputEmoji} isEmojiPicker={isEmojiPicker} setIsEmojiPicker={setIsEmojiPicker} />}
    </>
  );
};

export default TaskListItem;
