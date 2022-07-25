import { Input, InputGroup, InputLeftAddon, InputProps, useStyleConfig } from '@chakra-ui/react'
import { FC } from 'react'


export type ContactType = 'phone_number' | 'email' | 'link'

type AddOne = 'Telephone' | 'Email' | 'https://'

interface ContactInfoInputProps extends InputProps {
  contactType: ContactType
}

const getAddon = (contactType: ContactType): AddOne => {
  switch (contactType) {
    case 'email':
      return 'Email'
    case 'phone_number':
      return 'Telephone'
    case 'link':
      return 'https://'
    default:
      return 'https://'
  }
}

const ContactInfoInput: FC<ContactInfoInputProps> = (props) => {
  const { contactType, ...inputProps } = props

  const inputLeftAddonStyles = useStyleConfig('InputLeftAddon', props)

  const addon = getAddon(contactType)

  return (

    <InputGroup>
      <InputLeftAddon sx={inputLeftAddonStyles}>{addon}</InputLeftAddon>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input {...inputProps} />
    </InputGroup>
  )
}


export default ContactInfoInput
