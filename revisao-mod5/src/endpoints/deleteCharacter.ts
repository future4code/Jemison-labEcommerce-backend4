import { Request, Response } from "express";
import { connections } from "../connections";


export default async function deleteCharacter (req: Request, res: Response): Promise<void> {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);
        
        await connections("Characters")
        .delete()
        .where({id})
        
        res.status(200).send("Character deleted successfully!");
    } catch (error) {
        res.status(errorCode).end();
    }
}