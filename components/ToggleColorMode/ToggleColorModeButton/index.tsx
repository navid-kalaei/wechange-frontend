import { Button, Flex, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'
import ToggleColorModeIcon from '../ToggleColorModeIcon'
import ToggleColorModeText from '../ToggleColorModeText'


const ToggleColorModeButton: FC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Flex
      alignItems="center"
      gap={2}
      justifyContent="end"
    >
      <ToggleColorModeText />

      <Button
        onClick={toggleColorMode}
        p={0}
        size="sm"
      >
        <ToggleColorModeIcon />
      </Button>
    </Flex>
  )
}

export default ToggleColorModeButton
