#!/usr/bin/env bash
set -euo pipefail
mkdir -p assets/fonts
# Figma export URLs are only bootstrap sources. Existing local assets are kept.
figma_source='https://www.figma.com/api/mcp/asset/361b46ec-20f7-416c-be8f-dd9c0be19278'
for asset in 9dbec cecd5 11596 c45b1 4ce41 b8004 14005 d1f63 b84ab; do
  if [ ! -s "assets/$asset.svg" ]; then
    curl --fail --location --retry 2 --silent --show-error "$figma_source/$asset.svg" --output "assets/$asset.svg"
  fi
done
fonts_source='https://raw.githubusercontent.com/IrinaKratyuk/popups/d935e6a587f1c557820149fdd7066879f3628df6/assets/fonts'
for font in cbuc-icons.ttf cbuc-icons24.ttf Accordion-Font.ttf; do
  if [ ! -s "assets/fonts/$font" ]; then
    curl --fail --location --retry 2 --silent --show-error "$fonts_source/$font" --output "assets/fonts/$font"
  fi
done
if [ ! -s assets/fonts/Inter.woff2 ]; then
  curl --fail --location --retry 2 --silent --show-error "$fonts_source/Inter/Inter-roman.var.woff2" --output assets/fonts/Inter.woff2
fi

# Original assets for the card, filter, and selection states.
card_source='https://www.figma.com/api/mcp/asset/4fc10926-0331-4df1-b683-a2af4083c26e'
for asset in d52a1.svg 51bde.svg 206b5.png 6342e.png 56aee.svg 7074e.svg 56b4e.svg; do
  if [ ! -s "assets/$asset" ]; then curl --fail --location --retry 2 --silent --show-error "$card_source/$asset" --output "assets/$asset"; fi
done
params_source='https://www.figma.com/api/mcp/asset/7c43189d-51a0-478e-b137-9c18a3d86183'
for asset in 5759b.svg cf5b2.png; do
  if [ ! -s "assets/$asset" ]; then curl --fail --location --retry 2 --silent --show-error "$params_source/$asset" --output "assets/$asset"; fi
done
filter_source='https://www.figma.com/api/mcp/asset/66bf312f-fd3e-4e21-aee5-559e75220c6a'
for asset in 6d0b9.svg cf100.svg e1112.svg; do
  if [ ! -s "assets/$asset" ]; then curl --fail --location --retry 2 --silent --show-error "$filter_source/$asset" --output "assets/$asset"; fi
done
multi_source='https://www.figma.com/api/mcp/asset/aa60b357-ad29-4acd-b90f-018a3403bcd2'
for asset in e4cbc.svg 8a255.svg; do
  if [ ! -s "assets/$asset" ]; then curl --fail --location --retry 2 --silent --show-error "$multi_source/$asset" --output "assets/$asset"; fi
done

python3 - <<'PY'
from pathlib import Path
import xml.etree.ElementTree as ET
for path in Path("assets").glob("*.svg"):
    root = ET.parse(path).getroot()
    assert root.tag.endswith("svg"), path
    print(path, root.attrib.get("width"), root.attrib.get("height"))
for path in Path("assets/fonts").iterdir():
    assert path.stat().st_size > 1000, path
PY

