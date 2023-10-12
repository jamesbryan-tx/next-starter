# Next Project Starter

This Next.js starter template is crafted to expedite the setup for your web app projects. It's an amalgam of useful features from various starter repos, refined with some custom modifications to meet common needs. The template aims to provide a solid foundation for most Next.js applications, eliminating any superfluous elements that might require pruning later. It includes a basic style and UI setup, authentication, a database configuration, and an email system, serving as a comprehensive yet streamlined starting point for your applications.

## Recognitions

This starter chiefly draws from the [Taxonomy](https://github.com/shadcn-ui/taxonomy) repo by shadcn, inheriting most of its layouts and styling. Full credit to him for these contributions. Additionally, a shout-out to nicoalbanese whose [Kirimase CLI](https://github.com/nicoalbanese/kirimase) aided in scaffolding this app and bridging certain gaps to get everything working together.

## Packages Used

- [Next.js 13](https://nextjs.org) with App Router
- [Drizzle](https://orm.drizzle.team) for database ORM
- [Postgres.js](https://github.com/porsager/postgres) for Node PostgreSQL client
- [Next-Auth](https://next-auth.js.org) for authentication
- [TRPC](https://trpc.io) for end-to-end typesafe APIs
- [Tanstack Query](https://tanstack.com/query/latest/) for asynchronous state management
- [Resend](https://resend.com/) email API
- [React.email](http://React.email) for React email components
- [T3 Env](https://env.t3.gg) for typesafe environment variables
- [Shacn/ui](https://ui.shadcn.com) for styled and accessible UI components
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Next-Themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [Zod](https://github.com/colinhacks/zod) for schema validation
- [React-Hook-Form](https://react-hook-form.com) for better form handling

## Getting Started

First, head on over to [Resend](https://resend.com/) and sign up for an API key and make sure you validate your domain (required to send email). Save your API key and verified domain to `.env.local`.

Next, set up your project in Google Cloud Console and establish OAuth 2.0 Client IDs. Refer to [Next-Auth](https://next-auth.js.org/providers/google) for a set up guide. Save your Google Client ID and Client Secret to `.env.local`.

Generate a Next-Auth Secret by typing `openssl rand -base64 32` into a terminal. Copy the resulting secret into `.env.local`. Also set your `NEXTAUTH_URL` environment variable as `http://localhost:3000`.

For the `DATABASE_URL` environment variable, use a local connection string if developing on a local PostgreSQL database, or use a connection string provided by your serverless database provider of choice.

The `VERCEL_URL` environment variable should point to your project's domain in production. You should now be set up to run the application.

First, prepare the database by running:

```bash
pnpm db:generate
pnpm db:migrate
```

Then start the development server by running:

```
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

## License

Licensed under the [MIT License](https://github.com/jebulous/next-starter/blob/main/LICENSE).
