import {Base} from './base';
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

export declare function reviewSchema(review: Omit<Review, '@context' | '@type'>): Review;

//# sourceMappingURL=review.d.ts.map
