//eslint-disable-next-line no-undef
module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  testMatch: ["**/*.(test|spec).(js|vue)"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/components/$1",
  },
  coverageReporters: ["lcov", "text", "text-summary"],
  setupFiles: ["./jest.setup.js"],
};
