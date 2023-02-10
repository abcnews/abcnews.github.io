const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const noImageOpt = {
  ...withNextra(),
  ...{
    ...{
      images: {
        unoptimized: true,
      },
    },
  },
};

module.exports = noImageOpt;
