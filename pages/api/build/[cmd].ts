import type { NextApiRequest, NextApiResponse } from 'next';
import { APIData } from '../../../utils/types';

const isBuilding = false;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIData>
) {
    const { cmd } = req.query;

    if (cmd === 'trigger') {
    } else {
    }
    res.status(200).json({ data: { isBuilding } });
}
