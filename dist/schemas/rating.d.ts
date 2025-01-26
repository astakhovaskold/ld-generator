/**
 * Schema for rating.
 *
 * @typedef {Object} Rating
 *
 * @property {string} '@type' - The type of rating.
 * @property {number} ratingValue - The value of the rating (e.g., 4.5).
 * @property {number} [bestRating] - The best rating (optional).
 */
export interface Rating {
    '@type': 'Rating';
    ratingValue: number;
    bestRating?: number;
}

export declare function ratingSchema(rating: Omit<Rating, '@type'>): Rating;

//# sourceMappingURL=rating.d.ts.map
