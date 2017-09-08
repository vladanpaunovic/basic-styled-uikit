import styled from 'styled-components';
import { oneOf } from 'prop-types';
import sharedStyles from '../../helpers/sharedStyles';
import getNotificationStatusStyle from './notificationHelpers';

const Notification = styled.div`
  ${sharedStyles}
  position: relative;
  margin-bottom: 10px;
  padding: 15px;
  background: #f8f8f8;
  font-size: 20px;
  line-height: 1.4;
  cursor: pointer;
  ${getNotificationStatusStyle};
`;

Notification.propTypes = {
  status: oneOf([
    'default',
    'primary',
    'warning',
    'success',
    'danger',
  ]),
};

Notification.defaultProps = {
  status: 'default',
};

export default Notification;

