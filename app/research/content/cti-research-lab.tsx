export default function CTIResearchLabContent() {
  return (
    <>
      <p>
        The Cyber Threat Intelligence (CTI) Research Lab was created to bridge
        the gap between technical investigation and intelligence analysis.
        Rather than simply reading about cyber threats, I wanted an environment
        where I could safely observe attacker behavior, analyze telemetry, map
        activity to known frameworks, and practice communicating meaningful
        findings.
      </p>

      <p>
        The purpose of this lab is not to simulate a perfect enterprise
        environment. It is to build the habits of a threat intelligence analyst:
        asking questions, gathering evidence, identifying patterns, and
        transforming technical observations into actionable intelligence.
      </p>

      <h2>Why It Matters</h2>

      <p>
        Modern cybersecurity generates an enormous amount of data. Security
        alerts, endpoint logs, network traffic, authentication events, and
        threat intelligence feeds all provide valuable information, but raw data
        alone does not create understanding.
      </p>

      <p>
        Cyber threat intelligence focuses on answering the questions behind the
        data: Who is behaving this way? Why are they doing it? How does this
        activity compare to known adversaries? What risk does it create, and how
        should defenders respond? Learning to answer those questions is what
        transforms technical knowledge into operational value.
      </p>

      <h2>Key Concepts & Lessons</h2>

      <h3>Collecting evidence is only the beginning.</h3>

      <p>
        A single log entry rarely tells the full story. Meaningful analysis comes
        from correlating multiple sources of information to understand what
        happened before, during, and after an event.
      </p>

      <h3>Frameworks provide structure.</h3>

      <p>
        Throughout this lab, I use industry-recognized frameworks such as MITRE
        ATT&amp;CK and the Diamond Model to organize observations, identify
        adversary behaviors, and communicate findings using a common language
        shared across the cybersecurity community.
      </p>

      <h3>Documentation is part of the investigation.</h3>

      <p>
        Technical findings only become useful when they can be clearly explained.
        Writing reports, documenting assumptions, recording evidence, and
        developing defensive recommendations are all essential parts of the
        intelligence process.
      </p>

      <h3>Threat intelligence connects technical activity to business risk.</h3>

      <p>
        The ultimate goal is not simply to identify suspicious behavior, but to
        explain why that behavior matters, who could be affected, and what
        actions defenders should prioritize.
      </p>

      <h2>Lab Environment</h2>

      <p>
        The lab combines several open-source and enterprise-inspired tools that
        help simulate common SOC and CTI workflows while providing opportunities
        to investigate realistic attack scenarios.
      </p>

      <ul>
        <li>Wazuh for centralized security monitoring and alerting</li>
        <li>Sysmon for detailed Windows endpoint telemetry</li>
        <li>Kali Linux for controlled adversary simulations</li>
        <li>Atomic Red Team for safe ATT&amp;CK technique emulation</li>
        <li>MITRE ATT&amp;CK for adversary behavior mapping</li>
        <li>The Diamond Model for intrusion analysis and intelligence reporting</li>
      </ul>

      <h2>Millie's Perspective</h2>

      <p>
        Building this lab helped me realize that I enjoy asking "why" just as
        much as "how." While learning technical tools is important, what excites
        me most is connecting small observations into a larger story about
        attacker behavior.
      </p>

      <p>
        One of the biggest lessons I have learned is that intelligence is not
        about knowing everything. It is about gathering reliable evidence,
        recognizing patterns, acknowledging uncertainty, and communicating your
        assessment in a way that helps someone make a better decision.
      </p>

      <p>
        As I continue expanding this lab, I plan to incorporate additional
        adversary emulation, malware analysis, network forensics, and threat
        hunting exercises so it continues to reflect the skills I am developing
        as an aspiring cyber threat intelligence analyst.
      </p>
    </>
  );
}