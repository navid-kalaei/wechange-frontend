import { FC, useCallback } from 'react'
import { useImmerReducer } from 'use-immer'
// eslint-disable-next-line sort-imports
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { HiChevronDown, HiOutlineTrash } from 'react-icons/hi'
// eslint-disable-next-line sort-imports
import ContactInfoInput, { ContactType } from './ContactInfoInput'
import VStack from '../../../../layouts/VStack'


const contactItems: Record<string, ContactType> = {
  'phone number': 'phone_number',
  email: 'email',
  website: 'link',
  'social media profile': 'link',
}


// todo: needs clean up
const ContactForm: FC = () => {
  const [contactInputs, dispatch] = useImmerReducer(
    (draft, action) => {
      switch (action.type) {
        case 'add':
          draft.push(action.payload)
          break
        case 'remove':
          draft.splice(action.payload, 1)
          break
        default:
          break
      }
    },
    [],
  )

  const addContactInput = useCallback(
    (contactItemType) => {
      dispatch({
        type: 'add',
        payload: contactItemType,
      })
    },
    [dispatch],
  )

  const removeContactInput = useCallback(
    (idx: number) => {
      dispatch({
        type: 'remove',
        payload: idx,
      })
    },
    [dispatch],
  )


  return (
    <VStack
      alignItems="stretch"
      size="sm"
    >
      <Text fontWeight="semibold">Contact, website, social media</Text>

      {/* eslint-disable-next-line max-len */}
      <Text>
        Feel free to add more contact information and links to other websites in your profile.
        Keep in mind that the information will be visible to others.
      </Text>

      <VStack size="sm">

        {
            contactInputs.map((contactInput, idx) => (
              <HStack w="full">
                <ContactInfoInput contactType={contactInput} />

                <Button
                  colorScheme="red"
                  leftIcon={(
                    <Icon as={HiOutlineTrash} />
                  )}
                  onClick={() => removeContactInput(idx)}
                  variant="ghost"
                >
                  remove
                </Button>
              </HStack>
            ))
          }


        <Menu>
          <MenuButton
            alignSelf="start"
            as={Button}
            rightIcon={(
              <Icon as={HiChevronDown} />
            )}
            variant="brand-solid"
          >
            Add contact info
          </MenuButton>
          <MenuList>
            {
              Object.keys(contactItems)
                .map((contactItem) => (
                  <MenuItem
                    key={`contact-item-${contactItem}`}
                    onClick={() => addContactInput(contactItems[contactItem])}
                  >
                    {contactItem}
                  </MenuItem>
                ))
            }
          </MenuList>
        </Menu>
      </VStack>

      <VStack size="sm">
        <FormControl>
          <FormLabel>City, district or address </FormLabel>
          <Input />
        </FormControl>

        <Text>
          Add a city, a district or an address if you want it to be displayed in your profile.
          If you make your profile public, people can also find you via the map.
        </Text>
      </VStack>

    </VStack>
  )
}

export default ContactForm
