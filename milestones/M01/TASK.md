# Milestone M01

## Read first

Read every listed document completely before writing code.

docs/architecture/SPEC.md
docs/architecture/DECISIONS.md
docs/knowledge/README.md
docs/knowledge/AUTHENTICATION.md
docs/knowledge/MERCADO_LIVRE_OAUTH.md
docs/knowledge/MERCADO_LIVRE_SEARCH_API.md

If information required to complete the milestone is missing, stop and explain what is missing instead of inventing a solution.

## Goal

Implement:

tests/test_ml_api.ts

## Constraints

- Read Mercado Livre credentials from .env.
- OAuth is already implemented.
- Do not implement or redesign OAuth.
- Do not introduce unnecessary dependencies.
- Use existing project tooling; verifier runtime dependencies are allowed.
- Do not work on future milestones.
- Modify only the files required for M01.

## Expected behavior

Search:

ssd 1tb sata

Print for each product:

title
price
permalink

## Success condition

Do not stop until:

./scripts/verify.sh M01

returns exit code 0.

If verification fails,
analyze the failure,
modify the implementation,
and try again.

## Authentication

A valid Mercado Livre access token is expected to exist in .env.

If the token is invalid or expired:

- stop;
- report the error;
- do not redesign OAuth;
- do not ask for new dependencies.

## Configuration is already implemented.

Use:

    src/common/config.ts

Do not implement another configuration loader.
