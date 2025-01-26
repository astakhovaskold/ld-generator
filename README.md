# ld-generator

A lightweight TypeScript library for generating Schema.org microdata in JSON-LD format, enabling easy integration of
structured data for products, reviews, events, and more.

## Features

- **Type Safety**: Built with TypeScript for enhanced type safety and autocompletion.
- **Comprehensive Types**: Supports a wide range of Schema.org types including Product, Review, Event, Organization, and
  more.
- **Modular Design**: Each schema type is defined in separate modules for better organization and maintainability.
- **Easy Integration**: Generate JSON-LD scripts ready to be inserted into your HTML.
- **Well-Documented**: Includes JSDoc comments for easy reference and understanding.

## Installation

You can install the library via npm:

`npm install ld-generator`

## Usage

### Importing the Library

You can import the necessary functions and types from the library as follows:

### Creating a Product Schema

Here's how to create a product schema:

```typescript jsx
import { productSchema } from 'ld-generator';

const product = productSchema({
    name: 'Sample Product',
    description: 'This is a sample product description.',
    image: 'https://example.com/image.jpg',
    brand: 'Brand Name',
    offers: {
        '@type': 'Offer',
        'price': 29.99,
        priceCurrency: 'USD',
        availability: 'InStock'
    }
});

const Component = () => {
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: product}} />
    );
}
```

## API Reference

### Functions

- `createProductSchema(productData): Product`
    - Creates a JSON-LD schema for a product.

- `createEventSchema(eventData): Event`
    - Creates a JSON-LD schema for an event.

### Types

- `Product`: Interface representing a product schema.
- `Event`: Interface representing an event schema.

Refer to the source code for additional types and schemas supported by the library.

## Development

To build the library, run:

`npm run build`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Askold Astakhov
