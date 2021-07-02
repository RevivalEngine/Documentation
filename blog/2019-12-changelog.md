---
slug: changelog-2019-12
title: Changelog December, 2019
author: RDW
author_title: Core Developer
author_url: https://github.com/Duckwhale
author_image_url: https://github.com/Duckwhale.png
date: 2020-01-01
tags: [changelog, archive]
---

From the archives I was summoned to bring thee.... this ancient changelog.

### Summary

* Reworked networking code to use WebSockets instead of HTTP Long Polling
* Streamlined the existing Client APIs (there was no proper API before)

### Lessons learned

This was before switching to Electron and NodeJS, and some painful lessons were learned:

* Attempting to use Lua with web technologies was foolish. It just doesn't work
* Writing your own API handlers from scratch is not a Good Idea
* Concurrency is to be avoided if at all possible
