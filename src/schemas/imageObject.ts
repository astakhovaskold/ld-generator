import {Base, baseSchema} from './base';

/**
 * Schema for an image object.
 *
 * @typedef {Object} ImageObject
 * @extends {Base}
 */
export interface ImageObject extends Base {
    '@type': 'ImageObject';
    url: string;
    caption?: string;
}

export function imageObjectSchema(imageObject: Omit<ImageObject, '@context' | '@type'>): ImageObject {
    const schema: ImageObject = {
        ...baseSchema,
        '@type': 'ImageObject',
        ...imageObject,
    };

    return schema;
}
