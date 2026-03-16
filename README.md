# Blog

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![GitHub license](https://img.shields.io/github/license/SneakyF0xy/blog)](https://github.com/SneakyF0xy/blog/blob/main/LICENSE)
[![Code size](https://img.shields.io/github/languages/code-size/SneakyF0xy/blog)](https://github.com/SneakyF0xy/blog)
[![Build Status](https://github.com/emazzotta/lighthouse-badges/workflows/build/badge.svg)](https://github.com/emazzotta/lighthouse-badges/actions)

Personal blog about CTFs, cryptography, and security research.
Built with Astro.

## Development

```bash
git clone https://github.com/SneakyF0xy/blog.git
cd blog
npm install
npm run dev
```

Open `http://localhost:4321`.

## Writing

Create a post in `src/content/blog/`:

```markdown
---
title: Post title
description: Short description
category: casual
date: 2025-07-23
tags: [ctf, crypto]
---

Content.
```

## Build

```bash
npm run build
```

Output: `dist/`

## License

Blog posts are copyrighted.
Code is open source — see `LICENSE`.
