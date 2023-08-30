import {generateFirstName, generateFullName, generatePassword, generateRandomEmail, generateSecondName} from '../utilities/utils';

export const userDetails = {
    email: generateRandomEmail(),
    firstName: generateFirstName(),
    lastName: generateSecondName(),
    password: 'Tokyorty123@',
}

export const validAuthUser = {
    email: 'v9stg560fa@example.com',
    password:'Tokyorty123@',
    firstName: 'Robert',
    lastName: 'Moore'
}

export const invalidAuthUser = {
    email: 'v9stg560fa@example.com',
    password:'Tokyorty123',
    firstName: 'Robert',
    lastName: 'Moore'
}