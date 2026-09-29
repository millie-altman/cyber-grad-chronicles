export default function PromptInjectionContent() {
  return (
    <>
      <h2>Research scope</h2>
      <p>This article adapts the Prompt Injection note in the Agentic AI Security Lab. The note is marked RESEARCHING and proposes a defensive experiment; it does not document a completed implementation or measured lab results.</p>

      <h2>The trust boundary</h2>
      <p>Prompt injection occurs when a language model treats untrusted input as an instruction that changes its intended behavior. Direct injection enters through an interaction with the model; indirect injection arrives in material the system reads while carrying out a legitimate request.</p>
      <p>For a tool-enabled agent, the consequences can extend beyond an incorrect answer. A changed objective may lead to inappropriate file access, an unauthorized message, or a modification to a connected system. The available permissions determine how much damage that decision can cause.</p>

      <h2>Why a better prompt is not enough</h2>
      <p>The research centers on the boundary between proposing an action and authorizing it. A model can generate plausible tool arguments without having permission to use that tool on a particular resource. Independent policy checks must make that decision.</p>

      <h2>Defensive design priorities</h2>
      <p>Give each workflow only the permissions and tools it needs. Keep retrieved content separate from trusted instructions, validate proposed arguments and destinations, and require review before sensitive actions. Log requested actions alongside authorization decisions and actual outcomes so a later investigation can reconstruct the sequence.</p>

      <h2>A proposed comparison lab</h2>
      <p>The note proposes a small agent with webpage retrieval, an internal test note, and a messaging tool. In an isolated environment, synthetic hostile content would attempt to redirect the agent away from its assigned task.</p>
      <p>Compare a baseline configuration with least privilege, independent tool authorization, and approval requirements. Use harmless test data, record attempted and completed actions separately, and repeat the same scenario after each control change. These are proposed evaluation steps, not reported successes.</p>

      <h2>Practical takeaway</h2>
      <p>Design controls for the possibility that the model misunderstands a source. A robust authorization boundary should still prevent an out-of-scope action after that misunderstanding.</p>

      <h2>Source research</h2>
      <p>Adapted from <a href="https://github.com/millie-altman/agentic-ai-security/blob/main/research/01-prompt-injection.md" target="_blank" rel="noopener noreferrer">Prompt Injection</a>. Consult the original note for its references, evidence, and full analysis.</p>
    </>
  );
}
