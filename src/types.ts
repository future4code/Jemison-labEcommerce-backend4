export enum GENDER {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export type Movie = {
    id: number,
    title: string,
    year: number,
}

export type Character = {
    id: number,
    name: string,
    gender: GENDER,
    description?: string // ? = transforma o parametro opcional
}