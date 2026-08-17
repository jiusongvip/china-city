# China City Explorer — 优先行动计划（单页化改造后 · 本地审计）

> 审计日期：2026-08-17 · 审计对象：`d:\workspaces\website\china-city` 本地源码 + 构建产物
> 代码层 SEO 健康度：**79 / 100**
> 关键阻断项：**域名 `china-city.com` 不存在（DNS NXDOMAIN），站点未上线，无法被搜索引擎访问。**

---

## Phase 1 — Critical：让站点可被访问（Week 1）

- [ ] 注册/恢复 `china-city.com` 域名，将 DNS 托管到 Cloudflare
- [ ] 部署到 Cloudflare Pages（构建命令 `npm run build`，输出目录 `dist`）
- [ ] 配置 HTTPS 与规范重定向（统一 apex 或 www，并强制 HTTPS）
- [ ] 上线后在 Google Search Console 提交 `sitemap.xml`，验证首页可抓取

## Phase 2 — High：技术一致性修复（Week 1–2）

- [ ] 统一 canonical / sitemap / 实际 URL 的尾斜杠策略：
      `trailingSlash: 'always'` 会让首页实际 URL 为 `https://china-city.com/`，
      但当前 `canonical` 与 `sitemap.xml` 均为无尾斜杠的 `https://china-city.com`。
      建议统一为带尾斜杠（去掉 `index.astro` 里的 `.replace(/\/$/, '')`，sitemap loc 加 `/`）。
- [ ] 修复 Article schema 的 `dateModified`：当前值为 `"August 2026"`（非 ISO 8601），
      与 `datePublished: "2026-08-17"` 格式不一致，会导致 Schema 验证告警。改为 `"2026-08-17"`。
- [ ] 清理 `src/pages` 下的空目录：`cities/`、`compare/`、`months/`、`routes/`（文件已删除，仅剩空目录）。

## Phase 3 — Medium：Schema 与资源增强（Month 1）

- [ ] 补充独立的 `Organization` schema（含 `logo` 与 `sameAs`），强化 E-E-A-T 实体信号
- [ ] 评估 Schema 中的 fragment URL（`#guide-{slug}`）：单页化后所有 `TouristDestination` 指向
      同一页面的锚点，可保留（保证 Schema 合法）或精简为无 `url` 字段的纯实体描述
- [ ] 压缩 `og-china-city.webp`（111 KB）与 `hero-great-wall.webp`（109 KB）至 80 KB 以内
- [ ] 确认 `llms.txt` / `llms-full.txt` 锚点与页面实际锚点一致（当前已一致）

## Phase 4 — Monitoring & Iteration（Ongoing）

- [ ] 部署后使用真实 Chrome 实测 Core Web Vitals（LCP / INP / CLS），优化首屏
- [ ] 在 GSC 观察索引与展示，重点监控长尾城市词的收录（单页化后长尾着陆页减少）
- [ ] 评估单页 vs 多页的排名权衡：若长尾城市词（如 "beijing travel guide"）长期无曝光，
      考虑为高价值城市恢复少量独立页面（`/cities/beijing/` 等）作为 SEO 着陆页
- [ ] 定期重跑审计，对比分类得分

---

## 已确认良好的部分（无需改动）

- ✅ `sitemap.xml` 已精简为单页，格式正确
- ✅ `robots.txt` 正常，正确引用 sitemap
- ✅ 404 页已重写为独立页并 `noindex`
- ✅ 首页 H1 唯一（1 个），H2/H3 层级清晰
- ✅ 无残留死链（`/cities/`、`/routes/`、`/months/`、`/compare/` 引用已清零）
- ✅ 图片全部为 WebP，均有 `alt` 与 `width`/`height`（防 CLS）
- ✅ 5 组 JSON-LD Schema 均已输出（WebSite / FAQPage / ItemList / Article / TouristDestination）
