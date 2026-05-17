# Modoc Vineyard Website Revamp Plan

## Goals

- Preserve the current site's content, page structure, and general layout.
- Modernize the implementation so the site is faster, easier to maintain, and less tied to old WordPress/Divi behavior.
- Keep the site familiar for the church community: no radical rebrand, no marketing-heavy redesign.
- Reuse the existing imagery, logo, videos, and visual assets wherever possible.
- Make common visitor tasks obvious: service time, location, ministries, giving, contact, and prayer requests.
- Reserve space for Nikki's upcoming podcast with a warm "coming soon" section.
- Reserve space for future Sunday service livestreaming with a clear "coming soon" state.

## Current Site Snapshot

The current site is a WordPress + Divi build. The home page structure is:

- Header with logo and nav:
  - About
  - Our Story
  - Our Leadership
  - Our Core Values
  - Who We Are
  - What to Expect
  - MV Academy
  - Ministries
  - Vineyard Kids
  - Giving
  - Contact
- Home hero:
  - Video background from `modoc-bumper-1-HD-720p.mov`
  - Message: "Love God. Love People. Period."
  - Heading: "Welcome to the Vineyard"
  - Intro copy about grace, truth, love, and joining God's mission
  - "Learn More" link to Our Story
  - Featured image: `IMG_0340.jpeg`
- Four ministry/service blocks:
  - Sunday
  - Vineyard Kids
  - 412 Youth
  - LOVE Modoc
- Invitation callout:
  - "Join us, you are invited"
  - Sunday Service 10:30am
  - 221 N. Main Street Alturas CA 96101
- Latest Updates gallery:
  - Men's Breakfast image
  - Two November 2023 church/community photos
- Prayer request/contact section:
  - Name
  - Email
  - Phone
  - Message
- Podcast coming soon:
  - Introduce Nikki's upcoming podcast in a small, upbeat section.
  - Keep it simple at launch: title, short teaser, optional photo/background, and a "Coming Soon" state.
  - Add subscribe links later when the podcast feed is live.
- Livestream coming soon:
  - Add a section for future Sunday service livestreaming.
  - Keep it clear that livestream infrastructure is not live yet.
  - Include the regular in-person service time so the section is still useful immediately.
  - Add livestream embed/link later when the platform is ready.
- Footer:
  - Currently includes default WordPress widgets: Archives, Categories, Meta, login/feed links
  - Facebook and Instagram links are present

## Existing Content To Preserve

- Home page messaging and layout order.
- Service time and address:
  - Sunday Service 10:30am
  - 221 N. Main Street, Alturas, CA 96101
- Giving link:
  - `https://tithe.ly/give_new/www/#/tithely/give-one-time/2509110`
- Social links:
  - Facebook: `https://www.facebook.com/modocvineyard`
  - Instagram: `https://www.instagram.com/modocvineyard/`
- Current page hierarchy:
  - About
  - Our Story
  - Our Leadership
  - Mission / Vision / Values
  - Who We Are
  - What to Expect
  - MV Academy
  - Ministries / Connect
  - Vineyard Kids
  - Contact

## Asset Inventory

Assets found in the live source include:

- Logo: `OverProject-40.png`
- Favicons: `cropped-IMG_9266-*`
- Hero/home image: `IMG_0340.jpeg`
- Hero video/background video:
  - `modoc-bumper-1-HD-720p.mov`
  - `modoc-bumper-1-HD-720p-1.mov`
- About page image: `IMG_9604-1024x734.jpeg`
- Leadership image: `IMG_2464-scaled-e1624861373547.jpeg`
- Ministry thumbnails:
  - `IMG_1565-300x300.png`
  - `IMG_6313-300x300.png`
  - `IMG_7670-2-300x300.png`
  - `IMG_8718-300x300.png`
- Latest updates:
  - `Mens-Breakfast.jpeg`
  - `IMG_6453-1-scaled.jpeg`
  - `IMG_6471-1.jpeg`

Asset cleanup work:

- Download the WordPress uploads that are actively used.
- Convert large JPEGs to optimized WebP/AVIF, keeping JPEG fallbacks if needed.
- Convert `.mov` video to web-friendly `.mp4` and provide a static poster image for mobile/performance.
- Add descriptive `alt` text for all images.
- Remove default WordPress/Divi assets from the new build.

## Design Direction

Keep the current information architecture and page rhythm, but clean up presentation:

