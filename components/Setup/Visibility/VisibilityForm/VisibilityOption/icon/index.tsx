import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react'
import { FC } from 'react'


interface IconProps extends ChakraIconProps {
  isChecked?: boolean
}


const Icon: FC<IconProps> = (props) => {
  const { isChecked, ...iconProps } = props


  if (isChecked) {
    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <ChakraIcon
        as={BsCheckCircleFill}
        {...iconProps}
      />
    )
    /* eslint-enable react/jsx-props-no-spreading */
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <ChakraIcon
      as={BsCircle}
      {...iconProps}
    />
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

Icon.defaultProps = {
  isChecked: false,
}


export default Icon
