/**
 * Base schema for all data types.
 *
 * @interface Base
 *
 * @property {string} '@context' - The context of the schema, usually "https://schema.org".
 * @property {string} '@type' - The type of the schema (e.g., "Product", "Review", etc.).
 */
export interface Base {
    '@context': string;
    '@type': string;
}

export declare const baseSchema: Omit<Base, '@type'>;
//# sourceMappingURL=base.d.ts.map
