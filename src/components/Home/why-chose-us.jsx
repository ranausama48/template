import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { theme, Button, Grid } from "../../core/index";
const { fontSizes, colors } = theme;

const MainServices = [
  {
    serviceTittle: "Free Shipping",
    serviceDesc: "you're here to buy art, not cardboard boxes.",
    serviceIcon: "/assets/free-shipping-icon.svg",
  },
  {
    serviceTittle: "Free Design Advice",
    serviceDesc: "you're here to buy art, not cardboard boxes.",
    serviceIcon: "/assets/designer-advice-icon.svg",
  },
  {
    serviceTittle: "Everyday Low Price",
    serviceDesc: "you're here to buy art, not cardboard boxes.",
    serviceIcon: "/assets/price-icon.svg",
  },
  {
    serviceTittle: "Free Returns",
    serviceDesc: "don't adore it? return it for free within 45 days.",
    serviceIcon: "/assets/free-return-icon.svg",
  },
];
const Heading1 = styled.h1`
  font-size: ${fontSizes.h1};
  color: ${colors.darkBlue};
  letter-spacing: 4.14px;
  text-transform: capitalize;
`;
const SmallPara = styled.p`
  font-size: ${fontSizes.h5};
  line-height: 40px;
  color: ${colors.semiDarkGray};
  letter-spacing: 0.14px;
  text-transform: capitalize;
  opacity: 0.83;
  font-weight: lighter;
`;
const ServiceTittle = styled.h5`
  font-size: ${fontSizes.h6};
  line-height: 30px;
  color: ${colors.darkBlue};
  letter-spacing: 0.25px;
  text-transform: capitalize;

  font-weight: 500;
`;
const ServiceDesc = styled.h6`
  font-size: ${fontSizes.lg};
  line-height: 30px;
  color: ${colors.darkgray};
  text-transform: capitalize;
  font-weight: lighter;
  letter-spacing: 0.22px;
`;
const StyledBtn = styled(Button)`
  font-size: ${fontSizes.md};
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 500;
  max-width: 100%;
  width: 354px;
`;
const WhyChoseUs = () => {
  return (
    <section>
      <Grid className="my-5">
        <Row className="d-flex justify-content-between">
          <Col xl="7" xs="12">
            <div>
              <Heading1>Why chose us</Heading1>
              <SmallPara>
                Our countless frame types are loved by global frame lovers, due
                to the variety, quality yet simplicity.
              </SmallPara>
            </div>
            <Row>
              {MainServices.map((key, index) => (
                <Col key={index} md="6" sm="12">
                  <div className="my-3">
                    <div className="d-flex justify-content-arround">
                      <div className="mr-20">
                        <img className="icons" src={key.serviceIcon} alt="" />
                      </div>
                      <div>
                        <ServiceTittle>{key.serviceTittle}</ServiceTittle>
                        <ServiceDesc>{key.serviceDesc}</ServiceDesc>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <div>
              <StyledBtn border="2px solid #112D46" color="#112D46">
                Start framing
              </StyledBtn>
            </div>
          </Col>
          <Col xl="4" xs="12">
            <div className="img-box">
              <div className="inside--image-box">
                <img className="w-100" src="/assets/why-us.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
export default WhyChoseUs;
