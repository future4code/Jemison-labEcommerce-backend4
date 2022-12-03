import { Response, Request } from 'express'
// import { characters } from '../data'

export default function putCreateCharacter(req: Request, res: Response): void {
    let errorCode: number = 400;
    // try {
    //     const { name, gender, description } = req.body
    //     console.log(req.headers["content-type"]) // vai retornar no terminal o tipo de conteúdo que está sendo enviado. No caso, "application/json"

    //     characters.push({
    //         id: Date.now(),  // Date.now() = pega o tempo em milisegundos e pode ser usado para gerar id
    //         name,
    //         gender,
    //         description
    //     })
    //     if (!name || !gender) {
    //         errorCode = 442;
    //         throw new Error("Please check the fields")
    //     }
    // } catch (error) {
    //     res.status(errorCode).end()
    // }

    // res.status(201).end()

}