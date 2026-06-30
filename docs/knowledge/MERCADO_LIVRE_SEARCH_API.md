# Mercado Livre Search API

Status: VERIFIED

Last verified: 2026-06-30

## Endpoint

GET https://api.mercadolibre.com/sites/MLB/search

## Authentication

Header:

Authorization: Bearer <ML_ACCESS_TOKEN>

## Query parameters

q

Example:

ssd 1tb sata

## Example

GET /sites/MLB/search?q=ssd%201tb%20sata HTTP/1.1
Host: api.mercadolibre.com
Authorization: Bearer APP_USR_xxxxxxxxx
Accept: application/json

## Expected response

JSON

{
  "results": [
    {
      "title": "...",
      "price": 399.90,
      "permalink": "..."
    }
  ]
}

## Notes

This endpoint has been verified manually.

Use only this endpoint during Milestone M01.
