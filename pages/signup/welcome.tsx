import {
  Text,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
// eslint-disable-next-line sort-imports
import Card from '../../components/Card'
import FullHeightCenterWithNavBar from '../../layouts/FullHeightCenterWithNavBar'
import Welcome from '../../components/SignUp/Welcome'


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
        Welcome to wechange.de!
      </Text>

      <Card>
        <Welcome />
      </Card>

    </VStack>
  </FullHeightCenterWithNavBar>
)


export default Signup
