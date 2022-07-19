import { StackProps as ChakraStackProps, VStack as ChakraVStack } from '@chakra-ui/react'
import { FC } from 'react'


const VStackSpace = {
  sm: 4,
  md: 6,
}

interface VStackProps extends ChakraStackProps {
  size?: keyof typeof VStackSpace
}


const VStack: FC<VStackProps> = (props) => {
  const { children, spacing: spacingName, ...rest } = props

  const size = VStackSpace[spacingName as keyof typeof VStackSpace]

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <ChakraVStack
        {...rest}
        spacing={size}
      >
        {children}
      </ChakraVStack>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}

VStack.defaultProps = {
  size: 'md',
}


export default VStack
