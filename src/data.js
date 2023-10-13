import img1 from './assets/images/avatar-mark-webber.webp';

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
        imgSrc: './src/assets/images/avatar-angela-gray.webp',
        name: 'Angela Gray',
        info: 'followed you',
        time: '5m ago',
        isRead: false,
    },
    {
        id: 3,
        imgSrc: './src/assets/images/avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        info: 'has joined your group',
        time: '1 day ago',
        group: 'Chess Club',
        isRead: false,
    },
    {
        id: 4,
        imgSrc: './src/assets/images/avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        info: 'sent you a private message',
        time: '5 days ago',
        message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`,
        isRead: true,
    },
    {
        id: 5,
        imgSrc: './src/assets/images/avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        info: 'commented on your picture',
        time: '1 week ago',
        picture: './src/assets/images/image-chess.webp',
        isRead: true,
    },
    {
        id: 6,
        imgSrc: './src/assets/images/avatar-nathan-peterson.webp',
        name: 'Nathan Peterson',
        info: 'reacted to your recent post',
        time: '2 weeks ago',
        post: '5 end-game strategies to increase your win rate',
        isRead: true,
    },
    {
        id: 7,
        imgSrc: './src/assets/images/avatar-anna-kim.webp',
        name: 'Anna Kim',
        info: 'left the group',
        time: '2 weeks ago',
        group: 'Chess Club',
        isRead: true,
    },
];

export default data;