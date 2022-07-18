import { FC, ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'


interface FormVStackProps {
  children: ReactNode
}

const FormVStack: FC<FormVStackProps> = (props) => {
  const { children } = props

  return (
    <VStack
      align="stretch"
      gap={6}
    >
      {children}
    </VStack>
  )
}


export default FormVStack
