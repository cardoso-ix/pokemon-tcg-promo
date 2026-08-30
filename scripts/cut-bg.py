from pathlib import Path

from PIL import Image
from rembg import remove

root = Path(__file__).resolve().parents[1] / "public" / "produtos"
jobs = [
    ("escuridao-absoluta.png", "escuridao-absoluta-cut.png"),
    ("treinador-avancado.png", "treinador-avancado-cut.png"),
    ("blister-caos-ascendente.png", "boosters-blister-cut.png"),
    ("tripack-equilibrio.png", "tripack-cut.png"),
    ("mewtwo-equipe-rocket.png", "mewtwo-equipe-rocket-cut.png"),
    ("ferramentas-treinador.png", "ferramentas-treinador-cut.png"),
    ("sleeves-central.png", "sleeves-central-cut.png"),
]

for src_name, dest_name in jobs:
    src = root / src_name
    dest = root / dest_name
    print(f"Cutting {src_name}...")
    image = Image.open(src).convert("RGBA")
    cut = remove(image)
    cut.save(dest, "PNG")
    bands = cut.getbands()
    extrema = cut.getextrema()
    alpha_minmax = extrema[3] if len(extrema) > 3 else None
    print(f"  saved {dest_name} bands={bands} alpha={alpha_minmax} size={dest.stat().st_size}")
