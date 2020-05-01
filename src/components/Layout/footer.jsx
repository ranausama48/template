import React from "react";
import styled from "styled-components";
import { MixStyle, Grid } from "../../core/index";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const StyledFooter = styled.footer`
  .footer--top {
    background: #f9f9f9;
    opacity: 1;
    min-height: 380px;
    display: flex;
    align-items: center;
    padding: 20px 0px;
  }
  .footer--bottom {
    background: #112d46;
    padding: 10px 0px;
    letter-spacing: 2.5px;
    color: #ebebeb;
    text-transform: capitalize;
  }
  h6 {
    ${MixStyle.linkText}
  }
  .sociaal--icon__box {
    width: 110px;
    display: flex;
    justify-content: space-between;
  }
  ul {
    padding-inline-start: 10px;
    display: inline-block;
  }
`;
const StyledForm = styled.form`
  height: 50px;
`;
const StyledInput = styled.input`
  border: 1px solid #605e5e;
  border-radius: 100px 0px 0px 100px;
  text-align: center;
  height: 100%;
  ::placeholder {
    font-size: 13px;
    color: #707070;
    text-transform: uppercase;
    letter-spacing: 1.63px;
    line-height: 27px;
    color: rgba(53, 46, 60, 0.68);
  }
  &:active,
  :focus {
    outline-color: transparent;
  }
`;
const StyledButton = styled.button`
  border: 1px solid #112d46;
  border-radius: 0px 100px 100px 0px;
  height: 100%;
  background: #112d46;
  letter-spacing: 2.13px;
  color: #f9f9f9;
  text-transform: uppercase;
  font-size: 17px;
  &:hover,
  :focus,
  :active {
    outline-color: transparent;
  }
`;
const StyledLink = styled.li`
  list-style: none;
  && > a {
    text-decoration: none;
    ${MixStyle.linkText}
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer--top">
        <Grid>
          <Row className="d-flex justify-content-between">
            <Col xl="4" lg="5" md="6" xs="12">
              <div>
                <div className="d-flex my-3 justify-content-center justify-content-md-start">
                  <h6>Get the app</h6>
                  <a href="">
                    <img className="mx-1" src="/assets/apple.svg" alt="" />
                  </a>
                </div>
                <div className="my-3 text-center text-md-left">
                  <h6>Follow us</h6>
                  <div className="sociaal--icon__box d-flex mx-auto m-md-0">
                    <a href="">
                      <img src="/assets/twitter-black-shape.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="/assets/facebook-letter-logo.svg" alt="" />
                    </a>
                    <a href="">
                      <img src="/assets/insta-icon.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="my-3">
                  <h6 className="text-center text-md-left">Get inspiration</h6>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <StyledForm className="d-inline">
                      <StyledInput
                        type="email"
                        name=""
                        placeholder="Enter Your Email"
                        id=""
                      />
                      <StyledButton className="px-sm-4 px-3" type="submit">
                        submit
                      </StyledButton>
                    </StyledForm>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="8" lg="7" md="6" xs="12">
              <Row className="d-flex justify-content-start justify-content-xl-between flex-column flex-sm-row ">
                <div>
                  <div className="d-flex justify-content-md-start">
                    <ul>
                      <StyledLink>
                        <Link to="">How it Works</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Press</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to=""> For Art & Trade</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">The Shop</Link>
                      </StyledLink>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-md-start">
                    <ul>
                      <StyledLink>
                        <Link to="">FAQ</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">For Business</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Company</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Careers</Link>
                      </StyledLink>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-md-start">
                    <ul>
                      <StyledLink>
                        <Link to="">Stores</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Pricing </Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Reviews </Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Design Services</Link>
                      </StyledLink>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-md-start">
                    <ul>
                      <StyledLink>
                        <Link to="">About Us</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Gift Card</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Contact Us </Link>
                      </StyledLink>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-md-start">
                    <ul>
                      <StyledLink>
                        <Link to="">Terms Of Services </Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Privacy Policy</Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Accessibility </Link>
                      </StyledLink>
                      <StyledLink>
                        <Link to="">Sitemap</Link>
                      </StyledLink>
                    </ul>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="footer--bottom text-center">© 2020 index.</div>
    </StyledFooter>
  );
};
export default Footer;
