import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
// eslint-disable-next-line sort-imports
import Card from '../../components/Card'
import Closable from '../../containers/Closable'
import FullHeightCenterWithNavBar from '../../layouts/FullHeightCenterWithNavBar'
import ProfileForm from '../../components/SignUp/ProfileForm'
import VStack from '../../layouts/VStack'


const Signup: NextPage = () => (
  <FullHeightCenterWithNavBar>
    <VStack
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

      <Closable>
        <Alert
          status="error"
          variant="solid"
        >
          <AlertIcon />
          <Box>
            <AlertTitle>Log In not possible</AlertTitle>
            <AlertDescription>
              The e-mail/password you entered is not correct, please try again.
            </AlertDescription>
          </Box>
        </Alert>
      </Closable>

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
