import React, { useState } from "react";
import styled from "styled-components";
import { Carousel, CarouselItem, Row, Col } from "reactstrap";
import { theme, MixStyle, Grid } from "../../core/index";
const { fontSizes, colors } = theme;
const items = [
  {
    id: 1,
    clientName: "Jeremy Crouse",
    feild: "(Graphic Designer)",
    review:
      "I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.",
    imgSrc: "/assets/testimonial.png",
  },
  {
    id: 2,
    clientName: "Jeremy Crouse",
    feild: "(Graphic Designer)",
    review:
      "I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.",
    imgSrc: "/assets/testimonial.png",
  },
  {
    id: 3,
    clientName: "Jeremy Crouse",
    feild: "(Graphic Designer)",
    review:
      "I was looking a way to save my University degree from getting damaged while showing to others and I found index. framing options. I have got my degree framed in stylish design which is also adding beauty to my room.",
    imgSrc: "/assets/testimonial.png",
  },
];
const Heading = styled.h2`
  ${MixStyle.sectionHeading}
`;
const SubHeading = styled.h4`
  ${MixStyle.sectionSubHeading}
`;
const ClientContent = styled.h3`
  font-weight: ${(props) =>
    props.username ? "bold" : props.feild ? "400" : "lighter"};
  font-size: ${fontSizes.h6};
  color: ${(props) =>
    props.username
      ? colors.darkBlue
      : props.feild
      ? colors.boldGray
      : colors.darkgray};
  line-height: ${(props) => (props.review ? "46px" : "25px")};
  letter-spacing: ${(props) => (props.review ? "0.13px" : "0.25px")};
  text-transform: ${(props) =>
    props.username ? "uppercase" : props.feild ? "capitalize" : ""};
`;
const IamgeBox = styled.div`
  position: relative;
  margin: 100px 0px 0px 0px;
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 350px;
    margin: 100px auto;
  }
  @media (max-width: 575px) {
    width: 50%;
    margin: 100px auto;
    margin: 50px 50px;
  }
  &:before {
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgb(10, 25, 47);
  }
  .inside--image-box img {
    position: relative;
    width: 100%;
    height: auto;
  }
  &:after {
    top: -50px;
    left: 50px;
    z-index: -1;
    border: 13px solid #112d46;
    border-image: initial;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
const Testimonials = (props) => {
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
        <Row className="d-flex justify-content-between">
          <Col lg="4" xs="12">
            <IamgeBox>
              <div className="inside--image-box">
                <img className="w-100" src={item.imgSrc} alt="" />
              </div>
            </IamgeBox>
          </Col>
          <Col lg="7" xs="12">
            <div className="d-flex align-items-center h-100">
              <div>
                <ClientContent username>{item.clientName}</ClientContent>
                <ClientContent feild>{item.feild}</ClientContent>
                <ClientContent review>
                  <img src="/assets/Group 614.svg" alt="" className="mr-2" />
                  {item.review}
                  <img className="ml-2" src="/assets/Group 615.svg" alt="" />
                </ClientContent>
              </div>
            </div>
          </Col>
        </Row>
      </CarouselItem>
    );
  });
  return (
    <section>
      <Grid>
        <Heading>We Love Our Client</Heading>
        <hr className="buttom--line" />
        <SubHeading>Design a custom frame for photos, art and more.</SubHeading>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {slides}
        </Carousel>
      </Grid>
    </section>
  );
};
export default Testimonials;
