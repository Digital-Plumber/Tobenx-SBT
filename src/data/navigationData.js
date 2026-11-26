/**
 * Navigation Data Configuration
 * References all navigation menu categories, items, and header links
 */

export const navigationData = {
  logo: {
    title: 'Tobenx SBT',
    href: '/',
  },
  navLinks: [
    {
      id: 'solutions',
      label: 'Solutions',
      badge: null,
      dropdown: [
        { title: 'Start an online business', description: 'Create your website and store fast with AI tools', href: '#start' },
        { title: 'Move to Tobenx SBT', description: 'Migrate your business from any platform smoothly', href: '#migrate' },
        { title: 'Point of Sale (POS)', description: 'Sell in-person at retail stores and pop-ups', href: '#pos' },
        { title: 'Enterprise Commerce', description: 'High-scale infrastructure for world-leading brands', href: '#enterprise' },
      ],
    },
    {
      id: 'products',
      label: 'Products',
      badge: 'New AI',
      dropdown: [
        { title: 'Online Store', description: 'Drag-and-drop customizable storefront builder', href: '#online' },
        { title: 'Tobenx SBT Checkout', description: 'World’s highest-converting checkout experience', href: '#checkout' },
        { title: 'Tobenx SBT Sidekick', description: 'Your dedicated commerce AI assistant built-in', href: '#sidekick' },
        { title: 'Tobenx SBT Markets', description: 'Sell globally in 175+ countries with localized currencies', href: '#markets' },
      ],
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      href: '#enterprise',
    },
    {
      id: 'pricing',
      label: 'Pricing',
      href: '#pricing',
    },
    {
      id: 'resources',
      label: 'Resources',
      dropdown: [
        { title: 'Developer Docs', description: 'Build apps and themes using commerce APIs & Hydrogen', href: 'https://shopify.dev' },
        { title: 'App Store', description: 'Discover 21,000+ business and marketing apps', href: 'https://apps.shopify.com' },
        { title: 'Help Center', description: '24/7 dedicated support and onboarding guides', href: '#help' },
        { title: 'Community Forum', description: 'Join discussions with millions of active entrepreneurs', href: '#community' },
      ],
    },
  ],
  auth: {
    trialText: 'Start free trial',
    trialHref: '#trial',
  },
};
