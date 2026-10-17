# Prompt Log — Marinduque Legends Character Maker

**Course:** Web Systems and Technologies
**Activity:** Hands-On Laboratory Activity #4 — Prompt, Observe, Refine
**Tool used:** Copilot SDK in Visual Studio Code
**Workflow:** Specify → Contextualize → Generate → Verify → Refine

> **Documentation rule (from the lab manual):** Record what actually happened. Every "Actual Copilot Output" field below must contain what GitHub Copilot really produced (pasted response or a relative path to a saved file in `outputs/`). Do not replace it with an invented or expected response. If you edit a prompt before submitting it, update the "Exact Prompt" field so it matches what you actually sent.
>
> Experiment outputs, observations, and verification notes are recorded below.

---

## Task 1 — Sector Selection

**Objective:** Select one sector, identify its target users, the challenge they experience, and two or three features that could help address the problem.

| Item | Entry |
|---|---|
| **Sector** | Tourism & Cultural Innovation |
| **Local Challenge** | Young Marinduqueños and students have few engaging ways to learn about local folklore and cultural traditions such as the Moriones Festival. |
| **Target Users** | Students, young residents, and visitors who are curious about Marinduque culture |
| **Proposed Project** | Marinduque Legends Character Maker — a D&D-style character maker whose archetypes are inspired by local culture |
| **Key Features** | 1. Character builder form (name, archetype, home town) 2. Stat roller that generates fictional ability scores 3. Character card that displays the finished character |

**Short project concept:** Many young people learn about local traditions only through lectures or festival-season events. This single-page prototype lets users create a tabletop-style character whose archetype is inspired by Marinduque culture, so exploring local traditions feels like play. All content is fictional or clearly labeled demonstration content inspired by local culture, not authoritative history. There is no backend, database, authentication, or external API.

---

## Task 2 — Zero-Shot Prompting

**Objective:** Observe what Copilot generates from a basic prompt without examples. Preserve the output as the baseline for later comparison.

**Exact Prompt:**
> Create a simple webpage that lets users make a character inspired by Marinduque folklore.

**Actual Copilot Output:**
`outputs/task2-zero-shot/index.html`

**What Worked:**
The page accepts a character name and a legend choice, then displays the resulting character. I tested submitting “Amihan” with “Festival Guardian”; the result appeared as “Amihan — Festival Guardian.”

**What Needs Improvement:**
The basic prompt did not specify the target users, home town, stat roller, or an educational-demonstration disclaimer. It produced a small single-file example with inline CSS and JavaScript rather than the requested project structure. It uses no external libraries.

**Next Action / Verification:**
Use the structured prompt to require the target community, all three planned features, separate files, mobile readability, and clear fictional-content labeling. The baseline form submission was tested in the browser; mobile behavior was not separately tested for this experiment.

---

## Task 3 — Structured Prompt (Anatomy of a Prompt)

**Objective:** Improve output relevance using Role · Task · Context · Constraints · Expected Output · Acceptance Criteria, then compare against the Task 2 baseline.

**Exact Prompt:**
> **Role:** Act as a frontend web developer.
> **Task:** Create a responsive single-page Marinduque Legends Character Maker.
> **Context:** The users are students and young residents of Marinduque who want to explore local culture through a tabletop-style character. Include a character builder form (name, archetype, home town), a stat roller that generates fictional ability scores, and a character card that displays the result.
> **Constraints:** Use semantic HTML, CSS, and vanilla JavaScript in separate files (index.html, css/style.css, js/script.js). Do not use external frameworks, backend services, databases, or external APIs. Use clearly labeled demonstration content inspired by local culture; do not present it as authoritative history. The interface must remain readable on mobile screens, and the form and stat roller must work through mouse and keyboard interaction.
> **Expected Output:** The complete frontend files.
> **Acceptance Criteria:** The character card updates when the form is submitted; the stat roller produces six scores between 3 and 18; a visible note states that the content is for educational demonstration.

**Actual Copilot Output:**
`outputs/task3-structured/index.html`, `outputs/task3-structured/css/style.css`, `outputs/task3-structured/js/script.js`

**What Worked:**
The output separates HTML, CSS, and JavaScript, identifies the Marinduque student and young-resident audience, labels the content as demonstration material, and includes the builder, six-score roller, and character card. The form and card worked in a browser check, and all six generated scores were between 3 and 18.

**What Needs Improvement:**
The first implementation used three columns for scores even at a 320px viewport, making the longer ability labels cramped. Its reroll status only said “New scores rolled,” without announcing the changed values to assistive-technology users. These were carried into the accessibility review and Task 5 refinement.

**Differences compared with the zero-shot result (identify at least two):**
1. It includes the target audience, home town, archetype selection, six fictional ability scores, and a generated character card; the baseline only displayed a name and a legend choice.
2. It uses separate semantic HTML, CSS, and JavaScript files and includes visible educational-demonstration disclaimers; the baseline was a single file without that context.

**Next Action / Verification:**
Test keyboard submission and rerolling, then inspect the score layout on a narrow phone viewport. Browser verification at 320px found no horizontal page overflow; the initial score grid still needed the Task 5 two-column refinement.

---

## Task 4A — Few-Shot Prompting

**Objective:** Explore how examples influence the consistency of AI output.

**Exact Prompt:**
> Create character archetype data using this format:
>
> Example 1:
> Archetype: Moryon Sentinel
> Category: Festival Inspired
> Description: A masked guardian inspired by Moriones Festival traditions. Demonstration content only.
>
> Example 2:
> Archetype: River Wayfarer
> Category: Community Inspired
> Description: A traveler who knows local paths and stories. Demonstration content only.
>
> Generate four additional archetypes using the same format and render them as selectable options in the character builder.

