import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faAngular, faCss3, faGithub, faHtml5, faLinkedin, faPython, faReact, faVuejs} from '@fortawesome/free-brands-svg-icons'


export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <div className="align">
              {/* CONTACT */}
              <div className="fontstyle">
                <h1><strong>CONTACT</strong></h1>
              </div>
                <p>magcalassean@gmail.com<FontAwesomeIcon icon={faEnvelope} pull="right"/></p>
                <p>0949-615-9157<FontAwesomeIcon icon={faPhone} pull="right"/></p>
                <p>Santa Ana, Pampanga<FontAwesomeIcon icon={faLocationDot} pull="right"/></p>
                <a href=""><p>Linkedin<FontAwesomeIcon icon={faLinkedin} pull="right"/></p></a>
                <a href=""><p>GitHub<FontAwesomeIcon icon={faGithub} pull="right"/></p></a>

              {/* EDUCATION */}
              <div className="fontstyle">
                <h1><strong>EDUCATION</strong></h1>
              </div>
                <p>Bachelor of Science</p>
                <p>In Information Technology</p>
                <p>University Of The Assumption</p>
                <p>2023-2025</p>
                <p>City of San Fernando, Pampanga</p>

              {/* SKILLS */}
              <div className="fontstyle">
                <h1><strong>SKILLS</strong></h1>
              </div>
                <p>HTML and CSS<FontAwesomeIcon icon={faHtml5} pull="right"/><FontAwesomeIcon icon={faCss3} pull="right"/></p>
                <p>Python<FontAwesomeIcon icon={faPython} pull="right"/></p>
                <p>React JS<FontAwesomeIcon icon={faReact} pull="right"/></p>
                <p>Vue JS<FontAwesomeIcon icon={faVuejs} pull="right"/></p>
                <p>Angular<FontAwesomeIcon icon={faAngular} pull="right"/></p>
            </div>
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}


function Header() {
  return (
    <div className="fontstyle">
      <h1>Sean Glenn Magcalas</h1>
      <h2><em>Director of Software Engineer</em></h2>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h1>WORK EXPERIENCE</h1>
      <h3>Software Engineer</h3>
      <h4>Google</h4>
      <h4>2035-Current / Mountain View, California, United States</h4>
      <ul>
        <li>Worked with different product managers to re-build a multi-page web app into a single page web-app, boosting yearly revenue by $1.2 million.</li>
        <li>Constructed the logic for a streamlined ad-serving platform that scaled to our 35M users, which improved the page speed by 18%.</li>
        <li>Tested multiple software for bugs and improved operating speed, fixing bugs and documenting processes to increase efficiency by 20%.</li>
        <li>Iterated platform for University admissions, collaborating with a group of multiple engineers to create features across the software.</li>
      </ul>

      <h3>Software Engineer</h3>
      <h4>Opera</h4>
      <h4>2030-2035 / Mountain View, California, United States</h4>
      <ul>
        <li>Worked with different product managers to re-build a multi-page web app into a single page web-app, boosting yearly revenue by $1.2 million.</li>
        <li>Constructed the logic for a streamlined ad-serving platform that scaled to our 35M users, which improved the page speed by 18%.</li>
        <li>Tested multiple software for bugs and improved operating speed, fixing bugs and documenting processes to increase efficiency by 20%.</li>
        <li>Iterated platform for University admissions, collaborating with a group of multiple engineers to create features across the software.</li>
      </ul>

      <h3>Software Developer</h3>
      <h4>Iphitech</h4>
      <h4>2025-2030 / Mountain View, California, United States</h4>
      <ul>
        <li>Worked with different product managers to re-build a multi-page web app into a single page web-app, boosting yearly revenue by $1.2 million.</li>
        <li>Constructed the logic for a streamlined ad-serving platform that scaled to our 35M users, which improved the page speed by 18%.</li>
        <li>Tested multiple software for bugs and improved operating speed, fixing bugs and documenting processes to increase efficiency by 20%.</li>
        <li>Iterated platform for University admissions, collaborating with a group of multiple engineers to create features across the software.</li>
      </ul>

    </div>
  );
}


