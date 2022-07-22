import { FC, ReactNode } from 'react'
import FullHeightCenterWithNavBar from '../../../layouts/FullHeightCenterWithNavBar'
import VStack from '../../../layouts/VStack'


interface LayoutProps {
  children?: ReactNode
}


const Layout: FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <FullHeightCenterWithNavBar>
      <VStack
        px={{
          base: 4,
          lg: 0,
        }}
        w={{
          base: 'full',
          md: '3xl',
        }}
      >
        {children}
      </VStack>
    </FullHeightCenterWithNavBar>
  )
}

Layout.defaultProps = {
  children: null,
}

export default Layout
