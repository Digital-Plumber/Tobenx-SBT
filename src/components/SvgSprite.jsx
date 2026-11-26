import React from 'react';
import svgContent from '../tobenx-sbt-icons.svg?raw';

/**
 * Embedded SVG sprite system for all Tobenx SBT custom icons
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
