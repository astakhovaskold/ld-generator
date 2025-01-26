import {baseSchema} from './base';

/**
 * Schema for representing a person.
 *
 * @typedef {Object} Person
 *
 * @property {string} '@type' - The type of person.
 * @property {string} name - Name of the person.
 */
export interface Person {
    '@type': 'Person';
    name: string;
}

export function createPersonSchema(person: Omit<Person, '@type'>): Person {
    const schema: Person = {
        ...baseSchema,
        '@type': 'Person',
        ...person,
    };

    return schema;
}
