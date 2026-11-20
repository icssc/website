This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Webmaster notes: events

All events live in `src/components/events/events-data.ts`, one `ClubEvent` per event (see `events-types.ts`). Each event gets a page at `/events/<slug>` automatically.

### Adding an event

Add an entry to `EVENTS_DATA`:

```ts
{
	slug: "brain-games-fall-2026",          // unique, lowercase, dashes only
	title: "Brain Games",
	start: "2026-11-14T11:00:00-08:00",     // -07:00 during daylight time (Mar–Nov), -08:00 otherwise
	end: "2026-11-14T16:30:00-08:00",       // optional
	location: "Student Center Moss Cove AB",
	quarter: "Fall 2026",                   // drives the filter chips on /events
	description: "…",
	poster: { src: "/assets/events/event_brain-games-2026.jpg", alt: "Brain Games poster" },
},
```

Events move from "Upcoming" to "Past events" on their own once they're over.

### Adding photos after an event

Photos are a small set (up to 12) committed to the repo, so pages never depend on Google at runtime.

**Easiest: pull them from the album.** Add the event's public share link as `albumUrl` in `events-data.ts`, then run:

```bash
pnpm photos:fetch
```

This takes 12 photos spread across the album for every event that has an `albumUrl` but no photos yet, resizes them into `public/assets/events/<slug>/`, and writes the `photos` list into `events-data.ts`. To redo one event, or take a different number: `pnpm photos:fetch brain-games-fall-2026 --count 9`. Swap out any photo you don't like by replacing its file (keep the name).

This reads the album's public page, not an official API, so it can break if Google changes that page. If it does, use the manual route:

**Manual:**

1. Pick **4–12** good photos from the event's Google Photos album and download them into any folder.
2. Run the optimizer with that folder and the event's slug:

   ```bash
   pnpm photos:optimize ~/Downloads/brain-games brain-games-fall-2026
   ```

   This writes resized copies (max 1600px, plus 480px thumbnails) to `public/assets/events/<slug>/` and prints a `photos: [...]` snippet.
3. Paste the snippet into the event in `events-data.ts`, improve the `alt` text if you can, and add the album's share link:

   ```ts
   albumUrl: "https://photos.app.goo.gl/…",
   ```

The first 3 photos show in the quick-view on `/events`; all of them show in the gallery on the event's page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
