# AI Design Library

A React TypeScript design library with Tailwind CSS and Storybook documentation.

## Features

- React components written in TypeScript
- Tailwind CSS for styling
- Storybook for component documentation and development
- Example Button component with various variants and states

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Development

1. Create new components in the `src/components` directory
2. Add corresponding stories in the component directory with the `.stories.tsx` extension
3. Run Storybook to see your components in action

### Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm start` - Start the React development server
- `npm run build` - Build the React app for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Component Usage

### Button Component

```tsx
import Button from 'ai-design-library/src/components/Button/Button';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>

// With sizes
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>

// With loading state
<Button isLoading>Loading Button</Button>

// Disabled state
<Button disabled>Disabled Button</Button>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
