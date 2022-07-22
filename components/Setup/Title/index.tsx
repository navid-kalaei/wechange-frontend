import { FC, ReactNode } from 'react'
import { Text } from '@chakra-ui/react'


interface TitleProps {
  children: ReactNode
}

const Title: FC<TitleProps> = (props) => {
  const { children } = props

  return (
    <Text
      display="block"
      fontSize="2xl"
      fontWeight="semibold"
    >
      {children}
    </Text>
  )
}

export default Title
