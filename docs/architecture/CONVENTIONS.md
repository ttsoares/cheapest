## Language:

TypeScript

## Package manager:

npm

## Formatter:

Prettier

## Linter:

ESLint

## Environment:

.env
Secrets never committed.

## Logging:

console for MVP.

## Error handling:

throw unless recoverable.

## Tests:

Playwright only after backend exists.

## Verification Output

Verification scripts SHALL produce deterministic output.

The standard format is:

VERIFY: <milestone>

STATUS: PASS|FAIL

RESULTS:
...

SUMMARY:
...

On failure:

VERIFY: <milestone>

STATUS: FAIL

REASON:
...

DETAIL:
...

Milestones may extend the RESULTS section, but the top-level structure SHALL remain consistent across all verification scripts.
