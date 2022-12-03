import { Request, Response } from "express";
// import { characters } from "../data";

export default function deleteCharacter (req: Request, res: Response) {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);
        // const index: number = characters.findIndex((character) => character.id === id);
        // if (index === -1) {
        //     errorCode = 404;
        //     throw new Error("Character not found!");
        // }
        // // characters.splice(index, 1);
        res.status(200).send("Character deleted successfully!");
    } catch (error) {
        res.status(errorCode).end();
    }
}