import Head from 'next/head'
import Page from '../../components/page'
import MDPage from '../../components/mdpage'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
            <MDPage slug="assignments/projectproposal.md"></MDPage>
        </Page>
    </div>
  )
}

