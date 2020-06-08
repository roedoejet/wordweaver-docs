---
id: ww-i18n
title: Translation & Internationalization
sidebar_label: Translation & Internationalization
---

*This guide assumes you have followed the steps of both [installing](ww-installation.md) and [setting up](ww-firststeps.md) WordWeaver. It also assumes some familiarity with [JSON](https://en.wikipedia.org/wiki/JSON), basic [directory structure](ww-ui-customization.md#the-basic-layout) of your WordWeaver, [Command Line](https://en.wikipedia.org/wiki/Command-line_interface), and [NPM](https://en.wikipedia.org/wiki/Npm_(software))*

The basic interface for your WordWeaver is already translated into English and French. But, you may want to add translations for your own language. This is the guide to show you how to do that.

## 1. Determine your language's code

Use a unique 2 or 3 digit code, or look yours up in the [ISO 639-3 standard](https://iso639-3.sil.org/code_tables/639/data). Make note of this, you will have to use it in the next steps.

## 2. Create your file

Add a file to your i18n assets as seen below:

```text {15}
.
+-- projects
|   +-- server
|   +-- word-weaver
|       +-- src
|           +-- app
|               +-- app
|               +-- core
|               +-- pages
|               +-- shared
|           +-- assets
|               +-- i18n
|                   +-- en.json
|                   +-- fr.json
|                   +-- <yourcode>.json
|               +-- wwlogo.png // TODO: Rename this
|               +-- logo.svg // TODO: Rename this
|           +-- config
|               +-- config.fr.ts
|               +-- config.moh.ts
|               +-- config.ts
|           +-- environments
|               +-- environment.prod.ts
|               +-- environment.test.ts
|               +-- environment.ts
|           +-- scss
|           +-- themes
|           +-- index.html
|           +-- styles.scss
+-- angular.json
+-- package.json
```

## 3. Update your WordWeaver Configuration

Update your configuration values for [languages](ww-ui-customization.md#languages). If you want to change your default language, you can [also update that](ww-ui-customization.md#language).

## 4. Extract default translations

Use the npm script, `npm run-script extract-translations` to update your json file.

## 5. Update your translations

You now must change the values for each key in `projects/word-weaver/src/assets/i18n/<yourcode>.json` to your language. We recommend using either a desktop tool like, [BabelEdit](https://www.codeandweb.com/babeledit), or an online collaborative resource like [POEditor](https://poeditor.com/)

That's it - your website will now include your translations!

:::info
We make use of, and greatly appreciate, the excellent tools [ngx-translate](https://github.com/ngx-translate/core) and [ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) - yay for open source!! 🎉🎉
:::