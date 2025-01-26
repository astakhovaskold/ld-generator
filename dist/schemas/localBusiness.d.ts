import {Base} from './base';
import {Organization} from './organization';
import {PostalAddress} from './postalAddress';

/**
 * Schema for a local business.
 *
 * @typedef {Object} LocalBusiness
 * @extends Organization
 */
export interface LocalBusiness extends Base, Omit<Organization, '@type'> {
    '@type': 'LocalBusiness';
    address?: PostalAddress;
}

export declare function localBusinessSchema(localBusiness: Omit<LocalBusiness, '@context' | '@type'>): LocalBusiness;

//# sourceMappingURL=localBusiness.d.ts.map
