---
layout: page
title: Spurti
page_title: Spurti - Gamified Engagement Tracking
parent: Products
order: 5
permalink: /projects/spurti/
---

<div class="product-page-meta">
  <span class="product-page-status">Deployed</span>
</div>

<p class="product-page-tagline">Automated engagement scoring for cohort-based programmes. Tracks participation, rewards consistency, makes effort visible.</p>

<div class="product-page-section">
  <h2><b>The Problem</b></h2>
  <p>In any multi-day or multi-week programme, internships, bootcamps, workshops, courses, attendance is the only engagement signal instructors have. Being in the room tells you nothing about who is answering questions, who is helping peers, who is engaging with the material. Instructors have no incentive structure for students to do more than show up.</p>
</div>

<div class="product-page-section">
  <h2><b>Who It Is For</b></h2>
  <p>Programme coordinators, instructors, and training leads running cohort-based learning programmes: summer schools, research internships, online courses, corporate training, workshops, and bootcamps. Whether it is a small group of 50 or a national programme with thousands, Spurti works anywhere consistent participation matters more than mere presence.</p>
</div>

<div class="product-page-section">
  <h2><b>What We Built</b></h2>
  <p>Spurti converts daily student actions into a transparent, automated point system. Attending sessions, answering polls correctly, teaching peers through structured endorsement workflows, and responding to peer queries: every meaningful contribution earns Spurti Points (SP). A scoring pipeline runs on a schedule, recomputing the entire cohort each time. No manual scoring, no CSV uploads, no instructor intervention.</p>
  <p>Students see their points accumulate, check their rank on live leaderboards, and earn shareable achievement cards for milestones and top placements. The scoring rubric is fully open, so every student can trace their points back to the specific actions that earned them.</p>
  <img src="{{ site.baseurl }}/assets/images/spurti/Dashboard.png" alt="Spurti student dashboard showing SP balance and engagement overview" loading="lazy" style="width:100%; border-radius:6px; margin-top:1rem;">
</div>

<div class="product-page-section">
  <h2><b>Key Features</b></h2>
  <p><strong>Automated Scoring Pipeline.</strong> Points are computed from live session data on a recurring schedule. Handles thousands of students without any manual overhead.</p>
  <p><strong>Band-and-Tier Rubric.</strong> Different actions earn different weights. Attendance is banded by percentage, poll performance is percentile-ranked against the day's top scorer, peer teaching and query answering earn per-action credits. The rubric is fully open and verifiable.</p>
  <img src="{{ site.baseurl }}/assets/images/spurti/SP Bank.png" alt="SP Bank showing point breakdown by category" loading="lazy" style="width:100%; border-radius:6px; margin-top:1rem; margin-bottom:1.5rem;">
  <p><strong>Live Leaderboards.</strong> Weekly and all-time, per-category (attendance, polls, peer teaching, queries) and overall. Students see the top 50 and their own rank regardless of position. Cohort-scoped boards for onboarding groups.</p>
  <img src="{{ site.baseurl }}/assets/images/spurti/Leaderboard.png" alt="Live leaderboard showing student rankings" loading="lazy" style="width:100%; border-radius:6px; margin-top:1rem; margin-bottom:1.5rem;">
  <p><strong>Levels and Trophy Leagues.</strong> Students level up based on their highest-ever SP and move through trophy leagues as their current balance changes. Both update automatically on every scoring run.</p>
  <p><strong>Shareable Achievement Cards.</strong> Permanent, verifiable credentials for leaderboard podium placements and milestones (highest-ever SP, Level thresholds, attendance goals). Each card carries a unique code and QR linking to a public verification page. Cards render as PNGs with LinkedIn-optimised metadata.</p>
  <div style="display:flex; gap:2%; margin-top:1rem; margin-bottom:1.5rem;">
    <img src="{{ site.baseurl }}/assets/images/spurti/achievement-card1.png" alt="Shareable achievement card example" loading="lazy" style="width:49%; border-radius:6px;">
    <img src="{{ site.baseurl }}/assets/images/spurti/achievement-card2.png" alt="Achievement card with verification QR" loading="lazy" style="width:49%; border-radius:6px;">
  </div>
  <p><strong>Certificate Verification.</strong> Every achievement card links to a public page showing the student's name, what was earned, and when. No login required. Designed for sharing on LinkedIn and other platforms.</p>
  <p><strong>SP Trajectory.</strong> Students see their own SP over time compared to their cohort average and onboarding group. Visualises progress, not just current standing.</p>
  <p><strong>Course Commitments.</strong> Students can stake SP on course completion goals. Win or lose the stake based on actual completion, creating skin-in-the-game accountability.</p>
  <p><strong>My Journey.</strong> A phase-by-phase progress tracker where students set personal goals for attendance, peer teaching, and course completion with target dates.</p>
  <img src="{{ site.baseurl }}/assets/images/spurti/journey-and-goals.png" alt="My Journey progress tracker with personal goals" loading="lazy" style="width:100%; border-radius:6px; margin-top:1rem; margin-bottom:1.5rem;">
  <p><strong>Modular Plugin System.</strong> Teachers choose which modules to enable per course: attendance, assessments, peer queries, peer review, peer teaching, external course completion, exit tickets, leaderboards, rewards. Only the modules relevant to a programme are active, nothing a teacher does not need.</p>
  <p><strong>Programme Announcements.</strong> Targeted or broadcast notices with read-tracking. Instructors see read rates; students see what they have not acknowledged yet.</p>
  <p><strong>Admin Dashboard.</strong> Live stats on student distribution, SP distribution, pipeline health, achievement sharing analytics, and announcement read rates.</p>
</div>

<div class="product-page-section">
  <h2><b>Architecture</b></h2>
  <p>React single-page application with an Express.js API, backed by MongoDB. Authenticated through the parent platform's session, no separate sign-up required. The scoring pipeline runs as a separate cron-driven process that mirrors operational data and computes points from scratch on every run. Fully open source.</p>
</div>

<div class="product-page-section">
  <h2><b>What's Coming Next</b></h2>
  <p>An integration API that lets organisations push their own data straight into the scoring engine through per-course keys, so any platform can feed Spurti without custom work.</p>
  <p>LTI 1.3 support for one-click LMS integration: single sign-on, roster sync, and grade passback are already built and tested against a live LMS. Deep linking is next on that track.</p>
  <p>Project phase activities as a native workflow module, where long programmes can be broken into tracked phases with SP at each milestone.</p>
</div>

<a href="https://github.com/vicharanashala/spurti" target="_blank" rel="noopener" class="product-github-card">
  <i class="ph ph-github-logo"></i>
  <span>View source on GitHub ↗</span>
</a>
