import { css } from "styled-components";
import { theme } from "./index";
const { colors, fontSizes } = theme;

const MixStyle = {
  // usse
  sectionHeading: css`
    font-size: ${fontSizes.h2};
    color: ${colors.darkBlue};
    line-height: 57px;
    letter-spacing: 3.31px;
    text-align: center;
    text-transform: capitalize;
  `,
  sectionSubHeading: css`
    font-size: ${fontSizes.h4};
    color: ${colors.darkgray};
    line-height: 38px;
    letter-spacing: 0.15px;
    font-weight: lighter;
    text-align: center;
  `,
  linkText: css`
    font-size: ${fontSizes.md};
    line-height: 24px;
    letter-spacing: 2.5px;
    color: ${colors.darkgray};
    text-transform: capitalize;
    opacity: 1;
  `,
};

export default MixStyle;
