# Experiment 01: Button

**Goal:** Generate a production-ready React button from a Figma component with variants.

**Input:** Figma component with `variant` (primary, secondary, ghost) and `size` (sm, md, lg) properties.

**Method:** Read the node with Figma MCP `get_design_context`, then prompt for a typed React component that maps variant properties to props.

**Result:**
- Variant and size props mapped correctly
- Colors came through as hex values; had to swap for design tokens
- Hover and focus states were missing (not defined in Figma)

**Lesson:** Define interaction states in Figma, and bind colors to variables, or the code will hard-code them.
