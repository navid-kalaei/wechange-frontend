import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Link: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('teal.600', 'teal.300')(props),
    textDecoration: 'underline',
  }),
}

export default Link
