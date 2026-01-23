# Cometchat Website

## Development

### Prerequisites

- Ensure you have the `node` version specified in [`./.nvmrc`](./.nvmrc).
- Ensure you have the `.env` file with the values according to `.env.example`
- Ensure you have the required dependencies installed, `npm install` or `npm ci` according to your needs.

## Development server

- `npm run dev` to start the Next development server.

## Storyblok integration

It's important to make sure that your component types stay in sync with the data structures in Storyblok. This can be accomplished using the Storyblok CLI and a few configuration steps.

### Prerequisites

**Setting up the Storyblok CLI**

The first step is to install the Storyblok CLI. You can do this using npm - `npm install -g storyblok-cli`

Once the CLI is installed, you'll need to authenticate with your Storyblok account - `storyblok login`.
Follow the prompts to enter your Storyblok credentials.

### Syncing Types

With everything configured, you can sync the types from Storyblok by running `npm run sb`.

### Syncing Datasources

With everything configured, you can sync the datasources from Storyblok by running `npm run datasources`.

### HTTPS localhost to use preview mode with Storyblok

To be able to use Storyblok's Live Preview in Chrome when developing, you need to enable HTTPS on localhost:
Create a certificate (one-time only)

```bash
brew install mkcert
mkcert -install
mkcert localhost
```

```bash
npm run dev:https
```

This is because we are using Next.JS Preview Mode inside an iframe and we have to use SameSite=None cookie policy (that just works with Secure cookies).

### How Storyblok Blocks Flow to the Frontend (SvelteKit + Storyblok)

Understanding how content flows from Storyblok to your frontend is essential for development. Here's the complete process:

#### 1. Block Creation in Storyblok

A user creates or edits a page in the Storyblok Visual Editor and adds a block (e.g., `agents-hero`). Storyblok saves this block in the page's JSON structure.

#### 2. Data Fetch in +page.server.ts

When a request comes to your SvelteKit app, the server load function runs:

- It calls the Storyblok API (`cdn/stories`) to fetch the page JSON
- The response includes an array of blocks inside `content.body`

**Example response:**

```json
{
  "story": {
    "content": {
      "body": [
        {
          "component": "agents-hero",
          "_uid": "abc123",
          "title": "Welcome",
          "description": "Hero section content"
        }
      ]
    }
  }
}
```

#### 3. Passing Data to +page.svelte

The data returned by the server load function is passed as props to the page. Inside `+page.svelte`, the blocks are looped over and rendered dynamically.

**Example:**

```svelte
<script>
  export let data;
</script>

{#each data.story.content.body as block}
  <DynamicBlock {block} />
{/each}
```

#### 4. Dynamic Rendering in dynamic-block.svelte

The `DynamicBlock` component receives each block, checks the `component` field (e.g., "agents-hero"), and looks up the corresponding Svelte component in a mapping object. Then it renders the correct component dynamically.

**Example:**

```svelte
<script>
  import AgentsHero from './blocks/agents-hero.svelte';

  const componentMap = {
    'agents-hero': AgentsHero
    // other components...
  };

  export let block;
  const Component = componentMap[block.component];
</script>

{#if Component}
  <svelte:component this={Component} {...block} />
{/if}
```

#### 5. Rendering in the Specific Block Component

The mapped component (`agents-hero.svelte`) receives the block data as props and uses the fields from the Storyblok JSON to display content.

**Example:**

```svelte
<script>
  export let title;
  export let description;
</script>

<section>
  <h1>{title}</h1>
  <p>{description}</p>
</section>
```

#### Complete Flow Summary

1. **Storyblok** → User adds a block (e.g., `agents-hero`) in the editor
2. **API Call** → `+page.server.ts` fetches JSON with the block data
3. **Page Component** → `+page.svelte` loops through all blocks with `{#each}`
4. **Dynamic Block** → Matches component name and renders correct Svelte component
5. **Block Component** → `agents-hero.svelte` displays the content on the frontend

## Storybook

- `npm run storybook` to run the storybook server
- `npm run build-storybook` to build storybook

## Running a build of the project

- `npm run build` to create build the project
- `npm run start` to run the build project

## Deployment environments

- We have a [staging environment](http://cometchat-web-staging.vercel.app/) that is bound to the `main` branch
- We have a [production environment](http://cometchat-web-production.vercel.app/) that is deployed when new releases are published

All the environments are deployed on [Vercel](https://vercel.com/)
