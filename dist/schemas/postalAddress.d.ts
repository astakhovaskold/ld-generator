/**
 * Schema for postal address.
 *
 * @typedef {Object} PostalAddress
 * @extends Base
 *
 * @property {string} '@type' - The type of address.
 * @property {string} streetAddress - Street and house number.
 * @property {string} addressLocality - City or locality.
 * @property {string} [addressRegion] - Region or state (optional).
 * @property {string} [postalCode] - Postal code (optional).
 * @property {string} [addressCountry] - Country (optional).
 */
export interface PostalAddress {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
}

export declare function postalAddressSchema(postalAddress: Omit<PostalAddress, '@type'>): PostalAddress;

//# sourceMappingURL=postalAddress.d.ts.map
