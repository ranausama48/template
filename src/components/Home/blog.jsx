import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { MixStyle, theme, Button, Grid } from "../../core/index";
const { colors, fontSizes } = theme;
const BlogContent = styled.div``;
const Heading = styled.h2`
  ${MixStyle.sectionHeading}
`;
const SubHeading = styled.h4`
  ${MixStyle.sectionSubHeading}
`;
const SmallHeadeing = styled.h5`
  font-size: ${fontSizes.md};
  line-height: 30px;
  letter-spacing: 0.2px;
  font-weight: lighter;
  color: ${colors.darkgray};
  text-transform: capitalize;
  opacity: 1;
`;
const BlogTittle = styled.h3`
  font-size: ${fontSizes.lg};
  line-height: 37px;
  letter-spacing: 0.04px;
  font-weight: lighter;
  color: ${colors.darkBlue};
  text-transform: capitalize;
  opacity: 1;
  font-weight: 500;
`;
const BlogDesc = styled.p`
  font-size: ${fontSizes.md};
  line-height: 30px;
  letter-spacing: 0px;
  font-weight: 400;
  color: ${colors.boldGray};
  text-transform: lowercase;
  opacity: 1;
`;
const ReadMoreButton = styled(Button)`
  font-size: ${fontSizes.sm};
  letter-spacing: 0px;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: 500;
  max-width: 100%;
  width: 190px;
`;
const Blog = () => {
  return (
    <section>
      <Grid>
        <Heading>Our Blog</Heading>
        <hr className="buttom--line" />
        <SubHeading className="framing--p">
          Our Countless Frame Types Are Loved By Global Frame Lovers, Due To The
          Variety, Quality Yet Simplicity.
        </SubHeading>
        <Row>
          <Col md="6">
            <Row className="py-4">
              <Col xl="6">
                <img className="w-100" src="/assets/blog-1.png" alt="" />
              </Col>
              <Col xl="6">
                <BlogContent>
                  <SmallHeadeing>Category Blog</SmallHeadeing>
                  <BlogTittle>
                    A Very Anthropologie Holiday with Jodie Harrison
                  </BlogTittle>
                  <div className="d-flex justify-content-between">
                    <SmallHeadeing>By Admin</SmallHeadeing>
                    <SmallHeadeing>30/3/2020</SmallHeadeing>
                  </div>
                  <BlogDesc>
                    One of my favorite illustrators, Dan who goes by the
                    creative name of Roach Graphics,...
                  </BlogDesc>
                  <ReadMoreButton border="2px solid #112D46" color="#112D46">
                    Read more
                  </ReadMoreButton>
                </BlogContent>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Row className="py-4">
              <Col xl="6">
                <img className="w-100" src="/assets/blog-2.png" alt="" />
              </Col>
              <Col xl="6">
                <BlogContent>
                  <SmallHeadeing>Category Blog</SmallHeadeing>
                  <BlogTittle>
                    A Very Anthropologie Holiday with Jodie Harrison
                  </BlogTittle>
                  <div className="d-flex justify-content-between">
                    <SmallHeadeing>By Admin</SmallHeadeing>
                    <SmallHeadeing>30/3/2020</SmallHeadeing>
                  </div>
                  <BlogDesc>
                    One of my favorite illustrators, Dan who goes by the
                    creative name of Roach Graphics,...
                  </BlogDesc>
                  <ReadMoreButton border="2px solid #112D46" color="#112D46">
                    Read more
                  </ReadMoreButton>
                </BlogContent>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
export default Blog;
