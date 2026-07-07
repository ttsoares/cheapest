# Authentication Status

## Mercado Livre OAuth

Status:
READY

Implemented by:
Human

Business code:
The application does not perform the OAuth authorization flow.
A human performs the initial authorization and provides the first access token and refresh token.
The application may automatically refresh expired access tokens using the stored refresh token.


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
