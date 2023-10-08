import data from '../data';

import Notification from './Notification/Notification';

const NotificationsContainer = () => {
  return (
    <>
      {data.map((data) => (
        <Notification data={data} key={data.id} />
      ))}
    </>
  );
};

export default NotificationsContainer;
