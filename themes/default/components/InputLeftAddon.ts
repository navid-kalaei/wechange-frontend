import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const InputLeftAddon: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    bg: 'transparent',
    borderColor: 'inherit',
    color: mode('gray.700', 'gray.50')(props),
  }),
}

export default InputLeftAddon
