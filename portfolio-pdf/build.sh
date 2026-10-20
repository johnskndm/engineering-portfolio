#!/bin/zsh
# Builds Jacob-Johnson-Portfolio.pdf from portfolio.html using headless Google Chrome.
# Usage:  ./portfolio-pdf/build.sh      (run from anywhere)
set -euo pipefail

DIR="${0:A:h}"
ROOT="${DIR:h}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="$DIR/Jacob-Johnson-Portfolio.pdf"

# Print-size copies of the large photos (keeps the PDF small).
mkdir -p "$DIR/assets"
for src in "$ROOT/public/projects/golf-club-face/machined-face-angle.jpg" \
           "$ROOT/public/projects/golf-club-face/machined-face-front.jpg" \
           "$ROOT/public/images/headshot.jpg"; do
  dst="$DIR/assets/${src:t}"
  if [[ ! -f "$dst" || "$src" -nt "$dst" ]]; then
    sips -Z 2200 -s format jpeg -s formatOptions 85 "$src" --out "$dst" >/dev/null
  fi
done

PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" \
  --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="$OUT" "file://$DIR/portfolio.html" 2>/dev/null

echo "Saved: $OUT ($(mdls -raw -name kMDItemNumberOfPages "$OUT" 2>/dev/null || echo '?') pages)"
