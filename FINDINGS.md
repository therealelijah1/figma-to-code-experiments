# Findings so far

| # | Experiment | Clean output? | Main fix needed |
| --- | --- | --- | --- |
| 01 | Button with variants | Mostly | Add hover/focus states, use tokens |
| 02 | Responsive card | Yes | `object-fit` on images |

## Rules for Figma files that convert well
1. Use auto layout everywhere.
2. Bind colors, spacing and radius to variables.
3. Define every interaction state as a variant.
4. Name layers like components (`Card/Title`, not `Frame 431`).
5. Keep one component per concept; avoid detached instances.
