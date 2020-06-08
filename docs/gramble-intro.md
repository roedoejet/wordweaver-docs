---
id: gramble-intro
title: Gramble & Language Modelling
sidebar_label: Language Modelling with Gramble
---

*This page assumes you are comfortable with [Git](https://en.wikipedia.org/wiki/Git), [Command Line](https://en.wikipedia.org/wiki/Command-line_interface), and [NPM](https://en.wikipedia.org/wiki/Npm_(software)). You must have all of these installed on your machine.*

## What is Gramble?

[Gramble](https://github.com/littell/gramble_ts) is a TypeScript library, Google Sheets Add-On and command line interface for writing your grammar as a spreadsheet. It is the **recommended** solution for most WordWeavers.

## Adding your gramble model to WordWeaver

Assuming you have made your gramble model and exported it to CSV, you can generate the files necessary for initializing your WordWeaver with the following steps.

### Installation
You must have the Gramble CLI installed. Install it with npm: ```npm install -g @gramble/cli```

### Add/edit WordWeaver keywords in your Gramble model

You must ensure that all relevant special keywords for WordWeaver are included in your Gramble model. By default, this includes verb roots (`root`), pronouns (`agent` & `patient`), and other options (`option`). 

Have a look at the example verbs in a hypothetical Gramble model below - we will illustrate the instructions referring to this example.

##### Example Verbs

|text | gloss | gloss |
| ------------ | ------- | ------- |
| ayaa | be there | VAI |
| pashikoo | get up | VAI |
| paahpi | laugh | VAI |
| ayaa | have | VAIT |
| oshiihtaa | make | VAIT |

Sometimes, this is as simple as just adding the keyword to a pre-existing column header as in:

##### Example Verbs with added root keyword

|text, *root* | gloss | gloss |
| ------------ | ------- | ------- |
| ayaa | be there | VAI |
| pashikoo | get up | VAI |
| paahpi | laugh | VAI |
| ayaa | have | VAIT |
| oshiihtaa | make | VAIT |

Note that the values here must be unique and there is a conflict here as 'ayaa' occurs twice. In this case, you must create a separate unique identifier:

##### Example Verbs with added root keyword column

|text | gloss | gloss | *root*
| ------------ | ------- | ------- | ----- |
| ayaa | be there | VAI | ayaa-vai |
| pashikoo | get up | VAI | pahikoo-vai |
| paahpi | laugh | VAI | paahpi-vai |
| ayaa | have | VAIT | ayaa-vait |
| oshiihtaa | make | VAIT | oshiihtaa-vait |

### Update your WordWeaver configuration

Once you have updated your Gramble language model to include all necessary keywords, you can make any necessary changes to your [WordWeaver Configuration](ww-customization.md). You must also add `json` files with your all of your verb roots, pronouns and options. So, the 'Example Verbs' table above might become:

```json
[
   {
        "gloss": "be there (vii)",
        "tag": "ashtee-vii"
    },
    {
        "gloss": "melt",
        "tag": "tihkitee-vii"
    },
    {
        "gloss": "be there (vai)",
        "tag": "ayaa-vai"
    },
    {
        "gloss": "get up",
        "tag": "pashikoo-vai"
    },
    {
        "gloss": "laugh",
        "tag": "paahpi-vai"
    },
    {
        "gloss": "have",
        "tag": "ayaa-vait"
    },
    {
        "gloss": "make",
        "tag": "oshiihtaa-vait"
    }
]
```

You will need to do this for all possible verb roots, pronouns and options.

### Exporting your conjugations

Export your conjugations: `gramble generate <yourGrambleFile.csv> --wordweaver > conjugations.json`

### Initialize your WordWeaver

Follow the guide to setting up a new language (*...guide forthcoming...*) by moving all of your new files (`verbs.json`, `pronouns.json`, `options.json` and `conjugations.json`) into your language's folder in the WordWeaver folder. Set the `WWLANG` variable in `.env` to your language's ISO code, or alternatively set it manually in your environment.
Then, ensure your data matches your type definitions by running `wordweaver validate-data`. If all is well, you can [spin up your new WordWeaver ](ww-firststeps.md). 

Congratulations, you're all done!
