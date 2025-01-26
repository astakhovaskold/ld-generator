import {Base} from './base';

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

export declare function FAQPageSchema(faqPage: Omit<FAQPage, '@context' | '@type'>): FAQPage;

//# sourceMappingURL=faqPage.d.ts.map
