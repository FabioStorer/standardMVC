import { Request, Response, NextFunction } from "express";

export const errorHandling = () => {
    (err: any, req: Request, res: Response, next: NextFunction) => {
        console.log('aqui')
        if (err) {
            return res.status(400).json({
                msg: 'Ocorreu um erro!',
                error: err.message
            });
        }
        next();
    }
};