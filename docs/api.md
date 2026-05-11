# API Reference

## Overview

All exported helpers return plain JavaScript objects shaped for Schema.org / JSON-LD usage. In most cases the helper injects:

- `@context: 'https://schema.org'`
- a fixed `@type`

Consumers should serialize the result explicitly when embedding it into markup:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{__html: JSON.stringify(productSchema(...))}}
/>
```

## Public API Layers

### Preferred API: Short Aliases

For most users, the recommended imports are the short aliases:

```ts
import {event, offer, product} from 'ld-generator';
```

They are concise and still support direct named-import tree shaking.

### Compatibility API: Legacy Export Names

The original exports remain available for backward compatibility:

```ts
import {createEventSchema, offerSchema, productSchema} from 'ld-generator';
```

These functions are still supported and map to the same implementations.

### Grouped Convenience API

If you prefer a namespaced style, use:

```ts
import {schema} from 'ld-generator';

schema.product({...});
schema.offer({...});
schema.event({...});
```

This is a convenience layer over the same function implementations. When bundle size matters, prefer direct named imports over `schema.*`.

## Exported Factories

| Export | Schema Type | Notes |
| --- | --- | --- |
| `productSchema` | `Product` | Includes `name`, `description`, `image`, `brand`, `offers` |
| `reviewSchema` | `Review` | Accepts `reviewRating`, `author`, optional `datePublished` |
| `createPlaceSchema` | `Place` | Accepts `name`, optional `address` |
| `organizationSchema` | `Organization` | Accepts `name`, optional `url`, `logo`, `contactPoint` |
| `localBusinessSchema` | `LocalBusiness` | Extends organization-like fields with optional `address` |
| `breadcrumbListSchema` | `BreadcrumbList` | Accepts `itemListElement` |
| `FAQPageSchema` | `FAQPage` | Accepts `mainEntity` questions/answers |
| `createEventSchema` | `Event` | Accepts `name`, `startDate`, optional `endDate`, `location` |
| `recipeSchema` | `Recipe` | Accepts `name`, optional yield, ingredients, instructions |
| `videoObjectSchema` | `VideoObject` | Accepts `name`, optional media metadata |
| `imageObjectSchema` | `ImageObject` | Accepts `url`, optional `caption` |
| `createPersonSchema` | `Person` | Accepts `name` |
| `listItemSchema` | `ListItem` | Accepts `position` and `item` |
| `offerSchema` | `Offer` | Accepts `price`, `priceCurrency`, optional `availability` |
| `ratingSchema` | `Rating` | Accepts `ratingValue`, optional `bestRating` |
| `postalAddressSchema` | `PostalAddress` | Accepts address fields |
| `contactPointSchema` | `ContactPoint` | Accepts `telephone` and `contactType` |

## Short Alias Mapping

| Alias | Existing Export |
| --- | --- |
| `product` | `productSchema` |
| `review` | `reviewSchema` |
| `place` | `createPlaceSchema` |
| `organization` | `organizationSchema` |
| `localBusiness` | `localBusinessSchema` |
| `breadcrumbList` | `breadcrumbListSchema` |
| `faqPage` | `FAQPageSchema` |
| `event` | `createEventSchema` |
| `recipe` | `recipeSchema` |
| `videoObject` | `videoObjectSchema` |
| `imageObject` | `imageObjectSchema` |
| `person` | `createPersonSchema` |
| `listItem` | `listItemSchema` |
| `offer` | `offerSchema` |
| `rating` | `ratingSchema` |
| `postalAddress` | `postalAddressSchema` |
| `contactPoint` | `contactPointSchema` |

## Usage Example

```ts
import {
  offer,
  organization,
  postalAddress,
  product,
} from 'ld-generator';

const company = organization({
  name: 'Acme Inc.',
  url: 'https://example.com',
});

const productData = product({
  name: 'Acme Widget',
  description: 'Small but useful.',
  image: 'https://example.com/widget.jpg',
  brand: company.name,
  offers: offer({
    price: 49.99,
    priceCurrency: 'USD',
    availability: 'InStock',
  }),
});

const storeAddress = postalAddress({
  streetAddress: '123 Main St',
  addressLocality: 'Madrid',
  postalCode: '28001',
  addressCountry: 'ES',
});
```

## Behavior Notes

### Return Values

The library returns objects, not JSON strings. This is important for:

- React and Next.js integration
- unit testing
- composing nested schema objects before serialization

### Context Injection Is Mostly Consistent, But Not Fully Uniform

Most factories include `@context: 'https://schema.org'`. The current implementation does not do that for every helper equally:

- `ratingSchema(...)` returns `@type` plus rating fields
- `postalAddressSchema(...)` returns `@type` plus address fields

This mirrors the current codebase behavior and is worth keeping in mind when composing nested objects manually.

### Naming Is Partially Mixed

The compatibility layer still mixes styles:

- `productSchema`
- `organizationSchema`
- `createPlaceSchema`
- `createEventSchema`

For new code, prefer the short aliases such as `product`, `organization`, `place`, and `event`.

## Supported Schema Modules

The repository currently includes implementations for:

- `base`
- `breadcrumbList`
- `contactPoint`
- `event`
- `faqPage`
- `imageObject`
- `listItem`
- `localBusiness`
- `offer`
- `organization`
- `person`
- `place`
- `postalAddress`
- `product`
- `rating`
- `recipe`
- `review`
- `videoObject`
