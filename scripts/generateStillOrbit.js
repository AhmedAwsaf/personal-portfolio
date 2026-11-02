const fs = require('fs');
const path = require('path');

function generateStillOrbit() {
  const avatarB64 = fs.readFileSync('public/AhmedAwsaf-small.jpg').toString('base64');
  const compB64 = fs.readFileSync('public/Images/3dicons-computer-dynamic-color.png').toString('base64');
  const fileB64 = fs.readFileSync('public/Images/3dicons-file-text-dynamic-color.png').toString('base64');
  const frankB64 = fs.readFileSync('public/Images/3dicons-frankenstein-dynamic-color.png').toString('base64');
  const hashB64 = fs.readFileSync('public/Images/3dicons-hash-dynamic-color.png').toString('base64');
  const noteB64 = fs.readFileSync('public/Images/NOTEBOOK-3D.png').toString('base64');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 500" width="100%" height="100%">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#0b1328"/>
      <stop offset="45%" stop-color="#070c1a"/>
      <stop offset="100%" stop-color="#03050c"/>
    </radialGradient>

    <!-- Ambient Core Glow -->
    <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.32"/>
      <stop offset="50%" stop-color="#0ea5e9" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#070c1a" stop-opacity="0"/>
    </radialGradient>

    <!-- Neon Rim Gradient (Matches Site's #3b82f6 -> #6366f1 -> #a855f7 -> #ec4899) -->
    <linearGradient id="neonRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="35%" stop-color="#6366f1"/>
      <stop offset="70%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>

    <!-- 3D Orbital Track Gradient -->
    <linearGradient id="orbitTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f2fe"/>
      <stop offset="30%" stop-color="#38bdf8"/>
      <stop offset="70%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>

    <!-- Glass Pill Gradients -->
    <linearGradient id="pillGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#070d18" stop-opacity="0.95"/>
    </linearGradient>

    <linearGradient id="pillGradBack" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090f1d" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#050811" stop-opacity="0.88"/>
    </linearGradient>

    <!-- Avatar Gloss Sheen -->
    <linearGradient id="avatarSheen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
      <stop offset="35%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.25"/>
    </linearGradient>

    <!-- Blur & Glow Filters -->
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="rimGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="shadowBlur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="7"/>
    </filter>
    <filter id="iconShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.6"/>
    </filter>

    <!-- Clip Paths -->
    <clipPath id="avatarCircle">
      <circle cx="420" cy="245" r="88"/>
    </clipPath>
  </defs>

  <!-- 1. Background Container Card with Sleek Rounded Frame -->
  <rect width="840" height="500" rx="24" fill="url(#bgGrad)"/>
  <rect width="838" height="498" x="1" y="1" rx="23" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-opacity="0.7"/>

  <!-- Subtle High-Tech Tech Grid Pattern in Background -->
  <g opacity="0.08">
    <line x1="0" y1="125" x2="840" y2="125" stroke="#38bdf8" stroke-width="1"/>
    <line x1="0" y1="245" x2="840" y2="245" stroke="#38bdf8" stroke-width="1"/>
    <line x1="0" y1="365" x2="840" y2="365" stroke="#38bdf8" stroke-width="1"/>
    <line x1="210" y1="0" x2="210" y2="500" stroke="#38bdf8" stroke-width="1"/>
    <line x1="420" y1="0" x2="420" y2="500" stroke="#38bdf8" stroke-width="1"/>
    <line x1="630" y1="0" x2="630" y2="500" stroke="#38bdf8" stroke-width="1"/>
  </g>

  <!-- Top Cyber Header Pill -->
  <g transform="translate(420, 36)" text-anchor="middle">
    <rect x="-140" y="-14" width="280" height="28" rx="14" fill="#0c172a" stroke="#0284c7" stroke-width="1.2" stroke-opacity="0.6"/>
    <circle cx="-120" cy="0" r="4" fill="#10b981"/>
    <text x="6" y="4" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5" font-weight="700" letter-spacing="1.5" fill="#38bdf8">SYSTEMS &amp; DATA ARCHITECTURE</text>
  </g>

  <!-- Central Ambient Glow Sphere -->
  <circle cx="420" cy="245" r="230" fill="url(#ambientGlow)"/>

  <!-- 2. The 3D Orbital Track Ring (Tilted Ellipse) -->
  <!-- Outer subtle aura ring -->
  <ellipse cx="420" cy="245" rx="310" ry="118" fill="none" stroke="#6366f1" stroke-width="3" stroke-opacity="0.18" filter="url(#softGlow)"/>
  <!-- Primary Dashed Track Ring (Matches Site .avatar-orbit-ring--primary) -->
  <ellipse cx="420" cy="245" rx="295" ry="112" fill="none" stroke="url(#orbitTrackGrad)" stroke-width="2.2" stroke-dasharray="8, 10" stroke-opacity="0.75"/>
  <!-- Inner precision guide ring -->
  <ellipse cx="420" cy="245" rx="272" ry="102" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.3"/>

  <!-- ============================================================== -->
  <!-- 3. LAYER: ITEMS BEHIND AVATAR (z < 0 in 3D Perspective)        -->
  <!-- ============================================================== -->

  <!-- Item 1 (Back-Top Center): Architecture & Docs (angle 270 deg) -->
  <!-- Position: x=420, y=133 -->
  <g transform="translate(420, 133)">
    <!-- Shadow -->
    <ellipse cx="0" cy="26" rx="28" ry="7" fill="#000000" opacity="0.45" filter="url(#shadowBlur)"/>
    <!-- 3D Icon -->
    <image href="data:image/png;base64,${fileB64}" x="-27" y="-34" width="54" height="54" filter="url(#iconShadow)" opacity="0.92"/>
    <!-- Pill Badge -->
    <rect x="-70" y="24" width="140" height="26" rx="13" fill="url(#pillGradBack)" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.6"/>
    <text x="0" y="41" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5" font-weight="700" fill="#e2e8f0" letter-spacing="0.3">Architecture &amp; Docs</text>
  </g>

  <!-- Item 2 (Back-Left): Continuous Learning (angle 198 deg) -->
  <!-- Position: x=140, y=210 -->
  <g transform="translate(140, 210)">
    <!-- Shadow -->
    <ellipse cx="0" cy="28" rx="30" ry="8" fill="#000000" opacity="0.45" filter="url(#shadowBlur)"/>
    <!-- 3D Icon -->
    <image href="data:image/png;base64,${noteB64}" x="-28" y="-35" width="56" height="56" filter="url(#iconShadow)" opacity="0.92"/>
    <!-- Pill Badge -->
    <rect x="-75" y="25" width="150" height="26" rx="13" fill="url(#pillGradBack)" stroke="#a855f7" stroke-width="1.2" stroke-opacity="0.6"/>
    <text x="0" y="42" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5" font-weight="700" fill="#e2e8f0" letter-spacing="0.3">Continuous Learning</text>
  </g>

  <!-- Item 3 (Back-Right): Logic & Code (angle 342 deg) -->
  <!-- Position: x=700, y=210 -->
  <g transform="translate(700, 210)">
    <!-- Shadow -->
    <ellipse cx="0" cy="28" rx="30" ry="8" fill="#000000" opacity="0.45" filter="url(#shadowBlur)"/>
    <!-- 3D Icon -->
    <image href="data:image/png;base64,${hashB64}" x="-28" y="-35" width="56" height="56" filter="url(#iconShadow)" opacity="0.92"/>
    <!-- Pill Badge -->
    <rect x="-65" y="25" width="130" height="26" rx="13" fill="url(#pillGradBack)" stroke="#6366f1" stroke-width="1.2" stroke-opacity="0.6"/>
    <text x="0" y="42" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5" font-weight="700" fill="#e2e8f0" letter-spacing="0.3">Logic &amp; Code</text>
  </g>


  <!-- ============================================================== -->
  <!-- 4. LAYER: CENTRAL 3D AVATAR (Matches Site .avatar-3d-wrapper)   -->
  <!-- ============================================================== -->
  <g id="central-avatar">
    <!-- Deep Avatar Drop Shadow on Canvas -->
    <circle cx="420" cy="254" r="95" fill="#000000" opacity="0.55" filter="url(#shadowBlur)"/>

    <!-- .avatar-3d-rim-back (Back Ambient Glow) -->
    <circle cx="420" cy="245" r="106" fill="none" stroke="#6366f1" stroke-width="12" stroke-opacity="0.35" filter="url(#softGlow)"/>

    <!-- .avatar-3d-rim (Rotating Multi-Color Neon Rim) -->
    <circle cx="420" cy="245" r="96" fill="none" stroke="url(#neonRimGrad)" stroke-width="5" filter="url(#rimGlow)"/>

    <!-- .avatar-3d-frame (Gloss White Border Frame) -->
    <circle cx="420" cy="245" r="91" fill="#070c18" stroke="#ffffff" stroke-width="3.5" stroke-opacity="0.95"/>

    <!-- Central Photo of Ahmed Awsaf -->
    <image href="data:image/jpeg;base64,${avatarB64}"
           x="332" y="157" width="176" height="176"
           clip-path="url(#avatarCircle)"
           preserveAspectRatio="xMidYMin slice" />

    <!-- .avatar-3d-sheen (Glass Gloss Sheen Reflection) -->
    <circle cx="420" cy="245" r="88" fill="url(#avatarSheen)" pointer-events="none"/>
    <path d="M 345 220 Q 395 175 480 185 A 88 88 0 0 0 345 220 Z" fill="#ffffff" fill-opacity="0.22" pointer-events="none"/>

    <!-- Subtle inner vignette ring -->
    <circle cx="420" cy="245" r="88" fill="none" stroke="#000000" stroke-width="4" stroke-opacity="0.25"/>
  </g>


  <!-- ============================================================== -->
  <!-- 5. LAYER: FOREGROUND ITEMS (z > 0 in 3D Perspective)           -->
  <!-- ============================================================== -->

  <!-- Item 4 (Foreground Left): Creative Tech (angle 126 deg) -->
  <!-- Position: x=245, y=340 -->
  <g transform="translate(245, 340)">
    <!-- Shadow -->
    <ellipse cx="0" cy="36" rx="36" ry="10" fill="#000000" opacity="0.65" filter="url(#shadowBlur)"/>
    <!-- 3D Icon (Larger for foreground depth) -->
    <image href="data:image/png;base64,${frankB64}" x="-35" y="-45" width="70" height="70" filter="url(#iconShadow)"/>
    <!-- Pill Badge with Glowing Neon Border -->
    <rect x="-78" y="30" width="156" height="30" rx="15" fill="url(#pillGradFront)" stroke="#ec4899" stroke-width="1.6"/>
    <circle cx="-62" cy="45" r="3.5" fill="#ec4899"/>
    <text x="4" y="49" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#ffffff" letter-spacing="0.3">Creative Tech</text>
  </g>

  <!-- Item 5 (Foreground Right): Full-Stack Dev (angle 54 deg) -->
  <!-- Position: x=595, y=340 -->
  <g transform="translate(595, 340)">
    <!-- Shadow -->
    <ellipse cx="0" cy="36" rx="36" ry="10" fill="#000000" opacity="0.65" filter="url(#shadowBlur)"/>
    <!-- 3D Icon (Larger for foreground depth) -->
    <image href="data:image/png;base64,${compB64}" x="-35" y="-45" width="70" height="70" filter="url(#iconShadow)"/>
    <!-- Pill Badge with Glowing Neon Border -->
    <rect x="-78" y="30" width="156" height="30" rx="15" fill="url(#pillGradFront)" stroke="#00f2fe" stroke-width="1.6"/>
    <circle cx="-62" cy="45" r="3.5" fill="#00f2fe"/>
    <text x="4" y="49" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#ffffff" letter-spacing="0.3">Full-Stack Dev</text>
  </g>

  <!-- Bottom Core Status Footer -->
  <g transform="translate(420, 468)" text-anchor="middle">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" letter-spacing="0.8">
      <tspan fill="#38bdf8" font-weight="700">AHMED AWSAF</tspan> · ORBITAL SYSTEM OVERVIEW
    </text>
  </g>
</svg>`;

  fs.writeFileSync('public/content/readme-widgets/orbit.svg', svg);
  fs.writeFileSync('public/content/readme-widgets/orbit-avatar.svg', svg);
  fs.writeFileSync('content/readme-widgets/orbit.svg', svg);
  fs.writeFileSync('content/readme-widgets/orbit-avatar.svg', svg);
  console.log('Successfully generated still orbit-avatar.svg and updated orbit.svg');
}

generateStillOrbit();

