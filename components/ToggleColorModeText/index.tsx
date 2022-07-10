import { Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'


const ToggleColorModeText: FC = () => {
  const { colorMode } = useColorMode()

  const text = colorMode === 'light' ? 'Dark Mode' : 'Light Mode'

  return (
    <Text
      color="gray.500"
      fontSize="sm"
      fontWeight="normal"
    >
      {text}
    </Text>
  )
}


export default ToggleColorModeText
