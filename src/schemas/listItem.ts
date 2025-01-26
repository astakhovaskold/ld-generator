import {Base, baseSchema} from './base';

/**
 * Schema for list item.
 *
 * @typedef {Object} ListItem
 *
 * @property {string} '@type' - The type of list item.
 * @property {number} position - Position of the item in the list (e.g., 1 for the first item).
 *
 * @property {Object} item - The list item.
 * @property {string} item.'@id' - Unique identifier for the item.
 * @property {string} item.name - Name of the item.
 */
export interface ListItem extends Base {
    '@type': 'ListItem';
    position: number;
    item: {
        '@id': string;
        name: string;
    };
}

export function listItemSchema(listItem: Omit<ListItem, '@context' | '@type'>): ListItem {
    const schema: ListItem = {
        ...baseSchema,
        '@type': 'ListItem',
        ...listItem,
    };

    return schema;
}
