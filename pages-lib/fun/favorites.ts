export type FavoriteItem = {
    name: string;
    link: string;
    image: string;
    blurb?: string;
};

export const FAVORITES: FavoriteItem[] = [
    {
        name: 'The Legend of Zelda: Breath of the Wild',
        link: 'https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch',
        image: '/favorites/zelda.jpg',
        blurb: 'Favorite game. Gameplay is king',
    },
    {
        name: 'Flower Boy',
        link: 'https://www.youtube.com/watch?v=FcBfSwxOVUM',
        image: '/favorites/flowerboy.jpg',
        blurb: 'Favorite all-round album',
    },
    {
        name: 'The Good Place',
        link: 'https://en.wikipedia.org/wiki/The_Good_Place',
        image: '/favorites/goodplace.jpg',
        blurb: 'Favorite show. The finale broke me',
    },
    {
        name: 'Cave Story',
        link: 'https://www.cavestory.org/download/cave-story.php',
        image: '/favorites/cavestory.jpg',
        blurb: 'Pixel inspired me to make Outset',
    },
    {
        name: 'Super Paper Mario',
        link: 'https://en.wikipedia.org/wiki/Super_Paper_Mario',
        image: '/favorites/spm.jpg',
        blurb: 'Ahead of its time. Also, best end credits song ever',
    },
    {
        name: 'Hawaii Part II',
        link: 'https://www.youtube.com/watch?v=NbtsZJXnzFY',
        image: '/favorites/hawaii.jpg',
        blurb: "Scares me and makes me cry. One of the best things I've ever heard",
    },
    {
        name: 'Undertale',
        link: 'https://undertale.com/',
        image: '/favorites/undertale.jpg',
        blurb: 'Toby Fox is my favorite game designer and composer',
    },
    {
        name: 'Everything Everything All At Once',
        link: 'https://a24films.com/films/everything-everywhere-all-at-once',
        image: '/favorites/everything.jpg',
        blurb: 'I want to make something this brilliantly sprawling yet focused',
    },
    {
        name: 'Celeste',
        link: 'http://www.celestegame.com/',
        image: '/favorites/celeste.jpg',
        blurb: 'Madeline is my favorite game protagonist',
    },
    {
        name: 'Mr. Morale & The Big Steppers',
        link: 'https://www.youtube.com/watch?v=tvNSXS4x9nc&list=PLjB_8hSS2lEMY-ap4zdPv0-mbTwxtN7KW',
        image: '/favorites/mrmorale.jpg',
        blurb: "Kendrick's inclusion of 'Auntie Diaries' hit me out of left field",
    },
    {
        name: 'Graduation',
        link: 'https://www.youtube.com/watch?v=WwYbTxOZF0k&list=PLAUxsgLNM2BuOcW0Bpp-nGT1oyrbfC7b1',
        image: '/favorites/graduation.jpg',
        blurb: "Kanye's best album",
    },
    {
        name: '808s & Heartbreak',
        link: 'https://www.youtube.com/watch?v=d9BMPmfxaoM&list=PLX68ZEYlh74tpCb5sOXP98ito6DhP60-t',
        image: '/favorites/808s.jpg',
        blurb: 'Came at an important time in my life',
    },
    {
        name: 'Katamari Damacy',
        link: 'https://en.wikipedia.org/wiki/Katamari_Damacy',
        image: '/favorites/katamari.png',
        blurb: ':D',
    },
    {
        name: 'Malibu',
        link: 'https://www.youtube.com/watch?v=KXdW0g6jAxE&list=PLkLZNGcjKAQ_T6e9HD9YRiUcE85vouttE',
        image: '/favorites/malibu.jpg',
        blurb: 'Front to back smooth grooves',
    },
    {
        name: 'Whiplash',
        link: 'https://en.wikipedia.org/wiki/Whiplash_(2013_film)',
        image: '/favorites/whiplash.jpg',
        blurb: 'Maybe my favorite movie',
    },
    {
        name: 'Super Mario Galaxy',
        link: 'https://en.wikipedia.org/wiki/Super_Mario_Galaxy',
        image: '/favorites/galaxy.jpg',
        blurb: 'Defined my childhood',
    },
    {
        name: 'IGOR',
        link: 'https://www.youtube.com/watch?v=hVSI6JryVa8',
        image: '/favorites/igor.jpg',
        blurb: 'This got me into hip hop',
    },
    {
        name: 'Community',
        link: 'https://en.wikipedia.org/wiki/Community_(TV_series)',
        image: '/favorites/community.jpg',
        blurb: '*movie reference*',
    },
    {
        name: 'Breaking Bad',
        link: 'https://en.wikipedia.org/wiki/Breaking_Bad',
        image: '/favorites/bb.jpg',
        blurb: 'Season 5 is the best season of anything',
    },
    {
        name: 'Panic',
        link: 'https://www.youtube.com/watch?v=zju_o5f60OQ&list=PLMEOLAYxGgsvdyN3IPkKBzy2spxoed9ad',
        image: '/favorites/panic.jpg',
        blurb: 'Loved this even before I listened to much music',
    },
    {
        name: 'The Simpsons',
        link: 'https://en.wikipedia.org/wiki/The_Simpsons',
        image: '/favorites/simpsons.jpg',
        blurb: "Contains the best comedy bits I've seen on TV",
    },
    {
        name: 'Random Access Memories - Japan',
        link: 'https://www.youtube.com/watch?v=z0ESDqg6178&list=PLAl0NKyxIPPRnEr_ys0GgDIvJ_QAJzLmx',
        image: '/favorites/ram.jpg',
        blurb: "Long live Daft Punk. Listen to the bonus track 'Horizon'",
    },
    {
        name: 'Folklore Deluxe',
        link: 'https://www.youtube.com/watch?v=-Oj8e5hGigY',
        image: '/favorites/folklore.png',
        blurb: 'Great for 1am walks around campus',
    },
    {
        name: 'Paper Mario: The Thousand-Year Door',
        link: 'https://en.wikipedia.org/wiki/Paper_Mario:_The_Thousand-Year_Door',
        image: '/favorites/ttyd.jpg',
        blurb: 'Made me enjoy every aspect of an RPG',
    },
    {
        name: 'Good Kid, M.A.A.D City',
        link: 'https://www.youtube.com/watch?v=AuikIJZpt_8',
        image: '/favorites/goodkid.jpg',
        blurb: 'An airtight piece of storytelling',
    },
    {
        name: 'Sonic Mania OST',
        link: 'https://www.youtube.com/watch?v=bWBlfSRlNC4',
        image: '/favorites/mania.jpg',
        blurb: 'Like the game but LOVE the OST. Tee Lopes set a new bar',
    },
    {
        name: 'My Beautiful Dark Twisted Fantasy',
        link: 'https://www.youtube.com/watch?v=UTH1VNHLjng&list=PL8YH4mOwWryUMna911yJM2B52iIIzigKy&index=1',
        image: '/favorites/mbdtf.jpg',
        blurb: "'Lost in the World' might be my favorite song",
    },
    {
        name: 'Channel Orange',
        link: 'https://www.youtube.com/watch?v=l-7DP7ohijE',
        image: '/favorites/orange.jpg',
        blurb: 'So vivid',
    },
    {
        name: '3 15 20',
        link: 'https://www.youtube.com/watch?v=gezFLhUznSk',
        image: '/favorites/31520.png',
        blurb: 'With titles and a real rollout, this would have blown up',
    },
    {
        name: 'Outer Wilds',
        link: 'https://www.mobiusdigitalgames.com/outer-wilds.html',
        image: '/favorites/wilds.png',
        blurb: 'I keep thinking about this game',
    },
];
