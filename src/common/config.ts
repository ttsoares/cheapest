export const config = {
    clientId: process.env.ML_CLIENT_ID!,
    clientSecret: process.env.ML_CLIENT_SECRET!,
    accessToken: process.env.ML_ACCESS_TOKEN!,
    siteId: process.env.ML_SITE_ID ?? "MLB",
    apiBaseUrl:
        process.env.ML_API_BASE_URL ??
        "https://api.mercadolibre.com",
};
