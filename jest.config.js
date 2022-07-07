
module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    "globals": {
        "ts-jest": {
            "useESM": true
        }
    },
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        "/node_modules/",
        "/code-templates/",
        "/basic-app/",
        "/.dist/",
        "/output-folders-for-testing/",
    ],
    transform: {
        '\\.js$': ['babel-jest'],
    },
    transformIgnorePatterns: [
        `/node_modules/`,
        "\\.pnp\\.[^\\/]+$"
    ],
};
