#!/bin/bash
# Sync content files from the aios-starter-kit workspace into this repo's content/ directory.
# Only the page-copy markdowns are synced — internal workspace docs (brand, voice, sitemap,
# photography manifest, SEO) stay in the workspace and do NOT leave it.
#
# Why: internal docs may contain load-bearing silent-partner context (client address, founder
# legal name, client consent details) that must never reach the sibling repo — even though
# the repo never renders them. The silent-partner rule applies to the git history too.
#
# Run before every commit if workspace copy has changed.

set -e

WORKSPACE="/Users/jsr2d2/Solid AIOS/AI Agency/aios-starter-kit"
SOURCE="$WORKSPACE/outputs/clients/construction/website"
DEST="$(cd "$(dirname "$0")/.." && pwd)/content"

if [ ! -d "$SOURCE" ]; then
  echo "ERROR: workspace source not found at $SOURCE"
  exit 1
fi

mkdir -p "$DEST"

# Whitelisted files: page-copy markdowns only.
allowed=(
  "homepage-nl.md"
  "services-nl.md"
  "contact-nl.md"
  "offerte-nl.md"
  "projects-willem-van-de-veldekade-nl.md"
  "projects-nieuwdammerdijk-nl.md"
  "projects-zsw-haarlem-nl.md"
  "projects-crynssenstraat-nl.md"
  "projects-orteliusstraat-nl.md"
)

# Purge anything in DEST that isn't on the allow-list. Prevents historical internal docs
# from lingering after the whitelist is tightened.
for existing in "$DEST"/*.md; do
  [ -f "$existing" ] || continue
  name=$(basename "$existing")
  keep=0
  for a in "${allowed[@]}"; do
    if [ "$name" = "$a" ]; then keep=1; break; fi
  done
  if [ $keep -eq 0 ]; then
    rm "$existing"
    echo "removed (not on allow-list): $name"
  fi
done

synced=0
for f in "${allowed[@]}"; do
  if [ -f "$SOURCE/$f" ]; then
    cp "$SOURCE/$f" "$DEST/$f"
    synced=$((synced + 1))
  else
    echo "WARN: source missing: $SOURCE/$f"
  fi
done

echo "Synced $synced page-copy files from workspace → content/"
