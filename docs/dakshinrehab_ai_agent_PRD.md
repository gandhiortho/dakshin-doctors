# Product Requirements Document (PRD)
Agent for Dakshinrehab Clinic Website (Patient-facing Conversational Assistant)

## 1. Overview
- Purpose: Launch a patient-facing conversational agent embedded in the clinic’s website to:
  - Answer user questions about services, conditions, insurance, pricing, and logistics
  - Guide and persuade users on how the clinic can help (benefits, outcomes, differentiators)
  - Qualify leads and book appointments (new and existing patients)
  - Capture contact details for follow-ups and escalate to staff when needed

- Primary Goals (KPIs)
  - Increase online appointment conversion rate by X%
  - Reduce front-desk call volume by Y%
  - Improve time-to-first-response to under 5 seconds
  - Achieve CSAT ≥ 4.5/5 and task completion rate ≥ 70%

- Target Users
  - Prospective patients exploring services
  - Existing patients needing scheduling, rescheduling, or info
  - Caregivers seeking information and appointments

## 2. Scope
- In-scope
  - Website widget and full-page assistant
  - Natural language Q&A across services, conditions, logistics
  - Appointment scheduling and management
  - Lead capture and CRM sync
  - Insurance and pricing guidance (non-binding estimates)
  - Escalation to human staff (chat handoff, callback request)
  - Analytics dashboard and conversation transcripts
  - Multi-language support (phase 2)

- Out-of-scope (initial release)
  - Medical advice/diagnosis beyond educational info
  - Clinical triage beyond basic urgency guidance
  - Phone/IVR integration (consider phase 2)
  - Mobile app SDK (web first)

## 3. User Stories and Acceptance Criteria
- Discovery and Information
  - As a user, I can ask about clinic services and receive clear, concise, accurate answers with links to relevant pages.
    - AC: ≥ 90% of FAQs answered from curated knowledge with source references.
  - As a user, I can check provider bios, specialties, and availability.
    - AC: Provider profiles loaded from source of truth, updated nightly or via webhook.

- Persuasion and Guidance
  - As a prospective patient, I can learn how the clinic differentiates itself and see outcomes/testimonials.
    - AC: Agent uses approved value props and testimonials library; avoids unverified claims.
  - As a hesitant user, I receive tailored benefits based on my goal or condition.
    - AC: Dynamic messaging based on intent and segment (e.g., sports injury vs. chronic pain).

- Appointments
  - As a user, I can book, reschedule, or cancel an appointment.
    - AC: Real-time availability, confirmation number, calendar invite, SMS/email confirmation.
  - As a new patient, I can submit basic intake info prior to the visit.
    - AC: Collects required fields; validates; stores via secure API.

- Insurance and Pricing
  - As a user, I can check if my insurance is accepted and get a cost estimate range.
    - AC: Up-to-date payer list; estimates clearly labeled as non-binding; captures contact for follow-up when uncertain.

- Lead Capture and Handoff
  - As a user, I can request a callback or live agent transfer during business hours.
    - AC: Route to front desk system with context; outside hours, capture callback details and SLA.

- Accessibility and Language
  - As a user with accessibility needs, I can navigate via keyboard and screen readers.
    - AC: WCAG 2.1 AA compliant; alt text; ARIA roles; high-contrast theme.

## 4. Functional Requirements

### 4.1 Conversational Experience
- Intent detection: FAQs, appointment actions, insurance, pricing, directions, hours, provider info, condition-specific queries.
- Context handling: Maintains session context (user’s condition, preferred location/provider, insurance).
- Guardrails: No diagnosis; provide educational info with disclaimers; escalate emergencies.
- Tone: Empathetic, professional, encouraging; localized variants available.

### 4.2 Knowledge Management
- Sources:
  - Services catalog (procedures, conditions treated)
  - Provider directory (bios, credentials, photos)
  - Locations (addresses, parking, maps, accessibility)
  - Hours, holidays, contact details
  - Insurance plans accepted, referral requirements
  - Pricing ranges and financing options
  - Testimonials and outcomes (approved content)
  - Policies: cancellation, late arrivals, privacy, consent
- Admin console to manage FAQs and content with approval workflow.
- Versioning and rollback; change logs; scheduled publishing.

