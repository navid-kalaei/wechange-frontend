import {
  Avatar,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { FC } from 'react'
import VStack from '../../../../layouts/VStack'


const ProfileForm: FC = () => (
  <VStack
    size="lg"
  >
    <FormControl>
      <FormLabel>Avatar</FormLabel>
      <HStack
        alignItems="center"
        gap={6}
      >
        <Avatar
          backgroundColor="red.400"
          color="white"
          name="Teal White"
          size="xl"
        />

        <FormHelperText>
          {/* eslint-disable-next-line max-len */}
          Click on the image to choose a color for your profile or upload a picture to make it easier for others to recognize you.
        </FormHelperText>
      </HStack>
    </FormControl>

    <FormControl isRequired>
      <FormLabel>Display name</FormLabel>
      <Input name="display_name" />
    </FormControl>

    <FormControl>
      <FormLabel>About me</FormLabel>
      <Textarea />
      <FormHelperText>
        Let others get to know who you are and what motivates you.
      </FormHelperText>
    </FormControl>
  </VStack>
)


export default ProfileForm
