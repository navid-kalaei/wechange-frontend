import {
  Container,
  Image,
  Show,
  Text,
} from '@chakra-ui/react'
import Card from '../../components/Card'
import FullHeightCenterWithNavBar from '../../layouts/FullHeightCenterWithNavBar'
import { NextPageWithLayout } from '../_app'
import VStack from '../../layouts/VStack'
import Welcome from '../../components/SignUp/Welcome'


const WelcomePage: NextPageWithLayout = () => (
  <>
    <VStack
      w={{
        base: 'full',
        sm: 'sm',
      }}
      zIndex={2}
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

    <Show above="sm">
      <Container
        bottom={0}
        maxH="container.sm"
        maxW="container.md"
        position="absolute"
      >
        <Image
          alt=""
          fit="scale-down"
          src="/projects/wechange/img/signup/welcome/img.png"
        />
      </Container>
    </Show>
  </>
)


WelcomePage.getLayout = (page) => (
  <FullHeightCenterWithNavBar
    position="relative"
  >
    {page}
  </FullHeightCenterWithNavBar>
)


export default WelcomePage
