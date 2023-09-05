# Cometchat Website

## Development
### Prerequisites

- Ensure you have the `node` version specified in [`./.nvmrc`](./.nvmrc).
- Ensure you have the `.env` file with the values according to `.env.example`
- Ensure you have the required dependencies installed, `npm install` or `npm ci` according to your needs.

## Next development server

- `npm run dev` to start the Next development server.

## Stroryblok integration

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

```
brew install mkcert
mkcert -install
mkcert localhost
```

```
npm run dev:https
```

This is because we are using Next.JS Preview Mode inside an iframe and we have to use SameSite=None cookie policy (that just works with Secure cookies).

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


