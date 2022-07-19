import { FC, ReactNode } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import GrowableCenter from './GrowableCenter'
import SimpleNavBar from '../components/SimpleNavBar'


interface FullHeightCenterWithNavBarProps extends FlexProps {
  children?: ReactNode
}


const FullHeightCenterWithNavBar: FC<FullHeightCenterWithNavBarProps> = (props) => {
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
        <GrowableCenter>
          {children}
        </GrowableCenter>
      </Flex>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}

FullHeightCenterWithNavBar.defaultProps = {
  children: null,
}

export default FullHeightCenterWithNavBar
