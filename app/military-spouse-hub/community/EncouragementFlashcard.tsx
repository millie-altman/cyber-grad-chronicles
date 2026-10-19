"use client";

import { useState } from "react";

const cards = [
  { quote: "You are allowed to build a life and career that fit the reality of your season.", source: "A reminder for the road ahead" },
  { quote: "I was told building this career from Alaska would be difficult, so I started documenting the proof anyway: projects, research notes, labs, certifications, and this site.", source: "From Millie’s journey" },
  { quote: "A move can change the map without erasing the progress you already made.", source: "A reminder for the next transition" },
  { quote: "I built GitHub repositories, threat briefs, malware write-ups, Python tools, CTI labs, and Cyber Grad Chronicles to turn learning into visible evidence instead of waiting for someone else to validate the work.", source: "From Millie’s journey" },
  { quote: "You do not have to have the whole plan today. You only need a next step that is honest and possible.", source: "A reminder for today" },
];

export default function EncouragementFlashcard() {
  const [index, setIndex] = useState(0);
  const card = cards[index];

  function moveCard(direction: number) {
    setIndex((current) => (current + direction + cards.length) % cards.length);
  }

  return (
    <div className="encouragement-flashcard" aria-live="polite">
      <div className="encouragement-flashcard-top"><span>Encouragement card</span><span>{String(index + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</span></div>
      <blockquote>“{card.quote}”</blockquote>
      <p className="encouragement-flashcard-source">{card.source}</p>
      <div className="encouragement-flashcard-actions">
        <button type="button" onClick={() => moveCard(-1)} aria-label="Previous encouragement">←</button>
        <button type="button" onClick={() => moveCard(1)}>Next reminder <span aria-hidden="true">→</span></button>
      </div>
    </div>
  );
}
