import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Link,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import FormHelperText from '../../FormHelperText'
import FormVStack from '../../../layouts/FormVStack'
import Input from '../../Input'


const ProfileForm: FC = () => (
  <FormVStack>
    <FormControl isRequired>
      <FormLabel htmlFor="display_name">Display name</FormLabel>
      <Input id="display_name" />
      <FormHelperText>Help other members find you and use your real name.</FormHelperText>
    </FormControl>

    <FormControl>
      <Checkbox>I want to receive news about WECHANGE via email.</Checkbox>
    </FormControl>


    <Button variant="brand-solid">Sign Up</Button>

    <Box>
      <Text as="span">
        {'By signing up, I agree to the wechange.de '}
      </Text>
      <NextLink href="#">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>privacy policy</Link>
      </NextLink>
      <Text as="span">
        {' and '}
      </Text>

      <NextLink href="#">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>terms of use</Link>
      </NextLink>
      .

    </Box>
  </FormVStack>
)


export default ProfileForm
