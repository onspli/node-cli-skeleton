import { expect, test } from '@jest/globals';
import { getGreeting } from '../../src/lib.js';

test('getGreeting', () => {
    expect(getGreeting('Skelly')).toEqual('Hello Skelly!');
});
