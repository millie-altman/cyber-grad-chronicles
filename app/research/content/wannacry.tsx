export default function WannaCryContent() {
  return (
    <>
      <p>
        WannaCry remains one of the most significant ransomware outbreaks in
        cybersecurity history because it demonstrated how quickly a single
        vulnerability could disrupt organizations around the world.
      </p>

      <p>
        More importantly, it showed that many major cyber incidents are not
        caused by sophisticated malware alone. They often result from
        unpatched systems, outdated infrastructure, and delayed security
        maintenance.
      </p>

    <section className="analyst-snapshot">
  <h2>Analyst Snapshot // Intelligence Brief</h2>

  <div className="snapshot-grid">
    <div>
      <span>Threat Type</span>
      <p>Self-Propagating Ransomware Worm</p>
    </div>

    <div>
      <span>Primary Motivation</span>
      <p>Financial extortion through widespread ransomware infections</p>
    </div>

    <div>
      <span>Primary Tactics</span>
      <p>
        Exploitation of the EternalBlue (SMBv1) vulnerability, automated worm
        propagation, rapid encryption, and ransomware deployment
      </p>
    </div>

    <div>
      <span>Primary Targets</span>
      <p>
        Unpatched Windows systems, healthcare organizations, government
        agencies, telecommunications providers, and businesses worldwide
      </p>
    </div>

    <div>
      <span>Analyst Level</span>
      <p>Beginner–Intermediate</p>
    </div>
  </div>
</section>

      <h2>Background</h2>

      <p>
        First observed in 2017, WannaCry spread rapidly by exploiting a known
        vulnerability in Microsoft's SMB protocol. Unlike many ransomware
        families that rely primarily on phishing or stolen credentials,
        WannaCry possessed worm-like capabilities that allowed it to move
        automatically between vulnerable systems.
      </p>

      <p>
        Within a short period, hospitals, businesses, government agencies, and
        critical infrastructure organizations across more than 150 countries
        experienced disruptions.
      </p>

      <h2>Why WannaCry spread so quickly</h2>

      <p>
        The malware exploited systems that had not yet received available
        security updates. Once inside a vulnerable network, it could continue
        scanning for additional systems without requiring user interaction.
      </p>

      <p>
        This ability to self-propagate dramatically increased the scale and
        speed of the incident, making WannaCry one of the most visible examples
        of a worm-enabled ransomware campaign.
      </p>

      <h2>The defensive lesson</h2>

      <p>
        One of the biggest takeaways from studying WannaCry is that patch
        management is not simply an IT responsibility—it is a fundamental
        cybersecurity control.
      </p>

      <p>
        The vulnerability exploited by WannaCry already had an available
        security update. Many organizations were compromised because systems
        remained unpatched or unsupported.
      </p>

      <p>
        This incident also reinforced the importance of maintaining accurate
        asset inventories so organizations know which systems require updates
        and where legacy technology may still exist.
      </p>

      <h2>Key defensive priorities</h2>

      <ul>
        <li>Apply security patches as quickly as operationally possible.</li>
        <li>Maintain accurate inventories of systems and software.</li>
        <li>Retire or isolate unsupported legacy operating systems.</li>
        <li>Segment networks to reduce worm-like propagation.</li>
        <li>Maintain tested, offline backups to support recovery.</li>
      </ul>

      <h2>Why this matters for CTI</h2>

      <p>
        WannaCry demonstrates that cyber threat intelligence is not only about
        tracking threat actors. It is also about understanding how
        vulnerabilities, defensive gaps, and attacker capabilities intersect to
        create widespread organizational risk.
      </p>

      <p>
        For defenders, studying WannaCry reinforces a simple but powerful
        principle: preventing large-scale incidents often depends more on
        consistent security fundamentals than on deploying increasingly complex
        technologies.
      </p>
    </>
  );
}