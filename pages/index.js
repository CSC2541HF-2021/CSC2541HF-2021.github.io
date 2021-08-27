import Head from 'next/head'
import Page from '../components/page'
import CourseStaff from '../components/coursestaff'
import CourseOverview from '../components/courseoverview'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <br></br>
          <h2>Welcome to CSC2541! &#128075;&#65039;</h2>
          <br></br>

          <h3>The Essentials</h3>
          <CourseOverview/>
          <br></br>

          <h3>Course Description</h3>
          <br></br>

          <h3>Teaching Staff</h3>
          <CourseStaff/>
          <br></br>

        </Page>
    </div>
  )
}
