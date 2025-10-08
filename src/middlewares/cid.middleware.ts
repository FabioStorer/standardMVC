import crypto from 'crypto';
import { NextFunction, Request, Response} from 'express';

export const cid = (req: Request, res: Response, next: NextFunction) => {
    const cid = crypto.randomUUID();
    req.headers.cid = cid;
    next();
};