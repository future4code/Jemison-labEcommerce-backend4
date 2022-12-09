import { Response, Request } from 'express'
import { connections } from '../connections';

export default async function putCreateCharacter(req: Request, res: Response): Promise<void> {
    let errorCode: number = 500;
    try {
        const { name, gender, description } = req.body
        console.log(req.headers["content-type"]) // vai retornar no terminal o tipo de conteúdo que está sendo enviado. No caso, "application/json"

        await connections("Characters")
        .insert({name, gender, description})
        
        if (!name || !gender) {
            errorCode = 442;
            throw new Error("Please check the fields")
        }
    } catch (error) {
        res.status(errorCode).end()
    }

    res.status(201).end()

}