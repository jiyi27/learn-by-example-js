# Next.js Project Setup Guide

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/getting-started) and uses [shadcn/ui](https://ui.shadcn.com/) for UI components.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.14 or higher)
- [pnpm](https://pnpm.io/) (recommended package manager)

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
pnpm install
```

3. Initialize shadcn/ui:

```bash
pnpm dlx shadcn@latest init
```

When prompted, select the components you want to install.

```bash
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › Yes
```

We use card component in this project, so you can add it by running:

```bash
$ pnpm dlx shadcn@latest add card
```

4. Run the development server:

```bash
pnpm run dev
```

You can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
