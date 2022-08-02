import { PageData } from '../types';

const B_P_GRAD = '#5d55ed';
export const PAGE_DATA: PageData = {
    components: [
        {
            className: 'h-fit',
            sideClassName: 'h-fit',
            components: [
                {
                    name: 'Games',
                    startDate: '2022',
                    backgroundColor: B_P_GRAD,
                    width: 20,
                    icon: 'games',
                },
                {
                    name: 'Art',
                    startDate: '2022',
                    backgroundColor: B_P_GRAD,
                    width: 20,
                    icon: 'art',
                },
                {
                    name: 'Web',
                    startDate: '2022',
                    backgroundColor: B_P_GRAD,
                    width: 20,
                    icon: 'web',
                },
                {
                    name: 'Film',
                    startDate: '2022',
                    backgroundColor: B_P_GRAD,
                    width: 20,
                    icon: 'film',
                },
                {
                    name: 'Code',
                    startDate: '2022',
                    backgroundColor: B_P_GRAD,
                    width: 20,
                    icon: 'code',
                },
                {
                    name: 'Professional',
                    startDate: '2022',
                    backgroundColor: B_P_GRAD,
                    width: 20,
                    icon: 'professional',
                },
            ],
        },
        {
            className: 'h-[10rem] sm:h-[24rem]',
            components: [
                {
                    name: 'Outset',
                    startDate: '2017-2022',
                    image: '/outset/outsetSplash.png',
                    width: 70,
                },
            ],
        },
        {
            className: 'h-[10rem] sm:h-[24rem]',
            components: [
                {
                    name: 'Inc Life',
                    startDate: '2020',
                    image: '/incLife/incLifeSplash.png',
                    width: 35,
                },
                {
                    name: 'Tiny Headed Game',
                    startDate: '2020',
                    image: '/thk/thkSplash.png',
                    width: 65,
                    link: '/thk',
                },
            ],
        },
    ],
};
