export default function IndirectPromptInjectionContent() {
  return (
    <>
      <h2>Research scope</h2>
      <p>This article adapts the Indirect Prompt Injection research note. Its defense lab and evaluation metrics are proposals for controlled testing, rather than results from a completed project.</p>

      <h2>The attacker controls the information environment</h2>
      <p>An agent may encounter malicious instructions in a webpage, support ticket, email, repository comment, retrieved document, or tool response. The person requesting help can be acting legitimately while an unrelated source attempts to redirect the workflow.</p>
      <p>The central failure is promoting lower-trust content into authority. Successfully retrieving a document establishes that the tool worked; it does not make instructions inside that document authorized.</p>

      <h2>Memory and handoffs extend the risk</h2>
      <p>The note also considers persistence and propagation. Poisoned context may enter a retrieval collection or persistent memory and affect a later task. A summary passed to another agent can carry the same manipulation even when that agent never reads the original material.</p>
      <p>Preserving provenance matters at each boundary. A handoff should not silently turn an external claim into a trusted instruction.</p>

      <h2>Controls at the action boundary</h2>
      <p>Constrain tool availability to the task, check resource and destination permissions independently, and prevent sensitive information from automatically flowing into external messages. Trust labels help explain provenance, but enforcement must occur in the application around the model.</p>
      <p>Logging should connect the original objective, retrieved resources, requested tool operations, approvals, and final actions. Behavioral changes are more informative than looking only for a particular suspicious phrase.</p>

      <h2>What the proposed lab would measure</h2>
      <p>The source proposes using synthetic documents and a harmless test secret to compare an unrestricted agent with a protected configuration. Measurements include attack success, unauthorized tool requests, authorization blocks, disclosure of synthetic data, and detection.</p>
      <p>These measurements answer different questions. An agent requesting a forbidden operation is a model-level failure even if a policy check successfully blocks execution. Recording both outcomes makes the value and limitations of the control visible.</p>

      <h2>Practical takeaway</h2>
      <p>Treat external content as evidence to evaluate. It cannot expand the task or grant new permissions simply because an agent encountered it during useful work.</p>

      <h2>Source research</h2>
      <p>Adapted from <a href="https://github.com/millie-altman/agentic-ai-security/blob/main/research/02-indirect-prompt-injection.md" target="_blank" rel="noopener noreferrer">Indirect Prompt Injection</a>. Consult the original note for its references, evidence, and full analysis.</p>
    </>
  );
}
