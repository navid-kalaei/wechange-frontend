import { FC } from 'react'
import { HStack } from '@chakra-ui/react'
import Step from './Step'


export enum StepStages {
  PROFILE,
  CONTACT,
  INTERESTS,
  VISIBILITY,
}


const steps: Record<StepStages, string> = {
  [StepStages.PROFILE]: 'Profile',
  [StepStages.CONTACT]: 'Contact',
  [StepStages.INTERESTS]: 'Interests',
  [StepStages.VISIBILITY]: 'Visibility',
}

const stepsOrder: StepStages[] = [
  StepStages.PROFILE,
  StepStages.CONTACT,
  StepStages.INTERESTS,
  StepStages.VISIBILITY,
]


interface StepsProps {
  activeStep: StepStages
}

const Steps: FC<StepsProps> = (props) => {
  const { activeStep } = props

  return (
    <HStack spacing={6}>
      {
        stepsOrder.map((stepStage, stepIndex) => (
          <Step
            activeIndex={activeStep}
            key={`step-${stepStage}`}
            stepIndex={stepIndex}
          >
            {steps[stepStage]}
          </Step>
        ))
      }
    </HStack>
  )
}

export default Steps
