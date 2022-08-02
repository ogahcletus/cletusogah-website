import { VerticalTimeline, VerticalTimelineElement } from  'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css' ;
import SchoolIcon from '@material-ui/icons/School';



import React from 'react'
import '../styles/Certifications.css';

function Certifications() {
  return (
    <div className="certifications">
        <VerticalTimeline  lineColor={'#0000FF'}>
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1981-1986'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Primary School Education Certification</h3>
        <p>Army Children Primary School, Rukuba Cantonment, JOS, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1986-1989'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Junior Secodary School Education Certification(JSCE)</h3>
        <p>Command Secondary School, Ikeja Cantonment, LAGOS, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1989-1992'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Senior Secondary School Education Certification(SSCE)</h3>
        <p>Command Day Secondary School, Ikeja Cantonment, LAGOS, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'1994-2000'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Bachelors of Engineering (B.Eng)</h3>
        <h4>Chemical Engineering(2.1)</h4>
        <p>Ahmadu Bello University, ZARIA, NIGERIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'March 2, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>JavaScript Algorithms and Data Structures</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/javascript-algorithms-and-data-structures</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'April 16, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Web Responsive Design</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/responsive-web-design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'May 7, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Front-End Development Libraries</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/front-end-development-libraries</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'June 23, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Back-End Development Libraries and APIs</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Quincy Larson, Executive Director, freeCodeCamp.org</h5>
        <p>Verify this certification at https://freecodecamp.org/certification/ogahcletus2021/back-end-development-and-apis</p>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'July 10, 2022'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Node.JS Master Class</h3>
        <h4>Professional certification</h4>
        <h5>Issued by Pirple.com online Coding Academy</h5>
        <p>Verify this certification at https://www.pirple.com/certificates/vndfle3tws</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'September 2019- August, 2021'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Project Managements Professional Certificates</h3>
        <ul className='projectmanagement'>
          <li>Project Management Essentials, Management & Strategy Institute, USA (online), September, 2019</li>
          <li>Improve Efficiency in Asana for Project Managers, Coursera Project Network, July, 2021</li>
          <li>Foundations of Project Management, Google Skills Academy via Coursera, July, 2021</li>
          <li>Initiating and Planning Projects, University of California, Irvine, USA via Coursera, July, 2021</li>
          <li>Project Initiation: Starting a Successful Project, Google Skills Academy via Coursera, July, 2021</li>
          <li>Project Planning: Putting It All Together, Google Skills Academy via Coursera, July, 2021</li>
          <li>Project Execution: Running the Project, Google Skills Academy via Coursera, July, 2021</li>
          <li>AGILE project Management, Google Skills Academy via Coursera, July, 2021</li>
          <li>Capstone: Applying Project Management in the Real World, Google Skills Academy via Coursera, August, 2021</li>
          <li>Google Project Management Professional, Google Skills Academy via Coursera</li>
        </ul>  
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'August 2021'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Data Analysis Professional Certificates</h3>
        <ul className="dataAnalysis">
          <li>Introduction to Data Analytics, IBM Academy, USA via Coursera, August, 2021</li>
          <li>Excel Basics for Data Analysis, IBM Academy, USA via Coursera, August, 2021</li>
          <li>Data Analysis and Visualization Foundations, IBM Academy, USA via Coursera, August, 2021</li>
          <li>Data Visualization and Dashboards with Excel and Cognos, IBM Academy, USA via Coursera, August, 2021</li>
        </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'August 2021 - December, 2021'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Fintech & Blockchain Technologies</h3>
        <ul className="FintechBlockchain">
           <li>Blockchain: Foundations and Use Cases, ConsenSys Academy, USA via Coursera, September, 2021</li>
           <li>Blockchain Basics, University at Buffalo, The State University. New York City, USA via Coursera, August, 2021</li>
           <li>Application of AI, InsurTech, and Real Estate Technology, Wharton Business School, University of Pennsylvania, USA via Coursera, August, 2021</li>
           <li>Cryptocurrency and Blockchain: An Introduction to Digital, Wharton Business School, University of Pennsylvania, August, 2021</li>
           <li>FinTech: Foundations, Payments, and Regulations, Wharton Business School, University of Pennsylvania, USA via Coursera, August, 2021</li>
           <li>Lending, Crowdfunding, and Modern Investing, Wharton Business School, University of Pennsylvania, USA via Coursera, August, 2021</li>
           <li>FinTech Disruptive Innovation: Implications for Society, The Hong Kong University of Science and Technology via Coursera, December, 2021</li>
           <li>FinTech Foundations and Overview, The Hong Kong University of Science and Technology via Coursera, November, 2021</li>
           <li>FinTech: Finance Industry Transformation and Regulation, The Hong Kong University of Science and Technology via Coursera, December, 2021</li>
           <li>FinTech Risk Management, The Hong Kong University of Science and Technology via Coursera, December, 2021</li>
           <li>FinTech Security and Regulation (RegTech), The Hong Kong University of Science and Technology via Coursera, December, 2021</li>
        </ul>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'August, 2021'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Professional Workplace Skills</h3>
        <ul className="workplace">
            <li>Emotional and Social Intelligence, University of California, Davis, USA via Coursera, August, 2021</li>
            <li>Critical Thinking Skills for the Professional, University of California, Davis, USA via Coursera, August, 2021</li>
            <li>Adaptability and Resiliency, University of California, Davis, USA via Coursera, August, 2021</li>
            <li>The Growth Mindset, University of California, DavisUSA via Coursera, August, 2021</li>
            <li>Professional Skills for the Workplace, University of California, Davis, USA via Coursera, August, 2021</li>

        </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element-education" 
        date={'August, 2021'}
        iconStyle={{background : '#0000FF' , color: '#FFFFFF'}} 
        icon={<SchoolIcon />}>
        <h3>Leadership & Negotiation Skills</h3>
        <ul className="leadership">
           <li>Building Your Leadership Skills, HEC Business schol, Paris via Coursera, September, 2021</li> 
           <li>Negotiation Fundamentals, ESSEC Business School, Paris via Coursera, August, 2021</li>
           <li>International and Cross-Cultural Negotiation, ESSEC Business School, Paris via Coursera, August, 2021</li>
           <li>Mediation and Conflict Resolution, ESSEC Business School, Paris via Coursera, September, 2021</li>

        </ul>
        </VerticalTimelineElement>

        </VerticalTimelineElement>
      </VerticalTimeline>


    </div>
  )
}

export default Certifications