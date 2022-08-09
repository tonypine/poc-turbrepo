module.exports = {
  root: true,
  extends: ["@mact/eslint-config"],
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
};
