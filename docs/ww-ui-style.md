---
id: ww-ui-style
title: Styling your WordWeaver
sidebar_label: Styling
---

*This guide assumes you have followed the steps of both [installing](ww-installation.md) and [setting up](ww-firststeps.md) WordWeaver. It also assumes some familiarity with [Sass](https://sass-lang.com/)*

WordWeaver comes with quite a few preset themes out of the box. The default available themes (seen below) are defined in your [WordWeaver UI configuration](ww-ui-customization.md) (`projects/word-weaver/src/config/config.ts`)

```typescript
export const THEMES: Theme[] = [
  {
    value: "DEFAULT-THEME",
    label: marker("ww.settings.themes.blue")
  },
  {
    value: "LIGHT-THEME",
    label: marker("ww.settings.themes.light")
  },
  {
    value: "DARK-THEME",
    label: marker("ww.settings.themes.dark")
  },
  {
    value: "PURPLE-THEME--LIGHT",
    label: marker("ww.settings.themes.purple-light")
  },
  {
    value: "PURPLE-THEME--DARK",
    label: marker("ww.settings.themes.purple-dark")
  },
  {
    value: "PURPLE-BLUE-THEME--LIGHT",
    label: marker("ww.settings.themes.purple-blue-light")
  },
  {
    value: "PURPLE-BLUE-THEME--DARK",
    label: marker("ww.settings.themes.purple-blue-dark")
  },
  {
    value: "PURPLE-GOLD-THEME--LIGHT",
    label: marker("ww.settings.themes.purple-gold-light")
  },
  {
    value: "PURPLE-GOLD-THEME--DARK",
    label: marker("ww.settings.themes.purple-gold-dark")
  }
];
```

## Constraining available themes

To constrain the list of available themes from your users, just remove them from your configuration.

## Default themes

By following our guides on configuring your WordWeaver, you can [constrain what themes are available to your users], and also set the [default theme](ww-ui-customization.md#theme) and default night theme.

## Creating a new theme

Themes are built around matching two basic colours: a `$primary` colour and an `$accent`. 
These colours are actually [material design colour palettes](https://material.io/design/color/the-color-system.html#color-usage-and-palettes). 

### Custom Palettes

You can either use Angular Material's built-in palettes, or you can make your own. Making your own requires creating an scss variable map for your colour palette.
You can either do that manually or provide a single colour and use a generator. The generator we recommend is [this one](http://mcg.mbitson.com/). 
You just select the colour and download the code with output format `ANGULAR JS 2 (MATERIAL 2)`. 
Then, your palette can be added to `projects/word-weaver/src/themes/palettes.scss`. 

:::note
Make sure your variable for your scss map is not already defined
:::

### Custom Themes

To create a new theme:

1. Create a new theme file in `projects/word-weaver/src/themes/`
2. Define your `primary`, `accent`, and `warn` palettes. You can use material palettes (examples `$mat-deep-purple` and `mat-amber` below) or your own custom ones (example `$my-custom-palette` below):

```scss
@import "palettes.scss";

$ww-example-theme-primary: mat-palette($mat-deep-purple, 400);
$ww-example-theme-accent: mat-palette($mat-amber, 600);
$ww-example-theme-warn: mat-palette($my-custom-palette, 200);

```

3. Then, use the `mat-light-theme` and `mat-dark-theme` wrapper functions and define your themes.

```scss
$ww-example-theme--light: mat-light-theme(
  $ww-example-theme-primary,
  $ww-example-theme-accent,
  $ww-example-theme-warn
);

$ww-example-theme--dark: mat-dark-theme(
  $ww-example-theme-primary,
  $ww-example-theme-accent,
  $ww-example-theme-warn
);
```

4. Add your theme to the main style sheet by adding it to `projects/word-weaver/src/styles.scss`
   
```scss {7-11}
.purple-gold-theme--dark {
  @include angular-material-theme($ww-purple-gold-theme--dark);
  @include custom-components-theme-common($ww-purple-gold-theme--dark);
  @include custom-components-theme-dark($ww-purple-gold-theme--dark);
}

.example-theme--dark {
  @include angular-material-theme($ww-example-theme--dark);
  @include custom-components-theme-common($ww-example-theme--dark);
  @include custom-components-theme-dark($ww-example-theme--dark);
}
```

5. Add your theme to the `THEMES` variable in [your configuration](ww-ui-customization.md).

```typescript {38-45}
export const THEMES: Theme[] = [
  {
    value: "DEFAULT-THEME",
    label: marker("ww.settings.themes.blue")
  },
  {
    value: "LIGHT-THEME",
    label: marker("ww.settings.themes.light")
  },
  {
    value: "DARK-THEME",
    label: marker("ww.settings.themes.dark")
  },
  {
    value: "PURPLE-THEME--LIGHT",
    label: marker("ww.settings.themes.purple-light")
  },
  {
    value: "PURPLE-THEME--DARK",
    label: marker("ww.settings.themes.purple-dark")
  },
  {
    value: "PURPLE-BLUE-THEME--LIGHT",
    label: marker("ww.settings.themes.purple-blue-light")
  },
  {
    value: "PURPLE-BLUE-THEME--DARK",
    label: marker("ww.settings.themes.purple-blue-dark")
  },
  {
    value: "PURPLE-GOLD-THEME--LIGHT",
    label: marker("ww.settings.themes.purple-gold-light")
  },
  {
    value: "PURPLE-GOLD-THEME--DARK",
    label: marker("ww.settings.themes.purple-gold-dark")
  },
  {
    value: "EXAMPLE-THEME--LIGHT",
    label: marker("ww.settings.themes.example-light")
  },
  {
    value: "EXAMPLE-THEME--DARK",
    label: marker("ww.settings.themes.example-dark")
  }
];
```

That's it! You've added your new theme. Congratulations!

## Custom CSS