---
layout: default
title: FLN
page_title: FLN — Foundational Literacy & Numeracy
parent: Products
order: 10
permalink: /projects/fln/
---

<div class="initiative-page-hero product-page-hero">
  <a href="{{ site.baseurl }}/products/" class="initiative-back"><i class="ph ph-arrow-left"></i> Products</a>
  <p class="story-label"><i class="ph ph-book-open"></i> Products</p>
  <h1 class="initiative-page-h">FLN</h1>
</div>

{% include page-quote.html %}


**Every child FLN-certified — by skill, not by class.**

FLN is a national foundational-learning assessment built to solve a structural problem in India's primary education: a child is almost never assessed at the level of the skill they actually have. The platform places every primary child on a learning progression by their evidence, generates a personalised paper for them at that exact level, reads their handwritten response, maps it to the competency it tests, fingerprints the misconception it reveals, and rolls the result up to the role that needs it — from a single classroom to the country.

---

## **The Challenge**

ASER 2024 shows the scale: among Grade 3 government-school children, only 27.6% can do a 2-digit subtraction problem, and only 23.4% can read at least a Grade 2-level text. The NIPUN Bharat mission sets the goal — every child FLN-ready by Grade 3, in every state — and the World Bank places FLN at the top of human-capital return. The bottleneck is not the absence of tests; it is that traditional assessment reduces every response to a mark, so a teacher who sees the child wrote `7` learns nothing about which skill was tested, what was confused, or what to teach next. The question FLN was built to answer: can every primary child in India be assessed at the level of the skill they actually have, taught the skill they are missing, and certified when they have it — without overburdening the human resources of the system?

---

## **The Platform**

FLN is an end-to-end platform that runs the same closed loop for every child, on whatever cadence the program chooses — from a single classroom pilot to a state-wide rollout.

**A skill-based national taxonomy**  
The curriculum is organised as a deep skill taxonomy of foundational competencies — a state running a smaller pilot can use a shorter ladder, a national rollout a deeper one. The principles are the same.

**Diagnostic placement**  
The first time a child is registered, they take a Diagnostic paper that places them on the taxonomy. Every cycle that follows runs at whatever cadence the program chooses.

**Personalised paper generation**  
Each cycle generates a personalised paper per student at their current level. The answer key that goes with the paper is stored in the database — what the child receives is only the question paper to solve by hand.

**Scanning and handwriting recognition**  
The teacher uploads a scanned copy of the completed paper into the system. A fine-tuned Gemma 4 model reads every answer the student wrote and maps each one back to the question it answers, so we know exactly what the child wrote for each item.

**An evaluation engine that explains, not just scores**  
Every response is checked against the answer key, and the engine does more than mark right or wrong — it reads the wrong answers to figure out what skill or subskill the student is missing, whether the error is a careless slip or a real gap. The next paper — and the practice worksheet that goes with it — is built around that missing skill, so the child goes back, fills the gap, and returns to the original question stronger.

**Misconception fingerprinting and question redefinition**  
Wrong responses are tagged with the misconception they reveal, and the next paper is redefined against that fingerprint — same competency, different variant, until the idea lands.

**A seven-role hierarchy, each with the data it actually needs**  
Superadmin, State, District, Block, School, Teacher, and Volunteer — each sees the same evidence at the slice they are responsible for, with server-side access control and a full logbook.

**Analytics that roll up from the child to the country**  
The same evidence rolls from per-child trajectory up to a national picture at the Superadmin level — in real time, not in an annual report.

---

## **The Impact**

FLN replaces a workflow that no human team could run nationally — taxonomy maintenance, paper generation, scanning, marking, competency mapping, misconception fingerprinting, narrative reporting, multi-tier analytics — with a single platform that runs with minimal human intervention.

<table class="fln-impact-table">
  <tbody>
    <tr><td><strong>Teacher</strong></td><td>Generates a per-child paper, scans the sheets, and reads a per-child narrative report on the same day — instead of never being able to assess forty children individually.</td></tr>
    <tr><td><strong>School principal</strong></td><td>Sees competency-level mastery across cohorts with concept-level suggestions for what to teach next — instead of only a class average.</td></tr>
    <tr><td><strong>District officer</strong></td><td>Sees lagging-school flags and bottleneck competencies update as scans come in — instead of waiting a year for an aggregated report.</td></tr>
    <tr><td><strong>Researcher</strong></td><td>Adds a template once and watches it propagate to every class in the system — instead of taking months to extend a question bank.</td></tr>
    <tr><td><strong>State running NIPUN Bharat</strong></td><td>Has live, per-child, per-competency evidence flowing in the same window the policy was written for — not in an annual report.</td></tr>
  </tbody>
</table>

---

## **The Vision**

FLN exists to make foundational literacy and numeracy a certifiable reality for every primary child in India — by evidence, by progression, by what they can actually do — and the platform is built so that as the cohort scales, the human overhead does not: the promise of NIPUN Bharat, that every child is FLN-ready by Grade 3 in every state, becomes operationally achievable the moment the assessment itself can teach, scale, and certify.
