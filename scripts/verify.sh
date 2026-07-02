#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <milestone>"
    exit 2
fi

MILESTONE="$1"

echo "VERIFY: ${MILESTONE}"
echo

case "$MILESTONE" in
    M01)
        npx tsx tests/test_ml_api.ts
        ;;
    *)
        echo "STATUS: FAIL"
        echo
        echo "REASON:"
        echo "Unknown milestone: ${MILESTONE}"
        exit 2
        ;;
esac

