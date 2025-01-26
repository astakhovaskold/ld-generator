import {Base, baseSchema} from './base';

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

export function videoObjectSchema(videoObject: Omit<VideoObject, '@context' | '@type'>): VideoObject {
    const schema: VideoObject = {
        ...baseSchema,
        '@type': 'VideoObject',
        ...videoObject,
    };

    return schema;
}
