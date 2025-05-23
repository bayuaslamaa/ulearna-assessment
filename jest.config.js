module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(ts|tsx)$': ['babel-jest', { configFile: './babel-jest.config.js' }],
    },
}
