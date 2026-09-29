export default function ShinyHuntersContent() {
  return (
    <>
      <h2>Assessment boundary</h2>
      <p>This article summarizes the ShinyHunters profile updated September 25, 2026. It preserves that evidence cutoff and should not be read as a live incident update. At that point, the source described the investigation as developing, with the extent and origin of any access unresolved.</p>

      <h2>Claims and the reported response</h2>
      <p>According to the profile, actors using the ShinyHunters name claimed on September 22 to possess FBI employee and applicant information. The profile cites a September 23 FBI statement acknowledging an investigation concerning FBIJobs.gov, including work with third-party providers.</p>
      <p>The profile distinguishes that response from the actors&apos; assertions. A claimed 2?3 terabytes of data and a claimed Oracle PeopleSoft entry point were not established findings. Reports of apparently genuine personnel information in samples did not establish where the records originated.</p>

      <h2>Actor context is not incident proof</h2>
      <p>The profile describes ShinyHunters as a name associated with data theft and extortion, with changing partnerships and possible impersonation complicating attribution. Historical activity can guide questions, but cannot establish the method used in a new incident.</p>
      <p>It separately cites Google and Mandiant reporting on a May?June 2026 PeopleSoft campaign associated with UNC6240 and CVE-2026-35273. The source explicitly does not establish that this vulnerability or attack path was used against FBIJobs.gov.</p>

      <h2>Why the gaps matter</h2>
      <p>The profile does not assign a detailed ATT&amp;CK chain to the FBIJobs.gov incident because public evidence did not establish initial access, persistence, movement, or exfiltration methods. Its reference to T1190 concerns the separate PeopleSoft campaign only.</p>
      <p>Potential personnel-data exposure could enable tailored phishing or impersonation. Those are assessed downstream risks, not confirmed outcomes reported by this profile.</p>

      <h2>Defensive priorities and collection needs</h2>
      <p>For recruiting systems, the profile recommends mapping provider responsibilities and data flows, limiting access to applicant records, logging bulk access, and preserving evidence across organizational boundaries. These are general priorities, not findings that a particular FBI control failed.</p>
      <p>Future updates should look for confirmed initial access, affected environments, record categories and counts, formal notifications, and technical findings. Those details would support a firmer assessment of scope and a defensible mapping of techniques.</p>

      <h2>Source research</h2>
      <p>Adapted from <a href="https://github.com/millie-altman/threat-actor-profiles/blob/main/cybercriminal/shinyhunters.md" target="_blank" rel="noopener noreferrer">Threat Actor Profile: ShinyHunters</a>. Consult the original note for its references, evidence, and full analysis.</p>
      <p>The profile cites the <a href="https://www.fbi.gov/news/press-releases/fbi-statement-on-compromise-of-fbijobsgov-portal-and-alleged-impact-to-fbi-employee-pii" target="_blank" rel="noopener noreferrer">September 23 FBI statement</a> and distinguishes the separate <a href="https://cloud.google.com/blog/topics/threat-intelligence/shinyhunters-targets-education-sector-oracle-exploit" target="_blank" rel="noopener noreferrer">Google and Mandiant PeopleSoft campaign report</a>.</p>
    </>
  );
}
