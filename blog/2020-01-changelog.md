---
slug: changelog-2020-01
title: Changelog January, 2020
author: RDW
author_title: Core Developer
author_url: https://github.com/Duckwhale
author_image_url: https://github.com/Duckwhale.png
date: 2020-02-01
tags: [changelog, archive]
---

From the archives I was summoned to bring thee.... this ancient changelog.

### Summary

* Implemented rendering of the 3D game world (textured terrain, but no models yet)
* Streamlined the JS-based file loading to use a plugin-like system

### Lessons learned

This is where parts of the engine were ported to JavaScript. Takeaways:

* JavaScript is a lot faster than one would expect from such a shitty language
* WebGL is much more powerful than it might seem, despite some limitations
