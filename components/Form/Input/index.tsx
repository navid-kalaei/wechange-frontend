import { Input as ChackraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { FC } from 'react'


interface InputProps extends ChakraInputProps {

}


const Input: FC<InputProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ChackraInput {...props} />
)


// for some reasons eslint cannot understand the props are extended from InputOptions
/* eslint-disable react/default-props-match-prop-types */
Input.defaultProps = {
  errorBorderColor: 'red.600',
  focusBorderColor: 'blue.500',
}
/* eslint-enable react/default-props-match-prop-types */

export default Input
