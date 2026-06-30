# Mercado Livre OAuth

Status: VERIFIED

Last verified: 2026-06-28

## Authorization URL

https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=<CLIENT_ID>&redirect_uri=<REDIRECT_URI>

Required parameters

- response_type=code
- client_id
- redirect_uri

## Token exchange

curl -X POST \
https://api.mercadolibre.com/oauth/token \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Accept: application/json" \
-d "grant_type=authorization_code" \
-d "client_id=<CLIENT_ID>" \
-d "client_secret=<CLIENT_SECRET>" \
-d "code=<TG-CODE>" \
-d "redirect_uri=<REDIRECT_URI>"

Returns

- access_token
- expires_in

## Notes

This flow has been verified.

Business code must NOT reimplement OAuth.

Credentials are stored in .env.
