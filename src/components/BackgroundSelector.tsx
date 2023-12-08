import { HiDotsHorizontal } from 'react-icons/hi';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Flex, Box, Icon } from '@chakra-ui/react';
import backgrounds from '../global/backgrounds';
import { useBackgroundListStore } from '../store/backgroundStore';

const BackgroundSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { selectOne } = useBackgroundListStore();

  return (
    <Button onClick={onOpen} bg="transparent" _hover={{ backgroundColor: 'tranparent' }} _focus={{ backgroundColor: 'transparent' }}>
      <Icon as={HiDotsHorizontal} fontSize={25} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Themes</DrawerHeader>
          <DrawerBody>
            <Flex flexWrap="wrap" gap="10px" justify="center">
              {backgrounds.map((background, index) => {
                return <Box key={index} bgImage={background} w="50px" h="50px" cursor="pointer" onClick={() => selectOne(background)}></Box>;
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Button>
  );
};

export default BackgroundSelector;
