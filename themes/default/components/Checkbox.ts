import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Checkbox: ComponentStyleConfig = {
  variants: {
    tag: {
      container: {
        m: 0,
      },
      control: {
        w: 0,
        h: 0,
        display: 'none',
        border: 'none',
      },
      input: {
        display: 'none',
      },
      icon: {
        display: 'none',
      },
      label: {
        m: 0,
      },
    },
  },
}

export default Checkbox
