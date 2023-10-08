import PropTypes from 'prop-types';
import {
  ImgBox,
  InfoBox,
  StyledNotification,
  PostSpan,
  GroupSpan,
  Message,
  Dot,
} from './Notification.style';

const Notification = ({ data }) => {
  return (
    <StyledNotification isRead={true}>
      <ImgBox>
        <img
          src={data.imgSrc}
          alt="profile_picture"
        />
      </ImgBox>
      <InfoBox>
        <h3>
          <strong>{data.name} </strong>
          {data.info} 
          {data.post && (<PostSpan> {data.post}</PostSpan>)}
          {data.group && (<GroupSpan> {data.group}</GroupSpan>)}
          {!data.isRead && (<Dot />)}
        </h3>
        <p>{data.time}</p>
        {data.message && (<Message>{data.message}</Message>)}
      </InfoBox>
      {data.picture && (<img src={data.picture} alt='picture' />)}
    </StyledNotification>
  );
};

Notification.propTypes = {
  unseen: PropTypes.bool,
};

export default Notification;
