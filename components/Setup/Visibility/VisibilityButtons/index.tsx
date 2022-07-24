import { Button, HStack } from '@chakra-ui/react'
import { FC } from 'react'


const VisibilityButtons: FC = () => (
  <HStack
    gap={4}
    justifyContent="end"
    w="full"
  >
    <Button variant="ghost">Back</Button>
    <Button variant="brand-solid">Complete profile</Button>
  </HStack>
)


export default VisibilityButtons
