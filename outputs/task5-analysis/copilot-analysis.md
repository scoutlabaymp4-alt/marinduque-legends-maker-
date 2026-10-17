# Task 5 — Structured Analysis

## Two most important implementation issues found

1. **Score changes were not fully announced.** The score list was correctly rerendered, and the character card tracked rerolls, but the `role="status"` message only said “New scores rolled.” It did not expose the six new values in the announcement. Include the ability names and new scores in that live message.
2. **The score grid was crowded at narrow phone widths.** The current-score panel used three columns even below 420px, which can squeeze longer ability names. Change only that narrow breakpoint to two columns.

The form, card rendering, semantic landmarks, associated labels, and existing keyboard controls otherwise follow the requested behavior. The six-score generator uses an inclusive 3–18 range.

## Selected corrections

- The roll status now announces each ability and its new value.
- At widths of 420px and below, current scores use two columns.

## How to verify

Activate “Roll new scores” with the keyboard and confirm the status contains all six ability/value pairs; confirm the character card shows the same values after a character has been created. Inspect at a 320px viewport and confirm the page has no horizontal overflow and the score names use a two-column layout.
