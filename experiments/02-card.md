# Experiment 02: Responsive card

**Goal:** Turn an auto-layout card into responsive code without fixed widths.

**Input:** Card using auto layout, "fill container" width, 24px padding, 12px gap.

**Result:**
- Auto layout translated cleanly to flexbox (`flex-direction: column`, `gap: 12px`)
- "Fill container" became `width: 100%` as expected
- Image with "fill" scaling needed `object-fit: cover` added by hand

**Lesson:** Auto layout in Figma is the single biggest factor in clean output. Frames without it produce absolute positioning.
