import React, { Component } from "react";
import styled from "styled-components";
import { IoCloudDownloadSharp } from "react-icons/io5";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaReact,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="mt-2">
            <Intro>
              <span>
                Hi! I'm <span>Parjanya Modi</span> 👋
              </span>
            </Intro>
          </div>
          <div className="mt-3">
            <Tagline>
              <span>Building web apps, servers, networks, and experience</span>
            </Tagline>
          </div>
          <div className="mt-3">
            <Stack>
              <span>
                reactJS <span className="spacer">|</span> nodeJS{" "}
                <span className="spacer">|</span> C{" "}
                <span className="spacer">|</span> Python{" "}
                <span className="spacer">|</span> HTML{" "}
                <span className="spacer">|</span> CSS{" "}
                <span className="spacer">|</span> JS{" "}
                <span className="spacer">|</span> SQL & NoSQL
              </span>
            </Stack>
          </div>
          <a href="/assets/pdfs/Parjanya_Modi_Resume_V2.pdf" target="_blank">
            <Button className="mt-4">
              <span>
                Download Resume &nbsp;
                <span>
                  <IoCloudDownloadSharp />
                </span>
              </span>
            </Button>
          </a>
          <div className="mt-5">
            <Stack>
              <span>
                <SocialIcons>
                  <a
                    href="https://github.com/parjanyamodi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/parjanya_modi/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/parjanyamodi/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCLNn5vP3X38s8Kdf5Mjk0QA/featured"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="mailto:contact@parjanyamodi.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <HiMail />
                  </a>
                  <a
                    href="https://wa.me/919737426927?text=Visited%20your%20landing%20page%20!"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                </SocialIcons>
              </span>
            </Stack>
          </div>
        </div>
        <div className="col-md-3"></div>
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

const Intro = styled.div`
  @media (min-width: 992px) {
    margin-top: 7vh;
    span {
      color: #121212;
      font-size: 24px;
      font-weight: 700;
      span {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  }
  @media (max-width: 992px) {
    margin-top: 5vh;
    span {
      color: #121212;
      font-size: 18px;
      font-weight: 700;
      span {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  }
`;
const Tagline = styled.div`
  @media (min-width: 992px) {
    span {
      color: #121212;
      font-size: 56px;
      font-weight: 800;
    }
  }
  @media (max-width: 992px) {
    span {
      color: #121212;
      font-size: 42px;
      font-weight: 800;
    }
  }
`;
const Stack = styled.div`
  span {
    font-size: 16px;
    font-weight: 600;
    color: #b037fd;
  }
`;
const Button = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  background-color: #121212;
  color: #ffffff;
  text-decoration: none;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
  }
  &:hover {
    background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
    span {
      font-size: 16px;
      font-weight: 700;
      color: #121212;
    }
  }
`;
const SocialIcons = styled.div`
  a {
    text-decoration: none;
    color: #121212;
    font-size: 24px;
    font-weight: 700;
    margin: 5px;
    &:hover {
      color: #772cfd;
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
export default Home;