### 4.3 Scheduling
- Real-time integration with scheduling system (e.g., Athenahealth, Epic, DrChrono, Calendly-like).
- Features:
  - Search availability by provider, specialty, location, date range
  - New patient vs. existing patient pathways
  - Appointment types and durations
  - Pre-visit forms links
  - Confirm/reschedule/cancel with verification (DOB, phone, code)
- Notifications: Email/SMS confirmations and reminders with ICS files.

### 4.4 Lead Capture and CRM
- Capture: name, phone, email, preferred time, reason for visit, insurance.
- Consent for contact and marketing.
- Sync to CRM/EMR or marketing automation (HubSpot, Salesforce, Mailchimp).
- Deduplication logic; UTM/campaign attribution stored.

### 4.5 Escalation and Live Handoff
- Business hours logic by location and service line.
- Routing rules: front desk queue, specialty coordinator, billing questions.
- Channel options: live web chat, callback, secure message.
- SLA timers; alert if breaching; conversation transcript attached.

### 4.6 Analytics and Reporting
- Metrics:
  - Sessions, unique users, intents distribution
  - Conversion: appointments booked, leads captured
  - Containment rate (no human needed), escalation rate
  - CSAT and NPS; drop-off points; time to response
- Exports: CSV, scheduled reports, API access.
- Privacy: Pseudonymized analytics; HIPAA considerations if PHI is present.

### 4.7 Security, Privacy, Compliance
- HIPAA-readiness if PHI collected:
  - Encrypted in transit (TLS 1.2+) and at rest (AES-256)
  - Access controls, audit logs, BAAs with vendors
  - Minimum necessary data principle
- Consent and disclaimers:
  - Not a substitute for medical advice; emergency instructions
  - Marketing consent capture
- Data retention: configurable policies; right-to-delete workflows.
- CAPTCHA or bot mitigation for spam.

### 4.8 Internationalization and Accessibility
- Multi-language support: EN (Phase 1), ES + others (Phase 2).
- RTL support if needed.
- WCAG 2.1 AA compliance; screen-reader announcements; keyboard navigation.

## 5. Non-Functional Requirements
- Performance: First response < 2s; P95 latency < 3s; uptime ≥ 99.9%.
- Scalability: Handle traffic spikes; autoscaling.
- Reliability: Graceful degradation if external APIs fail; cached FAQs.
- Observability: Logs, metrics, tracing; error alerts.
- Maintainability: Modular architecture; configuration via admin UI.
- Cross-browser support: Latest Chrome, Safari, Firefox, Edge; mobile responsive.

## 6. User Flows

### 6.1 First-time Visitor Flow
- Trigger: Chat widget auto-opens with proactive message (e.g., “Need help finding the right provider?”).
- Steps:
  1) User states goal or selects quick chips (Book visit, Check insurance, Ask question).
  2) Agent clarifies intent and collects minimal info.
  3) Provides tailored guidance or scheduling options.
  4) Offers to book or connect with a human.
  5) Confirmation and follow-up.

### 6.2 Appointment Booking Flow (New Patient)
- Gather: name, DOB (for verification), contact, reason for visit, insurance plan, location preference, availability window.
- Show time slots; confirm; send confirmation with next steps and pre-visit forms.

### 6.3 Appointment Management (Existing Patient)
- Verify identity (DOB + one-time code via SMS/email).
- Retrieve upcoming appointments; allow reschedule/cancel.
- Confirmation and updated reminders.

### 6.4 Insurance Check
- Ask insurer, plan, member ID (optional), referral status.
- Return acceptance info and estimate; if uncertain, create a ticket for benefits verification.

### 6.5 Escalation
- If complex or high-friction, offer live agent or callback.
- Collect best time to reach and topic; route with transcript.

## 7. Content Strategy and Messaging
- Voice and Tone: Empathetic, trustworthy, concise, action-oriented.
- Guardrails:
  - No diagnoses; provide education and direct to provider.
  - Emergency disclaimer and 911/urgent care guidance.
  - Clear distinction between estimates vs. final billing.
- Personalization:
  - Use intent, location, and previous interactions to tailor.
  - Respect privacy; provide opt-out.

## 8. Technical Architecture

### 8.1 High-Level Components
- Frontend Web Widget
  - Embedded widget + full-screen mode
  - Theming to match clinic brand; dark/light modes
  - Accessibility and i18n

