import type { NextApiRequest, NextApiResponse } from 'next';
import { APIData } from '../../../src/utils/types';

const SUDO_AUTH = process.env.SUDO_AUTH;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIData>
) {
    const uid = req.headers.authorization;

    if (uid === SUDO_AUTH) {
        return res.status(200).json({ data: { status: 'ok' } });
    }

    res.status(401).json({ data: { error: 'Incorrect auth' } });
}
