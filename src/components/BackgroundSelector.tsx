import { HiDotsHorizontal } from "react-icons/hi";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Flex, Box, Icon } from "@chakra-ui/react";

const BackgroundSelector = ({ changeBackground }: { changeBackground: (newBackground: string) => void }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colors: string[] = [
    "#acafaf",
    "#081e0d",
    "#e51d1b",
    "#67c74f",
    "#40299e",
    "#86af84",
    "#802b1e",
    "#ec9599",
    "#abe53d",
    "#72ccfcff",
    "#abe3d9ff",
    "#657710ff",
    "#edc662",
    "#0b9dcfff",
    "#fb6ecaff",
    "#2b40c2",
  ];

  const handleClick = (newBackground: string): void => {
    changeBackground(newBackground);
    onClose();
  };

  return (
    <Button onClick={onOpen} bg="transparent" _hover={{ backgroundColor: "tranparent" }} _focus={{ backgroundColor: "transparent" }}>
      <Icon as={HiDotsHorizontal} fontSize={25} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Themes</DrawerHeader>
          <DrawerBody>
            <Flex flexWrap="wrap" gap="10px" justify="center">
              {colors.map((color, index) => {
                return <Box key={index} bg={color} w="50px" h="50px" cursor="pointer" onClick={() => handleClick(color)}></Box>;
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Button>
  );
};

export default BackgroundSelector;
