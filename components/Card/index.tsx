import { Box, useStyleConfig } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'


interface CardProps {
  children?: ReactNode
}


const Card: FC<CardProps> = (props) => {
  const { children } = props

  const styles = useStyleConfig('Card', props)

  return (
    <Box __css={styles}>
      {children}
    </Box>
  )
}

Card.defaultProps = {
  children: null,
}

export default Card
