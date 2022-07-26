import { Box, Show, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'


const SideImage: FC = () => {
  const { colorMode } = useColorMode()
  const imageSrc = `/_next/projects/wechange/img/login/${colorMode}.png`

  return (
    <Show above="xl">
      <Box
        backgroundImage={imageSrc}
        backgroundSize="cover"
        h="100%"
        width="50%"
      />
    </Show>
  )
}


export default SideImage
