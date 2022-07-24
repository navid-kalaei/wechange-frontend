import { FC, ReactNode } from 'react'
import { HStack, useStyleConfig } from '@chakra-ui/react'


interface ActionButtonsProps {
  children: ReactNode
}

const ActionButtons: FC<ActionButtonsProps> = (props) => {
  const { children } = props

  const styles = useStyleConfig('SetupActionButtons', props)

  return (
    <HStack
      sx={styles}
    >
      {children}
    </HStack>
  )
}


export default ActionButtons
