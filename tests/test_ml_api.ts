import { config } from '../src/common/config';
import https from 'https';

interface SearchResult {
    title: string;
    price: number;
    permalink: string;
}

interface SearchResponse {
    results: SearchResult[];
}

function fetchSearchResults(): Promise<SearchResponse> {
    const url = new URL(`${config.apiBaseUrl}/sites/${config.siteId}/search`);
    url.searchParams.set('q', 'ssd 1tb sata');

    const options: https.RequestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${config.accessToken}`,
            Accept: 'application/json',
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode !== 200) {
                    reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
                    return;
                }

                try {
                    resolve(JSON.parse(data) as SearchResponse);
                } catch (err) {
                    reject(new Error(`Failed to parse JSON: ${err}`));
                }
            });
        });

        req.on('error', (err) => {
            reject(new Error(`Request error: ${err.message}`));
        });

        req.end();
    });
}

async function main(): Promise<void> {
    const response = await fetchSearchResults();
    const results = response.results;

    console.log('VERIFY: M01');
    console.log('STATUS: PASS');
    console.log('RESULTS:');

    for (const item of results) {
        console.log(
            `${item.title} | ${item.price.toFixed(2)} | ${item.permalink}`
        );
    }

    console.log();
    console.log('SUMMARY:');
    console.log(`Products: ${results.length}`);
}

main().catch((err: Error) => {
    console.log('VERIFY: M01');
    console.log('STATUS: FAIL');
    console.log();
    console.log('REASON:');
    console.log(err.message);
    console.log();
    console.log('DETAIL:');
    console.log(err.message);

    process.exit(1);
});
