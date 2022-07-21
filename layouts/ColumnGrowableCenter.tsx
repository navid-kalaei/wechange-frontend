import { Center, CenterProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'


interface ColumnGrowableCenterProps extends CenterProps {
  children: ReactNode
}


const ColumnGrowableCenter: FC<ColumnGrowableCenterProps> = (props) => {
  const { children, ...centerProps } = props

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Center
        {...centerProps}
        flexDirection="column"
        flexGrow={1}
      >
        {children}
      </Center>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}


export default ColumnGrowableCenter
