'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollAnimation(options = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true,
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
}

export function useCountUp(end, duration = 2000, isVisible = false) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isVisible || hasAnimated.current) return;
        hasAnimated.current = true;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quad
            const easedProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
}

// Reusable animated wrapper component
export function AnimatedElement({ children, animation = 'fadeUp', delay = 0, className = '', ...props }) {
    const [ref, isVisible] = useScrollAnimation();

    const animations = {
        fadeUp: 'translate-y-8 opacity-0',
        fadeDown: 'translate-y-[-2rem] opacity-0',
        fadeLeft: 'translate-x-[-2rem] opacity-0',
        fadeRight: 'translate-x-8 opacity-0',
        scaleIn: 'scale-95 opacity-0',
        fadeIn: 'opacity-0',
    };

    const baseTransform = animations[animation] || animations.fadeUp;

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : baseTransform
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
            {...props}
        >
            {children}
        </div>
    );
}
