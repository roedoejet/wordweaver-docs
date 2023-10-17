---
id: wwui-custom-intro
title: Creating your own WordWeaver
sidebar_label: Creating your WordWeaver
---

*This guide assumes you have followed the steps for [installing](installation) WordWeaver. You are therefore assumed to have some knowledge and understanding of [Git](https://en.wikipedia.org/wiki/Git), [Command Line](https://en.wikipedia.org/wiki/Command-line_interface), and [NPM](https://en.wikipedia.org/wiki/Npm_(software)). All of these tools are used in this guide*


## The basic layout

Before we dig in, have a look at the directory tree below. Remember to refer to this throughout this guide! It is the standard (partially redacted) structure of your WordWeaver. 

:::note
If there are files in your cloned version that are not in the tree below, you do not have to worry about them unless you are very comfortable with Angular applications and want to customize your application beyond what is covered in this documentation.
:::

```
.
+-- projects
|   +-- word-weaver-cli
|   +-- word-weaver
|       +-- src
|           +-- app
|               +-- app
|               +-- core
|               +-- pages
|               +-- shared
|           +-- assets
|               +-- data
|                   +-- fr
|                       +-- v1
|                           +-- conjugations.json
|                           +-- options.json
|                           +-- pronouns.json
|                           +-- verbs.json
|               +-- i18n
|                   +-- data
|                       +-- en.json
|                       +-- fr.json
|                   +-- en.json
|                   +-- fr.json
|               +-- wwlogo.png
|           +-- config
|               +-- config.fr.ts
|               +-- config.ts
|               +-- schema.fr.ts
|               +-- schema.ts
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

Generally speaking, there are four places that you will need to edit:

1. `projects/word-weaver/src/assets/data`. This is where you will put your data for your WordWeaver. You will need four files containing all of the pronouns, verbs, conjugations, and 'options' (typically tense or aspect related inflections). Information about how to add your data can be found just below in [this section](#adding-your-data).
2. `projects/word-weaver/src/config`. This is where you will define the basic configuration of your website including defining the schemas for your data.
3. `projects/word-weaver/src/assets/i18n`. This is where you will include any translations of the either the website or your data files. The guides for editing these files can be found [here](ww-i18n).
4. `projects/word-weaver/src/environments`. This is where all environment/deployment-specific configuration for your WordWeaver-UI is located. The guides for editing these files can be found [here](deploy).

## Adding your language data

First, we will describe the data structures and files you will need to build. To start adding your data, you need to create a folder in `projects/word-weaver/src/assets/data` that is named after your language - remember the code you use here! You can also create multiple versions of your data, so by convention let's start with `v1` which refers to `version 1`. You should add a folders then to `projects/word-weaver/src/assets/data/<your_language_code>/v1`. You'll then need to add the following files as described in the next 4 sections.

The essence of this is that you will have to update the TypeScript interfaces to match your data.If your data does not vary from the described defaults, the default interfaces will contain all sufficient information and can be left untouched. However, if your data does vary from the default that’s been described, you will have to update the associated model.

### Verbs

You must have data related to the verb roots available in your WordWeaver in a `projects/word-weaver/src/assets/data/<your_language_code>/v1/verbs.json` file. Your verbs should be a JSON array of objects. Minimally, each verb in your verbs array **must** have a unique `tag` key. 

#### tag

The `tag` is the unique identifier for that verb. It must also be URL friendly, otherwise known as a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug). To be URL friendly, a slug must be restricted to [certain characters](https://stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid)

#### classes

The `classes` key is an array of strings that are CSS class names to apply to that verb. This can be used to distinguish different verb types to the user. For more information, please visit the [WordWeaver UI style customization guide](ww-ui-style#custom-css).

Default Definition:

<sub>Source: projects/word-weaver/src/config/schema.ts</sub>

```typescript
export interface Verb {
  gloss: string;
  display: string;
  tag: string;
  classes: string[];
}
``` 

For example, the verbs JSON file should be of the following form:

<sub>Source: projects/word-weaver/src/assets/data/fr/v1/verbs.json</sub>

```json
[
   {
       "tag":"aller",
   }
]
```


### Pronouns

You must have data related to pronouns available in your WordWeaver in a `projects/word-weaver/src/assets/data/<your_language_code>/v1/pronouns.json` file. Your pronouns should be a JSON array of objects. Minimally, each pronoun in your pronoun array **must** have a unique `tag`. The default for the pronouns is to accept only an `agent`. To include a `patient`, it should be included in the pronouns JSON file and the [Conjugations](#conjugations) related models must be updated as well (see section for details).

:::info
WordWeaver was initially created for Kanyen'kéha, an Iroquoian language. In Iroquoian languages, [semantic](https://en.wikipedia.org/wiki/Theta_role) notions of 'Agent' and "Patient" are more meaningful than purely syntactic notions of 'Subject' and 'Object'. The naming here is vestigial from that. If it is more relevant for your language to think of 'agent' as 'subject' and 'patient' as 'object' then that is fine too.
:::

#### tag

The `tag` is the unique identifier for that pronoun. It must also be URL friendly, otherwise known as a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug). To be URL friendly, a slug must be restricted to [certain characters](https://stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid)

Default Definition:

<sub>Source: projects/word-weaver/src/config/schema.ts</sub>

```typescript
export interface Pronoun {
  gender: "M" | "F" | "N" | "";
  gloss: string;
  number: "SG" | "PL";
  role: "agent" | "patient" | "";
  obj_gloss: string;
  person: "1" | "2" | "3";
  value: string;
  position?: Number;
  tag: string;
}
```
 
 
For example, the pronouns JSON file should be of the following form:


<sub>Source: projects/word-weaver/src/assets/data/fr/v1/pronouns.json</sub>

```json
[
  {
    "person": "1",
    "number": "SG",
    "tag": "1-sg"
  }
]
```

### Options

The 'Options' category is a catch-all category for all other types of information associated with choosing a conjugation. You must have data related to the options available in your WordWeaver in a single `options.json` file. Your options should be a JSON array of objects. Minimally, each option in your options array **must** have a unique `tag`. The default model also includes an optional `type` attribute.

#### tag

The `tag` is the unique identifier for that option. It must also be URL friendly, otherwise known as a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug). To be URL friendly, a slug must be restricted to [certain characters](https://stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid).

#### type

The `type` allows for categorization of options (ex. tense, aspect etc)

Default Definition:


<sub>Source: projects/word-weaver/src/config/schema.ts</sub>

```typescript
export interface Option {
  classes: string[];
  gloss: string;
  tag: string;
  type?: string;
}
```
 
 For example, the options JSON file should be of the following form:


<sub>Source: projects/word-weaver/src/assets/data/fr/v1/options.json</sub>

```json
[
  {
    "tag": "indicatif-present",
    "type": "indicatif"
  }
]
```


### Conjugations

You must have data related to the conjugations available in your WordWeaver in a single `conjugations.json`.

Each conjugation consists of an `input` and an `output`:


<sub>Source: projects/word-weaver/src/config/schema.ts</sub>

```typescript
export interface ConjugationObject {
  input: ConjugationInput;
  output: Conjugation;
}
```

The `input` is an object that includes the tag values for each related `verb`, `pronoun`, and `option`. 

```typescript
export interface ConjugationInput {
  root: string;
  option: string;
  agent: string;
}
```

__Note__ that the default ConjugationInput class assumes _only_ an agent is required for any given conjugation. If your language's conjugations may require an `patient`, please be sure to add a `patient` attribute to this model. 

```typescript
export interface ConjugationInput {
  root: string;
  option: string;
  agent: string;
  patient: string;
}
```

The `output` is a list of morphemes:

```typescript
export type ConjugationMorpheme = [
  position: number,
  value: string,
  type: string[]
];
export type Conjugation = ConjugationMorpheme[];
```

Conjugation morphemes are units that can be concatenated into `Tiers`. Tiers are [defined in the WordWeaver UI](#ww-ui-customization#tiers).

For example, the conjugations JSON file should be of the following form:


<sub>Source: projects/word-weaver/src/assets/data/fr/v1/conjugations.json</sub>

```json
[
 {
    "input": {
      "root": "courir",
      "option": "conditionnel-present",
      "agent": "1-sg"
    },
    "output": [
      [0, "cour", ["root"]],
      [1, "rais", ["ending"]]
    ]
  }
]
```

Here, `courir` must be a tag of a verb defined in `verbs.json`. `conditionnel-present` must be a tag of an option defined in `options.json` and `1-sg` must be a tag of a pronoun defined in `pronouns.json`.

If your language data is not available split up into morphemes, instead put the full value in position 0 of the output. 


## Configuring your WordWeaver

This section of the guide will walk you through all the various ways you can configure your WordWeaver.

:::info
You can either replace the configuration in `projects/word-weaver/src/config/config.ts` or you can create an additional configuration. In order to create an additional configuration, create a sub-configuration file with your languages' [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code at `projects/word-weaver/src/config/config.<yourlanguagecode>.ts`. Then, you will have to edit the `angular.json` file to include your file replacements. Then you can run your site with `npm start -- --configuration=<yourlanguagecode>`. If you make your own language configuration, it is still recommended that you copy the main `projects/word-weaver/src/config/config.ts` to use as a template.
:::

:::caution
Editing the configuration in the way described in this guide assumes you have TypeScript hints in your text editor (we suggest Visual Studio Code). Without it, you might make type errors that cause WordWeaver to crash!
:::


### Tiers

As mentioned above in the [conjugations section](#conjugations), conjugation morphemes are units that can be concatenated into `Tiers`. Tiers concatenate [conjugation morphemes](#conjugations) based on a provided key. They also join them with a provided `separator` value.

For example, here's a possible conjugation:

```json
{
    "input": {
      "root": "courir",
      "option": "conditionnel-present",
      "agent": "1-sg"
    },
    "output": [
      [0, "cour", ["root"]],
      [1, "rais", ["ending"]]
    ]
  }
```

Here is an example of two possible tiers that could be defined from this type of data in a WordWeaver UI:

```typescript
export const TIERS: Tier[] = [
  {
    name: "display",
    key: "value",
    position: 0,
    separator: ""
  },
  {
    name: "breakdown",
    key: "value",
    position: 1,
    separator: "-"
  }
];
```

Here, the `display` tier value would be `courez` while the `breakdown` tier would be `cour-ez`. Because the `display` tier has a position of 0 and the `breakdown` tier has a position of 1, they would be displayed as follows in your WordWeaver:

```
courez
cour-ez
```

### Meta

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

Now, let's break this down! The following guide to configuration separates each configurable piece and describes its *type*, any *dependent types*, the *effect* it has on the UI, and any other *requirements* to the configuration.

---

### contributors

**Type**: `Contributor[]`

**Dependent types**: [Contributor](ww-ui-types#contributor)

**Effect**: Adding information to the `Meta.contributors` list will add that information to the list of contributors in the About Page. 

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
**Requirements**: Your language **will not** work without the proper translation files. Please follow the [internationalization](ww-i18n.md) guide.
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

**Effect**: Determines which value to display in the 3rd step of the WordMaker view. 
If default, then the option value is chosen, otherwise any declared tier name can be chosen.

**Requirements**: All options must produce valid conjugations to use a TierName.

---

### tableviewer.viewModes

**Type**: `TableviewerViewModes[]`

**Dependent types**: [TableviewerViewModes](ww-ui-types#tableviewerviewmodes)

**Effect**: Determines which different Tableviewer views are available. Default allowable views are `list`, `grid` and `tree` views.

**Requirements**: None



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
To see how to create your own themes, please visit the [theme guide](ww-ui-style).
:::

---

### autoNightMode

**Type**: boolean

**Dependent types**: None

**Effect**: Determines whether auto-night-mode is turned on or not. If turned on, a dark theme will be applied between the hours 21:00 and 7:00.

**Requirements**: None


<!-- ### Overriding TableViewer Default Settings

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

#### view

**Type**: [TableviewerViewModes](ww-ui-types#tableviewerviewmodes)

**Dependent types**: None

**Effect**: Determines which view is shown by default.

**Requirements**: None

---

#### gridOrder

**Type**: [GridOrder](ww-ui-types#gridorder)

**Dependent types**: [GridOrderOptions](ww-ui-types#gridorderoptions)

**Effect**: Determines which data is stored as columns, rows or tabs by default.

**Requirements**: None -->