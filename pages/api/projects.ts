import type { NextApiRequest, NextApiResponse } from 'next';
import type { Project } from '../../models/project';

import { ProjectRepository } from '../../models/project';
type ErrorResponse = {
    ok: boolean;
    message: string;
};

import dbConnect from '../../lib/dbConnect';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project[] | ErrorResponse>
) {
    if (!req.query.key || req.query.key !== process.env.API_KEY)
        return res.status(401).json({ ok: false, message: 'Invalid API Key' });
    await dbConnect();
    try {
        const query = ProjectRepository.find()
            .select('title description image link')
            .sort({ _id: -1 });
        if (req.query.limit != null && typeof req.query.limit == 'string')
            query.limit(parseInt(req.query.limit));
        const projects: Project[] = await query.exec();
        res.status(200).json(projects);
    } catch (err) {
        if (err instanceof Error)
            return res.status(500).json({ ok: false, message: err.message });
    }
}
