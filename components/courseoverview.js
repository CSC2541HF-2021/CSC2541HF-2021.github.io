import { Card } from 'react-bootstrap';


export default function CourseOverview() {
    return (
        <>
        <Card style={{ width: '100%', border: "2px solid"}}>
        <Card.Body id="card">
        <div>
            <b>Instructor: </b>
            <a href="http://www.cs.toronto.edu/~rahulgk/" target="_blank">Dr. Rahul Krishnan</a>
        </div>

        <div>
            <b>Time: </b> M/W/F 1:00PM - 2:00PM.
        </div>
        <div>
            <b>Location: </b> Online before 9/17/2021; <a href="https://goo.gl/maps/hM9tdKGegjp6dbSV7" target="_blank">UC 85</a> afterwards.
        </div>
        </Card.Body>
        </Card>
        
        </>
    );

}
