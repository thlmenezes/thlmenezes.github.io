import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://thlmenezes.github.io',
  integrations: [mdx()],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkReadingTime, 'remark-gfm', 'remark-smartypants'],
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
})
