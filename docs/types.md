---
id: ww-ui-types
title: WordWeaver-UI Type Definitions
sidebar_label: WordWeaver-UI Type Definitions
---

### Contributor

```
export interface Contributor {
  text: string;
  img: string | false;
  name: string;
  title: string;
}
```

### Language

```
export interface Language {
  label: string;
  value: string;
}
```

### Link

```
export interface Link {
  display: boolean;
  url: string;
}
```
