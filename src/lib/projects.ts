export interface Project {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  tags: string[];
  summary: string;
  problem: string;
  approach: string[];
  results: string[];
  stack: string[];
  link?: { label: string; href: string };
  repo?: string;
}

export const projects: Project[] = [
  {
    slug: "virtual-tryon",
    title: "AI Virtual Try-On & 3D Reconstruction",
    tagline: "Latent-diffusion garment transfer and VTON360 reconstruction, served from FastAPI microservices.",
    period: "Jul 2025 — Jun 2026",
    role: "AI Engineer · End-to-end",
    tags: ["Diffusion", "3D", "FastAPI", "Celery"],
    summary:
      "Production virtual try-on pipeline serving both 2D generation and full 3D reconstruction to a Node.js backend.",
    problem:
      "Photorealistic garment transfer on human bodies is memory-hungry and slow. The system had to fit T4 GPUs (16GB) while still delivering usable latency for 2D and full 3D outputs.",
    approach: [
      "Designed and trained latent diffusion models for virtual try-on, adapting a VTON360-inspired 3D reconstruction pipeline.",
      "Optimized GPU memory usage from ~20GB to ~14GB VRAM to enable T4 deployment.",
      "Built FastAPI microservices from scratch to serve 2D and 3D models behind a larger Node.js backend.",
      "Implemented async job processing with Celery + Redis for long-running 3D jobs.",
    ],
    results: [
      "~1–2 min latency for 2D generation.",
      "~40–50 min full 3D reconstruction pipeline.",
      "Deployed on 16GB T4 GPUs instead of 24GB+ hardware.",
    ],
    stack: ["PyTorch", "Diffusion", "FastAPI", "Celery", "Redis", "Docker"],
    link: { label: "Live platform", href: "https://prova-frontend.pages.dev/" },
  },
  {
    slug: "semantic-video-retrieval",
    title: "Semantic Video Retrieval Platform",
    tagline: "Natural-language search across surveillance video using YOLOv8, BLIP captions, and ChromaDB.",
    period: "Jan 2025 — Jul 2025",
    role: "AI Engineer · Backend",
    tags: ["CV", "Vector Search", "RAG-ish"],
    summary:
      "End-to-end computer vision platform enabling natural-language search over long-form surveillance video.",
    problem:
      "Surveillance archives are unindexed and unsearchable — operators can’t answer questions like ‘find the person in a red jacket near the entrance’.",
    approach: [
      "Pipeline: YOLOv8 detection → object tracking → BLIP scene captioning → Sentence-Transformers embeddings → ChromaDB.",
      "FastAPI microservices with Celery + Redis for async video processing while keeping APIs responsive.",
      "Layered backend: REST APIs, vector search, analytics, multi-project workspace management.",
      "Streamlit dashboard for processing, semantic search, analytics, and system monitoring.",
    ],
    results: [
      "Frame-accurate natural-language search across hours of footage.",
      "Async architecture keeps p95 API latency stable during ingest.",
    ],
    stack: ["YOLOv8", "BLIP", "ChromaDB", "FastAPI", "Celery", "Redis", "Streamlit"],
    repo: "https://github.com/amrorabea/intelligent-surveillance",
  },
  {
    slug: "tissueinsight",
    title: "TissueInsight — Spatial Gene Expression",
    tagline: "Cancer prediction from histopathology + spatial transcriptomics, with a RAG assistant for gene context.",
    period: "Dec 2024 — Jan 2025",
    role: "ML Engineer",
    tags: ["Medical", "ML", "RAG"],
    summary:
      "End-to-end computational pipeline integrating tissue imaging and spatial transcriptomics for cancer prediction.",
    problem:
      "Combining histopathology and spatial transcriptomics is fragmented — preprocessing, modeling, and interpretability usually live in separate scripts.",
    approach: [
      "Automated preprocessing: tissue segmentation, spot extraction, gene-expression normalization, feature harmonization (OpenCV + Scanpy).",
      "Trained LightGBM, XGBoost, and CNNs to predict cancer status from expression + morphology.",
      "FastAPI inference platform with a RAG module for semantic retrieval of gene-function knowledge.",
      "Visualization tools for spatial expression, morphology, and predictions.",
    ],
    results: [
      "One workflow from raw slides to prediction + interpretability.",
      "Interactive RAG assistant grounded in gene-function literature.",
    ],
    stack: ["PyTorch", "OpenCV", "Scanpy", "LightGBM", "XGBoost", "FastAPI", "RAG"],
    repo: "https://github.com/amrorabea/TissueInsight",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);