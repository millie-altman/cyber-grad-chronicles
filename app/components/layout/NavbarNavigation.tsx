"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { navigationGroups } from "./navigationData";

export default function NavbarNavigation({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  function closeGroups() {
    root.current?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((group) => { group.open = false; });
  }

  useEffect(() => {
    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        setOpen(false);
        closeGroups();
      }
    }
    function dismissWithEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !root.current?.contains(document.activeElement)) return;
      const group = root.current.querySelector<HTMLDetailsElement>("details[open]");
      if (group) {
        group.open = false;
        group.querySelector("summary")?.focus();
      } else {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissWithEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissWithEscape);
    };
  }, []);

  return (
    <div className="navbar-navigation" ref={root}>
      <button
        type="button"
        className="navbar-menu-toggle"
        aria-expanded={open}
        aria-controls="navbar-panel"
        ref={menuButton}
        onClick={() => {
          closeGroups();
          setOpen(!open);
        }}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>

      <div
        className="navbar-panel"
        id="navbar-panel"
        data-open={open}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            if (open) menuButton.current?.focus();
            closeGroups();
            setOpen(false);
          }
        }}
      >
        <div className="navbar-links">
          {navigationGroups.map((group) => (
            <details
              className="nav-menu"
              key={group.id}
              onToggle={(event) => {
                const current = event.currentTarget;
                if (current.open) {
                  root.current?.querySelectorAll<HTMLDetailsElement>("details[open]")
                    .forEach((other) => { if (other !== current) other.open = false; });
                }
              }}
            >
              <summary>
                {group.label}<span className="nav-chevron" aria-hidden="true" />
              </summary>
              <div className={`nav-dropdown${group.sections.length > 1 ? " nav-dropdown-wide" : ""}`}>
                {group.sections.map((section, index) => (
                  <div className="nav-link-group" key={section.label ?? index}>
                    {section.label && <p className="nav-group-label">{section.label}</p>}
                    <ul>
                      {section.links.map((link) => (
                        <li key={`${link.href}-${link.label}`}>
                          {link.external ? (
                            <a href={link.href} target="_blank" rel="noopener noreferrer"
                              aria-label={`${link.label} (opens in a new tab)`}>
                              {link.label}<span aria-hidden="true"> ↗</span>
                            </a>
                          ) : <Link href={link.href}>{link.label}</Link>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
        <div className="navbar-actions">
          <p className="nav-account-label">Your account &amp; contact</p>
          {children}
        </div>
      </div>
    </div>
  );
}
