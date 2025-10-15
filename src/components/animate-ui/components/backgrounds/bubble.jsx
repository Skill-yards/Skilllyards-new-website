'use client';
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { cn } from '@/lib/utils';

function BubbleBackground({
  ref,
  className,
  children,
  interactive = false,
  transition = { ease: 'power1.inOut', duration: 1 },
  colors = {
    first: '59,130,246',    // blue-500
    second: '96,165,250',   // blue-400
    third: '147,197,253',   // blue-300
    fourth: '37,99,235',    // blue-600
    fifth: '29,78,216',     // blue-700
    sixth: '30,64,175',     // blue-800
  },
  ...props
}) {
  const containerRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2WrapperRef = useRef(null);
  const bubble3WrapperRef = useRef(null);
  const bubble4Ref = useRef(null);
  const bubble5WrapperRef = useRef(null);
  const bubble6Ref = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  
  React.useImperativeHandle(ref, () => containerRef.current);

  // Setup animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bubble 1: Y-axis animation
      gsap.to(bubble1Ref.current, {
        y: 50,
        duration: 30,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Bubble 2: Rotation animation
      gsap.to(bubble2WrapperRef.current, {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Bubble 3: Rotation animation
      gsap.to(bubble3WrapperRef.current, {
        rotation: 360,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });

      // Bubble 4: X-axis animation
      gsap.to(bubble4Ref.current, {
        x: 50,
        duration: 40,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Bubble 5: Rotation animation
      gsap.to(bubble5WrapperRef.current, {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse follow animation
  useEffect(() => {
    if (!interactive || !bubble6Ref.current) return;

    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const handleMouseMove = (e) => {
      const rect = currentContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mousePos.current = {
        x: e.clientX - centerX,
        y: e.clientY - centerY,
      };

      gsap.to(bubble6Ref.current, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        duration: transition.duration || 1,
        ease: transition.ease || 'power1.out',
      });
    };

    currentContainer.addEventListener('mousemove', handleMouseMove);
    return () => currentContainer.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, transition]);

  return (
    <div
      ref={containerRef}
      data-slot="bubble-background"
      className={cn(
        'relative size-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900',
        className
      )}
      {...props}>
      <style>
        {`
          :root {
            --first-color: ${colors.first};
            --second-color: ${colors.second};
            --third-color: ${colors.third};
            --fourth-color: ${colors.fourth};
            --fifth-color: ${colors.fifth};
            --sixth-color: ${colors.sixth};
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ filter: 'url(#goo) blur(40px)' }}>
        {/* Bubble 1: Y-axis animation */}
        <div
          ref={bubble1Ref}
          className="absolute rounded-full size-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.8)_0%,rgba(var(--first-color),0)_50%)]"
          style={{ y: -50 }}
        />

        {/* Bubble 2: Rotation animation */}
        <div
          ref={bubble2WrapperRef}
          className="absolute inset-0 flex justify-center items-center"
          style={{ transformOrigin: 'calc(50% - 400px) 50%' }}>
          <div className="rounded-full size-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0%,rgba(var(--second-color),0)_50%)]" />
        </div>

        {/* Bubble 3: Rotation animation */}
        <div
          ref={bubble3WrapperRef}
          className="absolute inset-0 flex justify-center items-center"
          style={{ transformOrigin: 'calc(50% + 400px) 50%' }}>
          <div className="absolute rounded-full size-[80%] bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0%,rgba(var(--third-color),0)_50%)] mix-blend-hard-light top-[calc(50%+200px)] left-[calc(50%-500px)]" />
        </div>

        {/* Bubble 4: X-axis animation */}
        <div
          ref={bubble4Ref}
          className="absolute rounded-full size-[80%] top-[10%] left-[10%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0%,rgba(var(--fourth-color),0)_50%)] opacity-70"
          style={{ x: -50 }}
        />

        {/* Bubble 5: Rotation animation */}
        <div
          ref={bubble5WrapperRef}
          className="absolute inset-0 flex justify-center items-center"
          style={{ transformOrigin: 'calc(50% - 800px) calc(50% + 200px)' }}>
          <div className="absolute rounded-full size-[160%] mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0%,rgba(var(--fifth-color),0)_50%)] top-[calc(50%-80%)] left-[calc(50%-80%)]" />
        </div>

        {/* Bubble 6: Mouse follow animation */}
        {interactive && (
          <div
            ref={bubble6Ref}
            className="absolute rounded-full size-full mix-blend-hard-light bg-[radial-gradient(circle_at_center,rgba(var(--sixth-color),0.8)_0%,rgba(var(--sixth-color),0)_50%)] opacity-70"
          />
        )}
      </div>
      {children}
    </div>
  );
}

export { BubbleBackground };
