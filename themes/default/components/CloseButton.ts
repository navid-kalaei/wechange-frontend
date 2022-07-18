import type { ComponentStyleConfig } from '@chakra-ui/theme'


const CloseButton: ComponentStyleConfig = {
  baseStyle: {
    w: 6,
    h: 6,
    right: 0,
    top: 0,
    position: 'absolute',
  },

  defaultProps: {
    variant: 'ghost',
  },
}

export default CloseButton
