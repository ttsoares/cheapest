ADR-001
Decision:
Use TypeScript end-to-end.

Reason:
Target stack is NextJS.

Alternatives:
Python backend.

Status:
Accepted.


ADR-002
Decision:
Use official Mercado Livre API.

Reason:
More stable than scraping.

Status:
Accepted.


ADR-003
Decision:
Pichau provider investigates JSON endpoints before Playwright.

Reason:
Less brittle and faster.

Status:
Accepted.

## Configuration

The project uses `dotenv` to load configuration.

Configuration is accessed exclusively through:

    src/common/config.ts

Business code must never:

- call `dotenv.config()`;
- read `.env` directly;
- parse `.env` manually.
