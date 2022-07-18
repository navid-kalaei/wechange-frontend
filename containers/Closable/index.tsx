import { Box, useBoolean } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import CloseButton from '../../components/CloseButton'


interface ClosableProps {
  children: ReactNode
}


const Closable: FC<ClosableProps> = (props) => {
  const { children } = props

  const [isOpen, { off: close }] = useBoolean(true)

  if (!isOpen) {
    return null
  }

  return (
    <Box
      position="relative"
    >
      {children}

      <CloseButton onClick={close} />
    </Box>
  )
}


export default Closable
