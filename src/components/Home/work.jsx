import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { MixStyle, Grid } from "../../core/index";

const Section = styled.section`
  padding-top: 25px;
`;
const Heading = styled.h2`
  ${MixStyle.sectionHeading}
`;
const SubHeading = styled.h4`
  ${MixStyle.sectionSubHeading}
`;
const ImageContainer = styled.div`
  overflow: hidden;
  img {
    transition: all 1s ease;
  }
  &:hover img {
    transform: scale(1.3);
  }
`;
const FeaturedProduct = () => {
  return (
    <Section>
      <Grid>
        <Heading>Our Impressive Works</Heading>
        <hr className="buttom--line" />
        <SubHeading>
          Design a custom frame for photos, art, and more.
        </SubHeading>
        <div className="mt-4">
          <Row>
            <Col md="6" className="my-2">
              <ImageContainer className="h-100">
                <img className="w-100 h-100" src="/assets/work4.png" alt="" />
              </ImageContainer>
            </Col>
            <Col md="6">
              <Row>
                <Col sm="6" className="mt-2 mb-4">
                  <ImageContainer className="h-100">
                    <img
                      className="w-100 h-100"
                      src="/assets/work3.png"
                      alt=""
                    />
                  </ImageContainer>
                </Col>
                <Col sm="6" className="mt-2 mb-4">
                  <ImageContainer className="h-100">
                    <img
                      className="w-100 h-100"
                      src="/assets/work2.png"
                      alt=""
                    />
                  </ImageContainer>
                </Col>

                <Col md="12" className="">
                  <ImageContainer className="h-100">
                    <img
                      className="w-100 h-100 "
                      src="/assets/work1.png"
                      alt=""
                    />
                  </ImageContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    </Section>
  );
};

export default FeaturedProduct;
