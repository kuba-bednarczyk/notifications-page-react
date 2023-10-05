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


const Notification = ({ unseen }) => {
  return (
    <StyledNotification unseen={unseen}>
      <ImgBox>
        <img src='./src/assets/images/avatar-mark-webber.webp' alt='profile_picture' />
      </ImgBox>
      <InfoBox>
        <h3>
          <strong>Mark Webber </strong>
          reacted to your recent post
          <PostSpan> My first tournament today!</PostSpan>
          {/* <GroupSpan> My first tournament today!</GroupSpan> */}
          {unseen && <Dot />}
        </h3>
        <p>1m ago</p>
        {/* <Message>Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.</Message> */}
      </InfoBox>
      {/* <img src='./src/assets/images/image-chess.webp' alt='' /> */}
    </StyledNotification>
  );
};


Notification.propTypes = {
  unseen: PropTypes.bool,
}


export default Notification;

