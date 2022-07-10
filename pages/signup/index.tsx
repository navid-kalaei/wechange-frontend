import {
  Button,
  Text,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
// eslint-disable-next-line sort-imports
import Card from '../../components/Card'
import FullHeightCenterWithNavBar from '../../layouts/FullHeightCenterWithNavBar'
import SingUpForm from '../../components/SignUp/SingUpForm'


const Signup: NextPage = () => (
  <FullHeightCenterWithNavBar>
    <VStack
      spacing={6}
      w={{
        base: 'full',
        sm: 'sm',
      }}
    >
      <Text
        display="block"
        fontSize="2xl"
        fontWeight="semibold"
      >
        Sign Up
      </Text>

      <Card>
        <SingUpForm />
      </Card>

      <VStack>
        <Text>Already have an account?</Text>
        <NextLink
          href="#"
          passHref
        >
          <Button variant="brand-link">Log in</Button>
        </NextLink>
      </VStack>

    </VStack>
  </FullHeightCenterWithNavBar>

)


export default Signup
