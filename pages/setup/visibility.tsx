import { Text } from '@chakra-ui/react'
// eslint-disable-next-line sort-imports
import Steps, { StepStages } from '../../components/Setup/Steps'
import Card from '../../components/Card'
import Layout from '../../components/Setup/Layout'
import { NextPageWithLayout } from '../_app'
import Title from '../../components/Setup/Title'


const Visibility: NextPageWithLayout = () => (
  <>
    <Title>Visibility</Title>

    <Steps activeStep={StepStages.VISIBILITY} />

    <Card>
      <Text>It is up to you: Who shall be able to see your profile on wechange.de?</Text>
    </Card>
  </>
)


Visibility.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export default Visibility
