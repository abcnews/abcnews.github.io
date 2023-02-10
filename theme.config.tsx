import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { NextSeo } from 'next-seo';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - ABC Dev",
    };
  },
  logo: <span>ABC Dev</span>,
  project: {
    link: "https://github.com/abcnews",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase:
    "https://github.com/abcnews/abcnews.github.io/tree/nextra",
  footer: {
    text: "ABC News",
  },
};

export default config;
