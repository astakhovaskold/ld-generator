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

export declare function contactPointSchema(contactPoint: Omit<ContactPoint, '@context' | '@type'>): ContactPoint;

//# sourceMappingURL=contactPoint.d.ts.map
