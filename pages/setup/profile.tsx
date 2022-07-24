import Steps, { StepStages } from '../../components/Setup/Steps'
import Card from '../../components/Card'
import Layout from '../../components/Setup/Layout'
import { NextPageWithLayout } from '../_app'
import ProfileButtons from '../../components/Setup/Profile/ProfileButtons'
import ProfileForm from '../../components/Setup/Profile/ProfileForm'
import Title from '../../components/Setup/Title'
import VStack from '../../layouts/VStack'


const Profile: NextPageWithLayout = () => (
  <>
    <Title>Hey Username!</Title>

    <Steps activeStep={StepStages.PROFILE} />

    <Card>
      <VStack alignItems="flex-start">
        <ProfileForm />

        <ProfileButtons />
      </VStack>
    </Card>
  </>
)


Profile.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)


export default Profile
