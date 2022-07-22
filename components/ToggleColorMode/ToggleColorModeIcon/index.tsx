import { HiMoon, HiSun } from 'react-icons/hi'
import { FC } from 'react'
import { useColorMode } from '@chakra-ui/react'


const ToggleColorModeIcon: FC = () => {
  const { colorMode } = useColorMode()

  switch (colorMode) {
    case 'light':
      return (<HiMoon />)
    case 'dark':
      return (<HiSun />)
    default:
      return (<HiMoon />)
  }
}


export default ToggleColorModeIcon
