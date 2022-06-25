import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Button: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    bg: mode('teal.600', 'teal.300')(props),
    color: mode('white', 'gray.900')(props),
  }),
}

export default Button
