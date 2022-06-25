import { StyleFunctionProps, Styles, mode } from '@chakra-ui/theme-tools'


const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('gray.50', 'gray.900')(props),
      color: mode('gray.800', 'gray.50')(props),
    },
    link: {
      color: mode('teal.600', 'teal.300')(props),
    },
  }),
}

export default styles
