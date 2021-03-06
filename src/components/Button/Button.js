import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { btnNormalStyle, btnHoverStyle, btnActiveStyle,
  btnSizeStyle } from './buttonHelpers';

const Button = styled.button`
  margin: 0;
  border: none;
  overflow: visible;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  border-width: 1px;
  border-style: solid;
  letter-spacing: 1px;
  ${btnSizeStyle}
  ${btnNormalStyle}
  &:hover,
  &:focus {
    ${btnHoverStyle}
  }
  &:active {
    ${btnActiveStyle}
  }
  &:disabled {
    ${btnNormalStyle}
    opacity: .6;
    cursor: default;
  }
`;

Button.propTypes = {
  btnType: oneOf(['default', 'primary', 'secondary', 'danger']),
  btnSize: oneOf(['small', 'default', 'large']),
};

Button.defaultProps = {
  btnType: 'default',
  btnSize: 'default',
};

export default Button;
