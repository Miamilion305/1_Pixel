# GitHub Copilot Instructions for 1 Pixel

## Project Overview

1 Pixel is a modern, responsive landing page that showcases cutting-edge web design and development practices. The project emphasizes performance, aesthetics, and user experience without relying on heavy frameworks.

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks or libraries
- **No Build Process**: Direct file execution

## Code Style and Conventions

### HTML
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Include proper ARIA labels for accessibility
- Maintain proper indentation (4 spaces)
- Keep class names descriptive and kebab-case

### CSS
- Use CSS custom properties (CSS variables) defined in `:root`
- Follow BEM-like naming convention for classes
- Group related styles together
- Maintain mobile-first responsive design approach
- Use `rem` and `em` for scalable typography
- Prefer CSS animations over JavaScript when possible

### JavaScript
- Write vanilla JavaScript (no jQuery or frameworks)
- Use modern ES6+ features (arrow functions, const/let, template literals)
- Add comments for complex logic
- Prefer event delegation for better performance
- Use the Intersection Observer API for scroll animations
- Avoid polluting the global namespace

## Development Guidelines

### Performance
- Keep the site lightweight with minimal dependencies
- Optimize images and assets
- Use CSS animations for smooth 60fps performance
- Lazy load content when appropriate
- Minimize reflows and repaints

### Accessibility
- Ensure keyboard navigation works properly
- Provide appropriate alt text for images
- Maintain sufficient color contrast
- Support screen readers with proper ARIA attributes
- Respect `prefers-reduced-motion` media query

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Breakpoints:
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
- Use relative units for flexibility

## File Organization

```
1_Pixel/
├── index.html       # Main page structure
├── style.css        # All styles and animations
├── script.js        # Interactive functionality
└── README.md        # Documentation
```

## Testing Checklist

Before committing changes:
- [ ] Test on Chrome, Firefox, and Safari
- [ ] Verify mobile responsiveness
- [ ] Check all animations work smoothly
- [ ] Validate HTML and CSS
- [ ] Test with JavaScript disabled
- [ ] Verify accessibility with screen reader
- [ ] Check performance metrics

## Common Tasks

### Adding a New Section
1. Add semantic HTML in `index.html`
2. Style in `style.css` following existing patterns
3. Add interactivity in `script.js` if needed
4. Update navigation if necessary

### Modifying Colors
- Edit CSS variables in `:root` in `style.css`
- Maintain consistent color scheme across the site

### Adding Animations
- Use CSS keyframe animations when possible
- Add JavaScript animations for complex interactions
- Ensure animations respect `prefers-reduced-motion`

## Best Practices

1. **Keep it Simple**: Avoid over-engineering solutions
2. **Performance First**: Always optimize for speed
3. **Progressive Enhancement**: Build core experience first, enhance with JavaScript
4. **Accessibility**: Design for all users from the start
5. **Clean Code**: Write self-documenting code with minimal comments
6. **Version Control**: Make small, focused commits with clear messages

## Useful Commands

```bash
# Start a local server
python3 -m http.server 8000

# Validate HTML
npx html-validate index.html

# Check CSS
npx stylelint style.css

# Format code
npx prettier --write "*.{html,css,js}"
```

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [Can I Use](https://caniuse.com/)

## Contact

For questions or suggestions, open an issue or contact the maintainers.

---

**Remember**: This project values simplicity, performance, and user experience above all else. When in doubt, choose the solution that best serves the user.
