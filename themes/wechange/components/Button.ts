import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Button: ComponentStyleConfig = {
  variants: {
    inputRightElement: {
      bg: 'gray.100',
      borderRadius: 'base',
      color: 'gray.800',
      fontSize: 'sm',
      fontWeight: 'normal',
      h: 6,
      w: 'full',
    },
    'brand-solid': (props: StyleFunctionProps) => ({
      bg: mode('teal.600', 'teal.300')(props),
      color: mode('white', 'gray.900')(props),
      _hover: {
        bg: mode('teal.900', 'teal.600')(props),
      },
      _focus: {
        // the white ring
        _after: {
          content: '""',
          position: 'absolute',
          top: '2px',
          bottom: '2px',
          left: '2px',
          right: '2px',
          borderWidth: '2px',
          borderColor: 'white',
          borderRadius: 'inherit',
          bg: 'none',
        },

        borderColor: 'teal.500',
        bg: mode('teal.600', 'teal.300')(props),
      },
      _active: {
        bg: mode('teal.800', 'teal.600')(props),
      },
      _disabled: {
        color: 'white',
        bg: 'gray.400',
      },
    }),
    'brand-loading': (props: StyleFunctionProps) => ({
      color: mode('white', 'gray.900')(props),
      bg: mode('teal.500', 'teal.200')(props),
    }),
  },
}

export default Button
