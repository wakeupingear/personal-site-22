import type { NextApiRequest, NextApiResponse } from 'next';
import { APIData, PageData } from '../../utils/types';

const pageData: PageData = {
    components: [
        {
            components: [
                {
                    name: 'Swip',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                    width: 70,
                },
                {
                    name: 'Swap',
                    startDate: '2022',
                    image: 'https://www.looper.com/img/gallery/the-reason-so-many-fans-hate-pogo-on-the-umbrella-academy/intro-1579715101.jpg',
                },
            ],
        },
    ],
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIData>
) {
    res.status(200).json({ data: pageData });
}
