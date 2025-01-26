import {Base, baseSchema} from './base';
import {Offer} from './offer';

/**
 * Schema for a product.
 *
 * @typedef {Object} Product
 * @extends Base
 */
export interface Product extends Base {
    '@type': 'Product';
    name: string;
    description: string;
    image: string;
    brand: string;
    offers: Offer;
}

export function productSchema(product: Omit<Product, '@context' | '@type'>): Product {
    const schema: Product = {
        ...baseSchema,
        '@type': 'Product',
        ...product,
    };

    return schema;
}
