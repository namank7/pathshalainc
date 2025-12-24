# Pathshala Inc

> Transform Your Learning Journey | pathshalainc.com

A sophisticated, modern education platform website built with React + Vite.

## Design Aesthetic

- **Theme**: Warm, professional, trustworthy
- **Colors**: Terracotta (#c17f59), Gold (#c9a962), Sage (#8fa589), Cream (#faf8f5)
- **Typography**: Playfair Display (headings), DM Sans (body)
- **Style**: Elegant, educational, inspiring

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for AWS Amplify deployment. The `amplify.yml` file contains the build configuration.

### AWS Amplify Setup

1. Connect your Git repository to AWS Amplify
2. Set the app root to `/pathshalainc` (monorepo setting)
3. Connect your domain `pathshalainc.com` via Route 53

## Tech Stack

- React 18
- Vite 6
- CSS3 (Custom Properties, Animations, Grid, Flexbox)
- Google Fonts (Playfair Display, DM Sans)

## Structure

```
pathshalainc/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── amplify.yml
├── index.html
├── package.json
└── vite.config.js
```
