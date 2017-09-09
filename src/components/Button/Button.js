import styled from 'styled-components';
import { oneOf } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import { btnNormalStyles, btnHoverStyles, btnActiveStyles,
  getBtnSizeStyles } from './buttonHelpers';

const Button = styled.button`
  ${sharedStyles}
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
  ${getBtnSizeStyles}
  ${btnNormalStyles}
  &:hover,
  &:focus {
    ${btnHoverStyles}
  }
  &:active {
    ${btnActiveStyles}
  }
  &:disabled {
    ${btnNormalStyles}
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
