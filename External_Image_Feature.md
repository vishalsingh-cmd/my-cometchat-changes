# External Image Feature - Complete Documentation

**Status:** ✅ Ready for Production  
**Last Updated:** February 2026

---

## Table of Contents

1. [Feature Overview](#feature-overview)
2. [How It Works](#how-it-works)
3. [New Files Created](#new-files-created)
4. [Modified Files](#modified-files)
5. [Skipped Components](#skipped-components)
6. [Storyblok Setup](#storyblok-setup)
7. [Testing Guide](#testing-guide)

---

## Feature Overview

This feature allows content editors to use **external image URLs** (e.g., from Unsplash, Cloudinary, S3, or other CDNs) in Storyblok components, while maintaining backward compatibility with existing Storyblok Asset Library images.

### Logic Priority

| Toggle Status       | External URL | Result                                     |
| ------------------- | ------------ | ------------------------------------------ |
| ON                  | Provided     | External URL used                          |
| ON                  | Empty        | Storyblok asset used                       |
| OFF                 | Any          | Storyblok asset used                       |
| Field doesn't exist | -            | Storyblok asset used (backward compatible) |

---

## How It Works

### For Each Image Field in Storyblok

Two additional fields are needed:

- `{fieldName}_external_url` (Text) - The external image URL
- `{fieldName}_use_external_url` (Boolean) - Toggle to enable external URL

### Helper Function

```typescript
getResolvedAsset(block, 'fieldName')
   ↓
Check: block.{fieldName}_use_external_url === true?
   ↓
   YES + URL exists → Return patched asset with external URL
   NO or empty URL → Return original Storyblok asset
```

---

## New Files Created

### 1. `src/lib/image-helper.ts`

**Purpose:** Core helper functions for external image URL resolution

**Functions:**

- `getImageSrc(block, fieldName)` - Returns resolved image URL as string
- `getResolvedAsset(block, fieldName)` - Returns patched AssetStoryblok object
- `getImageAlt(block, fieldName)` - Returns alt text
- `getImageProps(block, fieldName, size)` - Returns image properties object

### 2. `src/components/blocks/external-image-test.svelte`

**Purpose:** Test component for verifying external image feature

**Why Created:** To provide a dedicated test page at `/external-image-test` for verifying the toggle functionality works correctly.

### 3. `scripts/update-storyblok-components.ts`

**Purpose:** Script to add external image fields to Storyblok components

**Why Created:** Automated way to add `_external_url` and `_use_external_url` fields to all image-containing components in Storyblok.

---

## Modified Files

### Core Files

| File                                   | Change                                                        |
| -------------------------------------- | ------------------------------------------------------------- |
| `src/lib/image-helper.ts`              | Created `getResolvedAsset()` function with toggle-based logic |
| `src/components/blocks/dynamic.svelte` | Added import for `ExternalImageTest` component                |

### Hero Components (6 files)

| File                                                   | Field          | Change                                            |
| ------------------------------------------------------ | -------------- | ------------------------------------------------- |
| `src/components/blocks/standard-hero.svelte`           | `image`        | Added `getResolvedAsset`, updated Media component |
| `src/components/blocks/homepage-hero.svelte`           | `illustration` | Added `getResolvedAsset`, updated Media component |
| `src/components/blocks/solutions-hero.svelte`          | `illustration` | Added `getResolvedAsset`, updated Media component |
| `src/components/blocks/webhooks-hero.svelte`           | `illustration` | Added `getResolvedAsset`, updated Media component |
| `src/components/blocks/chat-and-messaging-hero.svelte` | `illustration` | Added `getResolvedAsset`, updated Media component |
| `src/components/guide/hero.svelte`                     | `cover`        | Added `getResolvedAsset`, updated Media component |

### Section Components (10 files)

| File                                                      | Field                      | Change                                          |
| --------------------------------------------------------- | -------------------------- | ----------------------------------------------- |
| `src/components/blocks/features-section.svelte`           | `image`                    | Added `getResolvedAsset`                        |
| `src/components/blocks/title-image-section.svelte`        | `image`                    | Added `getResolvedAsset`                        |
| `src/components/blocks/title-image-section-v2.svelte`     | `image`                    | Added `getResolvedAsset`                        |
| `src/components/blocks/title-media-section.svelte`        | `media`                    | Added `getResolvedAsset`                        |
| `src/components/blocks/implementation-section-v2.svelte`  | `illustration`             | Added `getResolvedAsset`                        |
| `src/components/blocks/implementation-section-v3.svelte`  | `illustration`             | Added `getResolvedAsset` with conditional check |
| `src/components/blocks/integrations.svelte`               | `image`, `mobileImage`     | Added `getResolvedAsset` for both fields        |
| `src/components/blocks/secure-card.svelte`                | `image`                    | Added `getResolvedAsset`                        |
| `src/components/blocks/testimonial-section.svelte`        | `card.image`               | Added `getResolvedAsset` inside card loop       |
| `src/components/blocks/features-list-section-item.svelte` | `contentItem.illustration` | Added `getResolvedAsset` inside loop            |

### Card Components (6 files)

| File                                                             | Field           | Change                                     |
| ---------------------------------------------------------------- | --------------- | ------------------------------------------ |
| `src/components/content-card.svelte`                             | `customer.logo` | Added `getResolvedAsset` for customer logo |
| `src/components/content-card-tutorials.svelte`                   | `customer.logo` | Added `getResolvedAsset` for customer logo |
| `src/components/moderation-feature-card.svelte`                  | `customer.logo` | Added `getResolvedAsset` for customer logo |
| `src/components/blocks/image-title-description-tags-item.svelte` | `image`         | Added `getResolvedAsset`                   |
| `src/components/blocks/path-selector.svelte`                     | `card.image`    | Added `getResolvedAsset` inside card loop  |
| `src/components/blocks/path-selector-v2.svelte`                  | `card.image`    | Added `getResolvedAsset` inside card loop  |

### Testimonial Components (3 files)

| File                                                          | Field          | Change                   |
| ------------------------------------------------------------- | -------------- | ------------------------ |
| `src/components/testimonial.svelte`                           | `avatar`       | Added `getResolvedAsset` |
| `src/components/blocks/rich-text/testimonial-block.svelte`    | `author_image` | Added `getResolvedAsset` |
| `src/components/blocks/rich-text-v2/testimonial-block.svelte` | `author_image` | Added `getResolvedAsset` |

### Carousel/Industry Components (4 files)

| File                                                                | Field                         | Change                                                           |
| ------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| `src/components/blocks/industry-carousel.svelte`                    | `images[]` via `items`        | Added `resolveCarouselImage` helper for item-based external URLs |
| `src/components/blocks/moderation-features.svelte`                  | `images[]` via `sub_features` | Added external image support via sub-feature blocks              |
| `src/_views/HomeV2/_sections/Industry/_comps/IndustryPoints.svelte` | `industryPointBlock.image`    | Added `getResolvedAsset` with conditional check                  |
| `src/_views/Templates/_blocks/TemplatesProductDisplayItem.svelte`   | `media`                       | Added `getResolvedAsset`                                         |

### Platform/View Components (2 files)

| File                                                              | Field           | Change                                   |
| ----------------------------------------------------------------- | --------------- | ---------------------------------------- |
| `src/_views/HomeV2/_sections/Platform/_comps/PlatformCard.svelte` | `icon`, `image` | Added `getResolvedAsset` for both fields |
| `src/components/blog-post/hero/hero.svelte`                       | `cover`         | Added `getResolvedAsset`                 |

---

## Total Modified Files Summary

| Category                     | Count        |
| ---------------------------- | ------------ |
| Core/Helper Files            | 2            |
| Hero Components              | 6            |
| Section Components           | 10           |
| Card Components              | 6            |
| Testimonial Components       | 3            |
| Carousel/Industry Components | 4            |
| Platform/View Components     | 2            |
| **TOTAL**                    | **33 files** |

---

## Skipped Components

These components use Storyblok's **Multi-Asset** field type which doesn't support per-asset custom fields:

| Component                                               | Field                  | Reason                                           |
| ------------------------------------------------------- | ---------------------- | ------------------------------------------------ |
| `src/components/blocks/carousals/image-carousal.svelte` | `images` (Multi-Asset) | Cannot add toggle per image in Multi-Asset field |
| `src/components/blocks/titles/title-and-icons.svelte`   | `icons` (Multi-Asset)  | Icons usually don't need external URLs           |

### Fix Options for Multi-Asset:

1. **Option A (Recommended):** Convert Multi-Asset to Block List with individual toggle per image
2. **Option B:** Single toggle for all images with comma-separated URLs

---

## Storyblok Setup

### Required Fields for Each Image

For every image field `{fieldName}`, add these fields in Storyblok:

```
Field Name: {fieldName}_external_url
Type: Text
Description: External image URL (optional)

Field Name: {fieldName}_use_external_url
Type: Boolean
Description: Enable to use external URL instead of Storyblok asset
```

### Example for "image" field:

- `image` (Asset) - existing
- `image_external_url` (Text) - new
- `image_use_external_url` (Boolean) - new

---

## Testing Guide

### Test Page

URL: `http://localhost:5173/external-image-test`

### Scenario 1: Backward Compatibility

1. Open any page without toggle fields set
2. Images should load from Storyblok as before
3. **Pass:** No broken images

### Scenario 2: Toggle OFF

1. Set `_use_external_url` to false
2. Provide an external URL
3. **Pass:** Image loads from Storyblok asset

### Scenario 3: Toggle ON

1. Set `_use_external_url` to true
2. Provide an external URL
3. **Pass:** Image loads from external URL

### Scenario 4: Toggle ON, No URL

1. Set `_use_external_url` to true
2. Leave external URL empty
3. **Pass:** Falls back to Storyblok asset

---

## Migration Pattern Used

**Before:**

```svelte
<Media media={block.image} />
<!-- or -->
<img src={block.image.filename} />
```

**After:**

```svelte
<script>
  import { getResolvedAsset } from '$lib/image-helper';
  $: resolvedImage = getResolvedAsset(block, 'image');
</script>

{#if resolvedImage}
  <Media media={resolvedImage} />
{/if}
```

---

## Notes

1. **Backward Compatible:** Components without toggle fields continue using Storyblok assets
2. **Opt-in Feature:** Only images with toggle ON use external URLs
3. **Safe Fallback:** Empty external URL falls back to Storyblok asset
4. **Type Safe:** Added conditional checks to handle undefined assets
