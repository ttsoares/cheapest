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
Available.

If authentication fails:

1. Try refresh token.
2. If refresh fails, stop and report.
3. Never redesign OAuth.
