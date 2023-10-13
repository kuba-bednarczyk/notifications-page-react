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
    <StyledNotification isRead={data.isRead}>
      <ImgBox>
        <img src={data.imgSrc} alt='profile_picture' />
      </ImgBox>
      <InfoBox>
        <h3>
          <strong>{data.name} </strong>
          {data.info}
          {data.post && <PostSpan> {data.post}</PostSpan>}
          {data.group && <GroupSpan> {data.group}</GroupSpan>}
          {data.isRead === false && <Dot />}
        </h3>
        <p>{data.time}</p>
        {data.message && <Message>{data.message}</Message>}
      </InfoBox>
      {data.picture && <img src={data.picture} alt='picture' />}
    </StyledNotification>
  );
};

Notification.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Notification;