**Actual Copilot Output:**
`outputs/task4a-few-shot/copilot-response.md` and `outputs/task4a-few-shot/js/script.js`

**What Worked:**
The four additional entries follow the Archetype / Category / Description format and each description ends with “Demonstration content only.” They are added to the two examples and rendered as selectable archetypes. I checked all six options in the browser; each displayed its corresponding description.

**What Needs Improvement:**
The generated archetypes are fictional demonstration content, not verified accounts of local folklore. The prompt format makes the output consistent but does not establish cultural or historical accuracy.

**Next Action / Verification:**
Keep the demonstration disclaimer visible and avoid presenting the archetypes as authoritative history. Verify the count and descriptions of all selectable options.

**Observation (one for this technique):**
Providing two examples established a repeatable three-field format and a consistent disclaimer for the four additional entries.

---

## Task 4B — Role Assignment

**Objective:** Explore how a specialized perspective influences AI output, using the same project.

**Exact Prompt:**
> Act as a frontend accessibility reviewer. Examine the generated Marinduque Legends Character Maker. Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

**Actual Copilot Output:**
`outputs/task4b-role-assignment/copilot-response.md`

**What Worked:**
The accessibility-review role focused the review on semantic form controls, labels, keyboard support, score announcements, and narrow-screen clarity. It identified specific improvements that stayed within the single-page prototype scope.

**What Needs Improvement:**
The review is code and browser based; it does not substitute for testing with a screen reader or measuring contrast with a dedicated accessibility checker.

**Next Action / Verification:**
Applied the two targeted recommendations in Task 5, then checked keyboard use and a 320px viewport in the browser.

**Observation (one for this technique):**
Assigning an accessibility-review role surfaced feedback about announcements and mobile readability that a feature-only prompt could miss.

---

## Task 5 — Structured Analysis and Refinement

**Objective:** Use AI-assisted analysis to identify and improve a specific implementation weakness. (This is a request for technical analysis, not for the model's hidden internal reasoning.)

**Exact Prompt:**
> Review my Marinduque Legends Character Maker. Check whether the stat roller and character card update correctly, whether the HTML uses appropriate semantic elements, and whether the interface is usable on mobile screens. Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them.

**Actual Copilot Output (analysis):**
`outputs/task5-analysis/copilot-analysis.md`

**Issues Copilot identified:**
1. The reroll live status did not announce the new ability values.
2. Three score columns cramped ability labels at narrow phone widths.

**Selected correction (apply or evaluate at least one):**
Updated the live status to include each ability and its new score, and changed the current-score grid to two columns at widths of 420px and below.

**Verification result:**
In the browser, submitted the form and rerolled using keyboard focus and Enter. The status listed all six ability/value pairs, the card matched the current roll, and all scores were within 3–18. At a 320px viewport the page width remained 320px and the score list used two columns.

**What Worked:**
The analysis connected concrete code changes to observable behavior. Browser verification confirmed the card, live status, score bounds, keyboard activation, and narrow layout.

**What Needs Improvement:**
I did not test with a screen reader or perform a full contrast audit, so assistive-technology behavior beyond the live-region content remains unverified.

**Next Action / Verification:**
For additional confidence, test the final page with a screen reader and a contrast checker before submission.

---

## Task 6 — Compare and Submit

**Objective:** Evaluate how your prompting techniques influenced the final prototype.

**Selected final version:** Task 5 refined prototype in the project root (`index.html`, `css/style.css`, `js/script.js`). It includes the required builder, six-score roller, and character card, and incorporates the tested accessibility and narrow-screen refinements.

### Final Comparison Table

| Technique | Observation |
|---|---|
| **Zero-Shot** — What did the AI assume or omit? | It made a simple name-and-legend form but omitted the target users, home town, stat roller, separate files, and educational disclaimer. |
| **Structured Prompt** — What improved after adding context and constraints? | It added the Marinduque audience and all three planned features, used separate semantic frontend files, and labeled the content as fictional demonstration material. |
| **Few-Shot** — What became more consistent? | The four added archetypes followed the same Archetype / Category / Description format and repeated the demonstration-only label from the examples. |
| **Role Assignment** — What specialized concerns were identified? | The accessibility review checked labels, native keyboard controls, live announcements, and score readability on narrow screens. |
| **Structured Analysis** — What correction or improvement was verified? | The reroll status now lists all six ability values; the current-score grid switches to two columns at 420px and below. Keyboard checks and a 320px viewport confirmed the announcement, matching card scores, and no horizontal page overflow. |

### Final Reflection

The structured prompt produced the most useful starting point because it spelled out the audience, required features, file structure, and constraints. The zero-shot version was a quick baseline, but it left out several project requirements. The examples in the few-shot prompt helped keep the archetype descriptions and demonstration label consistent, while the accessibility-review role drew attention to keyboard and screen-reader feedback. The structured analysis then helped focus refinement on two small issues rather than changing the project's scope. Testing the page showed why generated code needs to be checked: the card and scores worked, but the original reroll announcement did not say what the new scores were, and the score layout was cramped on a narrow screen. After the changes, keyboard testing confirmed the full announcement and matching card values, and the 320px check showed no horizontal overflow. I learned to verify generated output by trying the actual interactions and viewport sizes instead of assuming that code meeting a prompt is automatically usable.
