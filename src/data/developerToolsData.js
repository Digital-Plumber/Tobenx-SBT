/**
 * Developer Platform & Tools Data
 */

export const developerToolsData = {
  heading: 'Hyperdriven by AI. Commerce to the core.',
  subheading:
    'Shopify’s Universal Commerce Protocol and GraphQL APIs give developers full freedom to build headless, custom, and agentic commerce experiences.',
  features: [
    {
      id: 'custom-storefronts',
      title: 'Build custom storefronts',
      badge: 'Hydrogen + Remix',
      description: 'Ultra-fast headless architectures with pre-built components and sub-second edge routing.',
      codeSnippet: `npm create @shopify/hydrogen@latest
cd my-storefront && npm run dev`,
      linkText: 'Explore Hydrogen docs',
      linkHref: 'https://hydrogen.shopify.dev',
      accent: 'purple',
    },
    {
      id: 'agentic-commerce',
      title: 'Build for AI Agents',
      badge: 'Universal Commerce Protocol',
      description: 'Integrate LLMs, automated checkout agents, and natural language shopping bots using modern primitives.',
      codeSnippet: `import { createCommerceAgent } from '@shopify/agents';

const agent = createCommerceAgent({
  store: 'brand-flagship.myshopify.com',
  capabilities: ['product_search', 'instant_checkout']
});`,
      linkText: 'View Agentic Commerce Guide',
      linkHref: 'https://shopify.dev/docs/agents',
      accent: 'green',
    },
    {
      id: 'extend-checkout',
      title: 'Extend Checkout with UI Extensions',
      badge: 'Sandboxed & Secure',
      description: 'Customize post-purchase, upsells, validation, and delivery rules directly inside checkout.',
      codeSnippet: `export default reactExtension('purchase.checkout.block.render', () => {
  return <Banner title="Special Free Gift Added!" status="success" />;
});`,
      linkText: 'Read Checkout UI Extensions',
      linkHref: 'https://shopify.dev/docs/apps/checkout',
      accent: 'blue',
    },
  ],
};
