"use client";

import Link from "next/link";
import { useId, useRef, useState, type ReactNode } from "react";
import styles from "./library-search.module.css";

export type SearchItem = {
  href: string;
  title: string;
  description: string;
  category: string;
  keywords: string;
  meta?: string;
};

export function searchItems(items: SearchItem[], query: string, category = "") {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return items
    .filter((item) => {
      if (category && item.category !== category) return false;
      const text = [item.title, item.description, item.category, item.keywords]
        .join(" ").toLowerCase();
      return terms.every((term) => text.includes(term));
    })
    .map((item, index) => ({
      item,
      index,
      score: terms.filter((term) => item.title.toLowerCase().includes(term)).length,
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ item }) => item);
}

export default function LibrarySearch({
  items, label, noun, hint, children, anchor,
}: {
  items: SearchItem[];
  label: string;
  noun: "lessons" | "articles";
  hint: string;
  children?: ReactNode;
  anchor: string;
}) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("relevance");
  const active = query.trim().length > 0 || category !== "";
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const matches = searchItems(items, query, category);
  const results = sort === "title"
    ? [...matches].sort((a, b) => a.title.localeCompare(b.title))
    : matches;
  const singular = noun === "lessons" ? "lesson" : "article";

  function reset() {
    setQuery("");
    setCategory("");
    setSort("relevance");
    input.current?.focus();
  }

  return (
    <>
      <section id={anchor} className={styles.search} aria-labelledby={id + "-heading"}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>{noun === "lessons" ? "Find your next lesson" : "Explore the library"}</p>
            <h2 id={id + "-heading"} className={styles.title}>{label}</h2>
            <p id={id + "-hint"} className={styles.hint}>{hint}</p>
          </div>
          <span className={styles.total}>{items.length} {noun}</span>
        </div>
        <form role="search" aria-label={label} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.controls}>
            <div className={styles.query}>
              <label htmlFor={id}>Search by keyword</label>
              <input
                ref={input}
                id={id}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => { if (event.key === "Escape") reset(); }}
                aria-describedby={id + "-hint"}
                aria-controls={id + "-results"}
                placeholder={noun === "lessons" ? "Phishing, cloud, passwords..." : "Ransomware, agentic AI, career..."}
              />
            </div>
            <div>
              <label htmlFor={id + "-category"}>{noun === "lessons" ? "Module" : "Category"}</label>
              <select id={id + "-category"} value={category} onChange={(event) => setCategory(event.target.value)} aria-controls={id + "-results"}>
                <option value="">All {noun === "lessons" ? "modules" : "categories"}</option>
                {categories.map((name) => (
                  <option key={name} value={name}>{name} ({items.filter((item) => item.category === name).length})</option>
                ))}
              </select>
            </div>
            <button type="button" onClick={reset} disabled={!query && !category}>Reset filters</button>
          </div>
        </form>
        <div className={styles.summary}>
          <p role="status" aria-atomic="true">
            {active
              ? `${results.length} ${results.length === 1 ? singular : noun} found${category ? " in " + category : ""}.`
              : "Choose a topic, search, or browse the collection below."}
          </p>
          {active && results.length > 1 && (
            <label className={styles.sort}>
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="relevance">Best match</option>
                <option value="title">Title A-Z</option>
              </select>
            </label>
          )}
        </div>
        <div id={id + "-results"}>
          {active && results.length === 0 && (
            <div className={styles.empty}>
              <h3>No {noun} found</h3>
              <p>Try fewer words or choose a different {noun === "lessons" ? "module" : "category"}.</p>
              <button type="button" onClick={reset}>Show the full collection</button>
            </div>
          )}
          {active && results.length > 0 && (
            <ul className={styles.results}>
              {results.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.result}>
                    <span className={styles.category}>{item.category}</span>
                    <h3>{item.title}</h3>
                    {item.meta && <span className={styles.meta}>{item.meta}</span>}
                    <p>{item.description}</p>
                    <span className={styles.open}>Read {singular} <span aria-hidden="true">&rarr;</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {!active && children}
    </>
  );
}
