import React, { useState } from 'react'

export const Collapsible = ({ children, open, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(open || false)
  
  const toggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onOpenChange?.(newState)
  }
  
  return children({ isOpen, toggle })
}

export const CollapsibleTrigger = ({ children, ...props }) => (
  <button {...props}>{children}</button>
)

export const CollapsibleContent = ({ children, isOpen }) => {
  if (!isOpen) return null
  
  return <div>{children}</div>
}