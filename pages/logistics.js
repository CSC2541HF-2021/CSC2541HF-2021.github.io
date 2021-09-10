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
            <li><b>5%</b>: Participation (attendance and engagement)</li>
            <li><b>15%</b>: Paper Summary Assignment (completed individually)</li>
            <li><b>15%</b>: Paper Presentations (completed in pairs)</li>
            <li><b>10%</b>: Project Proposal (completed in project groups)</li>
            <li><b>15%</b>: Project Presentation (completed in project groups)</li>
            <li><b>40%</b>: Project Final Report (completed in project groups)</li>
          </ul>
          <br></br>
          <h2>FAQ</h2>
          <h5>Will this class provide me with compute for my final project?</h5>
          <p>As a graduate-level course, we are assuming that most students in this class have a laboratory affiliation which grants them access to computing resources which they may use for the purposes of this class. If you do not have access to compute via a laboratory affiliation, please consider using <a href="https://research.google.com/colaboratory/">Google Colab</a> to run your experiments, or contact the teaching staff <b>as early as possible</b> and we will do our best to provide some for you.</p>
        </Page>
    </div>
  )
}
