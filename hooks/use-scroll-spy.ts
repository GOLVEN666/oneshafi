"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], options: IntersectionObserverInit = {}) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0,
      },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [ids, options.rootMargin, options.threshold])

  return activeId
}

