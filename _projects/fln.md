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

Foundational literacy and numeracy is the bedrock of everything that comes after, and India's gap on it is national, structural, and time-bound. ASER 2024 shows the scale: among Grade 3 government-school children, only 27.6% can do a 2-digit subtraction problem, and only 23.4% can read at least a Grade 2-level text. The NIPUN Bharat mission sets the goal — every child FLN-ready by Grade 3, in every state — and the World Bank places FLN at the top of human-capital return.

The bottleneck is not the absence of tests; it is that traditional assessment reduces every response to a mark. A correct answer tells us what happened. It does not always tell us why. A teacher learns the child got `7` and nothing else: not which skill was being tested, not what was confused, not what to teach next. At India's scale, foundational-learning assessment cannot run on a model that loses information at the moment of marking.

The question FLN was built to answer: can every primary child in India be assessed at the level of the skill they actually have, taught the skill they are missing, and certified when they have it — without overburdening the human resources of the system?

---

## **The Platform**

FLN is an end-to-end platform that runs the same closed loop for every child, on whatever cadence the program chooses — from a single classroom pilot to a state-wide rollout.

**A skill-based national taxonomy**  
The curriculum is organised as a deep skill taxonomy of foundational competencies, with each level carrying the supported rungs the program needs — for example a Mastery, Easier, and Remedial sub-level — so the same competency can be tested at the right difficulty for the child in front of it. A state running a smaller pilot can use a shorter ladder, a national rollout a deeper one; the principles are the same.

**Diagnostic placement**  
The first time a child is registered with FLN, they take a Diagnostic paper. This locates the child on the taxonomy — the rung where their evidence says they actually stand — and is the only universal step in the platform. Every cycle that follows runs at whatever cadence the program chooses: three a year, four, two, or one.

**Personalised paper generation**  
Each cycle generates a personalised paper per student matched to their current level on the taxonomy, with the answer key produced alongside in a single locked bundle. Worksheets carry a QR identifier and four corner fiducials, so the printed sheet can be unambiguously tracked, scanned, and matched back to the child. A categorised SVG asset library backs every visual question; missing assets trigger same-category substitution, never a blocked paper.

**Scanning and handwriting recognition**  
Handwritten digits, symbols, comparison marks, and words are read from phone-camera scans, flatbed scans, or structured ICR ingestion. The vision pipeline detects fiducials, rectifies perspective skew, extracts per-question regions, and runs handwriting recognition with shape-specific normalisation — so a child's sloppy digit never silently costs them a mark.

**An evaluation engine that explains, not just scores**  
Every response is classified by question type and difficulty band, compared to the answer key, and mapped to a named FLN competency. An AI narrative layer writes the strengths, the weaknesses, the mistake patterns, and the recommended next level in plain language the teacher can act on.

**Misconception fingerprinting and question redefinition**  
The evaluation output does not stop at right or wrong — it fingerprints the misconception a wrong response reveals (treats subtraction as addition, ignores borrowing, confuses before/after) and tags it to the competency it tests. The next paper for that child is redefined against the misconception fingerprint, not just against the original level — same competency, different variant, scaffolded until the idea lands.

**A seven-role hierarchy, each with the data it actually needs**  
Superadmin → State → District → Block → School → Teacher / Volunteer, with Teacher and Volunteer at the same operational tier inside a school. Generation and print rights are shared across Teacher, School (Principal), Volunteer, and Block Admin — and gated by two independent pairwise generation locks so no exam session is double-produced. Access is enforced server-side, and every state-changing action is recorded in the logbook with date, school, activity, and status.

**Analytics that roll up from the child to the country**  
The same evidence powers views at every level of the hierarchy: per-child competency trajectory, per-class pattern, per-school mastery, per-block lag, per-district bottleneck, per-state certification rate, and a national picture at the Superadmin level — in real time, not in an annual report.

---

## **The Impact**

FLN replaces a workflow that no human team could run nationally — taxonomy maintenance, paper generation, scanning, marking, competency mapping, misconception fingerprinting, narrative reporting, multi-tier analytics — with a single platform that runs with minimal human intervention. The effect compounds the way a foundation does: a child who can read with meaning and work confidently with numbers by Grade 3 stays in school, learns the subjects built on top, and enters the workforce a decade ahead of where they would have been otherwise.

- A **teacher** who could never assess forty children individually now generates a per-child paper, scans the sheets, and reads a per-child narrative report on the same day.
- A **school principal** who once had only a class average now sees competency-level mastery across cohorts, with concept-level suggestions for what to teach next.
- A **district officer** who once waited a year for an aggregated report now sees lagging-school flags and bottleneck competencies update as scans come in.
- A **researcher** who needed months to extend a question bank now adds a template once and watches it propagate to every class in the system.
- A **state running NIPUN Bharat** now has live, per-child, per-competency evidence flowing in the same window the policy was written for.
- Every child who clears the FLN threshold across the assessed competencies becomes **FLN certified** — by the skills they can show, not by the label they were handed.

---

## **The Vision**

FLN exists to make foundational literacy and numeracy a certifiable reality for every primary child in India — by evidence, by progression, by what they can actually do.

The platform is built so that as the cohort scales, the human overhead does not.

The promise of NIPUN Bharat — every child FLN-ready by Grade 3, in every state — stops being aspirational the moment the assessment itself can teach, scale, and certify.
