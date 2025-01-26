import {Base, baseSchema} from './base';
import {PostalAddress} from './postalAddress';

/**
 * Schema for an event.
 *
 * @typedef {Object} Event
 */
export interface EventLocation {
    '@type': 'Place';
    name?: string;
    address?: PostalAddress;
}

export interface Event extends Base {
    '@type': 'Event';
    name: string;
    startDate: string;               /* Start date in ISO 8601 format, e.g., "2025-01-26T12:00" */
    endDate?: string;                /* End date in ISO 8601 format, e.g., "2025-01-26T14:00" (optional) */
    location?: EventLocation;        /* Location of the event (using EventLocation) */
}

export function createEventSchema(event: Omit<Event, '@context' | '@type'>): Event {
    const schema: Event = {
        ...baseSchema,
        '@type': 'Event',
        ...event,
    };

    return schema;
}
