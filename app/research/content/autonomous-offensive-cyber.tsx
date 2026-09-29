export default function AutonomousOffensiveCyberContent() {
  return (
    <>
      <h2>Source and scope</h2>
      <p>This article adapts the September 25, 2026 repository analysis of Booz Allen&apos;s The Offensive Frontier: AI as the Attacker. Findings below are attributed to that analysis and its cited report; they are not results from an independent reproduction in this portfolio.</p>

      <h2>Two capabilities behind one index</h2>
      <p>The source describes a Cyber Weapon Index combining a Vulnerability Research Score with a Kill Chain Attainment Score. The former concerns finding and using software flaws; the latter measures progress toward an intrusion objective in a defended Active Directory test environment.</p>
      <p>A combined score can conceal different strengths. A system that performs strongly on vulnerability research may not lead on sustained intrusion execution. The task-specific measures are therefore important when interpreting the overall ranking.</p>

      <h2>Actions need independent evidence</h2>
      <p>In the evaluation described by the source, models operated through an attacker machine, and researchers checked progress against environmental records. This separates actions verified in the test network from actions merely described by a model.</p>
      <p>The source analysis reports that the original study identified one model completing the full intrusion objective, while a later addendum placed a second model in the leading tier. It explicitly treats the original ranking figure as historical rather than current.</p>

      <h2>What the test does not establish</h2>
      <p>Success under a defined configuration does not show that the same system can compromise every production network. Tools, credentials, memory, execution limits, and the environment all influence the outcome.</p>
      <p>The analysis also distinguishes AI operated by an attacker from prompt injection against a defender&apos;s agent. One concerns an offensive system pursuing a goal; the other concerns hostile content redirecting an agent that was assigned a legitimate task.</p>

      <h2>Defensive implications</h2>
      <p>The repository draws several defensive inferences: evaluate complete systems, verify outcomes with logs, limit privileges, make unusual access visible, and revisit assessments when models or tools change. These are implications of the analysis, not controls proven by the report to stop every autonomous attack.</p>
      <p>Useful follow-up questions include how results transfer between environments, how permissions affect performance, and where repeated attempts fail. Preserving those limits makes capability assessments more actionable than treating a leaderboard as a prediction.</p>

      <h2>Source research</h2>
      <p>Adapted from <a href="https://github.com/millie-altman/agentic-ai-security/blob/main/research/03-autonomous-offensive-cyber.md" target="_blank" rel="noopener noreferrer">Autonomous Offensive Cyber: Analysis of Booz Allen&apos;s The Offensive Frontier</a>. Consult the original note for its references, evidence, and full analysis.</p>
      <p>The source analysis cites <a href="https://www.boozallen.com/content/dam/home/docs/cyber/the-offensive-frontier-ai-as-the-attacker.pdf" target="_blank" rel="noopener noreferrer">Booz Allen: The Offensive Frontier</a>, including its later addendum.</p>
    </>
  );
}
