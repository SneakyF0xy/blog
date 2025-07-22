# 🦊 SneakyFoxy Blog

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![GitHub license](https://img.shields.io/github/license/SneakyF0xy/blog)](https://github.com/SneakyF0xy/blog/blob/main/LICENSE)
[![Code size](https://img.shields.io/github/languages/code-size/SneakyF0xy/blog)](https://github.com/SneakyF0xy/blog)
[![Build Status](https://github.com/emazzotta/lighthouse-badges/workflows/build/badge.svg)](https://github.com/emazzotta/lighthouse-badges/actions)

A personal cybersecurity blog covering CTFs, cryptography,
and security research in a casual, accessible way.
Built with Astro for blazing-fast performance.

## ✨ Features

- ⚡ Lightning fast performance with Astro
- 📱 Fully responsive design
- 🎨 Beautiful [Tufte CSS](https://github.com/edwardtufte/tufte-css)-inspired typography
- 📝 Markdown support with frontmatter
- 🏷️ Tag and category system
- 🔍 SEO optimized

## 🚀 Quick Start

1. **Clone and install**

   ```bash
   git clone https://github.com/SneakyF0xy/blog.git
   cd blog
   npm install
   ```

2. **Start development**

   ```bash
   npm run dev
   ```

3. **Open browser**
   Visit `http://localhost:4321`

## 📝 Writing Posts

Create `.md` files in `src/content/blog/`:

```markdown
---
title: Your Post Title
description: Brief description
category: casual
date: 2025-07-23
tags: [space, technology]
---

## Your header

Write your post content here!
```

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview build |
| `npm run lint` | Run all linters |
| `npm run lint:md` | Lint Markdown files with Markdownlint |
| `npm run lint:css` | Lint CSS files with Stylish |
| `npm run lint:js` | Lint JS/TS files with ESLint |
| `npm test` | Run tests |

## 📁 Structure

```text
blog/
├── src/
│   ├── content/blog/   # Blog posts (.md)
│   ├── pages/          # Routes
│   ├── plugins/        # Custom plugins
│   └── styles/         # CSS files
├── public/             # Static assets
├── test/               # Test files
└── astro.config.mjs    # Config
```

## 🚀 Deploy

Build with `npm run build` and deploy the `dist/` folder to:

- GitHub Pages (workflow included)
- Vercel: `vercel`
- Netlify: Upload `dist/` folder

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### Development Contributions

1. **Fork & Clone**

   ```bash
   git clone https://github.com/YOUR_USERNAME/blog.git
   cd blog
   npm install
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes & Test**

   ```bash
   npm run lint    # Check code quality
   npm test        # Run tests
   npm run build   # Test production build
   ```

4. **Submit Pull Request**
   - Clear title and description
   - Reference related issues
   - Include screenshots for UI changes

### Ways to Contribute

- 🐛 Fix bugs and improve functionality
- ✨ Add new features and enhancements
- 🎨 Improve design and user experience
- 📝 Enhance documentation
- 🚀 Optimize performance

### Get Help

- 💬 **Discussions**: Use
[GitHub Discussions](https://github.com/SneakyF0xy/blog/discussions)
for questions and ideas
- 🐛 **Issues**: Report bugs or request features via
[GitHub Issues](https://github.com/SneakyF0xy/blog/issues)
- 📖 **Documentation**: Check existing issues before creating new ones

## 📄 License

All blog posts are copyrighted.
If you want use it, cite!
But code is open to use.
License - see [LICENSE](LICENSE) file.
