import {
  Checkbox,
  CheckboxGroup,
  Tag,
  TagLabel,
  TagRightIcon,
  Wrap,
  useStyleConfig,
} from '@chakra-ui/react'
import { FC } from 'react'
import { HiCheck } from 'react-icons/hi'
import { StringOrNumber } from '@chakra-ui/utils'
import { useImmer } from 'use-immer'


const topics: string[] = [
  'Energy',
  'Environmental protection',
  'Education and Communication',
  'Money and Finance',
  'Health',
  'Constructing and Living',
  'Labor and Rights',
  'Digitalization',
  'Climate protection',
  'Democracy and Participation',
]


const PredefinedTopics: FC = () => {
  const checkboxStyle = useStyleConfig('Checkbox')
  const tagStyle = useStyleConfig('Tag')

  const [checkedTopics, setCheckedTopics] = useImmer<StringOrNumber[]>([])


  return (
    <CheckboxGroup onChange={setCheckedTopics}>
      <Wrap
        spacingX={2}
        spacingY={4}
      >
        {
          topics.map((topic) => {
            const isChecked = checkedTopics.includes(topic)

            return (
              <Checkbox
                key={topic}
                sx={checkboxStyle}
                value={topic}
                variant="tag"
              >
                <Tag
                  sx={tagStyle}
                  variant={isChecked ? 'solid' : 'outline'}
                >
                  <TagLabel>
                    {topic}
                  </TagLabel>

                  {
                    isChecked && (
                      <TagRightIcon
                        as={HiCheck}
                        m={0}
                      />
                    )
                  }

                </Tag>
              </Checkbox>
            )
          })
          }
      </Wrap>
    </CheckboxGroup>
  )
}

export default PredefinedTopics
