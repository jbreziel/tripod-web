#!/bin/bash
# Copy curated portfolio photos from the workspace tripod-website-photos/ folder.
# Each photo lands in a specific named slot — no alphabetical guessing.
# Prints a checklist showing which slots are filled and which are missing.

set -e

WORKSPACE="/Users/jsr2d2/Solid AIOS/AI Agency/aios-starter-kit"
SOURCE="$WORKSPACE/context/import/tripod-website-photos"
REPO="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$REPO/public/images/portfolio"
CRAFT_DEST="$REPO/public/images/craftsmanship"
HERO_DEST="$REPO/public/images/hero"

mkdir -p "$DEST" "$CRAFT_DEST" "$HERO_DEST"

filled=0
missing=0
missing_list=()
total_slots=64  # 5 projects × 10 + 8 ZSW plans + 4 craftsmanship + 2 hero

# Copy a single named slot and report status
copy_slot() {
  local source_path="$1"   # source file path
  local dest_path="$2"     # full destination file path
  local label="$3"         # human-readable label for the report

  if [ -f "$source_path" ]; then
    cp "$source_path" "$dest_path"
    filled=$((filled + 1))
    echo "  [+] $label"
  else
    missing=$((missing + 1))
    missing_list+=("$label")
    echo "  [ ] $label  (missing)"
  fi
}

# --- Project case studies (5 projects × 10 slots) ---
for slug in willem-van-de-veldekade nieuwdammerdijk zsw-haarlem crynssenstraat orteliusstraat; do
  echo ""
  echo "=== $slug ==="
  mkdir -p "$DEST/$slug"
  rm -f "$DEST/$slug"/*.jpg "$DEST/$slug"/*.JPG 2>/dev/null || true

  # Hero — source 00-hero.jpg, dest hero.jpg
  copy_slot "$SOURCE/$slug/00-hero.jpg" "$DEST/$slug/hero.jpg" "$slug/hero"

  # Gallery photos — source 01.jpg, dest photo-01.jpg
  for i in 01 02 03 04 05 06 07 08 09; do
    copy_slot "$SOURCE/$slug/$i.jpg" "$DEST/$slug/photo-$i.jpg" "$slug/photo-$i"
  done
done

# --- ZSW design plans (8 slots) ---
echo ""
echo "=== zsw-haarlem/plans ==="
mkdir -p "$DEST/zsw-haarlem-plans"
rm -f "$DEST/zsw-haarlem-plans"/*.jpg 2>/dev/null || true
for i in 01 02 03 04 05 06 07 08; do
  source_idx="$i"
  dest_idx=$(printf "%02d" $((10#$i - 1)))
  copy_slot "$SOURCE/zsw-haarlem/plans/${source_idx}-plan.jpg" "$DEST/zsw-haarlem-plans/plan-${dest_idx}.jpg" "zsw-haarlem/plans/plan-${dest_idx}"
done

# --- Homepage craftsmanship strip (4 slots) ---
echo ""
echo "=== homepage craftsmanship ==="
rm -f "$CRAFT_DEST"/*.jpg 2>/dev/null || true
copy_slot "$SOURCE/homepage/01-massief-hout.jpg" "$CRAFT_DEST/detail-1.jpg" "homepage/massief-hout"
copy_slot "$SOURCE/homepage/02-natuursteen.jpg" "$CRAFT_DEST/detail-2.jpg" "homepage/natuursteen"
copy_slot "$SOURCE/homepage/03-metaalwerk.jpg" "$CRAFT_DEST/detail-3.jpg" "homepage/metaalwerk"
copy_slot "$SOURCE/homepage/04-tegelwerk.jpg" "$CRAFT_DEST/detail-4.jpg" "homepage/tegelwerk"

# --- Sitewide hero imagery (2 slots — from WvdV or Nieuwdammerdijk only) ---
echo ""
echo "=== sitewide hero imagery ==="
rm -f "$HERO_DEST"/*.jpg 2>/dev/null || true
copy_slot "$SOURCE/homepage/hero-keuken.jpg" "$HERO_DEST/keuken.jpg" "hero/keuken"
copy_slot "$SOURCE/homepage/hero-badkamer.jpg" "$HERO_DEST/badkamer.jpg" "hero/badkamer"

# --- Summary ---
echo ""
echo "=========================================="
echo "  Filled:  $filled / $total_slots slots"
echo "  Missing: $missing"
echo "=========================================="

if [ $missing -gt 0 ]; then
  echo ""
  echo "Missing slots — drop a JPG into the matching folder in"
  echo "  $SOURCE/"
  echo ""
  for m in "${missing_list[@]}"; do
    echo "  - $m"
  done
fi
