import {Base} from './base';
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

export declare function createPlaceSchema(place: Omit<Place, '@context' | '@type'>): Place;

//# sourceMappingURL=place.d.ts.map
