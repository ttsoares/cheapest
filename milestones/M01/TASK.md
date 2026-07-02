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

The verifier SHALL perform a search using the literal query: 'ssd 1tb sata'. 
This value is part of the M01 acceptance criteria and shall not be parameterized.

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

## Verifier Output Contract

The verifier SHALL produce deterministic, human-readable output.

Output format:

VERIFY: M01

STATUS: PASS

RESULTS:
<title> | <price> | <permalink>
...

SUMMARY:
Products: <count>

On failure:

VERIFY: M01

STATUS: FAIL

REASON:
<human-readable description>

DETAIL:
<optional diagnostic information>

The verifier SHALL print exactly one product per line using the format:

<title> | <price> | <permalink>

The output format is considered part of the milestone specification and shall remain stable unless explicitly updated.

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

## HTTP Error Handling

The verifier SHALL issue exactly one HTTP request to the Search API.

Retry logic is out of scope for M01.

If the API returns an HTTP error (including 429 Too Many Requests), the verifier SHALL:

- report the failure using the standard verifier output format;
- include the HTTP status code in the DETAIL section;
- terminate with the appropriate exit code.

Automatic retries, backoff strategies, and rate-limit handling are deferred to future milestones.
