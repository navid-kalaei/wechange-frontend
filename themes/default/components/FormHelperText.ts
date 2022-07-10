import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const FormHelperText: ComponentStyleConfig = {
  variants: {
    success: (props: StyleFunctionProps) => ({
      color: mode('teal.600', 'teal.300')(props),
    }),
  },
}

export default FormHelperText
