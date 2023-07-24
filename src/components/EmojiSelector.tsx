import { Box } from "@chakra-ui/react";
import EmojiPicker from "emoji-picker-react";

const EmojiSelector = ({
  setInputEmoji,
  setIsEmojiPicker,
  isEmojiPicker,
}: {
  setInputEmoji: React.Dispatch<React.SetStateAction<string>>;
  setIsEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>;
  isEmojiPicker: boolean;
}) => {
  return (
    <Box position="absolute" display="flex" justifyContent="center" alignItems="center" ml="5px">
      <EmojiPicker
        previewConfig={{ showPreview: true }}
        searchDisabled={true}
        onEmojiClick={(e) => {
          setInputEmoji(e.emoji);
          setIsEmojiPicker(!isEmojiPicker);
        }}
        height={300}
        width={400}
      />
    </Box>
  );
};

export default EmojiSelector;
