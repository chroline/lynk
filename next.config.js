module.exports = {
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
};
