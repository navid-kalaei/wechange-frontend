import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Icon,
  Tag,
  TagLabel,
  Text,
  Wrap,
  useStyleConfig,
} from '@chakra-ui/react'
import { FC } from 'react'
import VStack from '../../../../layouts/VStack'
import { FormHelperText, Input } from '../../../Form'
import PredefinedTopics from './PredefinedTopics'


const InterestsForm: FC = () => {
  return (
    <>
      <Text fontWeight="semibold">Topics</Text>

      {/* eslint-disable-next-line max-len */}
      <Text>Choose topics that interest you to make it easier for you to network with like-minded people.</Text>

      <PredefinedTopics />

      <Wrap
        spacingX={2}
        spacingY={4}
      />

      <FormControl>
        <FormLabel>Add more topics</FormLabel>
        <Input />
      </FormControl>
    </>
  )
}


export default InterestsForm
