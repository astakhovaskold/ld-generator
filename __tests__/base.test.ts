import {baseSchema} from '../src/schemas/base';

describe('Base Schema', () => {
    it('should have correct context', () => {
        expect(baseSchema['@context']).toBe('https://schema.org');
    });

    it('should only define the shared context field', () => {
        expect(baseSchema).toEqual({
            '@context': 'https://schema.org',
        });
    });
});
