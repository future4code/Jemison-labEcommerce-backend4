import { Character, GENDER, Movie } from './types';
export const movies: Movie[] = [
    { 
        id: 1,
        title: "A volta dos que não foram",
        year: 2020
    },
    {
        id: 2,
        title: "X-Men: A nova geração",
        year: 2020
    }
]

export const characters: Character[] = [
    {
        id: 1,
        name: "João",
        gender: GENDER.MALE,
        description: "João é um cara legal"
    },
    {
        id: 2,
        name: "Maria",
        gender: GENDER.FEMALE,
        description: "Maria é uma mulher legal"
    },
    {
        id: 3,
        name: "José",
        gender: GENDER.MALE,
        description: "José é um cara legal"
    }
]