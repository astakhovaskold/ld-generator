import {baseSchema} from './base';

/**
 * Schema for contact information.
 *
 * @typedef {Object} ContactPoint
 *
 * @property {string} '@type' - The type of contact information.
 * @property {string} telephone - Phone number.
 * @property {string} contactType - Type of contact (e.g., "Customer Service").
 */
export interface ContactPoint {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
}

export function contactPointSchema(contactPoint: Omit<ContactPoint, '@context' | '@type'>): ContactPoint {
    const schema: ContactPoint = {
        ...baseSchema,
        '@type': 'ContactPoint',
        ...contactPoint,
    };

    return schema;
}
