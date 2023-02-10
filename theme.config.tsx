import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <title>{frontMatter.title + '- ABC Dev'}</title>
      <meta property="og:url" content={`https://abcnews.github.io${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'ABC Dev'} />
      <meta property="og:description" content={frontMatter.description || 'News development site.'} />
    </>
  },
  logo: <span>ABC Dev</span>,
  project: {
    link: 'https://github.com/abcnews',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/abcnews/abcnews.github.io/tree/nextra',
  footer: {
    text: 'ABC News',
  },
}

export default config
