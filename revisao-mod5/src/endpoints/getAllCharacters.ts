import { Character } from './../types';
import { Request, Response } from "express";
import { connections } from "../connections";
// import { characters } from "../data";

export default async function (req: Request, res: Response): Promise<void> {
    let errorCode: number = 400;
    try {

        const name = req.query

        // const characters: Character = await connections.raw("SELECT * FROM Actors")
        // res.status(200).send(result[0])
        
        const Characters: Character = await connections("Characters")
        res.send(Characters)
    } catch (error) {
        res.status(errorCode).send("Unexpected server error");
    }

}