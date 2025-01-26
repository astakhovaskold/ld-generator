import {Base, baseSchema} from './base';
import {Rating} from './rating';
import {Person} from './person';

/**
 * Schema for a review.
 *
 * @typedef {Object} Review
 * @extends Base
 */
export interface Review extends Base {
    '@type': 'Review';
    reviewRating: Rating;
    author: Person;
    datePublished?: string;
}

export function reviewSchema(review: Omit<Review, '@context' | '@type'>): Review {
    const schema: Review = {
        ...baseSchema,
        '@type': 'Review',
        ...review,
    };

    return schema;
}
