import { Character } from './../types';
import { Request, Response } from "express";
import { connections } from "../connections";
// import { characters } from "../data";

export default async function (req: Request, res: Response): Promise<void> {
    let errorCode: number = 400;
    try {

        const {name, orderBy, orderType, page} = req.query

        // const characters: Character = await connections.raw("SELECT * FROM Actors")
        // res.status(200).send(result[0])

        const resultsPerPage: number = 5;

        // página 1 -> offset 0  === 5 * 0 ou (1 - 1) = 0
        // paginá 2 -> offset 5 === 5 * 1 ou (2 - 1) = 5
        // paginá 3 -> offset 10 === 5 * 2 ou (3 - 1) = 10

        const offset: number = resultsPerPage * (Number(page) - 1);
        
        const Characters: Character[] = await connections("Characters")
            .where("name", "LIKE", `%${name}%`)
            .orderBy(orderBy as string || "name", orderType as string)
            .offset(offset)

        res.send(Characters)
    } catch (error) {
        res.status(errorCode).send("Unexpected server error");
    }

}