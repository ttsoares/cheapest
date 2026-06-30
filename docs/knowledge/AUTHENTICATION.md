# Authentication Status

## Mercado Livre OAuth

Status:
READY

Implemented by:
Human

Business code:
Must not implement OAuth.

Credentials:
Loaded from .env

Access token:
May expire.

Refresh token:
Made by human.

If authentication fails:

Stop execution.
Report that the Mercado Livre access token is missing or expired.
Do not attempt to implement OAuth.
Do not attempt to obtain a new token automatically.
Wait for a human to update .env.
