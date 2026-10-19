"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ChangelogItem = {
  date: string;
  title: string;
  description: string;
  href: string;
  items: string[];
};

type ChangelogExplorerProps = {
  updates: ChangelogItem[];
  planned: ChangelogItem[];
};

export default function ChangelogExplorer({ updates, planned }: ChangelogExplorerProps) {
  const [activeTab, setActiveTab] = useState<"updates" | "planned">("updates");
  const [query, setQuery] = useState("");
  const items = activeTab === "updates" ? updates : planned;
  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return items;
    return items.filter((item) => [item.title, item.description, item.date, ...item.items].join(" ").toLowerCase().includes(normalizedQuery));
  }, [items, query]);

  return (
    <section className="cg-changelog-explorer" aria-label="Changelog explorer">
      <div className="cg-changelog-controls">
        <div className="cg-changelog-tabs" role="tablist" aria-label="Changelog views">
          <button className={activeTab === "updates" ? "is-active" : ""} type="button" role="tab" aria-selected={activeTab === "updates"} onClick={() => setActiveTab("updates")}>What&apos;s New <span>{updates.length}</span></button>
          <button className={activeTab === "planned" ? "is-active" : ""} type="button" role="tab" aria-selected={activeTab === "planned"} onClick={() => setActiveTab("planned")}>What&apos;s Planned <span>{planned.length}</span></button>
        </div>
        <label className="cg-changelog-search"><span>Search this changelog</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search updates, areas, or features" /></label>
      </div>
      <p className="cg-changelog-result-count" aria-live="polite">Showing {filteredItems.length} {activeTab === "updates" ? "updates" : "planned features"}{query ? ` matching “${query}”` : ""}.</p>
      {filteredItems.length > 0 ? <div className="cg-changelog-list" key={activeTab}>{filteredItems.map((item) => <article className="cg-changelog-entry" key={`${activeTab}-${item.title}`}><p className="cg-latest-date">{item.date}</p><div><h2>{item.title}</h2><p>{item.description}</p><Link className="cg-changelog-link" href={item.href}>{activeTab === "updates" ? "Explore this update" : "Explore the plan"} →</Link><ul>{item.items.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div> : <div className="cg-changelog-empty"><h2>No matching entries</h2><p>Try a broader search or clear the search field to see everything in this tab.</p></div>}
    </section>
  );
}
