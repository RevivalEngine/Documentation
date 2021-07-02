---
slug: changelog-2020-08
title: Changelog August, 2020
author: RDW
author_title: Core Developer
author_url: https://github.com/Duckwhale
author_image_url: https://github.com/Duckwhale.png
date: 2020-09-01
tags: [changelog, archive]
---

From the archives I was summoned to bring thee.... this ancient changelog.

### Summary

* Fixed various synchronization issues in the sprite animation system
* Increased rendering performance of the sprite animation system
* Added tools to migrate LibConfig databases to Lua

### Lessons learned

* Synchronizing animations requires a full-blown event scheduler, which I didn't expect
* Sprite animation scales poorly if you don't have access to proper hardware instances
* It's still too easy to get sidetracked and waste time on exploratory features
