import styled from 'styled-components';
import { string } from 'prop-types';
import sharedStyles from '../../../helpers/sharedStyles';
import { textSizingStyle, textColourStyle } from '../textHelpers';

const Paragraph = styled.p`
  ${sharedStyles}
  margin: 0;
  padding: 0;
  ${textSizingStyle}
  ${textColourStyle}
`;

Paragraph.propTypes = {
  colour: string,
  sizing: string,
};

Paragraph.defaultProps = {
  colour: 'default',
  sizing: 'medium',
};

export default Paragraph;