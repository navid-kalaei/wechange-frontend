import { Button } from '@chakra-ui/react'
import { FC } from 'react'
// eslint-disable-next-line sort-imports
import ActionButtons from '../../ActionButtons'


const VisibilityButtons: FC = () => (
  <ActionButtons>
    <Button variant="ghost">Back</Button>
    <Button variant="brand-solid">Complete profile</Button>
  </ActionButtons>
)


export default VisibilityButtons
