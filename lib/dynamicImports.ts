"use client";

import dynamic from 'next/dynamic';
import type { ComponentType, ReactNode } from 'react';

/**
 * Creates a dynamically imported component
 * @param importFunc Function that imports the component
 * @param options Configuration options
 * @returns Dynamically loaded component
 */
export function createDynamicComponent<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: {
    ssr?: boolean;
  } = {}
) {
  return dynamic(importFunc, {
    ssr: options.ssr !== undefined ? options.ssr : true,
  });
}