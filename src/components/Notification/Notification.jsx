import { ImgBox, InfoBox, StyledNotification } from "./Notification.style";

const Notification = () => {
    return (
        <StyledNotification>
            <ImgBox>
                <img src="./src/assets/images/avatar-mark-webber.webp" alt="profile_picture" />
            </ImgBox>
            <InfoBox>
                <h3>
                    <strong>Mark Webber </strong>
                    reacted to your recent post 
                    <span> My first tournament today!</span>
                </h3>
                <p>1m ago</p>
            </InfoBox>
        </StyledNotification>
    );
}

export default Notification;
