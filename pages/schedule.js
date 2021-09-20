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
          <p>The first several weeks of the course schedule is as follows. In the below schedule, blue PDF icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="mandatoryNoHover"/>}) represent required readings for the week, whereas yellow icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="optionalNoHover"/>}) represent optional readings. Highlighted cells indicate that a course deliverable is due on that date.</p>
          <p>Lecture slides can be found linked below; lecture recordings can be found on Quercus.</p>
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
                <td>Lecture: <a href="/lectures/csc2541_lecture2-sup_learning1.pdf" target="_blank">Supervised Learning in Healthcare I</a> <i>(Rahul Krishnan)</i></td>
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
                  {makeLink("optional",
                  "https://www.nature.com/articles/nature21056",
                  "Dermatologist-level classification of skin cancer... (Esteva et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://www.science.org/doi/full/10.1126/scitranslmed.aab3719", 
                  "A targeted real-time early warning... (Henry et al.)")}
                  <br></br>
                  {makeLink("optional",
                  "https://data.princeton.edu/wws509/notes/c7.pdf",
                  "Survival Models (Rodriguez)")}
                  <br></br>
                  {makeLink("optional",
                  "https://www.nature.com/bjc/articles?type=tutorial-paper",
                  "Survival Analysis Tutorial (Clark, Bradburn, et al.)")}
                </td>
              </tr>
              <tr>
                <td>09/15/2021 (Wednesday)</td>
                <td>Lecture: <a href="/lectures/csc2541_lecture3-sup_learning2.pdf" target="_blank">Supervised Learning in Healthcare II</a> <i>(Rahul Krishnan)</i></td>
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
                <td>Lecture: <a href="lectures/csc2541_lecture4-ts_learning1.pdf" target="_blank">Time Series Modeling in Healthcare I</a> <i>(Rahul Krishnan)</i></td>
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
                  <br></br>
                  {makeLink("optional",
                  "https://arxiv.org/pdf/1909.07782.pdf",
                  "Interpolation-Prediction Networks for Irregularly... (Shukla et al.)")}
                  <br></br>
                  {makeLink("optional",
                  "http://www.marzyehghassemi.com//wp-content/uploads/2016/10/JAMIA_2016_Ghassemi_Wu_Understanding_vasopressor_interventions.pdf",
                  "Understanding vasopressor intervention and... (Wu, Ghassemi et al.)")}
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
                  <br></br>
                  {makeLink("optional", 
                  "https://people.csail.mit.edu/dsontag/papers/WanSonWan_kdd14.pdf", 
                  "Unsupervised Learning of Disease Progression... (Wang et al.)")}
                  <br></br>
                  {makeLink("optional",
                  "https://www.nature.com/articles/s41598-019-49656-2",
                  "Machine learning for comprehensive forecasting... (Fisher et al.)")}
                </td>
              </tr>
              <tr>
                <td>09/29/2021 (Wednesday)</td>
                <td>Lecture: Disease Progression Modeling <i>(Rahul Krishnan)</i></td>
              </tr>
              <tr>
                <td id="deadlineTableRow">10/01/2021 (Friday)</td>
                <td id="deadlineTableRow">Student Paper Presentations
                  <br></br>
                  <b>Project Proposal Assignment Due</b>
                </td>
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
                  {makeLink("optional", 
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
              {/* WEEK 7 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 7: Interpretability</b></td>
              </tr>
              <tr>
                <td>10/18/2021 (Monday)</td>
                <td>Lecture: Interpretability <i>(Rahul Krishnan)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1810.03993.pdf", 
                  "Model Cards for Model Reporting (Mitchell et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/1810.08810.pdf", 
                  "The Frontiers of Fairness... (Chouldechova and Roth)")}
                  <br></br>
                  {makeLink("mandatory",
                  "https://dl.acm.org/doi/10.1145/2783258.2788613",
                  "Intelligible Models for Healthcare: ... (Caruana et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://arxiv.org/pdf/1803.09010.pdf", 
                  "Datasheets for Datasets (Gebru et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://arxiv.org/pdf/1705.07874.pdf", 
                  "A Unified Approach to Interpreting Model... (Lundberg and Lee)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://arxiv.org/pdf/1703.04730.pdf", 
                  "Understanding Black-box Predictions via... (Koh and Liang)")}
                </td>
              </tr>
              <tr>
                <td>10/20/2021 (Wednesday)</td>
                <td>Lecture: Guest Lecture <i>(Michael Fralick)</i></td>
              </tr>
              <tr>
                <td>10/22/2021 (Friday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              {/* WEEK 8 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 8: Fairness</b></td>
              </tr>
              <tr>
                <td>10/25/2021 (Monday)</td>
                <td>Guest Lecture <i>(Irene Chen)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://www.science.org/doi/abs/10.1126/science.aax2342", 
                  "Dissecting racial bias in an algorithm... (Obermeyer et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.acpjournals.org/doi/10.7326/M18-1990", 
                  "Ensuring Fairness in Machine Learning to... (Rajomar et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://arxiv.org/pdf/1805.12002.pdf", 
                  "Why Is My Classifier Discriminatory? (Chen et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://jamanetwork.com/journals/jamadermatology/article-abstract/2688587", 
                  "Machine Learning and Health Care Disparities... (Adamson and Smith)")}
                </td>
              </tr>
              <tr>
                <td>10/27/2021 (Wednesday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              <tr>
                <td id="deadlineTableRow">10/29/2021 (Friday)</td>
                <td id="deadlineTableRow">Student Paper Presentations
                  <br></br>
                  <b>Paper Summary Assignment Due</b>
                </td>
              </tr>
              {/* WEEK 9 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 9: Clinical Trials</b></td>
              </tr>
              <tr>
                <td>11/01/2021 (Monday)</td>
                <td>Lecture: Clinical Trials <i>(Rahul Krishnan)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://trialsjournal.biomedcentral.com/articles/10.1186/s13063-021-05489-x", 
                  "The role of machine learning in clinical research... (Weissler et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41586-021-03430-5", 
                  "Evaluating eligibility criteria of oncology... (Liu et al.)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://arxiv.org/pdf/2003.06474.pdf", 
                  "Optimizing Medical Treatment for Sepsis in... (Li et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://www.nature.com/articles/s41746-019-0148-3", 
                  "Artificial intelligence and machine learning in clinical... (Shah et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://www.nature.com/articles/s41591-018-0310-5", 
                  "Guidelines for reinforcement learning in healthcare (Gottesman et al.)")}
                </td>
              </tr>
              <tr>
                <td>11/03/2021 (Wednesday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              <tr>
                <td>11/05/2021 (Friday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              {/* WEEK 10 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 10: Reading Week (No Classes)</b></td>
              </tr>
              <tr>
                <td colSpan="3" align="center"></td>
              </tr>
              {/* WEEK 11 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 11: Causality and Missingness</b></td>
              </tr>
              <tr>
                <td>11/15/2021 (Monday)</td>
                <td>Lecture: Causality and Missingness <i>(Rahul Krishnan)</i></td>
                <td rowSpan="3" style={{verticalAlign: "middle"}}>
                {makeLink("mandatory", 
                  "https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/", 
                  "Causal Inference: What If. (Chapter 1) (Hernan and Robins)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.inference.vc/causal-inference-3-counterfactuals/", 
                  "Causal Inference 3: Counterfactuals (Huszar)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.tandfonline.com/doi/full/10.1080/01621459.2021.1874961", 
                  "Graphical Models for Processing Missing Data (Mohan and Pearl)")}
                  <br></br>
                  {makeLink("mandatory", 
                  "https://www.nature.com/articles/s41598-018-24271-9", 
                  "Recurrent Neural Networks for Multivariate Time... (Che et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://arxiv.org/pdf/1606.03976.pdf", 
                  "Estimating individual treatment effect: ... (Shalit et al.)")}
                  <br></br>
                  {makeLink("optional", 
                  "https://academic.oup.com/ectj/article/21/1/C1/5056401", 
                  "Double/debiased machine learning for... (Chernozhukov et al.)")}
                </td>
              </tr>
              <tr>
                <td>11/17/2021 (Wednesday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              <tr>
                <td>11/19/2021 (Friday)</td>
                <td>Student Paper Presentations</td>
              </tr>
              {/* WEEK 12 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 12: Student Presentations</b></td>
              </tr>
              <tr>
                <td>11/22/2021 (Monday)</td>
                <td>Student Paper Presentations</td>
                <td></td>
                {/* <td rowSpan="3" style={{verticalAlign: "middle"}}></td> */}
              </tr>
              <tr>
                <td>11/24/2021 (Wednesday)</td>
                <td>Student Paper Presentations</td>
                <td></td>
              </tr>
              <tr>
                <td>11/26/2021 (Friday)</td>
                <td>Student Project Presentations</td>
                <td></td>
              </tr>
              {/* WEEK 13 */}
              <tr>
                <td colSpan="3" align="center"><b>Week 13: Student Presentations</b></td>
              </tr>
              <tr>
                <td>11/29/2021 (Monday)</td>
                <td>Student Project Presentations</td>
                {/* <td rowSpan="3" style={{verticalAlign: "middle"}}></td> */}
                <td></td>
              </tr>
              <tr>
                <td>12/01/2021 (Wednesday)</td>
                <td>Student Project Presentations</td>
                <td></td>
              </tr>
              <tr>
                <td>12/03/2021 (Friday)</td>
                <td>Student Project Presentations</td>
                <td></td>
              </tr>
            {/* WEEK 13 */}
            <tr>
                <td colSpan="3" align="center"><b>Week 14: Student Presentations</b></td>
              </tr>
              <tr>
                <td>12/06/2021 (Monday)</td>
                <td>Student Project Presentations</td>
                {/* <td rowSpan="3" style={{verticalAlign: "middle"}}></td> */}
                <td></td>
              </tr>
              <tr>
                <td id="deadlineTableRow">12/01/2021 (Wednesday)</td>
                <td id="deadlineTableRow">Student Project Presentations; Course Wrap-Up
                  <br></br>
                  <b>Project Final Report Due</b>
                </td>
                <td id="deadlineTableRow"></td>
              </tr>
            </tbody>
          </Table>

{/* 
Week 12: 
M N22 :  2 presenters 
W N24 -  2 presenters
F  N26 - Group -1/0


Week 13: Group presentations begin
M N29 - Group 1/2
W D1  - Group 3/4
F  D3  - Group 5/6

Week 14: Project report due
M D6   - Group 7/8
W D8  - Group 9 & course recap - Deadline for project report
 */}

        </Page>
    </div>
  )
}