- Header:
  - Keep logo-left/nav-right desktop layout.
  - Use a clearer mobile nav.
  - Keep Giving as a distinct action.
- Home hero:
  - Preserve the video/photo-led welcome.
  - Improve text contrast and spacing.
  - Keep the "Learn More" action.
- Ministry blocks:
  - Keep four blocks in the same order.
  - Normalize image sizing and text rhythm.
  - Fix spelling/grammar while preserving voice, for example "their" in the 412 Youth copy.
- Service callout:
  - Make time and address more scannable.
  - Add map link/directions action.
- Latest Updates:
  - Keep as a simple image/news area.
  - Decide whether this is manually curated or pulled from a CMS collection.
- Prayer/contact:
  - Keep simple form.
  - Add spam protection and clear success/error states.
- Podcast:
  - Add a "Coming Soon" section on the home page.
  - Keep the tone excited but grounded.
  - Avoid fake episode cards or inactive platform links.
  - Once the feed exists, replace the teaser with latest episode embeds and subscribe links.
- Livestream:
  - Add a "Sunday Livestream Coming Soon" section.
  - Include Sunday Service 10:30am and the physical address.
  - Avoid inactive video players or fake countdowns.
  - Once streaming is ready, replace the placeholder with an embedded player, YouTube/Facebook link, or livestream schedule.
- Footer:
  - Replace WordPress widgets with useful content: service time, address, social links, giving, contact, and copyright.

## Recommended Architecture

Recommended default: **Astro static site + Netlify/Vercel**

Why this fits:

- The site is mostly brochure/content pages, not an app.
- Astro ships very little JavaScript by default, so it will be fast and reliable.
- Content can live as Markdown/MDX files in the repo.
- Hosting can be low-cost or free.
- Forms can be handled by Netlify Forms, Basin, Formspree, or a small serverless function.
- A CMS is not required for phase 1 if updates are infrequent.

Proposed implementation:

- Astro for pages/layouts/components.
- Markdown/MDX content collections for pages, ministries, updates, and leadership.
- Image optimization through Astro assets.
- Tailwind CSS or plain CSS modules. Tailwind is fine if the team wants fast iteration; plain CSS is also viable because the site is modest.
- Netlify Forms or Formspree for contact/prayer requests.
- Keep Tithe.ly as the giving provider.
- Add Decap CMS later only if non-technical editors need browser-based updates.

## CMS Decision

For a small church, a CMS should be optional, not automatic.

Phase 1 can be a simple static site:

- Home
- About / Our Story
- What to Expect
- Ministries / Vineyard Kids / 412 Youth
- Giving
- Contact / Prayer Requests
- Podcast / Coming Soon
- Livestream / Coming Soon

This keeps the rebuild lean and maintainable. If updates happen only every few weeks or months, editing Markdown files and redeploying is enough. If the church later wants staff or volunteers to post events, announcements, sermons, or photos without touching code, add a lightweight CMS then.

Use a CMS only when one of these becomes true:

- Multiple non-developers need to edit content.
- Events/announcements change weekly.
- Sermons, photos, or ministry updates need frequent publishing.
- The church wants a browser-based admin workflow similar to WordPress.

Recommendation: launch without a CMS, but structure the content so Decap CMS or Sanity can be added later without rewriting the site.

## Alternative Tech Stacks

### Option 1: Astro Static Site

Best for: a fast, low-maintenance church site with stable content and occasional developer-assisted updates.

Pros:

- Very fast static pages.
- Simple hosting.
- Easy to version content.
- Minimal security surface compared with WordPress.
- No CMS account/admin surface to maintain.

Cons:

- Content updates require someone comfortable making small text edits or using a Git-backed workflow.

Verdict: best overall fit.

### Option 1b: Astro + Decap CMS

Best for: the same static site, plus browser-based editing for volunteers.

Pros:

- Keeps the fast static-site foundation.
- Adds an editor UI later without moving back to WordPress.
- Good for announcements, ministries, leaders, and simple page edits.

Cons:

- More setup than a plain static site.
- Adds an admin workflow that may not be needed at launch.

Verdict: good phase 2 upgrade if editing needs grow.

### Option 2: Next.js + Sanity

Best for: a richer content system, frequent updates, or future features like events, sermons, and structured ministry pages.

Pros:

- Excellent developer ecosystem.
- Sanity gives a polished content editing experience.
- Strong path for future structured content: events, sermons, staff, updates, forms.
- Good image handling.

