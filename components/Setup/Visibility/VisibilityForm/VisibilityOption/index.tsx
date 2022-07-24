import { Box, HStack, RadioProps, Text, useMultiStyleConfig, useRadio } from '@chakra-ui/react'
import { FC } from 'react'
import Icon from './icon'


enum Variants {
  BASE = 'base',
  CHECKED = 'checked',
}

interface VisibilityOptionProps extends RadioProps {
  text: string,
  title: string,
}

const VisibilityOption: FC<VisibilityOptionProps> = (props) => {
  const { isChecked, text, title } = props

  const variant = isChecked ? Variants.CHECKED : Variants.BASE

  const styles = useMultiStyleConfig('VisibilityOption', { variant })

  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Box as="label">
      <input {...input} />
      <HStack
        {...checkbox}
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
    </Box>
  )
  /* eslint-enable react/jsx-props-no-spreading */
}


export default VisibilityOption
