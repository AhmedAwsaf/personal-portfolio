import React, { useRef, useEffect, useCallback, useState } from 'react';

// Chrome Dino monochrome 1-bit sprites
export const SHIP = [
  '   0   ',
  '  000  ',
  '  010  ',
  ' 00100 ',
  '0001000',
  '0000000',
  '0 0 0 0',
];

const SCOUT = [
  '  0   0  ',
  '   0 0   ',
  '  00000  ',
  ' 00 0 00 ',
  '000000000',
  '0 00000 0',
  '0 0   0 0',
  '   0 0   ',
];

const DART = [
  '  000  ',
  ' 00100 ',
  '0001000',
  ' 00000 ',
  '  000  ',
  '   0   ',
];

const CRUISER = [
  '  0000000  ',
  ' 000111000 ',
  '00001110000',
  '00000000000',
  ' 0 0 0 0 0 ',
];

const UFO = [
  '   00000   ',
  ' 000000000 ',
  '00011111000',
  '00000000000',
  '  0  0  0  ',
];

export function ShipSprite({ size = 16, className = '' }) {
  const w = SHIP[0].length;
  const h = SHIP.length;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      shapeRendering="crispEdges"
    >
      {SHIP.map((row, r) =>
        row.split('').map((ch, c) => {
          if (ch === '0') return <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="currentColor" />;
          if (ch === '1') return <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="currentColor" opacity="0.5" />;
          return null;
        })
      )}
    </svg>
  );
}

const MAX_LIVES = 3;
const PX = 3;
const STORAGE_KEY = 'space_shooter_chrome_hi';

function drawSprite(ctx, rows, x, y, px, c0, c1) {
  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < rows[r].length; c++) {
      const ch = rows[r][c];
      if (ch === '0') {
        ctx.fillStyle = c0;
        ctx.fillRect(Math.floor(x + c * px), Math.floor(y + r * px), px, px);
      } else if (ch === '1' && c1) {
        ctx.fillStyle = c1;
        ctx.fillRect(Math.floor(x + c * px), Math.floor(y + r * px), px, px);
      }
    }
  }
}

function fmt(n) {
  return String(Math.floor(n)).padStart(5, '0');
}

