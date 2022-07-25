import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import ActionButtons from '../../ActionButtons'


const VisibilityButtons: FC = () => (
  <ActionButtons>
    <NextLink href="/setup/interests">
      <Button variant="outline">Back</Button>
    </NextLink>

    <NextLink href="/dashboard">
      <Button variant="brand-solid">Complete profile</Button>
    </NextLink>
  </ActionButtons>
)


export default VisibilityButtons
