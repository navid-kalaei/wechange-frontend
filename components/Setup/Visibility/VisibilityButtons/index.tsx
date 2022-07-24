import { FC } from 'react'
import { Button, HStack } from '@chakra-ui/react'


const VisibilityButtons: FC = () => (
  <HStack
    alignItems="flex-end"
    w="full"
  >
    <Button>Back</Button>
    <Button>Next</Button>
  </HStack>
)


export default VisibilityButtons
