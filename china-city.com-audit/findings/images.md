# Images Findings

- ✅ 17 张图片全部为 WebP 格式。
- ✅ 所有图片均有描述性 `alt` 文本（含城市名 + 标志性景点）。
- ✅ 所有图片有 `width`/`height`（防 CLS）。
- ✅ 除 hero 图外均 `loading="lazy"` + `decoding="async"`。
- ✅ 首屏 hero 图有 `preload` + `fetchpriority="high"`。
- ⚠️ `og-china-city.webp`（111 KB）与 `hero-great-wall.webp`（109 KB）可压缩至 80 KB 以内。
- ✅ 其余图片 31–87 KB，体积合理。
- ✅ 无重复图片（每个城市独立图片，符合「景点卡片图片独立性」规范）。
