import {Base, baseSchema} from './base';
import {PostalAddress} from './postalAddress';

/**
 * Schema for a place.
 *
 * @typedef {Object} Place
 * @extends Base
 */
export interface Place extends Base {
    '@type': 'Place';
    name: string;
    address?: PostalAddress;
}

export function createPlaceSchema(place: Omit<Place, '@context' | '@type'>): Place {
    const schema: Place = {
        ...baseSchema,
        '@type': 'Place',
        ...place,
    };

    return schema;
}
