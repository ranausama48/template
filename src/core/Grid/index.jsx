import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  ${({ fluid }) =>
    !fluid &&
    `
      @media (min-width: 576px) {
        max-width: 540px;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 882px;
      }
      @media (min-width: 1200px) {
        max-width: 1150px;
      }
      @media (min-width: 1440px) {
        max-width: 1300px;
      }
      @media (min-width: 1920px) {
        max-width: 1640px;
      }
  `}
`;
const Grid = ({ className, children, ...rest }) => (
  <Container className={className} {...rest}>
    {children}
  </Container>
);

export default Grid;
