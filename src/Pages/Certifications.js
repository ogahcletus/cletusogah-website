import { VerticalTimeline, VerticalTimelineElement } from  'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css' ;
import SchoolIcon from '@material-ui/icons/School';



import React from 'react'
import '../styles/Certifications.css';

function Certifications() {
  return (
    <div className="certifications">
        <VerticalTimeline  lineColor={'#3e497a'}>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1981-1986'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Primary School Education Certification</h3>
        <p>Army Children Primary School, Rukuba Cantonment, JOS, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1986-1989'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Junior Secodary School Education Certification(JSCE)</h3>
        <p>Command Secondary School, Ikeja Cantonment, LAGOS, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1989-1992'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Senior Secondary School Education Certification(SSCE)</h3>
        <p>Command Day Secondary School, Ikeja Cantonment, LAGOS, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1994-2000'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Bachelors of Engineering (B.Eng)</h3>
        <h4>Chemical Engineering(2.1)</h4>
        <p>Ahmadu Bello University, ZARIA, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'March 2, 2022'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>JavaScript Algorithms and Data Structures</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/javascript-algorithms-and-data-structures</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'April 16, 2022'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Web Responsive Design</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/responsive-web-design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'May 7, 2022'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Front-End Development Libraries</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/front-end-development-libraries</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'June 23, 2022'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Back-End Development Libraries and APIs</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/back-end-development-and-apis</p>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'July 10, 2022'}
        iconStyle={{background : '#3e497a' , color: '#ADD8E6'}} 
        icon={<SchoolIcon />}>
        <h3>Node.JS Master Class</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Pirple.com online Coding Academy</h5>
        <p>Verify this certification at https://www.pirple.com/certificates/vndfle3tws</p>
        </VerticalTimelineElement>
      </VerticalTimeline>


    </div>
  )
}

export default Certifications