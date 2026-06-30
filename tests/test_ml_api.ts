// The Mercado Livre Search API documentation
// is referenced in docs/knowledge/MERCADO_LIVRE_OAUTH.md.


/**
 * AI CONTRACT
 *
 * Do not rename this file.
 *
 * This file is executed by:
 *
 *     ./scripts/verify.sh M01
 *
 * Success:
 *     exit(0)
 *
 * Failure:
 *     exit(1)
 *
 * Do not implement OAuth.
 * Read credentials from .env.
 */

/**
 * Milestone M01
 *
 * Goal:
 * Verify authenticated access to the Mercado Livre API.
 *
 * Expected behavior:
 *   - Search for "ssd 1tb sata"
 *   - Print:
 *       title
 *       price
 *       permalink
 *
 * Exit codes:
 *   0 = success (>= 5 products)
 *   1 = verification failed
 */

async function main(): Promise<void> {
    // TODO:
    // 1. Read credentials from environment.
    // 2. Call Mercado Livre search API.
    // 3. Validate response.
    // 4. Print products.
    // 5. Exit with appropriate status.
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
