---
id: wwui-custom-intro
title: Configuring your WordWeaver-UI
sidebar_label: WordWeaver-UI Configuration
---

*This guide assumes you have followed the steps of both [installing](ww-installation.md) and [setting up](ww-firststeps.md) WordWeaver. You are therefore assumed to have some knowledge and understanding of [Git](https://en.wikipedia.org/wiki/Git), [Command Line](https://en.wikipedia.org/wiki/Command-line_interface), and [NPM](https://en.wikipedia.org/wiki/Npm_(software)). All of these tools are used in this guide*


### Getting familiar with the directory layout

Before we dig in, have a look at the directory tree below. Remember to refer to this throughout this guide! It is the standard (partially redacted) structure of your WordWeaver-UI. 

:::note
If there are files in your cloned version that are not in the tree below, you do not have to worry about them unless you are very comfortable with Angular applications and want to customize your application beyond what is covered in this documentation.
:::

```
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

The vast majority of your edits will happen in `projects/word-weaver/src/config`. This is where all instance-specific configuration for your WordWeaver-UI is located. 

The other place that will require some configuration is in `projects/word-weaver/src/environments`. This is where all environment/deployment-specific configuration for your WordWeaver-UI is located.

### Sample Configuration

:::caution
Editing the configuration in the way described in this guide assumes you have TypeScript hints in your text editor (we suggest Visual Studio Code). Without it, you might make type errors that cause WordWeaver to crash!
:::

Below is a complete sample configuration of a WordWeaver-UI's Meta data. This configuration gives basic high-level information to WordWeaver that let's it know how to display your site.

```
export const META: Meta = {
  contributors: [
    {
      name: "Aidan Pine",
      title: "Lead Developer",
      text:
        "Aidan is an application development specialist on 
        the NRC's Indigenous Language Technology project. 
        You can put <b>html</b> in here! And Unicode 😃",
      img: 'assets/aidanpine.jpg'
    }
  ],
  languages: [
    { label: "en", value: "en" },
    { label: "fr", value: "fr" }
  ],
  wordmakerTempView: "default",
  tableviewer: {
    viewModes: ["list", "grid", "tree"],
    defaultViewMode: "grid",
    gridViewDefaultOrder: {
      col: "option",
      row: "pn",
      main: "root"
    }
  },
  logo: "assets/wwlogo.png",
  copyright: {
    name: "National Research Council Canada",
    url: "https://nrc.canada.ca/en/node/1378"
  },
  links: {
    github: {
      display: true,
      url: "https://www.github.com/roedoejet/wordweaver-UI"
    },
    medium: {
      display: false,
      url: ""
    },
    facebook: {
      display: false,
      url: ""
    },
    youtube: {
      display: false,
      url: ""
    }
  }
};
```

## Configuration

Now, let's break this down! The following guide to configuration separates each configurable piece and describes its *type*, any *dependent types*, the *effect* it has on the UI, and any other *requirements* to the configuration.

:::tip
You can either replace the configuration in `projects/word-weaver/src/config/config.ts` or you can create an additional configuration. In order to create an additional configuration, create a sub-configuration file with your languages' [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code at `projects/word-weaver/src/config/config.<yourlanguagecode>.ts`. Then, you will have to edit the `angular.json` file to include your file replacements. Then you can run your site with `npm start -- --configuration=<yourlanguagecode>`
:::

### contributors

**Type**: `Contributor[]`

**Dependent types**: [Contributor](ww-ui-types#contributor)

**Effect**: Adding information to the `Meta.contributors` list will add that information to the list of contributors in the [About Page](ww-ui-page-about.md) 

**Requirements**: None

### copyright

**Type**: 

```
{
    name: string;
    url: string;
}
```

**Dependent types**: None

**Effect**: Adds the name of the copyright holder (and a link to their site) to the footer of the page

**Requirements**: A valid link that begins with `https://`

### languages

**Type**: `Language[]`

**Dependent types**: [Language](ww-ui-types#language)

**Effect**: The list of languages here is used in the Settings and Header to select languages. The `label` is the displayed string and the `value` is the internal value. We recommend this should be an [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) value.

:::important
**Requirements**: Your language **will not** work without the proper translation files. Please follow the [internationalization](ww-ui-i18n.md) guide.
:::

### links

**Type**:
```
{
    github: Link;
    medium: Link;
    facebook: Link;
    youtube: Link;
}
```
**Dependent types**: [Link](ww-ui-types#link)

**Effect**: Adds a link at `Link.url` if `Link.display` is equal to `true`

**Requirements**: Valid links must begin with `https://`

### logo

*...coming soon*

### wordmaker.tempView

*...coming soon*

### tableviewer.viewModes

*...coming soon*

### tableviewer.defaultViewMode

*...coming soon*

### tableviewer.gridViewDefaultOrder

*...coming soon*



