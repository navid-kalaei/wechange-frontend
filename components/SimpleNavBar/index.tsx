import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import Image from 'next/image'
import { ToggleColorModeButton } from '../ToggleColorMode'


const SimpleNavBar: FC = () => (
  <Flex
    alignItems="center"
    as="nav"
    gap={2}
    h={58}
    justifyContent="space-between"
    mb={4}
    p={4}
    w="full"
  >
    <Flex
      alignItems="center"
      gap={2}
    >
      <Image
        alt="logo"
        height={28}
        layout="fixed"
        src="/_next_public/projects/default/img/logo.png"
        width={28}
      />

      <Text
        fontWeight="semibold"
      >
        WECHANGE
      </Text>
    </Flex>

    <ToggleColorModeButton />
  </Flex>
)


export default SimpleNavBar
