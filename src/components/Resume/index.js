import React from 'react';

import { faNodeJs, faPython, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
	return (
		<div className='about-page'>
			<div className = "skills">
			<p>
                I possess a robust technical skill set with a strong foundation in both front-end and back-end development. My expertise includes:
            </p>
            <ul>
                <li>
                    <strong>JavaScript</strong>: Proficient in writing clean, efficient, and scalable code using JavaScript. I have experience building interactive user interfaces and handling complex logic in web applications.
                </li>
                <li>
                    <strong>Python</strong>: Skilled in Python for a variety of applications, ranging from web development to creating video games. I leverage Python’s versatility to create efficient solutions for diverse problems.
                </li>
                <li>
                    <strong>Node.js</strong>: Adept in server-side development using Node.js, enabling the creation of fast, scalable network applications. My experience includes building RESTful APIs and handling asynchronous operations.
                </li>
                <li>
                    <strong>SQL</strong>: Knowledgeable in SQL for database management and querying. I utilize SQL to design, implement, and maintain relational databases, ensuring data integrity and optimized performance.
                </li>
                <li>
                    <strong>MongoDB</strong>: Experienced in using MongoDB, a NoSQL database, for managing large sets of unstructured data. I am skilled in creating efficient schemas, handling complex queries, and optimizing database performance.
                </li>
                <li>
                    <strong>React</strong>: Proficient in building dynamic and responsive web applications using React. I have hands-on experience in component-based architecture and state management.
                </li>
            </ul>
			
				</div>
			<div className='stage-cube-cont'>
		
           
				<div className='cubespinner'>
					<div className='face1'>
						<FontAwesomeIcon icon={faNodeJs} color='#3c873a' />
					</div>
					<div className='face2'>
						<FontAwesomeIcon icon={faHtml5} color='#F06529' />
					</div>
					<div className='face3'>
						<FontAwesomeIcon icon={faPython} color='#ffde57' />
					</div>
					<div className='face4'>
						<FontAwesomeIcon icon={faReact} color='#5ED4F4' />
					</div>
					<div className='face5'>
						<FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
					</div>
					<div className='face6'>
						<FontAwesomeIcon icon={faGithub} color='#211F1F' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;

//cube animation Source: https://www.youtube.com/watch?v=bmpI252DmiI&t=737s
