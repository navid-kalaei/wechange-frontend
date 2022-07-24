import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { FC } from 'react'
import VStack from '../../../../../layouts/VStack'


type AvatarModalProps = Omit<ModalProps, 'children'>

const AvatarModal: FC<AvatarModalProps> = (props) => {
  const { isOpen, onClose } = props

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{
        base: 'full',
        sm: 'xs',
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody
          p={6}
        >
          <VStack
            alignItems="center"
          >
            <Avatar
              backgroundColor="red.400"
              color="white"
              name="Teal White"
              size="xl"
            />

            <Button
              alignSelf="stretch"
              variant="ghost"
            >
              Upload Image
            </Button>

            <Text
              fontSize="sm"
            >
              or select a color
            </Text>

            <Wrap
              justify="center"
              spacing={6}
            >
              {
                Array(12).fill(0).map((e) => (
                  <WrapItem
                    backgroundColor="teal.300"
                    borderRadius="full"
                    h="40px"
                    w="40px"
                  />
                ))
              }
            </Wrap>

          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={4}
            onClick={onClose}
            variant="ghost"
          >
            Cancel
          </Button>
          <Button variant="brand-solid">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}


export default AvatarModal
