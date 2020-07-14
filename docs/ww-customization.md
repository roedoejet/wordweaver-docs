---
id: ww-custom-intro
title: Configuring your WordWeaver
sidebar_label: WordWeaver Configuration
---

*This guide assumes you have followed the steps of both [installing](ww-installation.md) and [setting up](ww-firststeps.md) WordWeaver. You are therefore assumed to have some knowledge and understanding of [Git](https://en.wikipedia.org/wiki/Git), [Command Line](https://en.wikipedia.org/wiki/Command-line_interface), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), and [Docker](https://en.wikipedia.org/wiki/Docker_(software)). In order to deploy to a production environment, it's also recommended that you have some familiarity with [nginx](https://www.nginx.com/resources/wiki/). All of these tools are used in this guide*

## The basic layout

Before we dig in, have a look at the directory tree below. Please refer to it throughout this guide.

:::note
If there are files in your cloned version that are not in the tree below, you do not have to worry about them unless you are very comfortable with Python and Docker and want to customize your application beyond what is covered in this documentation.
:::

```
.
+-- wordweaver
|       +-- test
|       +-- wordweaver
|           +-- data
|               +-- fr
|                   +-- __init__.py
|                   +-- conjugations.json
|                   +-- models.py
|                   +-- options.json
|                   +-- pronouns.json
|                   +-- verbs.json
|           +-- router
|           +-- main.py
|           +-- models.py
|       +-- .env
+-- .env
+-- docker-compose.prod.yml
+-- docker-compose.tests.yml
+-- docker-compose.yml
+-- Dockerfile
+-- env-backend.env
+-- init-letsencrypt.sh
+-- local.ini
```

When deploying just to a development environment (the default) there is only one service being composed by docker, the [backend](#backend-wordweaver). To deploy to production, we also need a [certbot](#certbot) service and a [reverse proxy](#reverse-proxy-nginx).

## Backend (WordWeaver)

This is the main configurable service. It is the `wordweaver` Python package and API.

Every WordWeaver has its data separated into 4 main sections and must be in JSON format. To add your data, create a new folder in `wordweaver/wordweaver/data`. It should be named after your language's [ISO 639-3 code](https://iso639-3.sil.org/). You will need to add 6 files (including a blank `__init__.py` file). The following sections describe the remaining 5 files.

### Verbs

You must have data related to the verb roots available in your WordWeaver in a single `verbs.json` file. Your verbs should be a JSON array of objects. Minimally, each verb in your verbs array must have unique `tag`, `gloss`, and `classes` keys. 

Default Definition:

```python
class Verb(BaseModel):
    ''' Required '''
    gloss: str = ''
    tag: str = ''
    classes: List[str] = []
``` 

#### tag

The `tag` is the unique identifier for that verb. It must also be a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug).

#### gloss

The `gloss` is the display form.

#### classes

The `classes` key is an array of strings that are class names to apply to that verb.

### Pronouns

You must have data related to the pronouns available in your WordWeaver in a single `pronouns.json` file.

Default Definition:

```python
class Pronoun(BaseModel):
    ''' Required '''
    gloss: str = ''
    obj_gloss: str = ''
    tag: str = ''
```

#### tag

The `tag` is the unique identifier for that verb. It must also be a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug).

#### gloss

The `gloss` is the subject display form.

#### obj_gloss

The `gloss` is the object display form.

### Options

You must have all other options related to your data available in a single `options.json` file.

Default Definition:

```python
class Option(BaseModel):
    ''' Required '''
    gloss: str = ''
    tag: str = ''
    type: str = ''
```

#### tag

The `tag` is the unique identifier for that verb. It must also be a [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug).

#### gloss

The `gloss` is the display form.

#### type

The `type` allows for categorization of options (ex. tense, aspect etc)

### Conjugations

You must have data related to the conjugations available in your WordWeaver in a single `conjugations.json`.

Each conjugation consists of an `input` and an `output`:

```python
class ResponseObject(BaseModel):
    input: ConjugationInput
    output: Conjugation
```

The `input` is an object that includes the tag values for each related `verb`, `pronoun`, and `option`:

```python
class ConjugationInput(BaseModel):
    root: str
    option: str
    agent: str
```

The `output` is a list of objects containing response morphemes:

```python
Conjugation = List[ResponseMorpheme]
```

```python
class ResponseMorpheme(BaseModel):
    position: Optional[int]
    value: Optional[str]
    gloss: Optional[str]
    english: Optional[str]
    type: Optional[List[str]]
```

Response morphemes are units that can be concatenated into `Tiers`. Tiers are defined in the WordWeaver UI and concatenate response morphemes based on a provided key. They also join them with a provided `separator` value. 

For example, a possible conjugation:

```json
{
    "input": {
        "root": "courir",
        "option": "indicatif-present",
        "agent": "2-pl"
    },
    "output": [
        {
            "position": 0,
            "value": "cour",
            "type": [
                "root"
            ]
        },
        {
            "position": 1,
            "value": "ez",
            "type": [
                "ending"
            ]
        }
    ]
}
```

Here, `courir` must be a tag of a verb defined in `verbs.json`. `indicatif-present` must be a tag of an option defined in `options.json` and `2-pl` must be a tag of a pronoun defined in `pronouns.json`.

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

Here, the `display` tier value would be `courez` while the `breakdown` tier would be `cour-ez`.

### Edit CORS rules

Your CORS rules are defined in `wordweaver/wordweaver/main.py`. You can edit allowable origins, methods and headers here.

### Update Type Definitions

### Edit routes

Your routes are defined in `wordweaver/wordweaver/main.py`. By default, there are routes to the auto-built API documentation at `/docs`, as well as your `options`, `pronouns`, `verbs`, and `conjugations` resources, prefixed by `/api/v1`.

## Reverse Proxy (nginx)

*This is only required for deploying to production environments*

The default nginx configuration is very basic. It is configured to work with your Let's Encrypt SSL certification, and it is also configured to force redirects to https.

The configuration is defined as a template `volumes/reverse/nginx/conf/wordweaver.template` that is formatted with your domain name as defined in `.env`

## Certbot

*This is only required for deploying to production environments*

Certbot manages your SSL cert. We recommend using [Let's Encrypt](https://letsencrypt.org/). After securing your VPS, ensuring Docker is available, and cloning your repo onto your VPS, do the following steps to set up automated renewals of your SSL cert.

1. Change the email and domain in `.env`
2. On your VPS, run `init-letsencrypt.sh` to get an SSL cert for your site
3. Spin up your WordWeaver by running `docker-compose -f docker-compose.prod.yml up`
   
:::important
Your DNS records will have to be set up to point to your VPS
:::
