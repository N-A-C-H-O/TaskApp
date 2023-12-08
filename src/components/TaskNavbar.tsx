import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import BackgroundSelector from './BackgroundSelector';
import { useTasksListStore } from '../store/tasksListStore';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const TaskNavbar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEmojiPicker, setIsEmojiPicker] = useState(false);

  const { selected, changeName, changeIcon } = useTasksListStore();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;

    value && changeName(value);
  };

  return (
    <>
      <Flex justify="space-between" align="center" w="85%" mx="auto" mt="20px">
        <Flex width="100%" alignItems="center" gap="20px" py="5px">
          {selected.name === 'Home' ? (
            <>
              <Text fontSize={30}>{selected.icon}</Text>
              <Heading as="h3" fontSize={35} padding={0}>
                {selected.name}
              </Heading>
            </>
          ) : (
            <>
              <Text onClick={() => setIsEmojiPicker(!isEmojiPicker)} fontSize={30} cursor="pointer">
                {selected.icon}
              </Text>
              {isEditing ? (
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
              ) : (
                <Heading as="h3" fontSize={35} padding={0} onClick={() => setIsEditing(true)}>
                  {selected.name}
                </Heading>
              )}
            </>
          )}
        </Flex>
        <BackgroundSelector />
      </Flex>
      {isEmojiPicker && (
        <Box ml="15px">
          <EmojiPicker
            previewConfig={{ showPreview: true }}
            searchDisabled={true}
            onEmojiClick={e => {
              changeIcon(e.emoji);
              setIsEmojiPicker(!isEmojiPicker);
            }}
            height={300}
            width={400}
          />
        </Box>
      )}
    </>
  );
};

export default TaskNavbar;
