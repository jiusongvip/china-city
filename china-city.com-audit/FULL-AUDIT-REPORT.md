# China City Explorer — 全站 SEO 审计报告

> 审计日期：2026-08-17
> 审计对象：`d:\workspaces\website\china-city`（本地源码 + `dist` 构建产物）
> 站点状态：**未上线** — 域名 `china-city.com` DNS 解析失败（NXDOMAIN）
> 代码层 SEO 健康度：**79 / 100**

---

## 执行摘要

站点已完成「纯单页」架构改造：原 15 个城市详情页、12 个月份页、3 条路线页、3 个对比页、城市列表页等全部删除，所有内容整合至首页，通过锚点区块与可展开卡片呈现。

**代码层面 SEO 基础扎实**（sitemap、robots、404、标题/H 结构、图片、Schema 均已到位），但存在一个**根本性阻断**：域名未注册/未解析，站点无法上线，所有优化均无法生效。

### 核心结论

| 项目 | 状态 |
|------|------|
| 站点可访问性 | ❌ Critical — DNS NXDOMAIN，无法被搜索引擎访问 |
| 单页化改造完整性 | ✅ 子页面全部删除，无死链残留 |
| canonical / sitemap 尾斜杠一致性 | ⚠️ 不一致（High） |
| Article schema `dateModified` 格式 | ⚠️ 非 ISO 8601（High） |
| 长尾关键词着陆页 | ⚠️ 战略权衡：33 个 URL 收敛为 1 个（Medium，需监控） |

### Top 5 待办

1. 注册域名 + 配置 DNS + 部署到 Cloudflare Pages
2. 统一尾斜杠（canonical / sitemap / 实际 URL）
3. 修复 Article schema `dateModified` 为 ISO 日期
4. 清理 `src/pages` 空目录
5. 上线后实测 Core Web Vitals

---

## 分类评分

| 类别 | 权重 | 得分 | 加权 |
|------|------|------|------|
| Technical SEO | 22% | 60 | 13.2 |
| Content Quality | 23% | 88 | 20.2 |
| On-Page SEO | 20% | 92 | 18.4 |
| Schema / Structured Data | 10% | 68 | 6.8 |
| Performance (CWV) | 10% | 78 | 7.8 |
| AI Search Readiness | 10% | 82 | 8.2 |
| Images | 5% | 90 | 4.5 |
| **合计** | 100% | — | **79.1** |

---

## Technical SEO（60 / 100）

### Critical
- **域名不存在**：`nslookup china-city.com` 返回 `Non-existent domain`。站点没有任何 DNS 记录，`https://china-city.com/` 与 `www` 均无法访问。搜索引擎无法抓取与索引。
  - **建议**：注册域名 → 在 Cloudflare 添加站点并托管 DNS → Cloudflare Pages 部署 `dist/`。

### High
- **尾斜杠不一致**：`astro.config.mjs` 设置 `trailingSlash: 'always'`，首页实际 URL 为 `https://china-city.com/`；但 `index.astro` 的 canonical 通过 `.replace(/\/$/, '')` 去掉了尾斜杠，`sitemap.xml` 的 loc 也写成无尾斜杠的 `https://china-city.com`。三者不一致。
  - **建议**：统一为带尾斜杠（去掉 `.replace(/\/$/, '')`，sitemap loc 改为 `https://china-city.com/`），或统一为无尾斜杠并调整 `trailingSlash`。

### 正常项
- ✅ `robots.txt`：`Allow: /` + 正确引用 sitemap
- ✅ `sitemap.xml`：精简为单页，XML 格式合法
- ✅ 404 页存在且 `noindex`
- ✅ 无残留死链（`/cities/`、`/routes/`、`/months/`、`/compare/` 引用为 0）
- ✅ 无重复 `<h1>`（全站仅 1 个）

---

## Content Quality（88 / 100）

- ✅ 首页信息密度极高：15 城市完整指南（景点/行程/住宿/美食/交通/避开理由）、3 条路线、12 个月份、3 组对比、30 条 FAQ、实用准备清单、决策规则、旅行者类型推荐
- ✅ E-E-A-T 信号：`trustSignals` 提供方法论说明、数据来源（12306、国家移民管理局、UNESCO）、作者署名与更新时间
- ✅ 内容结构清晰：Hero → 首推 → 快速决策 → 旅行者类型 → 测验 → 城市总览 → 对比 → 地图 → 路线 → 月份 → 实用准备 → FAQ → 差异说明 → 可信度
- ⚠️ **长尾着陆页减少（战略权衡）**：单页化前有 33 个可索引 URL（15 城市 + 12 月 + 3 路线 + 3 对比），现收敛为 1 个。长尾城市词（"beijing travel guide"、"best time to visit guilin"）失去独立着陆页。这是单页策略的固有代价，需在上线后通过 GSC 监控长尾曝光，必要时为高价值城市恢复少量独立页面。

