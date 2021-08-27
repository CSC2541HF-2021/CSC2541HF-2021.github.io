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
          <p>Logistics Coming Soon!</p>
          <br></br>
        </Page>
    </div>
  )
}
