import { Button } from '@chakra-ui/react'
import { FC } from 'react'
// eslint-disable-next-line sort-imports
import ActionButtons from '../../ActionButtons'


const InterestsButtons: FC = () => (
  <ActionButtons>
    <Button variant="outline">Back</Button>
    <Button variant="brand-solid">Continue</Button>
  </ActionButtons>
)


export default InterestsButtons
