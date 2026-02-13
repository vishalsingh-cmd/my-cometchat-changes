/* eslint-disable no-console */
/**
 * Storyblok Component Schema Update Script
 *
 * This script adds external_image_url and use_external_image fields to all
 * Storyblok components that have asset (image) fields.
 *
 * Usage:
 *   1. Set STORYBLOK_MANAGEMENT_TOKEN in .env file
 *   2. Update STORYBLOK_SPACE_ID below with your actual CometChat space ID
 *   3. Run: npx tsx ./scripts/update-storyblok-components.ts
 *
 * Safe to run multiple times - will skip components that already have the fields.
 */

import 'dotenv/config';

// IMPORTANT: Update this with your CometChat Partner space ID
// You can find it in Storyblok: click on the space → Settings → Space Info → Space ID
const STORYBLOK_SPACE_ID = process.env.STORYBLOK_SPACE_ID || '231922';
const STORYBLOK_MANAGEMENT_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;

if (!STORYBLOK_MANAGEMENT_TOKEN) {
  console.error('❌ Error: STORYBLOK_MANAGEMENT_TOKEN environment variable is not set.');
  console.error('Please add it to your .env file:');
  console.error('STORYBLOK_MANAGEMENT_TOKEN=your_token_here');
  process.exit(1);
}

console.log(`🎯 Targeting Space ID: ${STORYBLOK_SPACE_ID}`);

const API_BASE = `https://mapi.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}`;

interface StoryblokField {
  type: string;
  pos?: number;
  [key: string]: unknown;
}

interface StoryblokComponent {
  id: number;
  name: string;
  schema: Record<string, StoryblokField>;
  [key: string]: unknown;
}

interface ApiResponse {
  components: StoryblokComponent[];
}

