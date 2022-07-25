import Steps, { StepStages } from '../../components/Setup/Steps'
import Card from '../../components/Card'
import InterestsButtons from '../../components/Setup/Interests/InterestsButtons'
import InterestsForm from '../../components/Setup/Interests/InterestsForm'
import Layout from '../../components/Setup/Layout'
import { NextPageWithLayout } from '../_app'
import Title from '../../components/Setup/Title'
import VStack from '../../layouts/VStack'


const Interests: NextPageWithLayout = () => (
  <>
    <Title>Interests</Title>

    <Steps activeStep={StepStages.INTERESTS} />

    <Card>
      <VStack alignItems="flex-start">
        <InterestsForm />

        <InterestsButtons />
      </VStack>
    </Card>
  </>
)


Interests.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export default Interests
