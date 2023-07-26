import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: [
    'src/components',
    'src/screens',
    'src/types'
  ]
};

export default config;