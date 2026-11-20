import { Code2, Shield, Cpu, Server } from 'lucide-react';

export const EMAIL = 'archanaendushakya@gmail.com';
export const PHONE = '+91 9334038807';
export const GITHUB_URL = 'https://github.com/archanashakya2809-ui';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/archana-shakya/';

export const PROJECTS_DATA = [
  {
    id: 'ticket-system',
    title: 'Enterprise Ticket Management System',
    status: 'Production Enterprise System',
    badgeColor: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
    summary:
      'Multi-tenant enterprise ticketing platform engineered with strict PostgreSQL Row-Level Security (RLS), granular RBAC across six operational roles, and automated category-to-team ticket routing.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'RBAC', 'Row-Level Security'],
    bullets: [
      'Designed a multi-company PostgreSQL schema enforced with Row-Level Security (RLS) and role-based access control.',
      'Built role-based dashboards for six distinct operational roles with automated category-to-team ticket routing.',
      'Developed a responsive React + TypeScript frontend for real-time ticket lifecycle tracking.',
    ],
    mediaPlaceholderLabel: 'Dashboard & Multi-Role Routing UI Preview (Ready for Your Media)',
    architecture: {
      subtitle: 'Multi-Tenant Security & Automated Routing Architecture',
      problem:
        'Enterprise organizations handling cross-company tickets require strict tenant data isolation at the database layer alongside deterministic routing across six operational roles.',
      solution:
        'Enforced tenant boundaries directly via PostgreSQL Row-Level Security policies paired with JWT role claims in FastAPI and dedicated React views per role.',
      stages: [
        {
          step: '01',
          title: 'React + TypeScript Role Dashboards',
          detail: '6 tailored role views (Admin, Manager, Team Lead, Agent, Auditor, Client) with real-time status & SLA tracking.',
          tech: 'React · TypeScript · Tailwind',
        },
        {
          step: '02',
          title: 'FastAPI Auth & RBAC Middleware',
          detail: 'Validates JWT claims, injects tenant context session variables, and enforces endpoint-level permission guards.',
          tech: 'Python · FastAPI · RBAC',
        },
        {
          step: '03',
          title: 'Category-to-Team Routing Engine',
          detail: 'Maps incoming ticket categories and priority levels to specialized engineering/support queues automatically.',
          tech: 'Rule Engine · REST APIs',
        },
        {
          step: '04',
          title: 'PostgreSQL Multi-Tenant Schema + RLS',
          detail: 'Database-level Row-Level Security policies guarantee zero cross-company data leakage even under complex queries.',
          tech: 'PostgreSQL · RLS Policies',
        },
      ],
    },
  },
  {
    id: 'pdf-autotagging',
    title: 'PDF/UA Auto-Tagging & Accessibility Pipeline',
    status: 'Ongoing · ML & Document Engineering',
    badgeColor: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/25',
    summary:
      'End-to-end ML-assisted document engineering pipeline transforming untagged PDFs into compliant PDF/UA accessible files with automated structure-tree injection and veraPDF validation.',
    tags: ['Python', 'FastAPI', 'DocLayout-YOLO', 'LayoutLMv3', 'Docling', 'pikepdf', 'PyMuPDF', 'veraPDF', 'Docker'],
    bullets: [
      'Built a multi-stage FastAPI pipeline converting untagged PDFs into compliant PDF/UA accessible documents.',
      'Integrated layout models (DocLayout-YOLO, LayoutLMv3, Docling) and OCR engines (PaddleOCR, Surya, Tesseract) with pikepdf and PyMuPDF.',
      'Automated compliance validation with veraPDF and engineered training-data pipelines for model fine-tuning.',
    ],
    mediaPlaceholderLabel: 'Before/After PDF Structure Tree & veraPDF Report (Ready for Your Media)',
    architecture: {
      subtitle: '5-Stage ML Layout Detection & PDF/UA Compliance Pipeline',
      problem:
        'Manual remediation of untagged PDFs for PDF/UA accessibility compliance is slow, error-prone, and scales poorly across large document archives.',
      solution:
        'Combined computer vision layout detectors, multimodal document transformers, low-level PDF structure tree manipulation, and automated veraPDF verification inside containerized FastAPI workers.',
      stages: [
        {
          step: '01',
          title: 'Untagged PDF Ingestion & Page Rasterization',
          detail: 'Extracts raw text spans, bounding boxes, font metrics, and high-DPI page renders via PyMuPDF.',
          tech: 'PyMuPDF · FastAPI',
        },
        {
          step: '02',
          title: 'Layout & OCR Model Ensemble',
          detail: 'Detects headings, paragraphs, tables, lists, and figures using DocLayout-YOLO, LayoutLMv3, Docling, and PaddleOCR / Surya / Tesseract.',
          tech: 'DocLayout-YOLO · LayoutLMv3 · Docling',
        },
        {
          step: '03',
          title: 'Logical Reading Order & Semantic Hierarchy',
          detail: 'Reconstructs multi-column reading sequences and maps detected blocks to standard PDF semantic tags (H1–H6, P, Table, L, Figure).',
          tech: 'Python · Spatial Graph',
        },
        {
          step: '04',
          title: 'Structure Tree & Tag Injection',
          detail: 'Writes ISO-compliant StructTreeRoot, ParentTree, and marked-content sequences directly into the PDF binary.',
          tech: 'pikepdf · PyMuPDF',
        },
        {
          step: '05',
          title: 'Automated veraPDF Validation & Fine-Tuning Loop',
          detail: 'Runs headless veraPDF PDF/UA profiles to verify compliance and feeds curated annotations back into model training pipelines.',
          tech: 'veraPDF · Docker',
        },
      ],
    },
  },
  {
    id: 'rag-resume-generator',
    title: 'RAG-Powered AI Resume Generator',
    status: 'AI & Backend Engineering',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
    summary:
      'Context-aware resume synthesis service powered by Retrieval-Augmented Generation (RAG) and Flask REST APIs, packaged in Docker for consistent, low-latency deployment.',
    tags: ['Python', 'Flask', 'RAG', 'REST APIs', 'Docker'],
    bullets: [
      'Built an AI Resume Generator using Python and Flask to automate tailored resume creation.',
      'Integrated Retrieval-Augmented Generation (RAG) for higher factual accuracy and contextual relevance.',
      'Optimized REST APIs and containerized the service with Docker for reliable deployment.',
    ],
    mediaPlaceholderLabel: 'RAG Prompt Grounding & Resume Output Preview (Ready for Your Media)',
    architecture: {
      subtitle: 'Retrieval-Augmented Generation & Containerized Flask Service',
      problem:
        'Pure LLM resume generation frequently hallucinates skills or produces generic phrasing disconnected from verified candidate experience.',
      solution:
        'Grounded generation with a RAG retrieval pipeline that pulls verified candidate accomplishments matched to target job descriptions.',
      stages: [
        {
          step: '01',
          title: 'Candidate Profile & Target JD Ingestion',
          detail: 'Parses structured experience blocks and target job requirements via clean JSON REST endpoints.',
          tech: 'Flask · REST APIs',
        },
        {
          step: '02',
          title: 'RAG Context Retrieval Engine',
          detail: 'Retrieves relevant experience snippets and domain keywords to ground generation in factual history.',
          tech: 'Python · RAG Pipeline',
        },
        {
          step: '03',
          title: 'Structured Resume Synthesis & Optimization',
          detail: 'Generates ATS-aligned bullet points and exports formatted resume payloads with low API latency.',
          tech: 'Python · Prompt Engineering',
        },
        {
          step: '04',
          title: 'Dockerized Deployment',
          detail: 'Packaged with deterministic dependencies in Docker containers for seamless environment parity.',
          tech: 'Docker · Linux',
        },
      ],
    },
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Software Developer',
    company: 'Hudsmer Business Solutions',
    location: 'Chennai',
    period: 'Dec 2025 – Present',
    current: true,
    bullets: [
      'Built an enterprise ticket management system (React, PostgreSQL) with role-based access.',
      'Build automation tools for PDF auto-tagging and accessibility (PDF/UA).',
      'Developed a FastAPI pipeline using ML layout models and veraPDF validation.',
      'Use Docker and Git/GitHub for deployment and collaboration.',
    ],
  },
  {
    role: 'AI Intern / Artificial Intelligence Engineer',
    company: 'Blue Silicon Infotech',
    location: 'Pallavaram',
    period: 'Aug 2025 – Nov 2025',
    current: false,
    bullets: [
      'Built an AI Resume Generator with Python and Flask.',
      'Added RAG (Retrieval-Augmented Generation) for more accurate content.',
      'Optimized REST APIs and containerized deployment with Docker.',
    ],
  },
  {
    role: 'Back End Developer / SQL Developer',
    company: 'Ilan Tech Solutions',
    location: 'Chennai',
    period: 'Jun 2025 – Sep 2025',
    current: false,
    bullets: [
      'Built backend modules for enterprise appraisal systems (Flask, SQL).',
      'Implemented role-based access control and secure authentication.',
      'Optimized SQL queries and designed database schemas.',
    ],
  },
];

export const SKILL_CATEGORIES = [
  { id: 'Languages', label: 'Languages', icon: Code2, skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'] },
  {
    id: 'Backend & Security',
    label: 'Backend & Security',
    icon: Shield,
    skills: ['Flask', 'FastAPI', 'PostgreSQL', 'REST APIs', 'RBAC', 'Row-Level Security'],
  },
  {
    id: 'AI, Vision & PDF',
    label: 'AI, Vision & PDF',
    icon: Cpu,
    skills: ['RAG', 'LayoutLMv3', 'DocLayout-YOLO', 'Docling', 'PaddleOCR', 'Surya', 'Tesseract', 'PyMuPDF', 'pikepdf', 'veraPDF'],
  },
  {
    id: 'Frontend & DevOps',
    label: 'Frontend & DevOps',
    icon: Server,
    skills: ['React', 'HTML', 'CSS', 'Linux', 'Docker', 'Git', 'GitHub', 'n8n workflow automation'],
  },
];

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Education & Contact' },
];
