import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import ActionButtons from '../../ActionButtons'


const ProfileButtons: FC = () => (
  <ActionButtons>
    <NextLink href="/setup/contact">
      <Button variant="brand-solid">Continue</Button>
    </NextLink>
  </ActionButtons>
)


export default ProfileButtons
