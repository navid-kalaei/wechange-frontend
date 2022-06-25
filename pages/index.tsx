import {
  Button,
  Center,
  useColorMode,
} from '@chakra-ui/react'
import type { NextPage } from 'next'


const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Center
      h="100vh"
    >
      <Button onClick={toggleColorMode}>
        Toggle
      </Button>
    </Center>
  )
}


export default Home
