export default function ScatteredSpiderContent() {
  return (
    <>
      <p>
        Scattered Spider is a cybercriminal actor known for identity-focused
        attacks, social engineering, help desk impersonation, SIM swapping, and
        MFA fatigue techniques.
      </p>

      <p>
        Studying Scattered Spider is a reminder that attackers do not always need
        advanced malware to create serious impact. Sometimes the intrusion path
        begins with convincing the right person to trust the wrong request.
      </p>

<section className="analyst-snapshot">
  <h2>Analyst Snapshot // Intelligence Brief</h2>

  <div className="snapshot-grid">
    <div>
      <span>Threat Type</span>
      <p>Financially Motivated Threat Group</p>
    </div>

    <div>
      <span>Primary Motivation</span>
      <p>Financial extortion, ransomware deployment, and data theft</p>
    </div>

    <div>
      <span>Primary Tactics</span>
      <p>
        Social engineering, SIM swapping, MFA fatigue attacks, help desk
        impersonation, credential theft, and lateral movement
      </p>
    </div>

    <div>
      <span>Primary Targets</span>
      <p>
        Telecommunications providers, casinos, cloud service providers,
        retail organizations, and large enterprises
      </p>
    </div>

    <div>
      <span>Analyst Level</span>
      <p>Intermediate–Advanced</p>
    </div>
  </div>
</section>

      <h2>Background</h2>

      <p>
        Scattered Spider has been associated with financially motivated
        intrusions that rely heavily on social engineering and identity abuse.
        Their activity often focuses on gaining access by manipulating people,
        processes, and authentication workflows.
      </p>

      <h2>Common tactics</h2>

      <ul>
        <li>Help desk impersonation</li>
        <li>MFA fatigue attacks</li>
        <li>SIM swapping</li>
        <li>Credential theft</li>
        <li>Social engineering through phone calls and messaging platforms</li>
      </ul>

      <h2>Why identity is central</h2>

      <p>
        Scattered Spider shows why identity security is one of the most
        important parts of modern defense. If attackers can convince a help desk
        to reset credentials, approve access, or bypass normal procedures,
        technical controls can be weakened by process failures.
      </p>

      <p>
        This makes training, verification procedures, conditional access,
        monitoring, and strong escalation processes critical.
      </p>

      <h2>Defensive lessons</h2>

      <ul>
        <li>Train help desk teams to verify identity before resetting access.</li>
        <li>Monitor repeated MFA prompts and suspicious authentication patterns.</li>
        <li>Use phishing-resistant MFA where possible.</li>
        <li>Limit access based on role and least privilege.</li>
        <li>Document escalation paths for suspicious access requests.</li>
      </ul>

      <h2>Why this matters for CTI</h2>

      <p>
        Scattered Spider is important for CTI because it highlights the overlap
        between technical intrusion, identity abuse, and human manipulation.
      </p>

      <p>
        This actor shows that cyber defense cannot focus only on tools. It also
        has to account for people, policies, help desk workflows, and attacker
        behavior.
      </p>
    </>
  );
}