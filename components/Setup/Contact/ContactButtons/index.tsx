import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import ActionButtons from '../../ActionButtons'


const ContactButtons: FC = () => (
  <ActionButtons>
    <NextLink href="/setup/profile">
      <Button variant="outline">Back</Button>
    </NextLink>

    <NextLink href="/setup/interests">
      <Button variant="brand-solid">Continue</Button>
    </NextLink>
  </ActionButtons>
)


export default ContactButtons
