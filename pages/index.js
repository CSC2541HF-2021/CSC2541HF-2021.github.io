import Head from 'next/head'
import Page from '../components/page'
import CourseStaff from '../components/coursestaff'
import CourseOverview from '../components/courseoverview'
import CourseDescription from '../components/coursedescription'
import ConvNetDemo from '../components/classifier_demo/demo'
import { Alert } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <br></br>
          <h2>Welcome to CSC2541: Machine Learning for Healthcare! &#128075;&#65039;</h2>

          <ConvNetDemo/>
          <br></br>

          {/* Alert for completing the prerequisite quiz. */}
          <Alert variant="info">
            Please complete <Alert.Link href="https://forms.gle/hh5DSS1xAuLFwbEU8" target="_blank">the prerequisite quiz</Alert.Link> before Sunday, September 12, 2021, at 11:59PM ET.
          </Alert>

          <h3>The Essentials</h3>
          <CourseOverview/>
          <br></br>

          <h3>Course Description</h3>
          <CourseDescription/>
          <br></br>

          <h3>Teaching Staff</h3>
          <CourseStaff/>
          <br></br>

        </Page>
    </div>
  )
}
