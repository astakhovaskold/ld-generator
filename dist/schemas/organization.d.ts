import {Base} from './base';
import {ContactPoint} from './contactPoint';

/**
 * Schema for an organization.
 *
 * @typedef {Object} Organization
 * @extends Base
 */
export interface Organization extends Base {
    '@type': 'Organization';
    name: string;
    url?: string;
    logo?: string;
    contactPoint?: ContactPoint;
}

export declare function organizationSchema(organization: Omit<Organization, '@context' | '@type'>): Organization;

//# sourceMappingURL=organization.d.ts.map
