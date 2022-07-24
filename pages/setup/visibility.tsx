import { Text } from '@chakra-ui/react'
// eslint-disable-next-line sort-imports
import Steps, { StepStages } from '../../components/Setup/Steps'
import Card from '../../components/Card'
import Layout from '../../components/Setup/Layout'
import { NextPageWithLayout } from '../_app'
import Title from '../../components/Setup/Title'
import VStack from '../../layouts/VStack'
import VisibilityForm from '../../components/Setup/Visibility/VisibilityForm'
import VisibilityButtons from '../../components/Setup/Visibility/VisibilityButtons'


const Visibility: NextPageWithLayout = () => (
  <>
    <Title>Visibility</Title>

    <Steps activeStep={StepStages.VISIBILITY} />

    <Card>
      <VStack alignItems="flex-start">
        <Text>It is up to you: Who shall be able to see your profile on wechange.de?</Text>

        <VisibilityForm />

        <VisibilityButtons />
      </VStack>
    </Card>
  </>
)


Visibility.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export default Visibility
