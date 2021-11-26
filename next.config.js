const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  webpack5: true,
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.mdx/,
        type: "asset/source",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
});
