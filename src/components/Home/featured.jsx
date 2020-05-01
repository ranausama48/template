import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { theme, Button, MixStyle, Grid } from "../../core/index";
import { useContext } from "react";
const { fontSizes, colors } = theme;
const featuredData = [
  {
    src: "/assets/Dover.png",
    tittle: "Dover",
  },
  {
    src: "/assets/marquette.png",
    tittle: "Marquette",
  },
  {
    src: "/assets/wren.png",
    tittle: "Wren",
  },
  {
    src: "/assets/mercer.png",
    tittle: "Mercer",
  },
  {
    src: "/assets/evertt.png",
    tittle: "Everett",
  },
  {
    src: "/assets/mandalay.png",
    tittle: "Mandalay",
  },
];
const ImageContainer = styled.div`
  overflow: hidden;
  img {
    transition: all 1.5s ease;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;
const Heading = styled.h2`
  ${MixStyle.sectionHeading}
`;
const SubHeading = styled.h4`
  ${MixStyle.sectionSubHeading}
`;
const StyledButton = styled(Button)`
  min-height: 100%;
`;
const Wraper = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  position: relative;
  background: none;
  cursor: pointer;
  &&:hover .show--div {
    display: flex;
    justify-content: ${(props) => (props.top ? "flex-end" : "center")};
    align-items: center;
  }
`;
const ShowContent = styled.div`
  position: absolute;
  background: ${(props) => (props.top ? "transperant" : colors.darkBlue)};
  text-align: center;
  color: ${colors.white};
  height: 50px;
  width: ${(props) => (props.top ? "" : "100%")};
  display: none;
  top: ${(props) => (props.top ? "0px" : "")};
  bottom: ${(props) => (props.bottom ? "0px" : "")};
  left: ${(props) => (props.bottom ? "0px" : "")};
  right: ${(props) => (props.top ? "15px" : "")};
`;
const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  color: ${colors.darkBlue};
  line-height: 28px;
  margin: 10px 0px;
  letter-spacing: 2.71px;
  font-weight: 400;
`;
const FeaturedProduct = () => {
  const { colors } = theme;
  return (
    <section>
      <Grid>
        <Heading>Feature Product</Heading>
        <hr className="buttom--line" />
        <SubHeading>
          Design a custom frame for photos, art, and more.
        </SubHeading>
        <div className="mt-4">
          <Row>
            <Col md="4">
              <ImageContainer className="h-100">
                <img
                  className="w-100 h-100"
                  src="/assets/featured.png"
                  alt=""
                />
              </ImageContainer>
            </Col>
            <Col md="8">
              <Row>
                {featuredData.map((key, index) => (
                  <Col md="4" sm="6" key={index}>
                    <Wraper>
                      <img className="w-100" src={key.src} alt="" />
                      <ShowContent top className="show--div text-uppercase">
                        <img
                          className="h-100 w-100"
                          src="/assets/insta-icon.svg"
                          alt=""
                        />
                      </ShowContent>
                      <ShowContent bottom className="show--div text-uppercase">
                        <StyledButton
                          bg={colors.darkBlue}
                          hoverbg={colors.darkBlue}
                          hovercolor={colors.white}
                          className="m-0"
                        >
                          Start framing
                        </StyledButton>
                      </ShowContent>
                    </Wraper>
                    <Paragraph>{key.tittle}</Paragraph>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Grid>
    </section>
  );
};
export default FeaturedProduct;
