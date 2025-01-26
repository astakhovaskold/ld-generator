import {Base} from './base';
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
    startDate: string;
    endDate?: string;
    location?: EventLocation;
}

export declare function createEventSchema(event: Omit<Event, '@context' | '@type'>): Event;

//# sourceMappingURL=event.d.ts.map
