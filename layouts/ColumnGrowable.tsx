import { FC, ReactNode } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'


interface ColumnGrowableProps extends FlexProps {
  children?: ReactNode
}


const ColumnGrowable: FC<ColumnGrowableProps> = (props) => {
  const { children, ...flexProps } = props

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Flex
        {...flexProps}
        flexDirection="column"
        flexGrow={1}
      >
        {children}
      </Flex>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}


ColumnGrowable.defaultProps = {
  children: null,
}


export default ColumnGrowable
