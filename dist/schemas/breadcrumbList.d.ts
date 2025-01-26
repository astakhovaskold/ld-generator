import {Base} from './base';
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

export declare function breadcrumbListSchema(breadcrumbs: Omit<BreadcrumbList, '@type'>): BreadcrumbList;

//# sourceMappingURL=breadcrumbList.d.ts.map
