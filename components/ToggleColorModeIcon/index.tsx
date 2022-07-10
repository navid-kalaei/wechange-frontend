import { FC } from 'react'
import { FaMoon } from '@react-icons/all-files/fa/FaMoon'
import { FaSun } from '@react-icons/all-files/fa/FaSun'
import { useColorMode } from '@chakra-ui/react'


const ToggleColorModeIcon: FC = () => {
  const { colorMode } = useColorMode()

  switch (colorMode) {
    case 'light':
      return (<FaMoon />)
    case 'dark':
      return (<FaSun />)
    default:
      return (<FaMoon />)
  }
}


export default ToggleColorModeIcon
