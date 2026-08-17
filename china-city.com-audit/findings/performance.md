# Performance Findings

> 站点未上线，无法用真实 Chrome / CrUX 测量，以下为静态资源层面评估。

- ✅ 图片全部 WebP，总量合理（17 张，最大 111 KB）。
- ✅ hero 图 `preload` + `fetchpriority="high"`，LCP 元素已优化。
- ✅ 图片均有 `width`/`height`，可防 CLS。
- ✅ 字体使用 `@fontsource-variable`（默认 latin 子集，`outfit/files` 仅 2 个文件）。
- ⚠️ 单页 HTML 构建后约 182 KB（1 行 minified），首屏解析与渲染负担高于多页结构。
- ⚠️ `og-china-city.webp`（111 KB）与 `hero-great-wall.webp`（109 KB）可再压缩。
- ⚠️ 15 个 `<details>` 内嵌完整指南，但默认折叠，不会阻塞首屏渲染。
- 📋 待办：部署后用真实 Chrome 实测 LCP / INP / CLS。
