import {
  BsCheckCircleFill,
  BsCircle,
  BsCircleFill,
} from 'react-icons/bs'
import { Icon as ChackraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react'
import { FC } from 'react'


enum Variants {
  COMPLETED = 'completed',
  ACTIVE = 'active',
  UPCOMING = 'upcoming',
}

interface IconProps extends ChakraIconProps {
  variant?: Variants
}


const Icon: FC<IconProps> = (props) => {
  const { variant, ...iconProps } = props

  /* eslint-disable react/jsx-props-no-spreading */
  switch (variant) {
    case Variants.COMPLETED:
      return (
        <ChackraIcon
          as={BsCheckCircleFill}
          {...iconProps}
        />
      )
    case Variants.ACTIVE:
      return (
        <ChackraIcon
          as={BsCircleFill}
          {...iconProps}
        />
      )
    case Variants.UPCOMING:
      return (
        <ChackraIcon
          as={BsCircle}
          {...iconProps}
        />
      )
    default:
      return (
        <ChackraIcon
          as={BsCircle}
          {...iconProps}
        />
      )
  }
  /* eslint-enable react/jsx-props-no-spreading */
}


Icon.defaultProps = {
  variant: Variants.UPCOMING,
}


export default Icon
