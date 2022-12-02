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
    },
    {
        id: 4,
        name: "Dr. Charles Xavier",
        gender: GENDER.MALE,
        description: "Professor de mutantes e direor do instituto Xavier, com seus poderes mentais, é capaz de ler a mente de qualquer um."
    },
    {
        id: 5,
        name: "Wolverine",
        gender: GENDER.MALE,
        description: "Mutante com poderes de cura acelerada e garras retráteis."
    },
    {
        id: 6,
        name: "Magneto",
        gender: GENDER.MALE,
        description: "Mutante com poderes magnéticos, é capaz de controlar metais e manipular campos magnéticos."
    }
]