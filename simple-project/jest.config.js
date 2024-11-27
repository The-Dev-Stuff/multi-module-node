module.exports = {
  preset: 'ts-jest',          // Use ts-jest for TypeScript
  testEnvironment: 'node',    // Node.js testing environment
  testMatch: [
    "**/test/*.spec.ts"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Handle TypeScript files
    '^.+\\.m?js$': 'babel-jest' // Handle JavaScript files with Babel
  },
  moduleFileExtensions: ['ts', 'js'], // Support .ts and .js extensions
};
