import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const VisibilityOption: ComponentStyleConfig = {
  parts: ['container', 'icon', 'title', 'text'],

  baseStyle: {
    container: {
      alignItems: 'start',
      borderRadius: 'base',
      borderWidth: '1px',
      gap: 4,
      p: 4,
    },
    title: {
      fontWeight: 'semibold',
    },
    icon: {
      boxSize: '1.5rem',
    }
  },

  variants: {
    base: (props: StyleFunctionProps) => ({
      container: {
        borderColor: mode('gray.200', 'gray.300')(props),
      },
      title: {
        color: mode('gray.700', 'gray.50')(props),
      },
      text: {
        color: mode('gray.900', 'gray.50')(props),
      },
      icon: {
        color: mode('gray.800', 'gray.300')(props),
      },
    }),

    checked: (props: StyleFunctionProps) => ({
      container: {
        backgroundColor: mode('teal.600', 'teal.300')(props),
      },
      title: {
        color: mode('white', 'gray.900')(props),
      },
      text: {
        color: mode('white', 'gray.900')(props),
      },
      icon: {
        color: mode('white', 'gray.900')(props),
      },
    }),
  },

  defaultProps: {
    variant: 'base',
  },
}


export default VisibilityOption
