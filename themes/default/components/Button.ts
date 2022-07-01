import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Button: ComponentStyleConfig = {
  variants: {
    solid: (props: StyleFunctionProps) => ({
      bg: mode('teal.600', 'teal.300')(props),
      color: mode('white', 'gray.900')(props),
    }),
    formAddon: (_props: StyleFunctionProps) => ({}),
  },
}

export default Button
