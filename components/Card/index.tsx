import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'


interface CardProps {
  children?: ReactNode
}


const Card: FC<CardProps> = (props) => {
  const { children } = props

  return (
    <Box
      border="1px"
      borderRadius="base"
      boxShadow="xs"
      mb={6}
      p={6}
      w="full"
    >
      {children}
    </Box>
  )
}

Card.defaultProps = {
  children: null,
}

export default Card