---

## On-Page SEO（92 / 100）

- ✅ Title：`China City Guide 2026: Compare & Plan the Best Cities to Visit`（57 字符，含核心词）
- ✅ Meta description：语义完整，含转化导向（compare / budget / season / rail）
- ✅ H1 唯一：`Find the right Chinese city for your trip.`
- ✅ H2（14 个）/ H3（8 个）层级合理，每个 section 一个 H2
- ✅ Open Graph 完整（`og:title` / `og:image` / `og:image:width` / `og:image:height` / `og:image:alt`）+ `twitter:card`

---

## Schema / Structured Data（68 / 100）

已输出 5 组 JSON-LD：`WebSite`、`FAQPage`、`ItemList`、`Article`、`TouristDestination`。

### High
- **`Article.dateModified` 格式错误**：`dateModified` 取 `trustSignals.lastUpdated = "August 2026"`，非 ISO 8601 格式；而 `datePublished: "2026-08-17"` 是 ISO 格式，两者不一致，会触发 Schema 验证告警。
  - **建议**：将 `trustSignals.lastUpdated` 改为 `"2026-08-17"`（或单独为 schema 提供 ISO 日期）。

### Medium
- **fragment URL 用于实体标识**：`ItemList` 与 `TouristDestination` 的 `url` 均为 `https://china-city.com/#guide-{slug}`。搜索引擎将 fragment 视为同一页面，这些 URL 不指向独立实体，Schema 的语义价值有限（单页化的固有妥协）。可保留（保证 Schema 合法）或移除 `url` 字段仅保留 `name`/`description`。
- **缺少独立 `Organization` schema**：`Article` 的 `author`/`publisher` 引用了 Organization 名称，但没有独立的 `Organization` 实体（含 `logo`、`sameAs`），E-E-A-T 实体信号不足。
- **FAQPage 体量**：30 条 FAQ 集中在单一 `FAQPage`。Google 自 2023 年起 FAQ 富媒体结果仅对权威政府/健康类站点展示，一般站点不会获得 FAQ 富媒体展示，Schema 本身无副作用但收益有限。

---

## Performance / CWV（78 / 100，估算）

> 站点未上线，无法用真实 Chrome 或 CrUX 测量，以下为静态资源层面评估。

- ✅ 图片全部为 WebP，总量合理（最大 111 KB）
- ✅ 首屏 hero 图有 `preload` + `fetchpriority="high"`
- ✅ 图片均有 `width`/`height`，可防 CLS
- ✅ 字体使用 `@fontsource-variable`（默认 latin 子集，按 unicode-range 分割，仅 2 个文件）
- ⚠️ `og-china-city.webp`（111 KB）与 `hero-great-wall.webp`（109 KB）可进一步压缩至 80 KB 以内
- ⚠️ 单页体量大（构建后 HTML 约 182 KB），首屏 HTML 解析与渲染负担高于多页结构，需上线后实测 LCP/INP

---

## Images（90 / 100）

- ✅ 17 张图片全部 WebP 格式
- ✅ 所有图片均有描述性 `alt` 文本
- ✅ 所有图片有 `width`/`height`（防 CLS），除 hero 外均 `loading="lazy"` + `decoding="async"`
- ⚠️ 两张 100 KB 以上图片可进一步压缩

---

## AI Search Readiness（82 / 100）

- ✅ `llms.txt` 存在，已按单页锚点更新（`#guide-beijing` 等），结构清晰（sections / city guides / routes / months）
- ✅ `llms-full.txt` 提供完整内容索引，便于 LLM 抓取
- ✅ 页面内容为语义化 HTML（`<article>`、`<details>`、`<summary>`、`<section>`），利于 AI 段落级引用
- ⚠️ 单页体量大，AI 抓取器可能截断长页面，建议保留 `llms-full.txt` 作为补充抓取入口
- ⚠️ 缺少 `Organization`/作者级权威信号，影响 AI 引用时的来源可信度评估

---

## 结论

代码层 SEO 已达良好水平（79/100），单页化改造本身**没有引入新的 SEO 缺陷**（死链清零、Schema 保留、sitemap/llms 同步更新）。**唯一的关键阻断是域名未上线**。建议优先完成 Phase 1（域名 + 部署），随后修复两个 High 项（尾斜杠一致性、dateModified 格式），上线后通过 GSC 与 CrUX 数据重新评估长尾表现与 CWV。
