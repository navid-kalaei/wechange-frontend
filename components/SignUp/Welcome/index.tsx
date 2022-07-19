import { Button, Text } from '@chakra-ui/react'
import { FC } from 'react'
import VStack from '../../../layouts/VStack'


const Welcome: FC = () => (
  <VStack spacing="sm">
    <Text>
      {/* eslint-disable-next-line max-len */}
      We have sent you an email to verify your account. Please open the link in the email to complete the registration.
    </Text>

    <Text>
      Next we will guide you through the most important profile settings.
    </Text>

    <Button variant="brand-solid">Get started</Button>
  </VStack>
)


export default Welcome
