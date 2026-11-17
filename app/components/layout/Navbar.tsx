import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NavbarNavigation from "./NavbarNavigation";
import "./navbar.css";

export default function LocalBanner() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <Link href="/" className="navbar-logo">
        CYBER GRAD <span>CHRONICLES</span>
      </Link>
      <NavbarNavigation>
        <Show when="signed-in">
          <Link href="/my-journey" className="nav-journey-link">
            My Journey
          </Link>
        </Show>
        <div className="navbar-auth" aria-label="Account actions">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button type="button" className="nav-auth-link">Sign in</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button type="button" className="nav-auth-button">Sign up</button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
        <Link href="/connect" className="nav-button">
          Connect
        </Link>
      </NavbarNavigation>
    </nav>
  );
}
