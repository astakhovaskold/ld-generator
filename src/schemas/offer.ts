import {Base, baseSchema} from './base';

/**
 * Schema for an offer.
 *
 * @typedef {Object} Offer
 * @extends Base
 *
 * @property {'Offer'} '@type' - The type of offer.
 * @property {number} price - Price of the product or service.
 * @property {string} priceCurrency - Currency code (e.g., "USD").
 *
 * @property {'InStock' | 'OutOfStock' | 'PreOrder' | 'SoldOut'} [availability]
 * Availability status:
 *
 * - 'InStock' — available,
 * - 'OutOfStock' — not available,
 * - 'PreOrder' — available for pre-order,
 * - 'SoldOut' — sold out (optional).
 */
export interface Offer extends Base {
    '@type': 'Offer';
    price: number;
    priceCurrency: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'SoldOut';
}

export function offerSchema(offer: Omit<Offer, '@context' | '@type'>): Offer {
    const schema: Offer = {
        ...baseSchema,
        '@type': 'Offer',
        ...offer,
    };

    return schema;
}
