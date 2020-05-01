import React, { useState } from "react";
import { Grid, theme, Button } from "../../core/index";
import styled from "styled-components";
import { Carousel, CarouselItem, CarouselControl, Row, Col } from "reactstrap";
const { fontSizes, colors } = theme;
const items = [
  {
    id: 1,
    tittle: "A New Approach to Custom Frame",
    desc:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: "/assets/slider.png",
  },
  {
    id: 2,
    tittle: "A New Approach to Custom Frame",
    desc:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: "/assets/slider.png",
  },
  {
    id: 3,
    tittle: "A New Approach to Custom Frame",
    desc:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: "/assets/slider.png",
  },
];
const SliderTittle = styled.h1`
  font-size: ${fontSizes.h1};
  @media (max-width: 1200px) {
    font-size: ${fontSizes.h4};
    line-height: 40px;
  }
  color: ${colors.darkBlue};
  line-height: 85px;
  letter-spacing: 3.48px;
  text-transform: uppercase;
  opacity: 1;
`;
const SliderDesc = styled.h3`
  font-size: ${fontSizes.h6};
  @media (max-width: 1200px) {
    font-size: ${fontSizes.md};
    line-height: 30px;
    padding-left: 10px;
  }
  color: ${colors.darkgray};
  font-weight: lighter;
  line-height: 43px;
  letter-spacing: 0.5px;
  text-transform: lowercase;
  text-align: left;
  opacity: 1;
  border-left: 3px solid ${colors.darkBlue};
  padding: 0px 15px;
`;
const Section = styled.section`
  padding: 50px 0px;
  .carousel-indicators {
    background: blue;
  }
`;
const StyledButton = styled(Button)`
  font-size: ${fontSizes.md};
  letter-spacing: 2.5px;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 500;
  max-width: 100%;
  width: 250px;
`;
const CarousalContainer = styled.div`
  a {
    background: ${colors.darkBlue};
    left: unset;
    top: unset;
  }
`;
const SocialLink = styled.div`
  a {
    @media (max-width: 1200px) {
      font-size: ${fontSizes.xxs};
      line-height: 40px;
    }
    text-decoration: none;
    margin: 5px 0px;
    font-size: ${fontSizes.xs};
    color: ${colors.boldGray};
    text-transform: uppercase;
    line-height: 22px;
    font-weight: 400;
    writing-mode: vertical-rl;
    letter-spacing: 2.25px;
    &:hover {
      color: ${colors.darkBlue};
    }
  }
`;
const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <Row noGutters>
          <Col md="6">
            <div className="h-100">
              <img className="w-100 h-100" src="/assets/slider.png" alt="" />
              <CarousalContainer>
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                >
                  Pervious
                </CarouselControl>
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </CarousalContainer>
            </div>
          </Col>
          <Col md="6">
            <div className="h-100 d-flex align-items-center ml-md-4">
              <div>
                <SliderTittle>{item.tittle}</SliderTittle>

                <div className="d-flex align-items-center align-items-md-start">
                  <div>
                    <SliderDesc>{item.desc}</SliderDesc>
                    <StyledButton border="2px solid #112D46" color="#112D46">
                      Start Framing
                    </StyledButton>
                  </div>
                  <SocialLink>
                    <a href="">Facebook</a>
                    <a href="">instagram</a>
                    <a href="">twitter</a>
                  </SocialLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CarouselItem>
    );
  });
  return (
    <Section>
      <Grid>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {slides}
        </Carousel>
      </Grid>
    </Section>
  );
};
export default Example;
