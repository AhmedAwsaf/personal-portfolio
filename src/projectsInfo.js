/**
 * Projects Information
 * ====================
 * You can edit this file to update all information, images, links,
 * and tech stacks for each project shown in the portfolio.
 */

export const projects = [
  {
    id: 'cloud-analytics',
    title: 'Pulse Analytics Engine',
    tagline: 'Real-time telemetry and metrics platform with interactive visual analytics.',
    category: 'Full-Stack & Cloud',
    year: '2024',
    status: 'Live Production',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description:
      'An enterprise telemetry dashboard delivering sub-second query latency across millions of operational data points. Features distributed event ingestion, configurable anomaly alerts, and dynamic drag-and-drop report builders.',
    highlights: [
      'Sub-second query response over 10M+ events using partitioned SQL and Redis caching.',
      'Custom SVG & Canvas charts rendering 60fps real-time data streams.',
      'Comprehensive role-based access control (RBAC) with audit logging.',
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Astryx UI', 'Tailwind CSS', 'Docker'],
    links: {
      demo: 'https://example.com/demo',
      github: 'https://github.com/example/pulse-analytics',
    },
  },
  {
    id: 'synapse-design-system',
    title: 'Synapse Design System',
    tagline: 'Accessible multi-brand design tokens and modular UI component library.',
    category: 'Design Engineering',
    year: '2024',
    status: 'Open Source',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description:
      'A production design system bridging Figma design tokens directly to React code. Built with strict WCAG AAA color contrast, fluid responsive typography, and comprehensive keyboard-first interactive behaviors.',
    highlights: [
      'Automated Figma-to-code token sync reducing UI implementation divergence by 80%.',
      'Over 40 accessible, headless and styled components with zero layout shift.',
      'Built-in theme switcher supporting high-contrast, dark, and light modes.',
    ],
    techStack: ['React 19', 'Astryx UI', 'TypeScript', 'Tailwind CSS', 'Figma API', 'StyleX'],
    links: {
      demo: 'https://example.com/synapse',
      github: 'https://github.com/example/synapse-design-system',
    },
  },
  {
    id: 'neuroviz-ai',
    title: 'NeuroViz AI Studio',
    tagline: 'Interactive graph visualization workspace for neural networks and embeddings.',
    category: 'AI & Machine Learning',
    year: '2023',
    status: 'Featured Project',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description:
      'A WebGL2-powered 3D graph visualizer allowing researchers and engineers to explore high-dimensional embedding spaces, inspect layer weights, and run real-time clustering algorithms in the browser.',
    highlights: [
      'Hardware-accelerated force-directed graph layout supporting up to 50,000 nodes.',
      'Interactive UMAP and t-SNE dimensionality reduction projection.',
      'Exportable high-resolution vector figures for academic publication.',
    ],
    techStack: ['React 19', 'WebGL2', 'Three.js', 'Python', 'FastAPI', 'Tailwind CSS'],
    links: {
      demo: 'https://example.com/neuroviz',
      github: 'https://github.com/example/neuroviz-studio',
    },
  },
  {
    id: 'hyperscale-db',
    title: 'HyperStore Key-Value DB',
    tagline: 'Distributed LSM-tree storage engine with Raft consensus and gRPC API.',
    category: 'Systems & Infrastructure',
    year: '2023',
    status: 'Research Project',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description:
      'A lightweight distributed key-value store engineered for predictable tail latencies. Implements log-structured merge trees (LSM), memory-mapped commit logs, and linearizable consensus via Raft.',
    highlights: [
      'Achieved 99.9th percentile read latencies under 2ms during heavy compaction benchmarks.',
      'Zero-downtime cluster node rebalancing with dynamic membership changes.',
      'Comprehensive fuzz-testing test suite verifying Jepsen linearizability.',
    ],
    techStack: ['Go', 'gRPC', 'Protobuf', 'Raft', 'Docker', 'Linux'],
    links: {
      github: 'https://github.com/example/hyperstore',
    },
  },
];

export default projects;
