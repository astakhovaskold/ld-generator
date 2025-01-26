import {Base} from './base';

/**
 * Schema for a video object.
 * @typedef {Object} VideoObject
 * @extends {BaseScheme}
 */
export interface VideoObject extends Base {
    '@type': 'VideoObject';
    name: string;
    description?: string;
    thumbnailUrl?: string;
    uploadDate?: string;
}

export declare function videoObjectSchema(videoObject: Omit<VideoObject, '@context' | '@type'>): VideoObject;

//# sourceMappingURL=videoObject.d.ts.map
