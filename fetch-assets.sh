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

