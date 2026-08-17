# Schema Findings

- ✅ 5 组 JSON-LD 已输出：`WebSite`、`FAQPage`、`ItemList`、`Article`、`TouristDestination`（含 `TouristAttraction`）。
- **High**：`Article.dateModified` 取 `trustSignals.lastUpdated = "August 2026"`（非 ISO 8601），与 `datePublished: "2026-08-17"` 格式不一致，触发 Schema 验证告警。建议改为 `"2026-08-17"`。
- ⚠️ `ItemList` 与 `TouristDestination` 的 `url` 使用 fragment（`#guide-{slug}`），所有实体指向同一页面的锚点，实体语义价值有限（单页化的固有妥协）。
- ⚠️ 缺少独立的 `Organization` schema（含 `logo`、`sameAs`）；`Article` 的 `author`/`publisher` 仅引用名称。
- ⚠️ 30 条 FAQ 集中在单一 `FAQPage`，收益有限（2023 年起 FAQ 富媒体结果仅对权威政府/健康类站点展示）。
- ✅ `TouristDestination` 含 `geo` 坐标数据（`GeoCoordinates` 在已删除的城市详情页中；首页 `destinationsSchema` 未含 geo，可考虑补充）。
