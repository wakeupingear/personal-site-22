import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export type HomepageProps = InferGetServerSidePropsType<
    typeof getServerSideProps
>;

const B_P_GRAD = '#4bf2f6, #7e32de';
const PAGE_DATA = {
    components: [
        {
            height: 'fit-content',
            sideHeight: 'fit-content',
            components: [
                {
                    name: 'Games',
                    startDate: '2022',
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: 'games',
                },
                {
                    name: 'Art',
                    startDate: '2022',
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: 'art',
                },
                {
                    name: 'Web',
                    startDate: '2022',
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: 'web',
                },
                {
                    name: 'Film',
                    startDate: '2022',
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: 'film',
                },
                {
                    name: 'Code',
                    startDate: '2022',
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: 'code',
                },
                {
                    name: 'Professional',
                    startDate: '2022',
                    backgroundColors: B_P_GRAD,
                    width: 20,
                    icon: 'professional',
                },
            ],
        },
        {
            components: [
                {
                    name: 'Swoop',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                    width: 40,
                },
                {
                    name: 'Swup',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                    width: 35,
                },
                {
                    name: 'Swp',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                    width: 25,
                },
            ],
        },
        {
            components: [
                {
                    name: 'Skronkle',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                    width: 70,
                },
                {
                    name: 'Swap',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                    width: 30,
                },
            ],
        },
    ],
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    return {
        props: {
            PAGE_DATA: PAGE_DATA,
        },
    };
};
