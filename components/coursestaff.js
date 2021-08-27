import {Row, Col} from 'react-bootstrap'
import { instructorProfile } from '../helpers';


export default function CourseStaff() {
    return (
        <>
        <Row>
            <Col><b>Instructor</b></Col>
            <Col><b>Teaching Assistant</b></Col>
        </Row>
        <br></br>
        <Row>
            <Col className='justify-content-left'>
                {instructorProfile(
                    "Rahul Krishnan", 
                    "images/rahul.png",
                    "http://www.cs.toronto.edu/~rahulgk",
                    "cs.toronto.edu",
                    "rahulgk")}
            </Col>
            <Col>
            {instructorProfile(
                    "Michael Cooper", 
                    "images/michael.jpg",
                    "https://michaeljohncooper.com",
                    "cs.toronto.edu",
                    "coopermj")}
            </Col>
        </Row>

        </>
    );

}
