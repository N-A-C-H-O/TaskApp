import { IoIosOptions } from 'react-icons/io';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Flex, Box, Icon } from '@chakra-ui/react';
import backgrounds from '../global/backgrounds';
import { useBackgroundListStore } from '../store/backgroundStore';
import colors from '../global/colors';

const BackgroundSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { selectOne } = useBackgroundListStore();

  return (
    <Button onClick={onOpen} bg="transparent" _hover={{ backgroundColor: 'tranparent' }} _focus={{ backgroundColor: 'transparent' }}>
      <Icon as={IoIosOptions} color={colors.lightest} fontSize={25} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={colors.lightest}>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" color={colors.deepest}>
            Backgrounds
          </DrawerHeader>
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
