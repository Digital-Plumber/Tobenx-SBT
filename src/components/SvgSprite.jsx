import React from 'react';
import svgContent from '../shopify-icons.svg?raw';

/**
 * Embedded SVG sprite system for all Shopify custom icons
 */
export default function SvgSprite() {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
