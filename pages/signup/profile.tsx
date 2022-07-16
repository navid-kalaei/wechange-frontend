import {
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
// eslint-disable-next-line sort-imports
import Card from '../../components/Card'
import FullHeightCenterWithNavBar from '../../layouts/FullHeightCenterWithNavBar'
import ProfileForm from '../../components/SignUp/ProfileForm'


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
        <ProfileForm />
      </Card>

      <VStack>
        <Text>Already have an account?</Text>
        <NextLink
          href="#"
          passHref
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link>Log in</Link>
        </NextLink>
      </VStack>

    </VStack>
  </FullHeightCenterWithNavBar>

)


export default Signup
