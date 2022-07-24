import { FC } from 'react'
import VStack from '../../../../layouts/VStack'
import VisibilityOption from './VisibilityOption'


const VisibilityForm: FC = () => (
  <VStack
    alignItems="stretch"
    size="sm"
    w="full"
  >
    <VisibilityOption
      isChecked
      text="Your profile is only visible for members of your groups and projects."
      title="Private"
    />

    <VisibilityOption
      text="Your profile is visible for all registered users of wechange.de."
      title="Platform"
    />

    <VisibilityOption
      text="Your profile is also visible for non-registered visitors of the website. A public profile can be found by search engines."
      title="Public"
    />

  </VStack>
)


export default VisibilityForm
