"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade"
  delay?: number
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    fade: "opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        !isVisible && animationClasses[animation],
        isVisible && "translate-y-0 translate-x-0 opacity-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
