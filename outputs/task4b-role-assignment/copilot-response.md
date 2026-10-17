# Task 4B — Accessibility Review

## Findings

1. **The core form has sound semantics and keyboard access.** It uses a real form, associated labels, native required inputs and selects, and submit/button controls. A skip link, visible `:focus-visible` outline, and status regions support keyboard and assistive-technology use.
2. **The score reroll announcement is too vague for screen-reader users.** The live region said only “New scores rolled,” without communicating the six values that changed. A screen-reader user would need to navigate back through the list to discover the new numbers.
3. **The score row is cramped on very narrow screens.** At phone widths the six current scores were arranged in three columns, leaving less room for longer ability names such as “Constitution.”

## Targeted recommendations

- Keep the existing semantic form and native controls; no scope expansion is needed.
- Include the updated ability names and values in the existing live status message after each roll.
- Use two score columns on the narrowest breakpoint so labels remain legible.
- Verify the reroll using keyboard activation and inspect the layout at a 320px viewport.
