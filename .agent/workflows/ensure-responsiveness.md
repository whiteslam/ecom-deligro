---
description: Ensure all components and pages are fully responsive for mobile and tablet devices
---

# Responsiveness & Design Consistency Check

Follow these steps to ensure the application is mobile-friendly and design-consistent:

1.  **Mobile View Check (375px width):**

    - Open the page in a browser with a viewport width of 375px.
    - Verify that no horizontal scrolling is required.
    - Check that text is readable and not too small or too large.
    - Ensure buttons are easily tappable (min 44px height).
    - Verify that layout stacks vertically (flex-col) where appropriate.
    - Check padding and margins (should be reduced compared to desktop).

2.  **Tablet View Check (768px width):**

    - Open the page in a browser with a viewport width of 768px.
    - Verify the layout adapts gracefully (e.g., 2 columns instead of 4).
    - Check navigation menu visibility and usability.

3.  **Component Specific Checks:**

    - **Navbar:** Should collapse into a hamburger menu or scrollable list on mobile.
    - **Hero Section:** Text and images should stack; images should not overflow.
    - **Cards (Restaurant/Menu):** Should be full width on mobile, grid on tablet/desktop.
    - **Slider:** Should scale down proportionally (already implemented).
    - **Footer:** Links should stack vertically.

4.  **Design Consistency Audit:**

    - **Colors:** Ensure primary orange (#E59A01) and glassmorphism styles are used consistently.
    - **Buttons:** Check for consistent border-radius (rounded-full), padding, and hover effects.
    - **Typography:** Ensure headings and body text use the correct font family and weights.
    - **Glassmorphism:** Verify `bg-white/xx`, `backdrop-blur`, and `border-white/xx` usage.

5.  **Fixing Issues:**
    - Use Tailwind's responsive prefixes (`md:`, `lg:`) to adjust styles.
    - Example: `flex-col md:flex-row`, `p-4 md:p-8`, `text-xl md:text-3xl`.
