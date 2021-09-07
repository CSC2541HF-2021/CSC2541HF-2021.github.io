import {Row, Col} from 'react-bootstrap'
import { instructorProfile, instructorProfileImgName } from '../helpers';


export default function CourseStaff() {
    return (
        <>
        <Row>
            <Col><b>Instructor</b></Col>
            <Col><b>Teaching Assistants</b></Col>
        </Row>
        <br></br>
        <Row>
            <Col>
                <Row>
                    <Col style={{maxWidth: '50%'}}></Col>
                    <Col className='justify-content-left'>
                        {instructorProfile(
                            "Rahul Krishnan", 
                            "images/rahul.png",
                            "http://www.cs.toronto.edu/~rahulgk",
                            "cs.toronto.edu",
                            "rahulgk")}
                    </Col>
                    <Col style={{maxWidth: '50%'}}></Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col>
                {instructorProfile(
                        "Michael Cooper", 
                        "images/michael.jpg",
                        "https://michaeljohncooper.com",
                        "cs.toronto.edu",
                        "coopermj")}
                    </Col>
                    <Col>
                    {instructorProfileImgName(
                        "Farnam Mansouri", 
                        "images/farnam.jpg")}
                    </Col>
                </Row>
            </Col>
        </Row>

        </>
    );

}
