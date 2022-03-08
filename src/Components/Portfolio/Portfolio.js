import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import Experience from "./Experience";

const Portfolio = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="mt-2">
            <Intro>
              <div>
                <img src="/assets/images/IMG_0943.jpeg" />
                <br />
                <br />
                <text>Parjanya H. Modi</text>
                <br />
                <span>Engineering Undergrad</span>
                <br />
                <span className="purple-hg">
                  reactJS | nodeJS | C | Python | HTML | CSS | JS | SQL & NoSQL
                </span>
                <br />
              </div>
            </Intro>
          </div>
          <hr />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Summary>
            <div>
              <span className="yellow-hg">Profile Summary</span>
              <ul>
                <li>
                  Organized, energetic and dependable individual who strives for
                  excellence in the field of work that I engage myself in.
                  Observation, kindness and resilience are some of my defining
                  attributes.
                </li>
                <li>
                  2+ Years of experience in MERN Stack Web Development, Cloud
                  Solutions, Computer Networks & UI/UX Designing.
                </li>
                <li>
                  Exposure to AWS Web Services, Google Cloud, Azure Services,
                  Databases, Web Servers, Network Load Balancers, JavaScript &
                  TypeScript.
                </li>
              </ul>
            </div>
          </Summary>
          <hr />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <Timeline>
                <span className="yellow-hg">Education</span>
                <ul>
                  <li>
                    <text>
                      Bachelor Of Engineering | B.M.S College of Engineering
                    </text>
                    <br />
                    <i className="alignright">Aug ’19 – Aug '23</i>
                    <br />

                    <ul>
                      <li>
                        Bachelor of Engineering in Computer Science &
                        Engineering – B.M.S College of Engineering, Autonomous
                        Institute Affiliated by VTU (CGPA – 7)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>
                      SSC & HSC | Shree C. C. Shah Sarvajanik English Medium
                      High School
                    </text>
                    <br />
                    <i className="alignright">June ’07 – March '19</i>
                    <br />

                    <ul>
                      <li>
                        Secondary & Higher Secondary Education in Science Stream
                        with Computer Science.
                      </li>
                    </ul>
                  </li>
                </ul>
              </Timeline>
            </div>
            <div className="col-md-6">
              <Timeline>
                <span className="yellow-hg">Experience</span>
                <ul>
                  <li>
                    <text>Freelancer </text>
                    <br />
                    <i className="alignright">Oct ’19 – Present</i>
                    <br />

                    <ul>
                      <li>Developed responsive Websites.</li>
                      <li>
                        Established Enterprise Level Networks and worked with
                        Linux servers and configured networks using
                        Cisco/TP-Link L2 & L3 Switch and VPN Routers.
                      </li>
                      <li>Worked with HTML, JS & CSS with LAMP Stack.</li>
                    </ul>
                  </li>
                  <li>
                    <text>Technical Lead | IUCEE BMSCE</text>
                    <br />
                    <i className="alignright">Aug ’21 – Present</i>
                    <br />

                    <ul>
                      <li>
                        Contributed to the field of IT management and technical
                        development of the student community through this club.
                      </li>
                      <li>
                        {" "}
                        Spread my knowledge to other students via this platform.
                      </li>
                      <li>
                        {" "}
                        Developed Website using MERN Stack{" "}
                        <a href="https://iucee-bmsce.live" target="_blank">
                          iucee-bmsce.live
                        </a>{" "}
                        .
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Web Development Intern | Bullspree</text>
                    <br />
                    <i className="alignright">Apr ’21 – Jun ’21</i>
                    <br />

                    <ul>
                      <li>
                        Developed a responsive Website bullspree.com using HTML,
                        JS & CSS with MERN Stack.
                      </li>
                      <li>
                        Set up their Mailing system and Backend Server on AWS
                        Cloud (AWS WorkMail and EC2).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Graphic Designer | Team Hasiru</text>
                    <br />
                    <i className="alignright">Apr ’21 – Jun ’21</i>
                    <br />
                    <ul>
                      <li>
                        Designed Digital Posters & Printed Annual Magazine.
                      </li>
                      <li>
                        Worked with Photoshop, Illustrator, Corel Draw & Canva.
                      </li>
                    </ul>
                  </li>
                </ul>
              </Timeline>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <Timeline>
                <span className="yellow-hg">Certification</span>
                <ul>
                  <li>
                    <text>Technical Support Fundamentals</text>
                    <br />
                    <i className="alignleft">Coursera - Google</i>
                    <i className="alignright">Jul ’20</i>
                    <br />
                    <ul>
                      <li>
                        Technical Support Fundamentals is an online non-credit
                        course authorized by Google and offered through
                        Coursera.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>
                      Intel® Network Academy Network Transformation 102
                    </text>
                    <br />
                    <i className="alignleft">Coursera - Intel</i>
                    <i className="alignright">Aug ’20</i>
                    <br />
                    <ul>
                      <li>
                        Intel® Network Academy - Network Transformation 102 is
                        an online non-credit course authorized by Intel and
                        offered through Coursera.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Computer Networks Security Technologies</text>
                    <br />
                    <i className="alignleft">Udemy</i>
                    <i className="alignright">Jul ’20</i>
                    <br />
                    <ul>
                      <li>
                        Computer Networks Security Technologies and Tools for
                        Network Admins and Cyber Security Officers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>The Evolution of Cybersecurity</text>
                    <br />
                    <i className="alignleft">FORTINET</i>
                    <i className="alignright">Apr ’20</i>
                    <br />
                    {/*
                      <ul>
                        <li></li>
                      </ul>
                    */}
                  </li>
                  <li>
                    <text>The Threat Landscape</text>
                    <br />
                    <i className="alignleft">FORTINET</i>
                    <i className="alignright">Aug ’20</i>
                    <br />
                    {/*
                      <ul>
                        <li></li>
                      </ul>
                    */}
                  </li>
                  <li>
                    <text>Basics of Database Design & Development</text>
                    <br />
                    <i className="alignleft">Udemy</i>
                    <i className="alignright">Jul ’20</i>
                    <br />
                    {/*
                      <ul>
                        <li></li>
                      </ul>
                    */}
                  </li>
                </ul>
              </Timeline>
            </div>
            <div className="col-md-6">
              <Timeline>
                <span className="yellow-hg">Licences</span>
                <ul>
                  <li>
                    <text>CSFPC™ Professional Certificate</text>
                    <br />
                    <i className="alignleft">CertiProf</i>
                    <i className="alignright">Apr ’21 – Apr ’23</i>
                    <br />
                    <iframe
                      className="certiprof-iframe"
                      src="https://www.credly.com/embedded_badge/38d99228-7269-4ffa-9aa1-90914de6e9f9"
                      scrolling="no"
                    ></iframe>
                  </li>
                  <li>
                    <text>RWVCPC™ Professional Certificate</text>
                    <br />
                    <i className="alignleft">CertiProf</i>
                    <i className="alignright">Apr ’21 – Apr ’23</i>
                    <br />
                    <iframe
                      className="certiprof-iframe"
                      src="https://www.credly.com/embedded_badge/6b8990fe-2527-4352-99c7-a24c98dff653"
                      scrolling="no"
                    ></iframe>
                  </li>
                  <li>
                    <text>Network Security Associate 1</text>
                    <br />
                    <i className="alignleft">FORTINET</i>
                    <i className="alignright">Apr ’20 – Apr ’22</i>
                    <br />
                    <ul>
                      <li>
                        Credential ID XhX4jEwAgP
                        <br />
                        <a
                          href="https://training.fortinet.com/mod/customcert/verify_certificate.php"
                          target="_blank"
                        >
                          Verify
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Network Security Associate 2</text>
                    <br />
                    <i className="alignleft">FORTINET</i>
                    <i className="alignright">Apr ’20 – Apr ’22</i>
                    <br />
                    <ul>
                      <li>
                        Credential ID NzQx0vSSGl
                        <br />
                        <a
                          href="https://training.fortinet.com/mod/customcert/verify_certificate.php"
                          target="_blank"
                        >
                          Verify
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Timeline>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
          <Footer>
            <hr />
            <span>
              Made with ❤️ using{" "}
              <a
                href="https://reactjs.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <strong className="react-icon">
                  <FaReact />
                </strong>
              </a>
              .
              <br /> &#169; {new Date().getFullYear()}{" "}
              <a href="http://parjanyamodi.com">
                <strong>Parjanya H Modi</strong>
              </a>
              .
            </span>
          </Footer>
        </div>
      </div>
    </div>
  );
};
const Timeline = styled.div`
  @media (min-width: 992px) {
    text-align: left;
    span {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 14px;
        font-weight: 500;
        text {
          font-size: 16px;
          font-weight: 700;
        }
        span {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 992px) {
    text-align: left;
    span {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 14px;
        font-weight: 500;
        text {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
`;
const Summary = styled.div`
  @media (min-width: 992px) {
    text-align: left;
    span {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 992px) {
    text-align: left;
    span {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
const Intro = styled.div`
  @media (min-width: 992px) {
    margin-top: 7vh;
    div {
      color: #121212;
      font-size: 24px;
      font-weight: 700;
      span {
        font-size: 18px;
        font-weight: 500;
      }
      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }
      text {
        margin-top: 10px;
        font-size: 32px;
        font-weight: 700;
      }
    }
  }
  @media (max-width: 992px) {
    margin-top: 5vh;
    div {
      color: #121212;
      font-size: 18px;
      font-weight: 700;
      span {
        font-size: 14px;
        font-weight: 500;
      }
      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }
      text {
        margin-top: 10px;
        font-size: 26px;
        font-weight: 700;
      }
    }
  }
`;

const Footer = styled.div`
  @media (min-width: 1024px) {
    margin-top: 7vh;
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 14px;
      font-weight: 500;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 14px;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 14px;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-decoration: none;
      }
    }
  }
`;
export default Portfolio;
