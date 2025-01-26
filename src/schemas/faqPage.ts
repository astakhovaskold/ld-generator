import {Base, baseSchema} from './base';

/**
 * Schema for a FAQ page.
 *
 * @typedef {Object} FAQPage
 */
export interface FAQPageQuestion {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
        '@type': 'Answer';
        text: string;
    };
}

export interface FAQPage extends Base {
    '@type': 'FAQPage';
    mainEntity: FAQPageQuestion[];
}

export function FAQPageSchema(faqPage: Omit<FAQPage, '@context' | '@type'>): FAQPage {
    const schema: FAQPage = {
        ...baseSchema,
        '@type': 'FAQPage',
        ...faqPage,
    };

    return schema;
}
