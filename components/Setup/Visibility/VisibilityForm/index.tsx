import { FC } from 'react'
import { useRadioGroup } from '@chakra-ui/react'
// eslint-disable-next-line sort-imports
import VStack from '../../../../layouts/VStack'
import VisibilityOption from './VisibilityOption'


interface Option {
  title: string,
  text: string,
}

const options: Option[] = [
  {
    title: 'Private',
    text: 'Your profile is only visible for members of your groups and projects.',
  },
  {
    title: 'Platform',
    text: 'Your profile is visible for all registered users of wechange.de.',
  },
  {
    title: 'Public',
    text: 'Your profile is also visible for non-registered visitors of the website. A public profile can be found by search engines.',
  },
]


const VisibilityForm: FC = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'visibility',
    defaultValue: 'public',
  })

  const group = getRootProps()

  return (
    <>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <VStack
        {...group}
        alignItems="stretch"
        size="sm"
        w="full"
      >
        {
          options.map((option) => {
            const radio = getRadioProps({ value: option.title.toLowerCase() })

            return (
              <VisibilityOption
                key={`visibility-option-${option.title}`}
                text={option.text}
                title={option.title}
                {...radio}
              />
            )
          })
        }
      </VStack>
      {/* eslint-enable react/jsx-props-no-spreading */}
    </>
  )
}

export default VisibilityForm
