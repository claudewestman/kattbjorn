import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const targets = section.querySelectorAll('.animate-target')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
