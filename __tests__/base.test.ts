import {baseSchema} from '../src/schemas/base';

describe('Base Schema', () => {
    it('should have correct context', () => {
        expect(baseSchema['@context']).toBe('https://schema.org');
    });
});
