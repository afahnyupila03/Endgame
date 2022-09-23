

const ReviewData = [
    {
        id: 1,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/16/51b14fbf/nba_2k23_gameplay_screenshot_3.jpg',
        title: 'NBA 2K23 Review – A Hop-Step Forward',
        description: 'Though the game has its fair share of issues with its poor narrative choices and omnipresent microtransactions, it’s still a significant improvement over the previous game.',
        author: ' Nico Vergara ',
        date: 'Nico Vergara'
    },
    {
        id: 2,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/16/254dd48e/temtem15.jpg',
        title: 'Temtem Review – Competitive Evolution',
        description: 'Temtem may look like a copycat on its surface, but its deviations from the Pokémon formula pay off considerably.',
        author: ' John Carson ',
        date: ' John Carson '
    },
    {
        id: 3,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/%5Bcurrent-date%3Ahtml_year%5D/%5Bcurrent-date%3Amonth%5D/%5Bcurrent-date%3Aday%5D/%5Brandom%3Ahash%3Acrc32%5D/metal_hellsinger.jpg',
        title: 'Metal: Hellsinger Review – A Rhythmic Symphony Of Destruction',
        description: "Metal: Hellsinger near perfectly combines fast-paced shooting with precise rhythm gameplay that left us ready for what's next with this series.",
        author: ' Wesley LeBlanc ',
        date: 'Sep 12, 2022 at 12:44 PM'
    },
    {
        id: 4,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/04/0ad2523d/ooblets_farm_field.jpg',
        title: 'Ooblets Review – A Cheerful Grind',
        description: 'Ooblets can be a delightful chill pill, but tedious design makes it feel more laborious than satisfying.',
        author: ' Marcus Stewart ',
        date: 'Sep 09, 2022 at 11:12 AM'
    },
    {
        id: 5,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/09/06/a3fda699/switch_nd021721_splatoon3_scrn_03.jpg',
        title: 'Splatoon 3 Review – Multicolored Mayhem',
        description: "Splatoon 3 improves upon the first two titles in nearly every way, delivering the series' best game to date.",
        author: ' Brian Shea ',
        date: 'Sep 07, 2022 at 09:00 AM'
    },
    {
        id: 6,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/23/f23c3619/bt2-4.jpg',
        title: 'Blossom Tales II: The Minotaur Prince Review – Another Blooming Adventure',
        description: 'Blossom Tales II manages to capture many of the acclaimed elements of what many consider to be one of the greatest video games of all time, and in the process, delivers a fun, retro-facing adventure worth embarking on.',
        author: ' Brian Shea ',
        date: 'Aug 24, 2022 at 11:00 AM'
    },
    {
        id: 7,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/22/3e21e989/madden_nfl_23_20220821194753.jpg',
        title: 'Madden NFL 23 Review – A Short Gain To Start A New Drive',
        description: "Madden NFL 23 is the first iteration in a long time that rebuilds that foundation, and that’s where this year's greatest success lies.",
        author: ' Justin Koreis ',
        date: 'Aug 22, 2022 at 02:21 PM'
    },
    {
        id: 8,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/21/0da0c8e9/saints3353.jpg',
        title: 'Saints Row Review – Captivating Chaos',
        description: 'Saints Row is a joyous return to form that delivers plenty of humor and some rough edges.',
        author: ' Andrew Reiner ',
        date: 'Aug 22, 2022 at 09:00 AM'
    },
    {
        id: 9,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/17/de390b18/add_a_little_bit_of_body_text_5.png',
        title: 'Soul Hackers 2 Review – Bland Sabbath',
        description: 'Despite its compelling story, we wish Soul Hackers 2 rewarded us with a bit more humanity and meaning to our struggles.',
        author: ' Diego Nicolás …',
        date: 'Aug 18, 2022 at 09:00 AM'
    },
    {
        id: 10,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/15/3d06372e/roller7.jpg',
        title: 'Rollerdrome Review – A Dystopian Delight',
        description: "Roll7's skating shooter delivers a thrilling experience that's all about comboing kills.",
        author: ' Andrew Reiner ',
        date: 'Aug 16, 2022 at 08:00 AM'
    },
    {
        id:11,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/12/3b5cc7aa/digimon3.jpg',
        title: 'Digimon Survive Review – Teenage Wasteland',
        description: "While the combat doesn't evolve as much as the surrounding story presentation, it’s not enough to deter someone from seeing the narrative through.",
        author: ' John Carson ',
        date: 'Aug 12, 2022 at 03:07 PM'
    },
    {
        id: 12,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/10/f81fb01f/mv2.jpg',
        title: 'MultiVersus Review – Packing A Punch',
        description: 'If MultiVersus can meaningfully roll out content and smooth out its rough edges, this could become a new crossover obsession for years to come.',
        author: ' Bryan Vore ',
        date: 'Aug 10, 2022 at 05:47 PM'
    },
    {
        id: 13,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/09/c364790e/cult_header.jpg',
        title: 'Cult of the Lamb Review – Follow The Leader',
        description: "Cult of the Lamb features great combat and base building mechanics, and while it nails what it's going for, we wish it gave us more time to make our cult feel like home.",
        author: ' Wesley LeBlanc ',
        date: 'Aug 10, 2022 at 10:00 AM'
    },
    {
        id: 14,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/07/29/06069ee3/rfd11.jpg',
        title: 'Recipe For Disaster Review – An Appetizing Restaurant-Management Sim',
        description: "Recipe for Disaster shows that it's not easy to manage a restaurant, but it can be extremely satisfying.",
        author: ' Brian Shea ',
        date: 'Aug 04, 2022 at 06:00 PM'
    },
    {
        id: 15,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/08/03/0aa8c047/two_point_campus_review_game_informer.jpg',
        title: 'Two Point Campus Review – Making The Grade',
        description: 'Two Point Campus is a deeply-engaging management sim that doesn’t force you to punch down, and it’s more enjoyable for it.',
        author: ' Alex Van Aken ',
        date: 'Aug 04, 2022 at 09:00 AM'
    },
    {
        id: 16,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/07/28/8d72dcdd/redux-launch.jpg',
        title: 'Build Redux Review – Beautiful Power',
        description: "The company's pre-built gaming PCs deliver on performance and external flash.",
        author: ' Andrew Reiner ',
        date: 'Jul 29, 2022 at 12:48 PM'
    },
    {
        id: 17,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/07/07/1bd6c128/xeno1.jpg',
        title: 'Xenoblade Chronicles 3 Review – A Dull Knife',
        description: "Xenoblade Chronicles 3 is a double-edged sword that needs a bit more sharpening.",
        author: ' Jason Guisao ',
        date: 'Jul 26, 2022 at 08:00 AM'
    },
    {
        id: 18,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/07/21/591c64b1/livealive_screens_imperialchina_mountaintop8.jpg',
        title: 'Live A Live Review – Sizzling Short Stories',
        description: "Square Enix's long-lost 1994 Super Famicom RPG is reborn in a glorious way.",
        author: ' Andrew Reiner ',
        date: 'Jul 21, 2022 at 09:00 AM'
    },
    {
        id: 19,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/07/18/4860238e/adf_screenshot_02_3840x2160_rgb-0cdc4b5cafdcc12b0a2e.jpg',
        title: 'As Dusk Falls Review – No Punches Pulled',
        description: "Interior/Night's debut interactive drama doesn't rely on fantasy or familiar characters to hook you. Great characters and an intriguing story are more than enough all on their own.",
        author: ' Matt Miller ',
        date: 'Jul 18, 2022 at 11:50 AM'
    },
    {
        id: 20,
        image: 'https://www.gameinformer.com/sites/default/files/styles/teaser_promoted_image_thumbnail/public/2022/07/15/def48161/stray_header.png',
        title: 'Stray Review – Furry Friends',
        description: "Stray is, more than anything, a charming game.",
        author: ' Blake Hester ',
        date: ' Jul 18, 2022 at 11:00 AM'
    },
];

export default ReviewData;