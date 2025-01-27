/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    transform: {
        '\\.[jt]sx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '(.+)\\.js': '$1',
    },
    extensionsToTreatAsEsm: ['.ts'],
};
