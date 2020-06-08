---
id: wwui-custom-intro
title: Configuring your WordWeaver-UI
sidebar_label: WordWeaver-UI Configuration
---

*This guide assumes you have followed the steps of both [installing](ww-installation.md) and [setting up](ww-firststeps.md) WordWeaver. You are therefore assumed to have some knowledge and understanding of [Git](https://en.wikipedia.org/wiki/Git), [Command Line](https://en.wikipedia.org/wiki/Command-line_interface), and [NPM](https://en.wikipedia.org/wiki/Npm_(software)). All of these tools are used in this guide*


## The basic layout

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

## Sample Configuration

:::caution
Editing the configuration in the way described in this guide assumes you have TypeScript hints in your text editor (we suggest Visual Studio Code). Without it, you might make type errors that cause WordWeaver to crash!
:::

Below is a complete sample configuration of a WordWeaver-UI's Meta data. This configuration gives basic high-level information to WordWeaver that let's it know how to display your site.

```typescript
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
You can either replace the configuration in `projects/word-weaver/src/config/config.ts` or you can create an additional configuration. In order to create an additional configuration, create a sub-configuration file with your languages' [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code at `projects/word-weaver/src/config/config.<yourlanguagecode>.ts`. Then, you will have to edit the `angular.json` file to include your file replacements. Then you can run your site with `npm start -- --configuration=<yourlanguagecode>`. If you make your own language configuration, it is still recommended that you copy the main `projects/word-weaver/src/config/config.ts` to use as a template.
:::

---

### contributors

**Type**: `Contributor[]`

**Dependent types**: [Contributor](ww-ui-types#contributor)

**Effect**: Adding information to the `Meta.contributors` list will add that information to the list of contributors in the [About Page](ww-ui-page-about.md) 

**Requirements**: None

---

### copyright

**Type**: 

```typescript
{
    name: string;
    url: string;
}
```

**Dependent types**: None

**Effect**: Adds the name of the copyright holder (and a link to their site) to the footer of the page

**Requirements**: A valid link that begins with `https://`

---

### languages

**Type**: `Language[]`

**Dependent types**: [Language](ww-ui-types#language)

**Effect**: The list of languages here is used in the Settings and Header to select languages. The `label` is the displayed string and the `value` is the internal value. We recommend this should be an [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) value.

:::important
**Requirements**: Your language **will not** work without the proper translation files. Please follow the [internationalization](ww-ui-i18n.md) guide.
:::

---

### links

**Type**:
```typescript
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

---

### logo

**Type**: `string`

**Dependent types**: None

**Effect**: Adds a graphic to the top left of the page

**Requirements**: Valid links must either be valid web links starting with `https://`, or paths to internal resources `ex: 'assets/logo.png'`

---

### wordmaker.tempView

**Type**: `"default" | TierNames;`

**Dependent types**: [TierNames](ww-ui-types#tiernames)

**Effect**: Determines what value to display in the 3rd step of the WordMaker view. 
If default, then the option value is chosen, otherwise any declared tier name can be chosen.

**Requirements**: All options must produce valid conjugations to use a TierName.

---

### tableviewer.viewModes

**Type**: `TableviewerViewModes[]`

**Dependent types**: [TableviewerViewModes](ww-ui-types#tableviewerviewmodes)

**Effect**: Determines which different Tableviewer views are available. Default allowable views are `list`, `grid` and `tree` views.

**Requirements**: None

## Environment Configuration

The other place you will need to make adjustments is in your environment configuration. These files are found in `projects/word-weaver/src/environments`. 
The defaults found in `projects/word-weaver/src/environments/environment.ts` are set to run your WordWeaver on your local machine, but are not meant to be used in production.

### appName

**Type**: string

**Dependent types**: None

**Effect**: Changes the name of your WordWeaver

**Requirements**: None

---

### i18nPrefix

**Type**: string

**Dependent types**: None

**Effect**: A path to where your i18n files are kept. If you have not moved them from the default location, do not edit this.

**Requirements**: None

---

### base

**Type**: string

**Dependent types**: None

**Effect**: The base URL where your WordWeaver API will be deployed

**Requirements**: Must begin with `//`. Must **not** end with `/`.

---

### prefix

**Type**: string

**Dependent types**: None

**Effect**: Fetches all http requests from supplied prefix. If you have not edited this in your WordWeaver, do not edit this.

**Requirements**: Must begin and end with `/`.

---

### test_prefix

**Type**: string

**Dependent types**: None

**Effect**: Fetches all http requests from supplied prefix when `Test API` button is selected from Settings view. If you have not edited this in your WordWeaver, do not edit this.

**Requirements**: Must begin and end with `/`.

## Overriding App Default Settings

There are a number of variables that are kept to maintain state for your WordWeaver that have defaults. 
Many of these variables are internal and shouldn't need to be edited manually. However, some, in particular `language`, `theme`, and `autoNightMode`
should be overridden as required.

See the default initial state below:

```typescript {2-4}
const initialBaseState: SettingsState = {
  language: "en",
  theme: "PURPLE-THEME--LIGHT",
  autoNightMode: false,
  nightTheme: NIGHT_MODE_THEME,
  stickyHeader: true,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true,
  baseUrl: environment.base + environment.prefix,
  testApi: false,
  colors: {
    primary: "rgb(255, 255, 255)",
    accent: "rgb(255, 255, 255)"
  },
  level: environment.config.level,
  highlight: environment.config.highlight,
  hour: new Date().getHours()
};
```

Values declared here can be overridden in your configuration file in `projects/word-weaver/src/config` by exporting a variable called `initialSettings`.
Below is an example that overrides the `language`, `theme` and `autoNightMode` values:

```typescript
export const initialSettings: Partial<SettingsState> = {
  language: "en",
  theme: "DEFAULT-THEME",
  autoNightMode: false
};
```

---

### language

**Type**: [TableviewerViewModes](ww-ui-types#tableviewerviewmodes)

**Dependent types**: None

**Effect**: Determines which view is shown by default.

**Requirements**: None

---

### theme

**Type**: [Theme](ww-ui-types#theme)

**Dependent types**: [ThemeName](ww-ui-types#themename)

**Effect**: Determines which theme is applied by default.

**Requirements**: Theme names must correspond to the names of your defined theme class names in `projects/word-weaver/src/styles.scss`.
Variables are written in upper case by convention. 

:::tip
To see how to create your own themes, please visit the [theme guide](ww-ui-style.md).
:::

---

### autoNightMode

**Type**: boolean

**Dependent types**: None

**Effect**: Determines whether auto-night-mode is turned on or not. If turned on, a dark theme will be applied between the hours 21:00 and 7:00.

**Requirements**: None


## Overriding TableViewer Default Settings

There are a number of variables that are kept to maintain state for the TableViewer that have defaults. 
Many of these variables are internal and shouldn't need to be edited manually. However, some, in particular `view` and `gridOrder`
should be overridden as required.

See the default initial state below:

```typescript {10-15}
export const initialBaseState: TableviewerState = {
  option: [],
  agent: [],
  patient: [],
  root: [],
  conjugations: [],
  treeDepth: 1,
  standardTreeOrder: true,
  loading: false,
  view: "list",
  gridOrder: {
    col: "option",
    row: "pn",
    main: "root"
  }
};
```

Values declared here can be overridden in your configuration file in `projects/word-weaver/src/config` by exporting a variable called `initialTableViewerSettings`.
Below is an example that overrides the `view` and `gridOrder` values:

```typescript
export const initialTableViewerSettings: Partial<TableviewerState> = {
  view: "grid",
  gridOrder: {
    col: "root",
    row: "pn",
    main: "option"
  }
}
```

---

### view

**Type**: [TableviewerViewModes](ww-ui-types#tableviewerviewmodes)

**Dependent types**: None

**Effect**: Determines which view is shown by default.

**Requirements**: None

---

### gridOrder

**Type**: [GridOrder](ww-ui-types#gridorder)

**Dependent types**: [GridOrderOptions](ww-ui-types#gridorderoptions)

**Effect**: Determines which data is stored as columns, rows or tabs by default.

**Requirements**: None

## Themes

You can constrain what themes are available by removing themes from the `THEMES` variable in your configuration file.
