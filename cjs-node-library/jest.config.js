/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/test/*.spec.ts"
  ],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  }
};
