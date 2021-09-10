import Head from 'next/head'
import Page from '../../components/page'
import { Table } from 'react-bootstrap'
import MDPage from '../../components/mdpage'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
            <MDPage slug="assignments/paperpresentation.md"></MDPage>
            <Table bordered id="tabular">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clearly motivates and defines the problem.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Briefly mentions, discusses related work.</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>If applicable, presents requisite background on the techniques implemented in the paper.</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Clearly explains at least one the main ideas from the paper.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Creates a compelling new visual representation of the main idea.</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Explains the experiments and/or results. Discussion of what the medical machine learning community stands to gain from this work, and/or limitations of the work.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Finish under time (25 minutes).</td>
                <td>10%</td>
              </tr>
            </tbody>
          </Table>
        </Page>
    </div>
  )
}

