import '@testing-library/jest-dom';

module.exports = {
    moduleFileExtensions: [ 'js', 'json', 'jsx'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\js$': 'babel-jest',
    },
  }