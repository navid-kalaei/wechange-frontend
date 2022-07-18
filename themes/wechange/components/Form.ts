import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Form: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    helperText: {
      color: mode('gray.800', 'white')(props),
      fontWeight: 'normal',
    },
  }),
}


export default Form
