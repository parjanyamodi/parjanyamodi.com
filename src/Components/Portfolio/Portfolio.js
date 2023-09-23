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
                <img src="/assets/images/0G0A6707-OG copy copy cropped 2.jpg" />
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
                  I am a tech-enthusiast, a problem solver and a quick learner
                  who strives for excellence in the field of work that I engage
                  myself in.
                </li>
                <li>
                  Confidence, simplicity and reliability are some of my defining
                  attributes.
                </li>
                <li>
                  More than 3 years of experience in MERN Stack Web Development,
                  Cloud Solutions, Computer Networks & UI/UX Designing.
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
          <Summary>
            <div>
              <span className="yellow-hg">Technical Experience</span>
              <div className="row">
                <div className="col-12">
                  <p>
                    <strong>Javascript</strong>, <strong>Python</strong>,{" "}
                    <strong>Bash</strong> <strong>Shell</strong>, C,{" "}
                    <strong>reactJS</strong>, <strong>nextJS</strong>,{" "}
                    <strong>nodeJS</strong>,<strong>ExpressJS</strong>, PHP,{" "}
                    <strong>Linode</strong>, <strong>AWS</strong>, GCP &{" "}
                    <strong>Digital Ocean</strong>, GitHub Actions, Ansible,{" "}
                    <strong>Git</strong>, Google APIs,{" "}
                    <strong>AWS S3 APIs</strong>, <strong>nodemailer</strong>,
                    <strong>Apache Redis</strong>, OpenSSL,{" "}
                    <strong>Firewalls</strong>, <strong>JWT Token</strong>,{" "}
                    <strong>PM2</strong>, OpenSSH,
                    <strong>Zoho ZeptoMail</strong>, <strong>MongoDB</strong>,{" "}
                    <strong>Clickhouse</strong>, <strong>MySQL</strong>,
                    PostgreSQL, Firebase, S3 & Firestore,{" "}
                    <strong>Nginx reverse proxy</strong>,{" "}
                    <strong>Cloudflare DNS</strong> & Proxies,
                    <strong>Load Balancing</strong>,{" "}
                    <strong>AWS Elastic Load Balancing</strong>, Linux, Windows
                    Server.
                  </p>
                </div>
              </div>
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
                    <text>Intern - Site Reliability Engineer | CRED</text>
                    <br />
                    <i className="alignleft">Bengaluru</i>
                    <i className="alignright">Jan ’23 – Aug ’23</i>
                    <br />
                    <ul>
                      <li>
                        Handled Role based access to federated users and
                        services across all verticals for developers, testers
                        and business users.
                      </li>
                      <li>
                        Played instrumental role in adaptation of clickhouse
                        database for scalable querying capability as well as
                        highly available system for VPC flow logs of the
                        organization’s cloud infrastructure.
                      </li>
                      <li>
                        Made several automation tools for monitoring and
                        internal usage that improved the productivity of the
                        operations. These tools include, Daily VPN config
                        Backup, auto revoke IAM policies, S3 to DB migration
                        tool, just to name a few.
                      </li>
                      <li>
                        Built an in-house vulnerability eliminator that protects
                        infrastructure from malicious attacks caused due to
                        security group loopholes and integration with slack to
                        notify the user about the same.
                      </li>
                      <li>
                        Worked extensively with IAM roles and users, AWS secrets
                        manager, AWS systems manager, VPC, AWS route53, SQS,
                        pritunl VPN tech stacks.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Intern - DevOps Engineer | Ankercloud Gmbh</text>
                    <br />
                    <i className="alignleft">Bengaluru</i>
                    <i className="alignright">Oct ’22 – Dec ’22</i>
                    <br />

                    <ul>
                      <li>
                        My key responsibilities included setting up CI/CD
                        pipelines for test environments, deploying, and
                        maintaining ec2 instances and databases. I was a part of
                        a project that included designing cloud architecture for
                        a highly scalable product.
                      </li>
                      <li>
                        Worked with VPC, AWS ELB, AWS EC2, Jenkins, Maven,
                        MongoDB, Dockers and Kubernetes.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>
                      Dev Team Lead & System Engineer | Prathibhotsava - 21st
                      VTU Youth Festival{" "}
                    </text>
                    <br />
                    <i className="alignleft">Bengaluru</i>
                    <i className="alignright">May ’22 – Present</i>
                    <br />

                    <ul>
                      <li>
                        My key responsibilities included designing aesthetic and
                        efficient software solutions to address the registration
                        process of more than 40,000 people across the state of
                        Karnataka. I was instrumental in designing, deploying
                        and maintaining the requisite software infrastructure on
                        the cloud. It is noteworthy that this web software
                        successfully handled more than 1.6 Million requests in
                        45 days.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Freelancer </text>
                    <br />
                    <i className="alignleft">Multiple Locations & Remote</i>
                    <i className="alignright">Oct ’19 – Present</i>
                    <br />

                    <ul>
                      <li>
                        Established Enterprise Level Networks and worked with
                        Linux servers and configured networks using
                        Cisco/TP-Link L2 & L3 Switch and VPN Routers.
                      </li>
                      <li>
                        Developed responsive websites and web apps. Worked with
                        HTML, JS & CSS with LAMP Stack.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Technical Head | IUCEE Student Chapter of BMSCE</text>
                    <br />
                    <i className="alignleft">Bengaluru</i>
                    <i className="alignright">Oct ’19 – Jun ’22</i>
                    <br />

                    <ul>
                      <li>
                        I developed, maintained and upgraded the official
                        website for the Indo-Universal Collaboration for
                        Engineering Education Student Chapter of BMSCE. This
                        organisation actively makes engineering education more
                        relevant by bridging the gap between academia and
                        industry
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Web Dev & IT Support Intern | Bullspree</text>
                    <br />
                    <i className="alignleft">Remote</i>

                    <i className="alignright">Apr ’21 – Jul ’21</i>
                    <br />

                    <ul>
                      <li>Add-on Tech Stack: PHP, Apache Tomcat, OpenSSL.</li>
                      <li>
                        I developed multiple websites, web apps and API
                        Endpoints for internal and public usage. Fulfilled the
                        needs of different stakeholders involved directly or
                        indirectly.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <text>Graphic Designer | Team Hasiru</text>
                    <br /> <i className="alignleft">Bengaluru</i>
                    <i className="alignright">Sep ’20 – Mar ’21</i>
                    <br />
                    <ul>
                      <li>
                        Designed Digital Posters & Printed Annual Magazine.
                      </li>
                      <li>
                        Tools: Adobe Photoshop, Adobe Illustrator, Corel Draw &
                        Canva.
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
        text-align: justify;
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
        text-align: justify;
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
        text-align: justify;
      }
    }
    p {
      font-size: 16px;
      font-weight: 500;
      text-align: justify;
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
        text-align: justify;
        text-align: justify;
      }
    }
    p {
      font-size: 14px;
      font-weight: 500;
      text-align: justify;
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
