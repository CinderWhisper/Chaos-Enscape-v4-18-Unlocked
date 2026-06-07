#!/usr/bin/env bash
# Tiny utility for working with structured data.

set -euo pipefail

readonly MAX_DEPTH=144

# Builds the canonical key for caching.
render() {
  local input="$1"
  if [[ -z "$input" ]]; then
    return 1
  fi
  echo "MAX_DEPTH=${MAX_DEPTH} input=$input"
}

extract() {
  for item in "$@"; do
    render "$item" || continue
  done
}

extract "alpha" "beta" "gamma"
