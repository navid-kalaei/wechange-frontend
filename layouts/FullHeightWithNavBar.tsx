import { FC, ReactNode } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import ColumnGrowable from './ColumnGrowable'
import SimpleNavBar from '../components/SimpleNavBar'


interface FullHeightWithNavBarProps extends FlexProps {
  children?: ReactNode
}


const FullHeightWithNavBar: FC<FullHeightWithNavBarProps> = (props) => {
  const { children, ...flexProps } = props

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Flex
        {...flexProps}
        flexDirection="column"
        h="100vh"
      >
        <SimpleNavBar />
        <ColumnGrowable>
          {children}
        </ColumnGrowable>
      </Flex>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}

FullHeightWithNavBar.defaultProps = {
  children: null,
}

export default FullHeightWithNavBar
