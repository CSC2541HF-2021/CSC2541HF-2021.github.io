import Head from 'next/head'
import Page from '../components/page'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <h2>Coursework</h2>
          <h5>Prerequisites</h5>
          <p>The course prerequisites include a working knowledge of linear algebra and probability theory, and mastery of the material in Introduction to Machine Learning (CSC2515).</p>
          <h5>Grading</h5>
          <p>Your grade in this course will be composed of the following evaluations:</p>
          <ul>
            <li><b>5%</b>: Class participation (attendance and engagement)</li>
            <li><b>15%</b>: Paper Summary Assignment (completed individually)</li>
            <li><b>15%</b>: Paper Presentations (completed in pairs)</li>
            <li><b>10%</b>: Project Proposal (completed in project groups)</li>
            <li><b>15%</b>: Project Presentation (completed in project groups)</li>
            <li><b>40%</b>: Project Final Report (completed in project groups)</li>
          </ul>
          <br></br>
          <h2>FAQ</h2>
          <p>FAQ coming soon!</p>
          <br></br>
        </Page>
    </div>
  )
}
