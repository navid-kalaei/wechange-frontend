import { StackProps as ChakraStackProps, VStack as ChakraVStack, forwardRef } from '@chakra-ui/react'


const VStackSize = {
  sm: 4,
  md: 6,
}

interface VStackProps extends ChakraStackProps {
  size?: keyof typeof VStackSize
}


const VStack = forwardRef<VStackProps, 'div'>((props, ref) => {
  const { children, size: sizeName, ...rest } = props

  const size = VStackSize[sizeName as keyof typeof VStackSize]

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <ChakraVStack
        {...rest}
        ref={ref}
        spacing={size}
      >
        {children}
      </ChakraVStack>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
})

VStack.defaultProps = {
  size: 'md',
}


export default VStack
