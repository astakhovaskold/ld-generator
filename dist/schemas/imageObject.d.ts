import {Base} from './base';

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

export declare function imageObjectSchema(imageObject: Omit<ImageObject, '@context' | '@type'>): ImageObject;

//# sourceMappingURL=imageObject.d.ts.map
