import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'


interface CardProps extends BoxProps {
  children?: ReactNode
}


const Card: FC<CardProps> = (props) => {
  const { children, ...boxProps } = props

  const styles = useStyleConfig('Card', props)

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Box
        __css={styles}
        {...boxProps}
      >
        {children}
      </Box>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}

Card.defaultProps = {
  children: null,
}

export default Card
