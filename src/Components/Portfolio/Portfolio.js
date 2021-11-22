import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";

const Portfolio = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="mt-2">
            <Intro>
              <span>
                <span>Page Under Construction!</span>
                <br />
                Please visit this site for portfolio{" "}
                <a
                  href="https://portfolio.parjanyamodi.com/"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Click Here
                </a>
              </span>
            </Intro>
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
