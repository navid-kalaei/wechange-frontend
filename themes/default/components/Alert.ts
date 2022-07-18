import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'


const Alert: ComponentStyleConfig = {

  baseStyle: {
    container: {
      alignItems: 'flex-start',
    },
  },

  variants: {
    solid: (props: StyleFunctionProps) => {
      const { colorScheme: c } = props

      return {
        container: {
          bg: `${c}.600`,
        },
      }
    },
  },
}

export default Alert
