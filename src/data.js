import img1 from '/src/assets/images/avatar-mark-webber.webp';
import img2 from '/src/assets/images/avatar-angela-gray.webp';
import img3 from './src/assets/images/avatar-jacob-thompson.webp';
import img4 from './src/assets/images/avatar-rizky-hasanuddin.webp';
import img5 from './src/assets/images/avatar-kimberly-smith.webp';
import img6 from './src/assets/images/avatar-nathan-peterson.webp';
import img7 from './src/assets/images/avatar-anna-kim.webp';

import chessImage from './src/assets/images/image-chess.webp';

const data = [
    {
        id: 1,
        imgSrc: img1,
        name: 'Mark Webber',
        info: 'reacted to your recent post',
        time: '1m ago',
        post: 'My first tournament today!',
        isRead: false,
    },
    {
        id: 2,
        imgSrc: img2,
        name: 'Angela Gray',
        info: 'followed you',
        time: '5m ago',
        isRead: false,
    },
    {
        id: 3,
        imgSrc: img3,
        name: 'Jacob Thompson',
        info: 'has joined your group',
        time: '1 day ago',
        group: 'Chess Club',
        isRead: false,
    },
    {
        id: 4,
        imgSrc: img4,
        name: 'Rizky Hasanuddin',
        info: 'sent you a private message',
        time: '5 days ago',
        message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`,
        isRead: true,
    },
    {
        id: 5,
        imgSrc: img5,
        name: 'Kimberly Smith',
        info: 'commented on your picture',
        time: '1 week ago',
        picture: chessImage,
        isRead: true,
    },
    {
        id: 6,
        imgSrc: img6,
        name: 'Nathan Peterson',
        info: 'reacted to your recent post',
        time: '2 weeks ago',
        post: '5 end-game strategies to increase your win rate',
        isRead: true,
    },
    {
        id: 7,
        imgSrc: img7,
        name: 'Anna Kim',
        info: 'left the group',
        time: '2 weeks ago',
        group: 'Chess Club',
        isRead: true,
    },
];

export default data;