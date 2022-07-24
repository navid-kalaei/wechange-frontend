import { FC } from 'react'
// eslint-disable-next-line sort-imports
import { Avatar, useDisclosure } from '@chakra-ui/react'
import AvatarModal from '../AvatarModal'


const AvatarInput: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Avatar
        backgroundColor="red.400"
        color="white"
        name="Teal White"
        onClick={onOpen}
        size="xl"
      />

      <AvatarModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}


export default AvatarInput
