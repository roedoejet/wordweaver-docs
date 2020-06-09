export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "announcementBar": {
      "id": "do_not_use",
      "content": "Please do not attempt to use these docs. We're working hard on it, but they're not quite ready yet.",
      "backgroundColor": "#DB7093",
      "textColor": "#091E42"
    },
    "navbar": {
      "title": "WordWeaver",
      "logo": {
        "alt": "Wordweaver",
        "src": "img/android-chrome-512x512.png"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/nrc-cnrc/wordweaver",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Introduction",
              "to": "docs/"
            },
            {
              "label": "Guides",
              "to": "docs/firststeps"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/roedoejet/wordweaver-docs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 National Research Council Canada. Docs built with Docusaurus."
    }
  },
  "title": "WordWeaver Documentation",
  "tagline": "Weave beautiful verb conjugation websites",
  "url": "https://docs.wordweaver.ca",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "National Research Council Canada",
  "projectName": "wordweaver",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "intro",
          "sidebarPath": "/Users/pinea/wordweaver-docs/sidebars.js",
          "editUrl": "https://github.com/roedoejet/wordweaver-docs/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/roedoejet/wordweaver-docs/edit/master/blog/"
        },
        "theme": {
          "customCss": "/Users/pinea/wordweaver-docs/src/css/custom.css"
        }
      }
    ]
  ]
};