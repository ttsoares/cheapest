# SPEC.md

**Project:** AI-assisted Product Comparison Platform
**Status:** Draft v0.1
**Methodology:** Specification Driven Development (SDD)

---

# 1. Vision

Build a product comparison platform capable of searching multiple Brazilian e-commerce providers and presenting the best purchasing options.

The system must support both official APIs and web extraction providers through a common abstraction.

The project is developed incrementally using AI coding agents (OpenHands) with objective verification after every milestone.

---

# 2. Objectives

Primary objective:

Create a working MVP capable of comparing Mercado Livre and Pichau search results.

Future objectives:

* Kabum
* Terabyte
* Amazon Brasil
* Additional providers

The frontend should never need to know how data is obtained.

---

# 3. Non-objectives

The first version will NOT include:

* user accounts
* shopping cart
* affiliate links
* recommendation engine
* AI shopping assistant
* historical prices
* database persistence
* production deployment

Those are future milestones.

---

# 4. Guiding Principles

The project follows these principles.

1. Small verified milestones.

2. One responsibility per milestone.

3. Every milestone must have an executable verifier.

4. Human defines architecture.

5. AI implements architecture.

6. Never rebuild solved problems.

---

# 5. Success Definition

The project succeeds when a user can:

1. Enter a search query.

2. Retrieve products from supported providers.

3. Compare offers.

4. Open the selected product.

Everything else is secondary.

---

# 6. Functional Requirements

## FR-001

Search Mercado Livre products using the official API.

---

## FR-002

Search Pichau products.

Implementation strategy is intentionally unspecified.

Acceptable solutions include:

* official API
* JSON endpoint
* HTML extraction
* browser automation

---

## FR-003

Normalize products.

Every provider must return:

* title
* price
* URL
* image URL
* availability (if possible)
* seller/provider name

---

## FR-004

Compare normalized products.

---

## FR-005

Expose a unified search endpoint.

---

# 7. Architecture Constraints

Provider architecture must follow:

ProductProvider

↓

MercadoLivreProvider

PichauProvider

KabumProvider

...

The frontend communicates only with ProductProvider.

Providers never communicate with each other.

---

# 8. Authentication

Mercado Livre OAuth already works.

Known available:

* client_id
* client_secret
* access_token
* refresh_token

Authentication is infrastructure.

Business code must not implement OAuth logic.

Credentials must come from configuration.

---

# 9. Current Milestone

Milestone 1

Objective:

Implement

test_ml_api.ts

Requirements:

Search

"ssd 1tb sata"

Output:

* title
* price
* permalink

No frontend.

No NextJS.

No database.

Verifier:

Returns at least five products.

---

# 10. Planned Milestones

M2

Create MercadoLivreProvider.

---

M3

Create ProductProvider abstraction.

---

M4

Implement PichauProvider.

---

M5

Create NextJS backend.

---

M6

Create React frontend.

---

M7

Implement Playwright E2E.

---

M8

Comparison UI.

---

# 11. Verification

Every milestone must define:

Goal

Verifier

Failure condition

Completion condition

Examples:

Compilation succeeds.

Playwright passes.

HTTP status 200.

Expected JSON schema.

Expected product returned.

No subjective evaluation is allowed.

---

# 12. AI Agent Rules

OpenHands is responsible for:

* planning implementation
* writing code
* executing code
* debugging
* iterating until verifier passes

The agent should not redesign architecture.

The agent should not solve OAuth again.

The agent should ask before introducing new dependencies.

---

# 13. Human Responsibilities

The human decides:

* architecture
* priorities
* milestone order
* acceptance criteria
* provider strategy

---

# 14. Risks

Mercado Livre API changes.

Pichau frontend changes.

Provider anti-bot mechanisms.

LLM hallucinations.

Context window limitations.

---

# 15. References

Mercado Livre API documentation.

OAuth documentation.

OpenHands.

Playwright.

PixelRAG (future evaluation only).

---

# 16. Future Ideas

Visual reasoning layer.

Promotion detection.

Coupon detection.

Installment comparison.

Historical pricing.

Semantic product matching.

RAG documentation assistant.

Additional Brazilian stores.

---

# 17. Definition of Done

## Milestone Done:

* implementation exists

* verifier passes

* commit created

* milestone marked complete

Only then does work move to the next milestone.

## Project Done

* all milestones completed

* comparison platform functional

