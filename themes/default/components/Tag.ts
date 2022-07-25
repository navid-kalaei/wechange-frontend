import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Tag: ComponentStyleConfig = {

  baseStyle: {
    container: {
      borderRadius: 'base',
    },
    label: {
      px: 3,
      py: 2,
    },
  },

  variants: {
    outline: (props: StyleFunctionProps) => ({
      container: {
        borderColor: mode('gray.500', 'gray.300')(props),
        color: mode('gray.800', 'gray.50')(props),
      },
    }),
    solid: (props: StyleFunctionProps) => ({
      container: {
        backgroundColor: mode('teal.600', 'teal.300')(props),
        color: mode('white', 'gray.900')(props),
        border: 'none',
      },
    }),
  },
}


export default Tag
