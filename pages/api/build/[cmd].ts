import type { NextApiRequest, NextApiResponse } from 'next';
import { APIData } from '@utils/types';
import { apiCache } from '@utils/api/cache';

const password = process.env.NEXT_PUBLIC_BUILD_PASSWORD;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIData>
) {
    const { cmd } = req.query;

    if (cmd === 'trigger') {
        const userPassword = req.headers.authorization;

        if (!password) {
            res.status(500).json({ data: { status: 'No password set' } });
        } else if (password === userPassword) {
            apiCache.set('isBuilding', true, 60);
            res.status(200).json({ data: { status: 'Build triggered' } });
        } else {
            res.status(401).json({ data: { status: 'Invalid password' } });
        }
    } else {
        res.status(200).json({
            data: {
                isBuilding: Boolean(apiCache.get('isBuilding')),
            },
        });
    }
}
