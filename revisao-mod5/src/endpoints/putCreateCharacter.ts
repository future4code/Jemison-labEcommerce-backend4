import {Response, Request} from 'express'
import {characters} from '../data'

export default function putCreateCharacter(req: Request, res: Response): void {

    const {name, gender, description} = req.body
    
    characters.push({
        id: Date.now(),  // Date.now() = pega o tempo em milisegundos e pode ser usado para gerar id
        name,
        gender,
        description
    })

    res.status(201).end()


}