export default function SpaceShooter() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);

  const [userControl, setUserControl] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0;
    } catch {
      return 0;
    }
  });
  const [lives, setLives] = useState(MAX_LIVES);

  const init = useCallback((w, h) => ({
    w,
    h,
    ship: { x: w / 2, y: h - 45, vx: 0, vy: 0 },
    bullets: [],
    enemies: [],
    ufo: null,
    stars: Array.from({ length: 35 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: 0.3 + Math.random() * 0.6,
      shade: Math.random() > 0.5 ? '#3f3f46' : '#27272a',
    })),
    particles: [],
    spawnTimer: 0,
    shootTimer: 0,
    ufoTimer: 0,
    deathTimer: 0,
    idleTimer: 0,
    shake: 0,
    score: 0,
    lives: MAX_LIVES,
    alive: true,
    keys: {},
    pointer: null,
  }), []);

  const saveHi = useCallback((s) => {
    setHighScore((prev) => {
      if (s > prev) {
        try { localStorage.setItem(STORAGE_KEY, String(s)); } catch {}
        return s;
      }
      return prev;
    });
  }, []);

  const reset = useCallback((manual = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const r = canvas.parentElement.getBoundingClientRect();
    stateRef.current = init(r.width, r.height);
    setScore(0);
    setLives(MAX_LIVES);
    setUserControl(manual);
  }, [init]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!stateRef.current) {
        stateRef.current = init(rect.width, rect.height);
      } else {
        stateRef.current.w = rect.width;
        stateRef.current.h = rect.height;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const onKeyDown = (e) => {
      if (!stateRef.current) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      stateRef.current.keys[e.key] = true;

      // 'r' or 'R' resets
      if (e.key === 'r' || e.key === 'R') {
        reset(userControl);
        return;
      }

      // Explicit key press engages player mode
      if (!userControl) {
        setUserControl(true);
      }
    };

    const onKeyUp = (e) => {
      if (stateRef.current) stateRef.current.keys[e.key] = false;
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    const loop = () => {
      if (!stateRef.current) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }
      const s = stateRef.current;
      const { w, h } = s;

      if (s.shake > 0) s.shake *= 0.82;
      if (s.shake < 0.2) s.shake = 0;

      // Stars scroll
      for (const st of s.stars) {
        st.y += st.s;
        if (st.y > h) { st.y = 0; st.x = Math.random() * w; }
      }

      // Death countdown -> always returns to autopilot
      if (!s.alive) {
        s.deathTimer--;
        if (s.deathTimer <= 0) {
          stateRef.current = init(w, h);
          setScore(0);
          setLives(MAX_LIVES);
          setUserControl(false);
        }
      }

      if (s.alive) {
        if (userControl) {
          let mx = 0;
          let my = 0;
          if (s.keys['ArrowLeft'] || s.keys['a'] || s.keys['A']) mx -= 1;
          if (s.keys['ArrowRight'] || s.keys['d'] || s.keys['D']) mx += 1;
          if (s.keys['ArrowUp'] || s.keys['w'] || s.keys['W']) my -= 1;
          if (s.keys['ArrowDown'] || s.keys['s'] || s.keys['S']) my += 1;

          s.ship.vx = (s.ship.vx + mx * 0.9) * 0.8;
          s.ship.vy = (s.ship.vy + my * 0.9) * 0.8;

          if (s.pointer) {
            const dx = s.pointer.x - s.ship.x;
            const dy = s.pointer.y - s.ship.y;
            s.ship.vx += Math.max(-3, Math.min(3, dx * 0.2));
            s.ship.vy += Math.max(-3, Math.min(3, dy * 0.2));
          }

          s.ship.x += s.ship.vx;
          s.ship.y += s.ship.vy;
        } else {
          // --- AUTOPILOT AI ---
          // Scan for danger directly above the ship
          let danger = null;
          for (const e of s.enemies) {
            if (Math.abs(e.x - s.ship.x) < 32 && s.ship.y - e.y > 0 && s.ship.y - e.y < 125) {
              danger = e;
              break;
            }
          }

          if (danger) {
            const dir = s.ship.x < danger.x ? -1 : 1;
            const safe = s.ship.x < 36 ? 1 : s.ship.x > w - 36 ? -1 : dir;
            s.ship.vx = (s.ship.vx + safe * 0.75) * 0.85;
          } else {
            // Target lowest enemy
            let target = null;
            let maxY = -1;
            for (const e of s.enemies) {
              if (e.y > maxY) { maxY = e.y; target = e; }
            }
            if (!target && s.ufo) target = s.ufo;
            const tx = target ? target.x : w / 2;
            const dx = tx - s.ship.x;
            s.ship.vx = (s.ship.vx + Math.sign(dx) * Math.min(Math.abs(dx) * 0.09, 0.45)) * 0.85;
          }

          s.ship.x += s.ship.vx;
          s.ship.y += ((h - 45 + Math.sin(Date.now() * 0.002) * 5) - s.ship.y) * 0.1;
        }

        s.ship.x = Math.max(16, Math.min(w - 16, s.ship.x));
        s.ship.y = Math.max(20, Math.min(h - 18, s.ship.y));

        // Auto cannon
        s.shootTimer++;
        if (s.shootTimer >= (userControl ? 11 : 14)) {
          s.shootTimer = 0;
          s.bullets.push({ x: s.ship.x - 5, y: s.ship.y - 10, dy: -6.5 });
          s.bullets.push({ x: s.ship.x + 5, y: s.ship.y - 10, dy: -6.5 });
        }

        // Spawn enemies
        s.spawnTimer++;
        if (s.spawnTimer >= Math.max(36, 80 - s.score * 0.45)) {
          s.spawnTimer = 0;
          const roll = Math.random();
          s.enemies.push({
            x: 24 + Math.random() * (w - 48),
            y: -18,
            vx: roll > 0.7 ? (Math.random() - 0.5) * 0.8 : 0,
            dy: roll > 0.7 ? 1.6 : roll > 0.4 ? 0.7 : 1.1,
            type: roll > 0.7 ? 'DART' : roll > 0.4 && s.score > 8 ? 'CRUISER' : 'SCOUT',
            hp: roll > 0.4 && s.score > 8 ? 2 : 1,
            flash: 0,
          });
        }

        // UFO
        s.ufoTimer++;
        if (!s.ufo && s.ufoTimer > 400 && Math.random() > 0.98) {
          s.ufoTimer = 0;
          const left = Math.random() > 0.5;
          s.ufo = { x: left ? -25 : w + 25, y: 22, vx: left ? 1.3 : -1.3, hp: 2, flash: 0 };
        }

        if (s.ufo) {
          s.ufo.x += s.ufo.vx;
          if (s.ufo.flash > 0) s.ufo.flash--;
          if ((s.ufo.vx > 0 && s.ufo.x > w + 35) || (s.ufo.vx < 0 && s.ufo.x < -35)) {
            s.ufo = null;
          }
        }

        // Bullets
        for (let i = s.bullets.length - 1; i >= 0; i--) {
          s.bullets[i].y += s.bullets[i].dy;
          if (s.bullets[i].y < -10) s.bullets.splice(i, 1);
        }

        const killShip = () => {
          s.alive = false;
          s.shake = 5;
          for (let p = 0; p < 20; p++) {
            s.particles.push({
              x: s.ship.x, y: s.ship.y,
              vx: (Math.random() - 0.5) * 4,
              vy: (Math.random() - 0.5) * 4,
              life: 1,
              c: ['#f4f4f5', '#a1a1aa', '#71717a'][Math.floor(Math.random() * 3)],
            });
          }
          s.deathTimer = 45; // ~0.75s death animation, then back to autopilot
        };

        // Enemy collisions
        for (let i = s.enemies.length - 1; i >= 0; i--) {
          const e = s.enemies[i];
          e.y += e.dy;
          e.x += e.vx;
          if (e.x < 15 || e.x > w - 15) e.vx = -e.vx;
          if (e.flash > 0) e.flash--;

          if (e.y > h + 15) {
            s.enemies.splice(i, 1);
            s.lives--;
            setLives(s.lives);
            s.shake = 3;
            if (s.lives <= 0) killShip();
            continue;
          }

          if (Math.abs(e.x - s.ship.x) < 14 && Math.abs(e.y - s.ship.y) < 14) {
            s.enemies.splice(i, 1);
            s.lives--;
            setLives(s.lives);
            s.shake = 4;
            if (s.lives <= 0) killShip();
            continue;
          }

          for (let j = s.bullets.length - 1; j >= 0; j--) {
            const b = s.bullets[j];
            const dist = e.type === 'CRUISER' ? 14 : 10;
            if (Math.abs(b.x - e.x) < dist && Math.abs(b.y - e.y) < dist) {
              s.bullets.splice(j, 1);
              e.hp--;
              e.flash = 2;
              if (e.hp <= 0) {
                s.enemies.splice(i, 1);
                s.score++;
                setScore(s.score);
                saveHi(s.score);
                for (let p = 0; p < 6; p++) {
                  s.particles.push({
                    x: e.x, y: e.y,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    life: 0.8,
                    c: '#a1a1aa',
                  });
                }
              }
              break;
            }
          }
        }

        // UFO hit
        if (s.ufo) {
          for (let j = s.bullets.length - 1; j >= 0; j--) {
            const b = s.bullets[j];
            if (Math.abs(b.x - s.ufo.x) < 18 && Math.abs(b.y - s.ufo.y) < 12) {
              s.bullets.splice(j, 1);
              s.ufo.hp--;
              s.ufo.flash = 2;
              if (s.ufo.hp <= 0) {
                s.score += 5;
                setScore(s.score);
                saveHi(s.score);
                s.ufo = null;
              }
              break;
            }
          }
        }
      }

      // Particles
      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.04;
        if (p.life <= 0) s.particles.splice(i, 1);
      }

      // Render
      ctx.save();
      if (s.shake > 0) ctx.translate((Math.random() - 0.5) * s.shake, (Math.random() - 0.5) * s.shake);

      ctx.fillStyle = '#111215';
      ctx.fillRect(0, 0, w, h);

      for (const st of s.stars) {
        ctx.fillStyle = st.shade;
        ctx.fillRect(Math.floor(st.x), Math.floor(st.y), 1, 1);
      }

      // Ground horizon
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(0, h - 6);
      ctx.lineTo(w, h - 6);
      ctx.stroke();
      ctx.setLineDash([]);

      // Bullets
      ctx.fillStyle = '#f4f4f5';
      for (const b of s.bullets) ctx.fillRect(Math.floor(b.x - 1), Math.floor(b.y), 2, 6);

      // UFO
      if (s.ufo) {
        const c = s.ufo.flash > 0 ? '#ffffff' : '#f4f4f5';
        drawSprite(ctx, UFO, s.ufo.x - (UFO[0].length * PX) / 2, s.ufo.y - (UFO.length * PX) / 2, PX, c, '#71717a');
      }

      // Enemies
      for (const e of s.enemies) {
        const spr = e.type === 'DART' ? DART : e.type === 'CRUISER' ? CRUISER : SCOUT;
        const c0 = e.flash > 0 ? '#ffffff' : '#d4d4d8';
        const c1 = e.flash > 0 ? '#ffffff' : '#71717a';
        drawSprite(ctx, spr, e.x - (spr[0].length * PX) / 2, e.y - (spr.length * PX) / 2, PX, c0, c1);
      }

      // Ship
      if (s.alive) {
        drawSprite(ctx, SHIP, s.ship.x - (SHIP[0].length * PX) / 2, s.ship.y - (SHIP.length * PX) / 2, PX, '#f4f4f5', '#71717a');
        if (Math.random() > 0.4) {
          ctx.fillStyle = '#a1a1aa';
          ctx.fillRect(Math.floor(s.ship.x - 1), Math.floor(s.ship.y + (SHIP.length * PX) / 2), 2, 3);
        }
      }

      // Particles
      for (const p of s.particles) {
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.c;
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), 2, 2);
      }
      ctx.globalAlpha = 1;

      ctx.restore();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [init, userControl, reset, saveHi]);

  // Pointer interactions only track while userControl is active
  const onPointer = useCallback((e) => {
    if (!stateRef.current || !userControl) return;
    const r = canvasRef.current.getBoundingClientRect();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    stateRef.current.pointer = { x: cx - r.left, y: cy - r.top };
  }, [userControl]);

  const onPointerEnd = useCallback(() => {
    if (stateRef.current) stateRef.current.pointer = null;
  }, []);

  const handleClick = useCallback(() => {
    if (!userControl) {
      setUserControl(true);
    }
  }, [userControl]);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden bg-[#111215] border border-neutral-800 select-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        onClick={handleClick}
        onMouseMove={onPointer}
        onMouseLeave={onPointerEnd}
        onTouchStart={handleClick}
        onTouchMove={onPointer}
        onTouchEnd={onPointerEnd}
      />

      {/* Chrome Dino minimal HUD: score, hearts, mode icon, reset icon */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 font-pixel text-xs tracking-wider">
          <span className="text-neutral-500">HI <span className="text-neutral-400">{fmt(highScore)}</span></span>
          <span className="text-neutral-200">{fmt(score)}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 text-xs font-pixel">
            {Array.from({ length: MAX_LIVES }, (_, i) => (
              <span key={i} className={i < lives ? 'text-neutral-200' : 'text-neutral-700'}>♥</span>
            ))}
          </div>

          {/* Mode switch */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); reset(!userControl); }}
            className="pointer-events-auto p-1.5 rounded-md bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700/60 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            title={userControl ? 'Player active (click for auto)' : 'Auto active (click to play)'}
          >
            {userControl ? (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="6" />
                <path d="M6 12h4m-2-2v4m7-2h.01m3 0h.01" />
              </svg>
            ) : (
              <div className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8.01" y2="16" />
                  <line x1="16" y1="16" x2="16.01" y2="16" />
                </svg>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
              </div>
            )}
          </button>

          {/* Reset icon */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); reset(userControl); }}
            className="pointer-events-auto p-1.5 rounded-md bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700/60 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Reset"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.57L21 8" />
              <polyline points="21 3 21 8 16 8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
