import {Base, baseSchema} from './base';
import {ListItem} from './listItem';

/**
 * Schema for breadcrumb list.
 *
 * @typedef {Object} BreadcrumbList
 * @extends Base
 */
export interface BreadcrumbList extends Base {
    '@type': 'BreadcrumbList';
    itemListElement: ListItem[];
}

export function breadcrumbListSchema(breadcrumbs: Omit<BreadcrumbList, '@type'>): BreadcrumbList {
    const schema: BreadcrumbList = {
        ...baseSchema,
        '@type': 'BreadcrumbList',
        ...breadcrumbs,
    };

    return schema;
}
