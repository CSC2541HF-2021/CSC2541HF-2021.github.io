import {Row, Col} from 'react-bootstrap'
import { instructorProfile } from '../helpers';


export default function CourseOverview() {
    return (
        <>
        <div>
            <b>Instructor: </b>
            <a href="http://www.cs.toronto.edu/~rahulgk/" target="_blank">Dr. Rahul Krishnan</a>
        </div>

        <div>
            <b>Time: </b> M/W/F 1:00PM - 2:00PM
        </div>
        <div>
            <b>Location: </b> TBA
        </div>
        </>
    );

}
