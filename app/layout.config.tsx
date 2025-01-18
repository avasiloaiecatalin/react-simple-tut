import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'React Simple Tutorial'
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url'
    }
  ]
};
