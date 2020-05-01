import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Section = styled.div`
  position: absolute;
  display: none;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: ${({ bg }) => bg};
  box-sizing: border-box;
`;

const Effect = ({ className, text, children, ...rest }) => (
  <Section className={className} {...rest}>
    {children}
  </Section>
);
Effect.propTypes = {
  bg: PropTypes.string,
};
Effect.defaultProps = {
  bg: "rgba(45, 54, 83, 0.5)",
};

export default Effect;
