#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <milestone>"
    exit 2
fi

echo "== Running verifier for $1 =="

case "$1" in
    M01)
        npx tsx tests/test_ml_api.ts
        ;;
    *)
        echo "Unknown milestone: $1"
        exit 2
        ;;
esac

echo
echo "PASS"
