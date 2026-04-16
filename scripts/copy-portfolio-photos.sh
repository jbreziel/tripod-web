#!/bin/bash
# Copy curated portfolio photos from the workspace into public/images/portfolio/
# Picks the first N photos (by filename sort) per project — simple, deterministic.

set -e

WORKSPACE="/Users/jsr2d2/Solid AIOS/AI Agency/aios-starter-kit"
SOURCE="$WORKSPACE/context/import/tripod-photos"
REPO="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$REPO/public/images/portfolio"

PHOTOS_PER_PROJECT=10

mkdir -p "$DEST"

copy_project() {
  local slug="$1"
  local source_dir="$2"
  local target="$DEST/$slug"
  mkdir -p "$target"
  rm -f "$target"/*.jpg "$target"/*.JPG 2>/dev/null || true

  # Get sorted list of jpg/JPG files (excluding video/zip/plans)
  local files=()
  while IFS= read -r f; do files+=("$f"); done < <(
    find "$source_dir" -maxdepth 2 -type f \( -name "*.jpg" -o -name "*.JPG" \) \
      ! -name "FloorPlan*" \
      | sort
  )

  if [ ${#files[@]} -eq 0 ]; then
    echo "  [skip] $slug — no photos found"
    return
  fi

  local count=0
  for f in "${files[@]}"; do
    if [ $count -ge $PHOTOS_PER_PROJECT ]; then break; fi
    local basename=$(basename "$f")
    local ext="${basename##*.}"
    local new_name
    if [ $count -eq 0 ]; then
      new_name="hero.$ext"
    else
      new_name=$(printf "photo-%02d.%s" $count "$ext")
    fi
    cp "$f" "$target/$new_name"
    count=$((count + 1))
  done
  echo "  [✓] $slug — copied $count photos (hero + $((count - 1)) gallery)"
}

# Copy for each known project
echo "Copying portfolio photos..."
copy_project "celsiusstraat" "$SOURCE/full-renovations/Fotos Portfolio/Foto_s Celsiusstraat 44-I"
copy_project "crynssenstraat" "$SOURCE/full-renovations/Fotos Portfolio/Foto_s Crynssenstraat 53-III"
copy_project "orteliusstraat" "$SOURCE/full-renovations/Fotos Portfolio/Foto_s Orteliusstraat 72 hs"
copy_project "nieuwdammerdijk" "$SOURCE/full-renovations/Fotos Portfolio/Fotos Nieuwdammerdijk"

# ZSW: real construction photos only (exclude FloorPlan extractions — those go to a separate design-intent folder)
copy_project "zsw-haarlem" "$SOURCE/zsw-haarlem"

# ZSW atelier MONA plan extractions — separate folder for the "design intent" section
echo ""
echo "Copying ZSW design-intent renders..."
mkdir -p "$DEST/zsw-haarlem-plans"
rm -f "$DEST/zsw-haarlem-plans"/*.jpg 2>/dev/null || true
plan_count=0
for f in $(find "$SOURCE/zsw-haarlem" -type f -name "FloorPlan*" | sort | head -8); do
  cp "$f" "$DEST/zsw-haarlem-plans/plan-$(printf "%02d" $plan_count).jpg"
  plan_count=$((plan_count + 1))
done
echo "  [✓] zsw-haarlem-plans — copied $plan_count design renderings"

# Craftsmanship strip for homepage — pull 4 detail shots from various projects
echo ""
echo "Copying craftsmanship strip photos..."
mkdir -p "$REPO/public/images/craftsmanship"
rm -f "$REPO/public/images/craftsmanship"/*.jpg 2>/dev/null || true
# detail-1: from Celsiusstraat (pick middle of the set — usually a kitchen detail)
cp "$SOURCE/full-renovations/Fotos Portfolio/Foto_s Celsiusstraat 44-I/Celsiusstraat 44-I (15).jpg" "$REPO/public/images/craftsmanship/detail-1.jpg" 2>/dev/null || true
# detail-2: from Crynssenstraat bathroom subfolder
cp "$SOURCE/full-renovations/Fotos Portfolio/Foto_s Crynssenstraat 53-III/Badkamer met spiegel/22.jpg" "$REPO/public/images/craftsmanship/detail-2.jpg" 2>/dev/null || true
# detail-3: from the details folder (lone image)
cp "$SOURCE/details/96164435.jpg" "$REPO/public/images/craftsmanship/detail-3.jpg" 2>/dev/null || true
# detail-4: from Nieuwdammerdijk
cp "$SOURCE/full-renovations/Fotos Portfolio/Fotos Nieuwdammerdijk/862_2160.jpg" "$REPO/public/images/craftsmanship/detail-4.jpg" 2>/dev/null || true
echo "  [✓] craftsmanship — copied 4 detail shots"

echo ""
echo "Done. Portfolio structure:"
ls -la "$DEST"
