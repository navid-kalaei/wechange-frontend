import Steps, { StepStages } from '../../components/Setup/Steps'
import Card from '../../components/Card'
import ContactButtons from '../../components/Setup/Contact/ContactButtons'
import ContactForm from '../../components/Setup/Contact/ContactForm'
import Layout from '../../components/Setup/Layout'
import { NextPageWithLayout } from '../_app'
import Title from '../../components/Setup/Title'
import VStack from '../../layouts/VStack'


const Contact: NextPageWithLayout = () => (
  <>
    <Title>Contact</Title>

    <Steps activeStep={StepStages.CONTACT} />

    <Card>
      <VStack alignItems="flex-start">
        <ContactForm />

        <ContactButtons />
      </VStack>
    </Card>
  </>
)


Contact.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export default Contact
