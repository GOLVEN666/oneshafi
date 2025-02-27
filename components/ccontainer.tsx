// components/ccontainer.tsx

import type React from "react"

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {

  return (
    <div className="min-h-screen px-32 mt-32">
          {children}
    </div>
  )
}

