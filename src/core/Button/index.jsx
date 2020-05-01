import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../index";
const { fontSizes, colors } = theme;

const StyledButton = styled(Button)`
  border: ${({ border }) => border || "none"};
  background: ${({ bg }) => bg};
  color: ${({ color }) => color || "white"};
  border-radius: ${({ radius }) => radius};
  padding: 10px 0px;
  && {
    :hover,
    :active,
    :focus {
      background: ${({ hoverbg }) => hoverbg};
      border-color: ${({ hoverborder }) => hoverborder};
      color: ${({ hovercolor }) => hovercolor};
      box-shadow: none;
    }
  }
  max-height: ${({ height }) => height};
`;
const ButtonCompo = ({ children, className, ...rest }) => {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};
ButtonCompo.propTypes = {
  hoverbg: PropTypes.string,
  hoverborder: PropTypes.string,
  hovercolor: PropTypes.string,
  radius: PropTypes.string,
  bg: PropTypes.string,
  height: PropTypes.string,
};
ButtonCompo.defaultProps = {
  height: "65px",
  bg: "white",
  hovercolor: colors.white,
  hoverbg: colors.darkBlue,
  radius: "100px",
};
export default ButtonCompo;
