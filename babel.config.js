module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "@": "./src",
            "@Assets": "./assets"
          },
          "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
          ],
        },
      ],
    ],
  };
};