Cons:

- More moving parts than the church currently needs.
- Sanity adds an external service and pricing considerations as content/users grow.
- Requires more ongoing developer comfort.

Verdict: strong if the long-term plan includes more dynamic content.

### Option 3: WordPress, But Modernized

Best for: keeping familiar admin workflows and minimizing migration disruption.

Possible version:

- Fresh WordPress install.
- Modern block theme.
- Avoid Divi/page-builder lock-in.
- Harden security and caching.

Pros:

- Familiar admin panel for many volunteers.
- Easy plugin ecosystem.
- Non-technical content editing is straightforward.

Cons:

- Still requires WordPress maintenance, plugin updates, backups, and security care.
- Easy to drift back into heavy builder/plugin dependence.
- Performance and reliability depend heavily on hosting and plugin discipline.

Verdict: acceptable if the church strongly wants WordPress editing, but not my first choice.

### Option 4: Webflow

Best for: a no-code visual editing workflow with polished hosting.

Pros:

- Very approachable visual editing.
- Hosted platform removes server maintenance.
- Good for small marketing/content sites.

Cons:

- Monthly cost.
- Vendor lock-in.
- Developer workflow is weaker than a code-first site.
- CMS limits may matter later.

Verdict: good if volunteer visual editing matters more than code ownership.

### Option 5: Squarespace / Wix

Best for: the simplest non-developer maintenance path.

Pros:

- Very easy editing.
- Hosting, themes, and forms are bundled.
- Lowest technical burden.

Cons:

- Less control over performance, code quality, and migration.
- Can feel generic.
- Harder to preserve the current layout precisely.

Verdict: viable for simplicity, but less ideal for a careful content-preserving revamp.

## Content Model

Create structured content for:

- Pages:
  - title
  - slug
  - body
  - hero image
  - SEO description
- Ministries:
  - name
  - summary
  - image
  - schedule/details
  - page link
- Updates:
  - title
  - date
  - image
  - short description
  - optional link
- Podcast:
  - title
  - teaser
  - host name
  - status
  - future feed URL
  - future platform links
- Livestream:
  - title
  - teaser
  - status
  - service time
  - future platform URL
  - future embed URL
- Leaders:
  - name
  - role
  - bio
  - photo
- Site settings:
  - church name
  - service time
  - address
  - giving link
  - social links
  - contact email

## Migration Plan

1. Inventory current pages and assets.
2. Download active WordPress uploads.
3. Build the new site shell:
   - shared header
   - shared footer
   - responsive layout system
   - content components
4. Rebuild the home page to match current section order.
5. Rebuild secondary pages using the current content.
6. Add contact/prayer request form.
7. Optimize images/video and add alt text.
8. Review copy for small fixes without changing meaning.
9. Test:
   - desktop/mobile layout
   - form submission
   - nav links
   - giving link
   - social links
   - Lighthouse performance/accessibility
10. Deploy staging site.
11. Final content review with church leadership.
12. Cut over DNS when approved.

## Risks And Decisions

- Decide who will update the site after launch.
- Decide whether updates/events need a CMS on day one.
- Decide how prayer requests should be routed and protected.
- Confirm whether the site needs sermon audio/video, livestream embeds, calendar events, or private/member-only content.
- Confirm whether MV Academy and Ministries need full page rebuilds or simple placeholders initially.
- Confirm image usage rights and whether all current WordPress uploads may be reused.

## Proposed Phase 1 Scope

- Static modern rebuild with Astro.
- Preserve all current top-level pages and nav paths.
- Preserve current home page content/order.
- Reuse all current imagery, logo, video, and other media assets.
- Add a tasteful "Nikki's podcast is coming soon" section.
- Add a tasteful "Sunday livestream is coming soon" section.
- Add optimized asset pipeline.
- Add contact/prayer form.
- Replace WordPress footer widgets.
- Deploy to Netlify or Vercel.
- Keep giving on Tithe.ly.

## Proposed Phase 2 Scope

- Add CMS editing with Decap or Sanity.
- Add structured events/updates.
- Add sermons/media if needed.
- Replace the podcast teaser with real podcast feed/subscription links when ready.
- Replace the livestream teaser with a real stream embed/link when ready.
- Add leadership/ministry pages with richer structured content.
- Add analytics with privacy-friendly tooling such as Plausible.
