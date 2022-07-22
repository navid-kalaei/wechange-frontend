import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'


const Step: ComponentStyleConfig = {
  parts: ['container', 'title', 'icon'],

  baseStyle: (props: StyleFunctionProps) => ({
    container: {
      gap: 2,
    },
  }),

  variants: {
    completed: (props: StyleFunctionProps) => ({
      title: {
        color: mode('gray.500', 'gray.200')(props),
      },
      icon: {
        color: mode('gray.500', 'gray.500')(props),
      },
    }),
    active: (props: StyleFunctionProps) => ({
      title: {
        color: mode('gray.600', 'teal.300')(props),
      },
      icon: {
        color: mode('teal.600', 'teal.300')(props),
      },
    }),
    upcoming: (props: StyleFunctionProps) => ({
      title: {
        color: mode('gray.600', 'gray.200')(props),
      },
      icon: {
        color: mode('gray.400', 'gray.200')(props),
      },
    }),
  },

  defaultProps: {
    variant: 'upcoming',
  },
}


export default Step
