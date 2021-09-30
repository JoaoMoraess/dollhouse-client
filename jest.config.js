module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/mock.ts',
    '!<rootDir>/src/**/stories.tsx',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/pages/**/*.tsx',
    '!<rootDir>/src/main/**/*.tsx',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.storybook/',
    '<rootDir>/generators'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(tsx)$': 'babel-jest',
    '.+\\.(ts)$': 'ts-jest'
  }
}
