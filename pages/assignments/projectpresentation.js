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
            <MDPage slug="assignments/projectpresentation.md"></MDPage>
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
                <td>20%</td>
              </tr>
              <tr>
                <td>Clearly explains at least one of the main ideas of your project/paper.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Creates a compelling visual representation of the main idea. (This must be a novel visual that you have created for the purpose of your paper and presentation and not something you pulled from a related paper - powerpoint diagrams work great).</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Explains planned experiments and/or results. Discussion of what the medical machine learning community might stand to learn and gain from these experiments and/or limitations of this work.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Finish under time (5 minutes).</td>
                <td>10%</td>
              </tr>
            </tbody>
          </Table>
        </Page>
    </div>
  )
}

