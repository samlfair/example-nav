Example of a nav created with theoretical link groups.

[Preview deployment](https://example-nav.vercel.app/)

Content models:

```
blog_post
├── title
├── description
└── image
page
├── title
├── description
└── icon
main nav
├── logo
├── link_group
│   ├── group_title (e.g. "Menu 1")
│   └── group_items
│       └── link_group
│           ├── group_title (e.g. "Tincidunt")
│           └── group_items
│               └── link
│                   ├── link_url
│                   └── link_label (e.g. "Features")
└── link_group
    └── group_items
        ├── link_url
        └── link_label (e.g. "Sign Up")
```

This content model is based on two data structures:

- Link field
- Link group field

The link field comprises a link label and a link URL.

The link group field comprises a title and a group that can contain links or nested link groups.
