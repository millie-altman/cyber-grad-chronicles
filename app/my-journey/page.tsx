import { Award, BookOpen, Gift, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";
import LocalBanner from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../home.css";

const stats = [
  { value: "08", label: "Modules", icon: BookOpen },
  { value: "250", label: "XP Earned", icon: Zap },
  { value: "03", label: "Milestones", icon: Award },
];

export default function MyJourneyPage() {
  return (
    <>
      <LocalBanner />
      <main className="home-page cg-dashboard-page">
        <section className="cg-command-center" aria-labelledby="command-center-heading">
          <div className="cg-command-heading">
            <div>
              <p className="cg-command-brand">Cyber Grad Chronicles</p>
              <h1 id="command-center-heading">Your Command Center</h1>
            </div>
            <Sparkles className="cg-command-sparkle" aria-hidden="true" />
          </div>

          <div className="cg-stat-grid">
            {stats.map(({ value, label, icon: Icon }) => (
              <div className="cg-stat-card" key={label}>
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <section className="cg-module-card" aria-labelledby="module-heading">
            <div className="cg-module-heading">
              <div>
                <p className="cg-eyebrow">Current learning path</p>
                <h2 id="module-heading">Cybersecurity 101</h2>
              </div>
              <span className="cg-module-percent">75%</span>
            </div>
            <div className="cg-module-progress" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <span />
            </div>
            <p className="cg-module-note">You&apos;re closer than you were yesterday.</p>
          </section>

          <div className="cg-command-actions">
            <Link href="/career" className="cg-command-card">
              <Target size={23} strokeWidth={1.7} aria-hidden="true" />
              <h2>Career Path</h2>
              <p>Explore your next milestone</p>
              <span>Continue →</span>
            </Link>
            <Link href="/my-journey/rewards" className="cg-command-card">
              <Gift size={23} strokeWidth={1.7} aria-hidden="true" />
              <h2>Rewards</h2>
              <p>Discover what you&apos;ve unlocked</p>
              <span>View achievements →</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
