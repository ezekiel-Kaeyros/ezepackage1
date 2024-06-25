import { Request, Response } from 'express';
import URL from '../models/url.model';


export const getUrlById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const url = await URL.findById(id)

        if (!url) {
            console.log("URL(s) not found");
            res.status(404).json({message: "Url(s) not found"});
        } else {
            console.log("Url(s) found: ", url);
            res.status(200).json(url)
        }
    } catch(error: any) {
        console.log("Server error: ", error);
        res.status(500).json({ message: error });
    }
}