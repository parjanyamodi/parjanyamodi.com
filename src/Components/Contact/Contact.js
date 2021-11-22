import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="mt-2">
            <Intro>
              <span>
                <span>Fell free to get in touch!</span>
              </span>
            </Intro>
          </div>
          <FormGroup>
            <form>
              <input type="text" placeholder="Full Name" required></input>
              <input type="email" placeholder="Email Address" required></input>
              <input type="tel" placeholder="Phone Number" required></input>
              <input type="url" placeholder="Website/Social Media Link"></input>
              <textarea placeholder="Please leave a message!"></textarea>
              <br></br>
              <button type="submit" id="submit" placeholder="Submit">
                Submit
              </button>
            </form>
          </FormGroup>
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
const FormGroup = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #121212;
      border: none;
      border-radius: 5px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      &:hover {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        font-size: 16px;
        font-weight: 700;
        color: #121212;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #121212;
      border: none;
      border-radius: 5px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      &:hover {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        font-size: 16px;
        font-weight: 700;
        color: #121212;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #121212;
      border: none;
      border-radius: 5px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      &:hover {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        font-size: 16px;
        font-weight: 700;
        color: #121212;
      }
    }
  }
`;
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
export default Contact;
