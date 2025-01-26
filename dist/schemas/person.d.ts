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

export declare function createPersonSchema(person: Omit<Person, '@type'>): Person;

//# sourceMappingURL=person.d.ts.map
