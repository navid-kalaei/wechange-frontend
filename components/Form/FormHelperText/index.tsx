import {
  FormHelperText as ChakraFormHelperText,
  ColorMode,
  useStyleConfig,
} from '@chakra-ui/react'
import { FC } from 'react'


export type FormHelperTextVariants = undefined | 'success'


interface FormHelperTextProps {
  colorMode?: ColorMode
  children: string
  variant?: FormHelperTextVariants
}

const FormHelperText: FC<FormHelperTextProps> = (props) => {
  const { children, variant, colorMode } = props

  const styles = useStyleConfig('FormHelperText', { variant, mode: colorMode })

  // for some reasons passing styles to `__css` prop does not apply the styling
  return (
    <ChakraFormHelperText
      sx={styles}
    >
      {children}
    </ChakraFormHelperText>
  )
}

FormHelperText.defaultProps = {
  variant: undefined,
  colorMode: 'light',
}


export default FormHelperText
