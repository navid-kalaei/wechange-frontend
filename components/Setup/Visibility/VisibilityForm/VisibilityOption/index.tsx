import { Box, HStack, Text, useMultiStyleConfig } from '@chakra-ui/react'
import { FC } from 'react'
import Icon from './icon'


enum Variants {
  BASE = 'base',
  CHECKED = 'checked',
}

interface VisibilityOptionProps {
  isChecked?: boolean
  text: string,
  title: string,
}

const VisibilityOption: FC<VisibilityOptionProps> = (props) => {
  const { isChecked, text, title } = props

  const variant = isChecked ? Variants.CHECKED : Variants.BASE

  const styles = useMultiStyleConfig('VisibilityOption', { variant })

  return (
    <HStack
      sx={styles.container}
    >
      <Icon
        isChecked={isChecked}
        sx={styles.icon}
      />
      <Box>
        <Text sx={styles.title}>
          {title}
        </Text>
        <Text sx={styles.text}>{text}</Text>
      </Box>
    </HStack>
  )
}


VisibilityOption.defaultProps = {
  isChecked: false,
}


export default VisibilityOption
