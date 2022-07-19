import { FC, ReactNode } from 'react'
import { Center } from '@chakra-ui/react'


interface GrowableCenterProps {
  children: ReactNode
}


const GrowableCenter: FC<GrowableCenterProps> = (props) => {
  const { children } = props

  return (
    <Center
      flexDirection="column"
      flexGrow={1}
    >
      {children}
    </Center>
  )
}


export default GrowableCenter
