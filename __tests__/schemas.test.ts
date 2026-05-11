import {
    breadcrumbList,
    breadcrumbListSchema,
    contactPoint,
    contactPointSchema,
    event,
    faqPage,
    createEventSchema,
    createPersonSchema,
    createPlaceSchema,
    FAQPageSchema,
    imageObject,
    imageObjectSchema,
    listItem,
    listItemSchema,
    localBusinessSchema,
    localBusiness,
    offer,
    offerSchema,
    organization,
    organizationSchema,
    person,
    place,
    postalAddressSchema,
    postalAddress,
    product,
    productSchema,
    rating,
    ratingSchema,
    recipe,
    recipeSchema,
    reviewSchema,
    review,
    schema,
    videoObject,
    videoObjectSchema,
} from '../src/index';

describe('Public schema factories', () => {
    it('creates product schema with context, type, and nested offer data', () => {
        const product = productSchema({
            name: 'Widget',
            description: 'Compact widget',
            image: 'https://example.com/widget.png',
            brand: 'Acme',
            offers: offerSchema({
                price: 29.99,
                priceCurrency: 'USD',
                availability: 'InStock',
            }),
        });

        expect(product).toEqual({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Widget',
            description: 'Compact widget',
            image: 'https://example.com/widget.png',
            brand: 'Acme',
            offers: {
                '@context': 'https://schema.org',
                '@type': 'Offer',
                price: 29.99,
                priceCurrency: 'USD',
                availability: 'InStock',
            },
        });
    });

    it('creates organization and local business schemas with nested structured data', () => {
        const contactPoint = contactPointSchema({
            telephone: '+1-555-0100',
            contactType: 'Customer Support',
        });

        const organization = organizationSchema({
            name: 'Acme Inc.',
            url: 'https://example.com',
            logo: 'https://example.com/logo.svg',
            contactPoint,
        });

        const localBusiness = localBusinessSchema({
            name: 'Acme Store',
            url: 'https://example.com/store',
            address: postalAddressSchema({
                streetAddress: '123 Main St',
                addressLocality: 'Madrid',
                postalCode: '28001',
                addressCountry: 'ES',
            }),
        });

        expect(organization).toMatchObject({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Acme Inc.',
            contactPoint: {
                '@context': 'https://schema.org',
                '@type': 'ContactPoint',
                telephone: '+1-555-0100',
                contactType: 'Customer Support',
            },
        });

        expect(localBusiness).toMatchObject({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Acme Store',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Main St',
                addressLocality: 'Madrid',
                postalCode: '28001',
                addressCountry: 'ES',
            },
        });
    });

    it('creates event, place, faq, person, rating, and review schemas from top-level exports', () => {
        const place = createPlaceSchema({
            name: 'Conference Hall',
            address: postalAddressSchema({
                streetAddress: '1 Event Plaza',
                addressLocality: 'Barcelona',
            }),
        });

        const event = createEventSchema({
            name: 'Frontend Summit',
            startDate: '2026-05-11T09:00:00Z',
            endDate: '2026-05-11T17:00:00Z',
            location: {
                '@type': 'Place',
                name: place.name,
                address: place.address,
            },
        });

        const person = createPersonSchema({
            name: 'Jane Doe',
        });

        const rating = ratingSchema({
            ratingValue: 4.9,
            bestRating: 5,
        });

        const review = reviewSchema({
            reviewRating: rating,
            author: person,
            datePublished: '2026-05-11',
        });

        const faq = FAQPageSchema({
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Does it support JSON-LD?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, it generates Schema.org-compatible objects.',
                    },
                },
            ],
        });

        expect(place['@type']).toBe('Place');
        expect(event).toMatchObject({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Frontend Summit',
            location: {
                '@type': 'Place',
                name: 'Conference Hall',
            },
        });
        expect(person).toEqual({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Jane Doe',
        });
        expect(rating).toEqual({
            '@type': 'Rating',
            ratingValue: 4.9,
            bestRating: 5,
        });
        expect(review).toMatchObject({
            '@context': 'https://schema.org',
            '@type': 'Review',
            author: person,
            reviewRating: rating,
            datePublished: '2026-05-11',
        });
        expect(faq).toEqual({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Does it support JSON-LD?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes, it generates Schema.org-compatible objects.',
                    },
                },
            ],
        });
    });

    it('exports short aliases that point to the existing factory implementations', () => {
        expect(product).toBe(productSchema);
        expect(review).toBe(reviewSchema);
        expect(place).toBe(createPlaceSchema);
        expect(organization).toBe(organizationSchema);
        expect(localBusiness).toBe(localBusinessSchema);
        expect(breadcrumbList).toBe(breadcrumbListSchema);
        expect(faqPage).toBe(FAQPageSchema);
        expect(event).toBe(createEventSchema);
        expect(recipe).toBe(recipeSchema);
        expect(videoObject).toBe(videoObjectSchema);
        expect(imageObject).toBe(imageObjectSchema);
        expect(person).toBe(createPersonSchema);
        expect(listItem).toBe(listItemSchema);
        expect(offer).toBe(offerSchema);
        expect(rating).toBe(ratingSchema);
        expect(postalAddress).toBe(postalAddressSchema);
        expect(contactPoint).toBe(contactPointSchema);
    });

    it('exports a grouped schema facade over the short aliases', () => {
        expect(schema.product).toBe(product);
        expect(schema.review).toBe(review);
        expect(schema.place).toBe(place);
        expect(schema.organization).toBe(organization);
        expect(schema.localBusiness).toBe(localBusiness);
        expect(schema.breadcrumbList).toBe(breadcrumbList);
        expect(schema.faqPage).toBe(faqPage);
        expect(schema.event).toBe(event);
        expect(schema.recipe).toBe(recipe);
        expect(schema.videoObject).toBe(videoObject);
        expect(schema.imageObject).toBe(imageObject);
        expect(schema.person).toBe(person);
        expect(schema.listItem).toBe(listItem);
        expect(schema.offer).toBe(offer);
        expect(schema.rating).toBe(rating);
        expect(schema.postalAddress).toBe(postalAddress);
        expect(schema.contactPoint).toBe(contactPoint);
    });
});
