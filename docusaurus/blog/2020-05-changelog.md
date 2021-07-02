---
slug: changelog-2020-05
title: Changelog May, 2020
author: RDW
author_title: Core Developer
author_url: https://github.com/Duckwhale
author_image_url: https://github.com/Duckwhale.png
date: 2020-06-01
tags: [changelog, archive]
---

From the archives I was summoned to bring thee.... this ancient changelog.

### Summary

* Reworked and extended the existing debug menu
* Added capabilities required for lightmap generation (bitmap/image processing)
* Implemented lightmap rendering (lightmap and occlusion textures)
* Introduced a basic "loading screen"-style notification on scene change

### Lessons learned

* Keeping tools and debug utilities up to date is important, but a lot of work
* Rendering textures correctly is a lot more annoying than anticipated
* Bitmaps can come in a variety of versions, many of which are tricky to process
* Load times are much faster than expected, so a loading screen isn't really needed
