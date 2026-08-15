import Link from "next/link";
import "./navbar.css";

export default function LocalBanner() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        CYBER GRAD <span>CHRONICLES</span>
      </Link>

      <div className="navbar-links">
        <Link href="/academy">Academy</Link>
        <Link href="/research">Research</Link>
        <Link href="/career">Career</Link>
        <Link href="/journey">Journey</Link>
        <Link href="/credentials">Credentials</Link>
        <Link href="/military-spouse-hub">Military Spouse Hub</Link>
        <Link href="/about">About</Link>
      </div>

      <Link href="/connect" className="nav-button">
        Connect
      </Link>
    </nav>
  );
}