/**
 * Image Helper Utility
 *
 * This module provides helper functions for resolving image URLs from Storyblok
 * components, with support for external image URLs.
 *
 * Priority:
 * 1. External image URL (if provided and use_external_image is truthy)
 * 2. Storyblok asset filename (fallback)
 */

import { getImageAttributes, type ImageAttributesOptions } from './storyblok';
import type { AssetStoryblok } from '../types/bloks';

/**
 * Resolves the image source URL from a Storyblok block.
 *
 * @param block - The Storyblok block containing image data
 * @param assetFieldName - The name of the asset field in the block
 * @param options - Optional image transformation options (only applied to Storyblok assets)
 * @returns The resolved image URL or undefined if no image is available
 */
export function getImageSrc(
  block: Record<string, unknown>,
  assetFieldName: string,
  options?: Partial<ImageAttributesOptions>
): string | undefined {
  // Check toggle field first
  // Try exact match first, then potential plural case (Storyblok sometimes auto-pluralizes names like "Image" -> "images")
  const useExternalUrl =
    block[`${assetFieldName}_use_external_url`] || block[`${assetFieldName}s_use_external_url`];

  // Priority 1: Check if external image URL is provided AND toggle is ON
  const extUrl =
    block[`${assetFieldName}_external_url`] || block[`${assetFieldName}s_external_url`];

  // Use external URL if toggle is ON and URL exists and is not empty
  if (useExternalUrl && typeof extUrl === 'string' && extUrl.trim() !== '') {
    return extUrl.trim();
  }

  // Priority 2: Use Storyblok asset filename
  const asset = block?.[assetFieldName] as AssetStoryblok | undefined;

  if (!asset || !asset.filename) {
    return undefined;
  }

  if (options) {
    const { src } = getImageAttributes(asset, options);
    return src;
  }

  return asset.filename;
}

/**
 * Resolves the image alt text from a Storyblok block.
 * Falls back to asset name if alt is not provided.
 *
 * @param block - The Storyblok block containing image data
 * @param assetFieldName - The name of the asset field in the block
 * @param fallback - Optional fallback alt text
 * @returns The resolved alt text
 */
export function getImageAlt(
  block: Record<string, unknown>,
  assetFieldName: string,
  fallback = ''
): string {
  const asset = block?.[assetFieldName] as AssetStoryblok | undefined;
  return asset?.alt || asset?.name || fallback;
}

/**
 * Gets both src and alt for an image in one call.
 *
 * @param block - The Storyblok block containing image data
 * @param assetFieldName - The name of the asset field in the block
 * @param altFallback - Optional fallback alt text
 * @returns Object with src and alt properties
 */
export function getImageProps(
  block: Record<string, unknown>,
  assetFieldName: string,
  altFallback = ''
): { src: string | undefined; alt: string } {
  return {
    src: getImageSrc(block, assetFieldName),
    alt: getImageAlt(block, assetFieldName, altFallback)
  };
}

/**
 * Resolves an asset object, potentially patching the filename with an external URL.
 * distinct from getImageSrc which returns a string.
 * This is useful for passing assets to components that expect an AssetStoryblok object
 * (like Media.svelte) but we want to force an external URL.
 *
 * @param block - The Storyblok block containing image data
 * @param assetFieldName - The name of the asset field in the block
 * @returns The original asset object with 'filename' property patched if external URL exists, or original asset.
 */
export function getResolvedAsset(
  block: Record<string, unknown>,
  assetFieldName: string
): AssetStoryblok | undefined {
  const url = getImageSrc(block, assetFieldName);
  const asset = block?.[assetFieldName] as AssetStoryblok | undefined;

  if (!url) return asset;

  // If url is same as original filename, return original
  if (asset && url === asset.filename) return asset;

  // Construct patched asset
  return {
    ...asset,
    filename: url,
    // Ensure critical fields exist
    id: asset?.id ?? 0,
    alt: asset?.alt ?? '',
    name: asset?.name ?? '',
    focus: asset?.focus ?? '',
    title: asset?.title ?? '',
    copyright: asset?.copyright ?? '',
    is_external_url: asset?.is_external_url ?? false
  } as AssetStoryblok;
}
