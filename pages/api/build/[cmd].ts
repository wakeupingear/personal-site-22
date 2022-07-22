import type { NextApiRequest, NextApiResponse } from 'next';
import { APIData } from '@utils/types';
import { apiCache } from '@utils/api/cache';

import fs from 'fs';
if (!fs.existsSync('./logs')) fs.mkdirSync('./logs');
import { spawn } from 'child_process';

const PASSWORD = process.env.NEXT_PUBLIC_BUILD_PASSWORD;
const BUILD_PATH = './logs/build.log';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIData>
) {
    const { cmd } = req.query;

    if (cmd === 'trigger') {
        const userPassword = req.headers.authorization;

        if (!PASSWORD) {
            res.status(500).json({ data: { status: 'No password set' } });
        } else if (userPassword === PASSWORD) {
            apiCache.set('isBuilding', true, 60);

            if (fs.existsSync(BUILD_PATH)) fs.rmSync(BUILD_PATH);
            const out = fs.openSync(BUILD_PATH, 'a'),
                err = fs.openSync(BUILD_PATH, 'a');
            spawn('./lib/restart.sh', {
                stdio: ['ignore', out, err],
                detached: true,
            }).unref();

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
