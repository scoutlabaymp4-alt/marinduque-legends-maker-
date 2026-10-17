# outputs/

Store the **actual** GitHub Copilot results for each milestone here. One folder per experiment:

| Folder | Experiment | What to save |
|---|---|---|
| `task2-zero-shot/` | Zero-shot baseline | Generated source files and/or the Copilot response |
| `task3-structured/` | Structured prompt | Generated source files and/or the Copilot response |
| `task4a-few-shot/` | Few-shot prompt | Generated source files and/or the Copilot response |
| `task4b-role-assignment/` | Role assignment (accessibility reviewer) | Copilot's response saved as Markdown |
| `task5-analysis/` | Structured analysis | Copilot's analysis as Markdown, plus the corrected file(s) |

Rules from the lab manual:
- Save a copy of the files **before** the next experiment changes them, so outputs can be compared fairly.
- If Copilot gives multiple responses, label the one you selected and explain why in `prompt-log.md`.
- Do not replace actual output with an invented or expected response.
- Delete the `.gitkeep` placeholder in a folder once it has real files.
