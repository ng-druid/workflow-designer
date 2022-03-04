# Summary

This work flow designer will be fully recreated as a druid demo. Druid will replace the app shell in this repo. This will be the first fully functional druid demo using module federation.

All druid modules will be shared with micro applications. This provides some very powerful benefits.

## Auth

The shell owns authentication. The auth info can easily be accessed by any app using NgRx.

## Context

All druid contexts can be accessed by micro applications using the context plugin manager. For example, when a panel page hosting micro front-ends has a ad id as a path input which sets up a context to an ad. That context can be accessed through the context plugin manager and a micro application can respond to changes in the context like when the ad changes.

State can both be shared through NgRx or at a higher level with the context plugin manager which turns state info into domain specific contextual info glabally available throughout the shell and all children hosted within it.

# FederationDemo

Demonstrates webpack 5 Module Federation with Angular and the Angular Router.

![Workflow Designer](./result.png)

## Start

- ``npm run build``
- ``npm run serve:dist``
- Navigate to shell at http://localhost:5000
- Navigate to standalone microfrontend at http://localhost:3000

## Disclaimer

Module Federation is a brand-new technology that will come with webpack 5. As webpack 5 is currently in beta, it's not intended for production yet. Also, to make it work with Angular already today, my examples use a patched version of the Angular CLI and a custom webpack configuration. Once webpack 5 is final and the Angular CLI supports it, we won't need these workarounds anymore but have a more streamlined way for all of this. Nevertheless, investigating this technology already today gives us a sound idea of what's possible shortly.

For the same reason, this example does not support debug mode. Just build and serve it as mentioned above.
