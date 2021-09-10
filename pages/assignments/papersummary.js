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
            <MDPage slug="assignments/papersummary.md"></MDPage>
            <Table bordered id="tabular">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Demonstrates sophisticated knowledge of the context behind each paper.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Clearly discusses the motivation behind each paper, and the way in which the paper defined the problem..</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Shows sophisticated knowledge of the nuances of the approach behind each paper’s technique.</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>Discussion of research implications - including a clear-eyed discussion of where each paper’s drawbacks may limit the research implications or applications of the work.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Remains within the page limit.</td>
                <td>10%</td>
              </tr>
            </tbody>
          </Table>
        </Page>
    </div>
  )
}

