import { Request, Response } from 'express';
import { createAuthenticatedClient, Grant } from "@interledger/open-payments";



export const handleRedirect = async (req: Request, res: Response) => {
    console.log(req.body)
    res.json({ message: 'Hello from the example route!' });
}