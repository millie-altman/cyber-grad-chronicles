import { Gift, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import LocalBanner from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../home.css";

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

          <section className="cg-module-card" aria-labelledby="module-heading">
            <div className="cg-module-heading">
              <div>
                <p className="cg-eyebrow">Progress tracking</p>
                <h2 id="module-heading">Your personal progress will appear here.</h2>
              </div>
            </div>
            <p className="cg-module-note">Connect an account to save lessons, milestones, and achievements to your journey.</p>
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
