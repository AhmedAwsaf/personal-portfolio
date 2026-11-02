import React, { useRef, useEffect, useState, useCallback } from 'react';
import './AvatarOrbit3D.css';
import { getAssetUrl } from '../utils/assets.js';

const ORBIT_ITEMS = [
  {
    name: 'Full-Stack Dev',
    src: getAssetUrl('/Images/3dicons-computer-dynamic-color.png'),
    alt: 'Computer 3D Icon',
  },
  {
    name: 'Architecture & Docs',
    src: getAssetUrl('/Images/3dicons-file-text-dynamic-color.png'),
    alt: 'File Text 3D Icon',
  },
  {
    name: 'Creative Tech',
    src: getAssetUrl('/Images/3dicons-frankenstein-dynamic-color.png'),
    alt: 'Creative Monster 3D Icon',
  },
  {
    name: 'Logic & Code',
    src: getAssetUrl('/Images/3dicons-hash-dynamic-color.png'),
    alt: 'Hash Code 3D Icon',
  },
  {
    name: 'Continuous Learning',
    src: getAssetUrl('/Images/NOTEBOOK-3D.png'),
    alt: 'Notebook 3D Icon',
  },
];

export default function AvatarOrbit3D({ hideAvatar = false, centerText = "AHMED AWSAF" }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const avatarRef = useRef(null);
  const itemsRef = useRef([]);

  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Animation state in a ref to avoid re-renders during high-frequency loop
  const animState = useRef({
    angle: 0,
    velocity: 0.008, // Base orbital speed (radians per frame)
    targetTiltX: 0,
    targetTiltY: 0,
    currentTiltX: 0,
    currentTiltY: 0,
    isDragging: false,
    dragStartX: 0,
    lastDragX: 0,
    dragVelocity: 0,
    avatarBounce: 0,
  });

  // Handle Mouse Tilt (Parallax)
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Tilt angle in degrees
    animState.current.targetTiltX = -y * 22;
    animState.current.targetTiltY = x * 22;
  }, []);

  const handleMouseLeave = useCallback(() => {
    animState.current.targetTiltX = 0;
    animState.current.targetTiltY = 0;
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // Drag interaction to fling orbit
  const handlePointerDown = (e) => {
    animState.current.isDragging = true;
    animState.current.dragStartX = e.clientX;
    animState.current.lastDragX = e.clientX;
    animState.current.dragVelocity = 0;
  };

  const handlePointerMove = (e) => {
    if (!animState.current.isDragging) return;
    const dx = e.clientX - animState.current.lastDragX;
    animState.current.lastDragX = e.clientX;
    animState.current.angle += dx * 0.006;
    animState.current.dragVelocity = dx * 0.006;
  };

  const handlePointerUp = () => {
    animState.current.isDragging = false;
  };

  // Avatar Click 3D flip effect
  const handleAvatarClick = () => {
    animState.current.avatarBounce = 360;
  };

  useEffect(() => {
    let rafId = null;

    const loop = (now) => {
      const state = animState.current;

      // Handle dragging inertia / momentum
      if (!state.isDragging) {
        if (Math.abs(state.dragVelocity) > 0.0005) {
          state.angle += state.dragVelocity;
          state.dragVelocity *= 0.94; // friction
        } else {
          // Normal orbital movement (slows down when hovering an icon)
          const targetVel = isHovered && activeItem !== null ? 0.002 : 0.008;
          state.velocity += (targetVel - state.velocity) * 0.1;
          state.angle += state.velocity;
        }
      }

      // Smooth lerp for 3D stage tilt
      state.currentTiltX += (state.targetTiltX - state.currentTiltX) * 0.1;
      state.currentTiltY += (state.targetTiltY - state.currentTiltY) * 0.1;

      if (stageRef.current) {
        stageRef.current.style.transform = `rotateX(${state.currentTiltX.toFixed(2)}deg) rotateY(${state.currentTiltY.toFixed(2)}deg)`;
      }

      // Avatar 3D bounce/spin easing
      if (state.avatarBounce > 0) {
        state.avatarBounce -= 8;
        if (state.avatarBounce < 0) state.avatarBounce = 0;
      }

      if (avatarRef.current) {
        // Counter-tilt slightly for holographic feel
        const avatarRotX = -state.currentTiltX * 0.6;
        const avatarRotY = -state.currentTiltY * 0.6 + state.avatarBounce;
        avatarRef.current.style.transform = `rotateX(${avatarRotX.toFixed(2)}deg) rotateY(${avatarRotY.toFixed(2)}deg) translateZ(15px)`;
      }

      // Compute Responsive Radii
      const isMobile = window.innerWidth < 640;
      const radiusX = isMobile ? 130 : 185;
      const radiusY = isMobile ? 46 : 65;

      const totalItems = ORBIT_ITEMS.length;
      const step = (Math.PI * 2) / totalItems;

      // Update each orbiting item in 3D
      itemsRef.current.forEach((el, i) => {
        if (!el) return;

        const theta = state.angle + i * step;

        // Parametric ellipse in 3D perspective
        const x = Math.cos(theta) * radiusX;
        // Tilted orbit: y combines elevation + vertical bobbing wave
        const bob = Math.sin(now * 0.003 + i * 1.5) * 6;
        const y = Math.sin(theta) * radiusY + bob;
        // z represents depth: from -1 (behind avatar) to +1 (in front of avatar)
        const z = Math.sin(theta);

        // Map depth to scale and opacity
        const normalizedZ = (z + 1) / 2; // 0 to 1
        const scale = 0.8 + 0.35 * normalizedZ;
        const opacity = 0.72 + 0.28 * normalizedZ;
        const zIndex = z > 0 ? 30 : 5; // In front or behind avatar (avatar is z: 15)

        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${(z * 80).toFixed(2)}px) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(2);
        el.style.zIndex = zIndex;
      });

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isHovered, activeItem]);

  return (
    <div
      ref={containerRef}
      className="avatar-orbit-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      title="Ahmed Awsaf - Click avatar or drag 3D icons to spin"
    >
      <div ref={stageRef} className="avatar-orbit-stage">
        {/* Pulsing Colored Orbital Track Ring */}
        <div className="avatar-orbit-ring avatar-orbit-ring--primary" />

        {/* Central 3D Rounded Avatar */}
        <div
          ref={avatarRef}
          className="avatar-3d-wrapper group"
          onClick={handleAvatarClick}
        >
          {/* Depth glow & rotating neon rim */}
          <div className="avatar-3d-rim-back" />
          <div className="avatar-3d-rim" />

          {/* Rounded avatar frame or Text Core */}
          {hideAvatar ? (
            <div className="avatar-3d-frame flex items-center justify-center text-center p-3 bg-neutral-950">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-cyan-500/40 flex flex-col items-center justify-center p-4 shadow-inner">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">Engineer</span>
                <span className="text-sm font-extrabold tracking-wider text-white mt-1 leading-tight">{centerText}</span>
                <span className="text-[9px] text-neutral-400 font-mono mt-1">Systems &amp; Data</span>
              </div>
            </div>
          ) : (
            <div className="avatar-3d-frame">
              <img
                src={getAssetUrl('/AhmedAwsaf-medium.jpg')}
                alt="Ahmed Awsaf"
                className="avatar-3d-image"
                loading="eager"
              />
              {/* Glossy 3D glass sheen reflection */}
              <div className="avatar-3d-sheen" />
            </div>
          )}
        </div>

        {/* Orbiting 3D Items */}
        {ORBIT_ITEMS.map((item, index) => (
          <div
            key={item.name}
            ref={(el) => (itemsRef.current[index] = el)}
            className="orbit-item"
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="orbit-item-img"
              draggable={false}
            />
            <span className="orbit-item-tooltip">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
