import { HStack, Text, useMultiStyleConfig } from '@chakra-ui/react'
import { FC } from 'react'
import Icon from '../Icon'


enum Variants {
  COMPLETED = 'completed',
  ACTIVE = 'active',
  UPCOMING = 'upcoming',
}


const getStepVariant = (stepIndex: StepProps['stepIndex'], activeIndex: StepProps['activeIndex']): Variants => {
  if (stepIndex < activeIndex) {
    return Variants.COMPLETED
  }

  if (stepIndex === activeIndex) {
    return Variants.ACTIVE
  }

  return Variants.UPCOMING
}


interface StepProps {
  stepIndex: number
  activeIndex: number
  children: string
}


const Step: FC<StepProps> = (props) => {
  const { stepIndex, activeIndex, children } = props


  const variant = getStepVariant(stepIndex, activeIndex)
  const styles = useMultiStyleConfig('Step', { variant })

  return (
    <HStack __css={styles.container}>
      <Icon
        __css={styles.icon}
        variant={variant}
      />
      <Text sx={styles.title}>{children}</Text>
    </HStack>
  )
}


export default Step
