---
id: ww-ui-types
title: WordWeaver-UI Type Definitions
sidebar_label: WordWeaver-UI Type Definitions
---

### Contributor

```typescript
export interface Contributor {
  text: string;
  img: string | false;
  name: string;
  title: string;
}
```

### GridOrder

```typescript
export interface GridOrder {
  main: GridOrderOptions;
  row: GridOrderOptions;
  col: GridOrderOptions;
}
```

### GridOrderOptions

```typescript
export type GridOrderOptions = "root" | "pn" | "option";
```


### Language

```typescript
export interface Language {
  label: string;
  value: string;
}
```

### Link

```typescript
export interface Link {
  display: boolean;
  url: string;
}
```

### TableviewerViewModes

```typescript
export type TableviewerViewModes = "list" | "grid" | "tree"
```

### Theme

```typescript
export interface Theme {
  value: ThemeName;
  label: string;
}
```

### ThemeName

```typescript
export type ThemeName = "DEFAULT-THEME" | "LIGHT-THEME" | 'DARK-THEME' | 'PURPLE-THEME--LIGHT' | 'PURPLE-THEME--DARK' | 'PURPLE-BLUE-THEME--LIGHT' | 'PURPLE-BLUE-THEME--DARK' | 'PURPLE-GOLD-THEME--LIGHT' | 'PURPLE-GOLD-THEME--DARK';
```

### TierNames

```typescript
export type TierNames = "display" | keyof Level
```
