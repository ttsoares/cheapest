import dotenv from "dotenv";

// Load environment variables from the repository root.
const result = dotenv.config();

if (result.error) {
    throw new Error(
        "Unable to load .env from the repository root."
    );
}

function required(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
}

export const config = {
    clientId: required("ML_CLIENT_ID"),
    clientSecret: required("ML_CLIENT_SECRET"),
    accessToken: required("ML_ACCESS_TOKEN"),
    siteId: process.env.ML_SITE_ID ?? "MLB",
    apiBaseUrl:
        process.env.ML_API_BASE_URL ??
        "https://api.mercadolibre.com",
} as const;
