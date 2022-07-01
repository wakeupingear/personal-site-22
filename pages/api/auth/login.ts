import type { NextApiRequest, NextApiResponse } from 'next';
import { APIData } from '../../../utils/types';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIData>
) {
    res.status(200).json({ data: { result: 'ok' } });
}
