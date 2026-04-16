#!/bin/bash
# Sync content files from the aios-starter-kit workspace into this repo's content/ directory.
# Run this before every git commit if workspace copy has changed.

set -e

WORKSPACE="/Users/jsr2d2/Solid AIOS/AI Agency/aios-starter-kit"
SOURCE="$WORKSPACE/outputs/clients/construction/website"
DEST="$(cd "$(dirname "$0")/.." && pwd)/content"

if [ ! -d "$SOURCE" ]; then
  echo "ERROR: workspace source not found at $SOURCE"
  exit 1
fi

mkdir -p "$DEST"
cp "$SOURCE"/*.md "$DEST/"

count=$(ls "$DEST"/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "Synced $count content files from workspace → content/"
