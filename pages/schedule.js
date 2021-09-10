import Head from 'next/head'
import Page from '../components/page'
import { Table } from 'react-bootstrap'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { leftTooltip } from '../helpers'
import { Col } from 'react-bootstrap'

function makeLink(
  type,
  dest,
  text
) {
  if (type === "mandatory") {
    return (
    <Col className='d-flex justify-content-center pl-3 pr-3' key={dest}>
    {leftTooltip(<a href={dest} target="_blank" key={dest} id="mandatory">
    <FontAwesomeIcon 
        icon={faFilePdf} 
        size="lg"
        key={dest}/>
    </a>, text)}
    </Col>
    );
  }
  if (type === "optional") {
    return (
    <Col className='d-flex justify-content-center pl-3 pr-3' key={dest}>
    {leftTooltip(<a href={dest} target="_blank" key={dest} id="optional">
    <FontAwesomeIcon 
        icon={faFilePdf} 
        size="lg"
        key={dest}/>
    </a>, text)}
    </Col>
    );
  }
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <h2>Schedule</h2>
          <p>The first several weeks of the course schedule is as follows. In the below schedule, blue PDF icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="mandatoryNoHover"/>}) represent required readings for the week, whereas yellow icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="optionalNoHover"/>}) represent optional readings.</p>
          <Table id="tabular">
          <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* WEEK 1 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 1: Introduction</b></td>
              </tr>
              <tr>
                <td>09/10/2021 (Friday)</td>
                <td>Lecture: <a href="/lectures/csc2541_lecture1-intro_to_mlhc.pdf" target="_blank">Introduction and Course Details</a> <i>(Rahul Krishnan)</i></td>
                <td rowSpan="1">
                  {makeLink("mandatory", 
                  "https://www.healthaffairs.org/doi/full/10.1377/hlthaff.2014.0041", 
                  "Big Data In Health Care: Using Analytics... (Bates et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1806.00388.pdf", 
                  "A Review of Challenges and Opportunities... (Ghassemi et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://discovery.ucl.ac.uk/id/eprint/1598/1/A22.pdf", 
                  "Electronic Health Records (Kalra and Ingram)")}
                </td>
              </tr>
              {/* WEEK 2 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 2: Supervised Learning and Survival Analysis</b></td>
              </tr>
              <tr>
                <td>09/13/2021 (Monday)</td>
                <td>Lecture: Supervised Learning in Healthcare I <i>(Rahul Krishnan)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://arxiv.org/abs/1606.00931", 
                  "DeepSurv: Personalized Treatment... (Katzman et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.liebertpub.com/doi/pdfplus/10.1089/big.2015.0020", 
                  "Population-Level Prediction of Type 2... (Razavian et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.ahajournals.org/doi/full/10.1161/01.cir.97.18.1837", 
                  "Prediction of Coronary Heart Disease... (Wilson et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.science.org/doi/full/10.1126/scitranslmed.aab3719", 
                  "A targeted real-time early warning... (Henry et al.)")}
                </td>
              </tr>
              <tr>
                <td>09/15/2021 (Wednesday)</td>
                <td>Lecture: Supervised Learning in Healthcare II <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td>09/17/2021 (Friday)</td>
                <td>Project Planning Session I</td>
              </tr>
              {/* WEEK 3 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 3: Time Series Modeling</b></td>
              </tr>
              <tr>
                <td>09/20/2021 (Monday)</td>
                <td>Lecture: Time Series Modeling in Healthcare I <i>(Rahul Krishnan)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://static1.squarespace.com/static/59d5ac1780bd5ef9c396eda6/t/5b7372dc1ae6cf102e27b7e7/1534292701747/13.pdf", 
                  "Disease-Atlas: Navigating Disease Trajectories... (Lim et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.aaai.org/ocs/index.php/AAAI/AAAI15/paper/view/10015/9966", 
                  "Clustering Longitudinal Clinical Marker... (Schulam et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/1609.09869", 
                  "Structured Inference Networks for Nonlinear... (Krishnan et al.)")}
                </td>
              </tr>
              <tr>
                <td>09/22/2021 (Wednesday)</td>
                <td>Lecture: Time Series Modeling in Healthcare II <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td>09/24/2021 (Friday)</td>
                <td>Project Planning Session II</td>
              </tr>
              {/* WEEK 4 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 4: Disease Progression</b></td>
              </tr>
              <tr>
                <td>09/27/2021 (Monday)</td>
                <td>Guest Lecture <i>(Kristen Severson)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://people.csail.mit.edu/dsontag/papers/WanSonWan_kdd14.pdf", 
                  "Unsupervised Learning of Disease Progression... (Wang et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/2102.11218", 
                  "Neural Pharmacodynamic State Space Modeling (Hussain et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41467-018-05892-0", 
                  "Uncovering the heterogeneity and temporal... (Young et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/1807.04709", 
                  "Inferring Multidimensional Rates of Aging... (Pierson et al.)")}
                </td>
              </tr>
              <tr>
                <td>09/29/2021 (Wednesday)</td>
                <td>Lecture: Disease Progression Modeling <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td>10/01/2021 (Friday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              {/* WEEK 5 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 5: Clinical Natural Language Processing</b></td>
              </tr>
              <tr>
                <td>10/04/2021 (Monday)</td>
                <td>Lecture: Clinical Natural Language Processing <i>(Rahul Krishnan)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1706.03762.pdf", 
                  "Attention Is All You Need (Vaswani et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1810.04805.pdf", 
                  "BERT: Pre-training of Deep Bidirectional... (Devlin et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/abs/1901.08746", 
                  "BioBERT: a pre-trained biomedical language... (Lee et al.)")}
                </td>
              </tr>
              <tr>
                <td>10/06/2021 (Wednesday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              <tr>
                <td>10/08/2021 (Friday)</td>
                <td>Guest Lecture <i>(Monica Agrawal)</i></td>
              </tr>
              {/* WEEK 6 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 6: Medical Imaging</b></td>
              </tr>
              <tr>
                <td>10/11/2021 (Monday)</td>
                <td>Thanksgiving: No Class</td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://arxiv.org/abs/1912.08142", 
                  "Causality matters in medical imaging (Castro et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.ahajournals.org/doi/full/10.1161/CIRCULATIONAHA.118.034338", 
                  "Fully Automated Echocardiogram Interpretation... (Zhang et al.)")}
                   <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1505.04597.pdf", 
                  "U-Net: Convolutional Networks for Biomedical... (Ronneberger et al.)")}
                </td>
              </tr>
              <tr>
                <td>10/13/2021 (Wednesday)</td>
                <td>Lecture: Medical Imaging <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td>10/15/2021 (Friday)</td>
                <td>Guest Lecture <i>(Ruizhi Liao)</i></td>
              </tr>
            </tbody>
          </Table>

        </Page>
    </div>
  )
}
