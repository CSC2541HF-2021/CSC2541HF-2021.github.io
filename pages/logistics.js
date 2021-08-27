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
          <h2>Logistics</h2>
          <p>Logistics Coming Soon!</p>
          <br></br>
          <h2>FAQ</h2>
            <h5>Q: What are the course prerequisites?</h5>
            <p>The course prerequisites include a working knowledge of linear algebra and probability theory, and mastery of the material in Introduction to Machine Learning (CSC2515).</p>
          <br></br>
        </Page>
    </div>
  )
}
