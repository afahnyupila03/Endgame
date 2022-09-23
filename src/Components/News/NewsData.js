

const NewsData = [
    {
        id: 1,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/20/a97ac956/sonic_prime_-_teaser_trailer_0-28_screenshot.png',
        genre: 'NEWS',
        title: 'Sonic Prime Gets First Teaser Trailer Showing Off Eggman, Shadow, And More',
        description: 'This trailer packs a whole lot of action into 40 seconds.',
        author: ' Brian Shea ',
        date: 'Sep 20, 2022 at 12:26 PM'
    },
    {
        id: 2,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/20/9249c30a/ironman.jpg',
        genre: 'NEWS',
        title: 'Motive Studio Announces Single-Player Iron Man Game As First Part Of New EA/Marvel Collaboration',
        description: 'The Montreal-based studio hopes to deliver on what it feels like to be Tony Stark.',
        author: ' Brian Shea ',
        date: 'Sep 20, 2022 at 10:44 AM'
    },
    {
        id: 3,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/16/aab18efe/sf6.jpg',
        genre: 'NEWS',
        title: 'Street Fighter 6 Full Launch Roster, World Tour Opening Movie Revealed',
        description: 'Come see the World Tour opening cinematic that shows off the 18-fighter launch roster of Street Fighter 6.',
        author: ' Brian Shea ',
        date: 'Sep 16, 2022 at 05:16 PM'
    },
    {
        id: 4,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/16/51ffc6e3/resident_evil_5.jpg',
        genre: 'TOKYO GAME SHOW',
        title: 'Resident Evil Showcase Coming Next Month, RE4 Remake Confirmed For PS4',
        description: 'The game was announced as a new-gen exclusive title when it was revealed earlier this summer.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 20, 2022 at 12:26 PM'
    },
    {
        id: 5,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/16/f9ac7ab4/suikoden_header.jpg',
        genre: 'TOKYO GAME SHOW',
        title: 'Suikoden I And Suikoden II Remasters Revealed, Releasing On Consoles And PC Next Year',
        description: 'The two will be available in a single package.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 16, 2022 at 07:15 AM'
    },
    {
        id: 6,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/15/d130c800/sf6_header.jpg',
        genre: 'TOKYO GAME SHOW',
        title: 'Street Fighter 6: Capcom Reveals Four More Fighters, Closed Beta, World Tour Details, And More',
        description: "It's a great day to be a Street Fighter fan.",
        author: ' Wesley LeBlanc ',
        date: 'Sep 15, 2022 at 10:51 AM'
    },
    {
        id: 7,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/14/2b015d32/saturnalia.jpg',
        genre: 'NEWS',
        title: 'Saturnalia, An Indie Horror With An Art Style You Have To See, Captures October Release Date',
        description: 'We loved what we played of it last month.',
        author: ' Wesley LeBlanc ',
        date: ' Sep 15, 2022 at 08:00 AM'
    },
    {
        id: 8,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/15/1b234af7/deathloop_header.jpg',
        genre: 'NEWS',
        title: 'Deathloop Hits Xbox Next Week, New Update Includes Extended Ending, Crossplay, And More',
        description: 'This update is coming to all platforms.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 15, 2022 at 07:19 AM'
    },
    {
        id: 9,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/14/2160464f/the_sims_4.jpg',
        genre: 'NEWS',
        title: 'The Sims 4 Is Going Free-To-Play Next Month',
        description: 'You can download the base game for free on all platforms in October.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 14, 2022 at 10:37 AM'
    },
    {
        id: 10,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/14/eef03b21/sonic_frontiers.jpg',
        genre: 'NEWS',
        title: 'Super Sonic Is Back In New Sonic Frontiers Trailer',
        description: 'The trailer debuted as part of the 2022 Tokyo Game Show.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 14, 2022 at 08:28 AM'
    },
    {
        id: 11,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2021/05/07/43316e1c/image_battle_01_04.jpg',
        genre: 'NEWS',
        title: 'The Judgment Series Is Finally Heading To Steam',
        description: 'PC players can finally enjoy the adventures of Yagami and Co.',
        author: ' Marcus Stewart ',
        date: 'Sep 14, 2022 at 08:00 AM'
    },
    {
        id: 12,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/14/3bfe3277/likeadragonishin1.jpg',
        genre: 'NEWS',
        title: 'Check Out More Than 5 Minutes Of Like A Dragon: Ishin In New Trailer',
        description: 'Step into the shoes of Sakamoto Ryoma in this remake.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 14, 2022 at 07:26 AM'
    },
    {
        id: 13,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/14/4d1dff87/like_a_dragon_8.jpg',
        genre: 'NEWS',
        title: 'Yakuza 8 Is Called Like A Dragon 8 And Kiryu Is Back Alongside Ichiban',
        description: "It's due out sometime in 2024.",
        author: ' Wesley LeBlanc ',
        date: 'Sep 14, 2022 at 06:39 AM'
    },
    {
        id: 14,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/13/023822e8/totk1.jpg',
        genre: 'READER DISCUSSION',
        title: "Reader Discussion: What Are You Most Hyped About From Today's Nintendo Direct And PlayStation State Of Play?",
        description: 'These two events are meant to get fans hyped, so did they work?',
        author: 'Brian Shea',
        date: 'Sep 13, 2022 at 07:00 PM'
    },
    {
        id: 15,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/13/efebf861/gowragnarok2.jpg',
        genre: 'STATE OF PLAY',
        title: 'Atreus Ushers In The End Of The World In God Of War Ragnarök Story Trailer',
        description: "God Of War's latest trailer creates many questions.",
        author: ' Alex Van Aken',
        date: 'Sep 13, 2022 at 06:50 PM'
    },
    {
        id: 16,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/13/0af9660e/ishin.jpg',
        genre: 'STATE OF PLAY',
        title: 'Like A Dragon: Ishin Coming From Yakuza Developer Next Year',
        description: 'The game has been rebuilt from the ground up and brought to the West for the first time.',
        author: ' Brian Shea ',
        date: 'Sep 13, 2022 at 05:20 PM'
    },
    {
        id: 17,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/13/9025daa3/riseofronin.jpg',
        genre: 'STATE OF PLAY',
        title: 'Rise Of The Ronin Is A Team Ninja PS5 Exclusive Coming In 2024',
        description: 'Fight to forge a new era for Japan.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 13, 2022 at 05:15 PM'
    },
    {
        id: 18,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/13/44fcae7d/tekken8.jpg',
        genre: 'STATE OF PLAY',
        title: 'Tekken 8 Officially Revealed In New Cinematic Trailer',
        description: 'It was previously teased at EVO 2022.',
        author: ' Wesley LeBlanc ',
        date: 'Sep 13, 2022 at 04:51 PM'
    },
    {
        id: 19,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/13/86730387/goldeneye.jpg',
        genre: 'NEWS',
        title: 'GoldenEye 007 Coming To Xbox With Dual-Analog Stick Support',
        description: "We don't know when it's coming, but it will arrive at the same time as the Nintendo Switch Online + Expansion Pack version.",
        author: ' Brian Shea ',
        date: ' Sep 13, 2022 at 11:31 AM'
    },
    {
        id: 20,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/14/6cdb5702/kiryu_.jpg',
        genre: 'NEWS',
        title: "Like A Dragon Gaiden: The Man Who Erased His Name Announced, Follows Kiryu's Life After Yakuza 6",
        description: 'It hits PlayStation and Xbox consoles, and PC, sometime next year.',
        author: ' Wesley LeBlanc ',
        date: ' Sep 14, 2022 at 07:26 AM'
    }
];

export default NewsData;