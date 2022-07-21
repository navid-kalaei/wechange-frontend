import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import { PasswordInput } from '../../Form'
import VStack from '../../../layouts/VStack'


const SignUpForm: FC = () => (
  <VStack
    align="stretch"
    size="sm"
  >
    <FormControl isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" />
    </FormControl>

    <FormControl isRequired>
      <FormLabel htmlFor="password">Password</FormLabel>
      <PasswordInput />
    </FormControl>

    <Box>
      <NextLink
        href="#"
        passHref
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>Forgot password?</Link>
      </NextLink>
    </Box>

    <Button variant="brand-solid">Log In</Button>
  </VStack>
)


export default SignUpForm
