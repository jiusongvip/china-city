# AI Search Readiness Findings

- ✅ `llms.txt` 存在，已按单页锚点更新（`#guide-beijing` 等），结构清晰（sections / city guides / routes / months / notes）。
- ✅ `llms-full.txt` 提供完整内容索引，便于 LLM 抓取全文。
- ✅ 语义化 HTML：`<article>`、`<details>`/`<summary>`、`<section>`、`<nav>`，利于段落级引用。
- ✅ 每个城市指南有独立锚点（`id="guide-{slug}"`），可被 AI 精确引用到具体段落。
- ⚠️ 单页体量大（约 182 KB），部分 AI 抓取器可能截断长页面；`llms-full.txt` 可作为补充抓取入口。
- ⚠️ 缺少独立 `Organization` schema 与作者级权威信号，影响 AI 引用时的来源可信度评估。
- ⚠️ 站点未上线，AI 爬虫（GPTBot / ClaudeBot / PerplexityBot 等）目前无法抓取；上线后建议在 `robots.txt` 确认不阻断这些 bot。
