import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { theme, HoverEffect, MixStyle, Grid } from "../../core/index";
const { fontSizes, colors } = theme;

const framingData = [
  {
    src: "/assets/orignal2.png",
    tittle: "Original Art",
  },
  {
    src: "/assets/object2.png",
    tittle: "Object",
  },
  {
    src: "/assets/textile2.png",
    tittle: "Textile",
  },
  {
    src: "/assets/jersey2.png",
    tittle: "Jersey",
  },
  {
    src: "/assets/photography2.png",
    tittle: "photography",
  },
  {
    src: "/assets/something-else2.png",
    tittle: "Something esle",
  },
];
const Section = styled.section`
  padding-top: 25px;
`;
const Heading = styled.h2`
  ${MixStyle.sectionHeading}
`;
const SubHeading = styled.h4`
  ${MixStyle.sectionSubHeading}
`;
const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  color: ${colors.darkBlue};
  line-height: 28px;
  letter-spacing: 2.71px;
  font-weight: 400;
`;
const FramingBox = styled.div`
  background: #f9f9f9 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;

  padding: 15px;
  margin: 10px 0px;
`;
const Wraper = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  position: relative;
  background: none;
  &&:hover .hover-effect {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hover--content {
    background: ${colors.darkBlue};
    text-align: center;
    color: ${colors.white};
    height: 50px;
    width: 100%;
    margin: 0px 10px;
  }
`;
const Imag = styled.img`
  width: 100%;
`;

const Framing = () => {
  return (
    <Section>
      <Grid>
        <Heading>What Are You Framing?</Heading>
        <hr className="buttom--line" />
        <SubHeading>
          Design a custom frame for photos, art, and more.
        </SubHeading>
        <Row className="mt-4">
          {framingData.map((key, index) => (
            <Col key={index} xl="2" md="4" sm="6">
              <Wraper>
                <FramingBox>
                  <Imag src={key.src} alt="" />
                </FramingBox>
                <HoverEffect className="hover-effect">
                  <div className="hover--content text-uppercase">
                    <div>fram</div>
                    <div>now</div>
                  </div>
                </HoverEffect>
              </Wraper>
              <Paragraph>{key.tittle}</Paragraph>
            </Col>
          ))}
        </Row>
      </Grid>
    </Section>
  );
};

export default Framing;