// Delay function to avoid rate limiting
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Fetch all components from Storyblok
async function fetchComponents(): Promise<StoryblokComponent[]> {
  console.log('📡 Fetching all components from Storyblok...');

  const allComponents: StoryblokComponent[] = [];
  let page = 1;
  const perPage = 100;
  const maxPages = 50; // Safety limit to prevent infinite loops

  while (page <= maxPages) {
    const response = await fetch(`${API_BASE}/components?page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: STORYBLOK_MANAGEMENT_TOKEN ?? '',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch components: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    const fetchedCount = data.components.length;

    if (fetchedCount === 0) {
      console.log(`  Page ${page}: No more components`);
      break;
    }

    allComponents.push(...data.components);
    console.log(
      `  Page ${page}: Fetched ${fetchedCount} components (total: ${allComponents.length})`
    );

    // Break if we got fewer than requested (last page)
    if (fetchedCount < perPage) {
      console.log(`  Last page reached (received ${fetchedCount} < ${perPage})`);
      break;
    }

    page++;
    await delay(200); // Rate limiting protection
  }

  if (page > maxPages) {
    console.warn(
      `⚠️ Warning: Reached max page limit (${maxPages}). Some components may be missed.`
    );
  }

  console.log(`\n✅ Total components fetched: ${allComponents.length}\n`);
  return allComponents;
}

// Check if a component has asset fields (images)
function hasAssetFields(schema: Record<string, StoryblokField>): string[] {
  const assetFieldNames: string[] = [];

  for (const [fieldName, fieldConfig] of Object.entries(schema)) {
    if (fieldConfig.type === 'asset' || fieldConfig.type === 'multiasset') {
      assetFieldNames.push(fieldName);
    }
  }

  return assetFieldNames;
}

// Check if component already has external image fields
function hasExternalImageFields(schema: Record<string, StoryblokField>): boolean {
  return 'external_image_url' in schema && 'use_external_image' in schema;
}

// Update a component with new fields
async function updateComponent(component: StoryblokComponent): Promise<boolean> {
  const assetFields = hasAssetFields(component.schema);

  if (assetFields.length === 0) {
    return false; // No asset fields, skip
  }

  console.log(`📝 Updating "${component.name}" (has asset fields: ${assetFields.join(', ')})`);

  // 1. Separate existing schema into "original" fields and "auto-generated" fields (clean up old ones to re-order)
  const originalFields: [string, StoryblokField][] = [];

  for (const [key, field] of Object.entries(component.schema)) {
    // Check if this is one of our auto-generated fields
    const isGenerated =
      key.endsWith('_external_url') ||
      key.endsWith('_use_external_url') ||
      key === 'external_image_url' ||
      key === 'use_external_image';

    if (!isGenerated) {
      originalFields.push([key, field]);
    }
  }

  // 2. Sort original fields by position
  originalFields.sort(([, a], [, b]) => (a.pos || 0) - (b.pos || 0));

  // 3. Rebuild schema with insertions
  const updatedSchema: Record<string, StoryblokField> = {};
  let newPos = 0;

  for (const [key, field] of originalFields) {
    // Add the original field with new position
    updatedSchema[key] = {
      ...field,
      pos: newPos++
    };

    // If this is an asset field, insert our new fields immediately after
    if (field.type === 'asset' || field.type === 'multiasset') {
      const extUrlField = `${key}_external_url`;
      const useExtField = `${key}_use_external_url`;

      updatedSchema[extUrlField] = {
        type: 'text',
        pos: newPos++,
        description: `External image URL for '${
          field.display_name || key
        }'. Overrides the Storyblok asset if provided.`,
        display_name: `Ext. URL (${field.display_name || key})`,
        translatable: true
      };

      updatedSchema[useExtField] = {
        type: 'boolean',
        pos: newPos++,
        description: `Toggle to use external image URL for '${field.display_name || key}'.`,
        display_name: `Use Ext. URL (${field.display_name || key})`,
        default_value: false
      };
    }
  }

  const response = await fetch(`${API_BASE}/components/${component.id}`, {
    method: 'PUT',
    headers: {
      Authorization: STORYBLOK_MANAGEMENT_TOKEN ?? '',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      component: {
        schema: updatedSchema
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`  ❌ Failed to update "${component.name}": ${response.status} - ${errorText}`);
    return false;
  }

  console.log(`  ✅ Successfully updated "${component.name}"`);
  return true;
}

// Main execution
async function main() {
  console.log('🚀 Storyblok External Image Fields Update Script');
  console.log('================================================\n');
  console.log(`Space ID: ${STORYBLOK_SPACE_ID}`);
  console.log(`API Base: ${API_BASE}\n`);

  try {
    const components = await fetchComponents();

    let updatedCount = 0;
    let skippedCount = 0;
    let noAssetCount = 0;
    let errorCount = 0;

    console.log('🔄 Processing components...\n');

    for (const component of components) {
      try {
        const assetFields = hasAssetFields(component.schema);

        if (assetFields.length === 0) {
          noAssetCount++;
          continue;
        }

        const updated = await updateComponent(component);

        if (updated) {
          updatedCount++;
        } else if (hasExternalImageFields(component.schema)) {
          skippedCount++;
        }

        await delay(300); // Rate limiting protection
      } catch (error) {
        console.error(`  ❌ Error processing "${component.name}":`, error);
        errorCount++;
      }
    }

    console.log('\n================================================');
    console.log('📊 Summary:');
    console.log(`  ✅ Updated: ${updatedCount} components`);
    console.log(`  ⏭️  Skipped (already has fields): ${skippedCount} components`);
    console.log(`  📦 No asset fields: ${noAssetCount} components`);
    console.log(`  ❌ Errors: ${errorCount} components`);
    console.log('================================================\n');

    if (updatedCount > 0) {
      console.log('🎉 Done! Now run "npm run sb" to regenerate TypeScript types.');
    } else {
      console.log('ℹ️  No components were updated.');
    }
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

main();