- Conversation Orchestrator
  - NLU/NLP model for intent and entity extraction
  - Dialog manager with slots and context store
  - Policy engine for guardrails and escalation
  - Content retrieval layer (FAQ/KB search)

- Integrations
  - Scheduling/EMR: availability, appointments, patient lookup
  - CRM/Marketing: lead capture, campaigns
  - Communications: SMS/Email for OTP, notifications
  - Maps and directions
  - Payments (phase 2)

- Admin Console
  - Content management, intent training, prompts, test sandbox
  - Role-based access control and audit trails

- Data Layer
  - Secure storage for conversations, leads, and configuration
  - Caching layer for FAQs and provider/location data

### 8.2 APIs and Data Contracts
- Scheduling API
  - GET /providers, GET /locations, GET /availability
  - POST /appointments, PATCH /appointments/{id}
- CRM API
  - POST /leads, PUT /leads/{id}
- Auth/Verification
  - POST /otp/send, POST /otp/verify
- Content/FAQ
  - GET /kb/{topic}, POST /kb (admin)
- Analytics
  - POST /events, GET /reports

## 9. Implementation Plan and Milestones
- Phase 0: Discovery (1–2 weeks)
  - Inventory content, systems, integrations, legal/compliance review, define KPIs
- Phase 1: MVP (4–6 weeks)
  - Core FAQs, provider/location info
  - Basic scheduling for limited providers
  - Lead capture and email confirmations
  - Analytics v1, admin console v1
  - HIPAA posture review
- Phase 2: Expansion (4–8 weeks)
  - Full scheduling integration
  - Identity verification + appointment management
  - Insurance verification workflow
  - Live agent handoff + SLAs
  - Multi-language
- Phase 3: Optimization (ongoing)
  - Training and tuning intents
  - A/B test prompts and proactive nudges
  - Add payments, financing info, and deeper forms

## 10. Success Metrics
- Conversion: Appointments booked per 100 sessions
- Lead quality: % leads reaching consult
- Containment: % solved without human
- Response quality: CSAT, helpfulness rating
- Operational impact: Reduced call volume and time-to-handoff
- Compliance: Zero high-severity privacy incidents

## 11. Risks and Mitigations
- Inaccurate medical info → Curated KB, approved content, disclaimers, human review
- Integration delays → Feature flags, fallbacks (request callback instead of real-time booking)
- Privacy/PHI risks → Access controls, minimum necessary, BAAs
- User distrust → Clear branding, empathy, escalation to humans, testimonials
- Hallucinations → Retrieval-augmented responses; strict guardrails and tested prompts

## 12. Requirements Traceability Matrix (sample)
- R-01: Intent recognition → F-4.1, Tests T-01–T-04
- R-02: Appointments booking → F-4.3, APIs A-01–A-02
- R-03: Insurance info → F-4.4, KB K-03
- R-04: Escalation → F-4.5, SLAs S-01
- R-05: HIPAA compliance → Sec-4.7

## 13. QA and Testing
- Unit tests for dialog policies and slot filling
- Integration tests with scheduling/CRM APIs (sandbox)
- Red-team safety tests (misuse, medical advice boundary)
- Accessibility testing (screen readers, keyboard nav)
- Load testing to confirm P95 latency
- UAT with front desk and clinicians; script-based scenario walkthroughs

## 14. Go-To-Market and Training
- Staff training: handling escalations, reviewing transcripts, updating FAQs
- Marketing: website banners, email campaigns, social posts
- Feedback loop: in-chat thumbs up/down and free-text comments
- Post-launch review after 2 and 6 weeks; iterate on top intents

## 15. Dependencies
- Scheduling/EMR vendor access and credentials
- CRM/marketing platform access
- SMS/email provider accounts
- Legal review for disclaimers and HIPAA
- Content owners for services and policies

## 16. Open Questions
- Which scheduling/EMR system(s) are we integrating with?
- Which insurance plans and pricing ranges can we publish publicly?
- Do we require live agent chat at launch or only callback?
- Languages for phase 2?
- Desired branding and tone (examples, words to avoid)?
- Which metrics define “success” for month 1 vs. month 3?

If you share your clinic’s systems (EMR/CRM), services, locations, and branding guidelines, I can tailor this PRD into a launch-ready spec with API mappings, field lists, and on-brand messaging.