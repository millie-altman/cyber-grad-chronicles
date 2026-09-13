import "./mentorship-interest.css";

const interests = [
  "Cybersecurity fundamentals",
  "Threat intelligence and research",
  "Hands-on labs and projects",
  "Digital safety and cyber awareness",
  "Breaking into IT or cybersecurity",
  "Building a portfolio or GitHub",
];

const goals = [
  "Honest career advice",
  "Answers to specific questions",
  "Resume feedback",
  "Portfolio or GitHub feedback",
  "Study and certification direction",
  "Military spouse career transparency",
  "Accountability and encouragement",
  "Help identifying practical next steps",
];

export default function MentorshipInterest() {
  return (
    <section
      className="mentorship-section career-section"
      id="mentorship-interest"
    >
      <div className="career-container">
        <div className="mentorship-heading">
          <div>
            <p className="career-section-eyebrow">Mentorship Interest</p>
            <h2>Tell me where you are—and where you hope to go.</h2>
          </div>
          <div className="mentorship-intro">
            <p>
              My path into technology was built through school, certifications,
              labs, public projects, persistence, and creating proof before
              opportunity arrived. It was also shaped by military spouse life,
              relocation, rural Alaska, and the need for a career that could
              keep moving with me.
            </p>
            <p>
              This questionnaire helps me understand which parts of that
              experience may be useful to you and what thoughtful, realistic
              support would look like.
            </p>
          </div>
        </div>

        <div className="mentorship-fit-grid" aria-label="Mentorship values">
          <article>
            <span>01</span>
            <h3>Honest guidance</h3>
            <p>
              Transparent conversation about setbacks, tradeoffs, expectations,
              and progress—not promises of a shortcut.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Practical direction</h3>
            <p>
              Clear next steps connecting learning, projects, applications, and
              career goals.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Accessible support</h3>
            <p>
              A welcoming space for beginners, career changers, military
              spouses, and people building outside traditional tech hubs.
            </p>
          </article>
        </div>

        <form
          className="mentorship-form"
          action="https://formspree.io/f/mpqgdjge"
          method="POST"
        >
          <input type="hidden" name="form_type" value="Mentorship interest" />
          <div className="mentorship-form-header">
            <p className="career-section-eyebrow">Quick Questionnaire</p>
            <h2>Help me understand what would serve you best.</h2>
            <p>
              Share only what you are comfortable sharing. Please do not include
              passwords, private employer information, or other sensitive data.
            </p>
          </div>

          <div className="mentorship-fields-two">
            <label>
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
                required
              />
            </label>
            <label>
              Where are you in your journey?
              <select name="career_stage" defaultValue="" required>
                <option value="" disabled>
                  Select the closest fit
                </option>
                <option>Exploring cybersecurity</option>
                <option>Student or recent graduate</option>
                <option>Career changer</option>
                <option>Military spouse or veteran</option>
                <option>Early-career IT professional</option>
                <option>Early-career cybersecurity professional</option>
                <option>Returning after a career break</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Preferred way to connect
              <select name="preferred_format" defaultValue="" required>
                <option value="" disabled>
                  Select a format
                </option>
                <option>Email guidance</option>
                <option>Video conversation</option>
                <option>Either works for me</option>
              </select>
            </label>
          </div>

          <fieldset>
            <legend>What are you most interested in?</legend>
            <p className="mentorship-field-help">Choose all that apply.</p>
            <div className="mentorship-choice-grid">
              {interests.map((item) => (
                <label className="mentorship-choice" key={item}>
                  <input type="checkbox" name="interests[]" value={item} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>What would you like to get out of mentorship?</legend>
            <p className="mentorship-field-help">Choose all that apply.</p>
            <div className="mentorship-choice-grid">
              {goals.map((item) => (
                <label className="mentorship-choice" key={item}>
                  <input type="checkbox" name="support_goals[]" value={item} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            What part of the Cyber Grad Chronicles story connects with you?
            <select name="story_connection" defaultValue="">
              <option value="" disabled>
                Select one, if applicable
              </option>
              <option>Building proof before getting an opportunity</option>
              <option>Starting cybersecurity as a beginner</option>
              <option>Military spouse career challenges</option>
              <option>Relocation or building from a rural area</option>
              <option>Moving from education into professional IT</option>
              <option>Resilience after rejection or setbacks</option>
              <option>Learning in public and sharing the process</option>
            </select>
          </label>
          <label>
            What is your main goal for the next three to six months?
            <textarea
              name="short_term_goal"
              rows={4}
              placeholder="Tell me what you are working toward and what progress would look like for you."
              required
            />
          </label>
          <label>
            What is the first question you would want answered?
            <textarea
              name="first_question"
              rows={4}
              placeholder="Start with what feels most unclear right now."
              required
            />
          </label>
          <label>
            Is there anything else that would help me understand your situation?
            <textarea
              name="additional_context"
              rows={4}
              placeholder="Optional: background, obstacles, accessibility needs, time-zone considerations, or context you want me to know."
            />
          </label>
          <label className="mentorship-agreement">
            <input
              type="checkbox"
              name="expectations_acknowledged"
              value="Yes"
              required
            />
            <span>
              I understand this is an expression of interest, not a guarantee of
              ongoing mentorship, employment, an interview, or a specific career
              outcome.
            </span>
          </label>
          <button
            className="career-button career-button-primary mentorship-submit"
            type="submit"
          >
            Submit Mentorship Interest
          </button>
        </form>
      </div>
    </section>
  );
}
