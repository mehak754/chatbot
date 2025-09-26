import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export const Sidebar = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarHeader = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarContent = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarFooter = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarGroup = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarGroupLabel = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarGroupContent = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarMenu = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarMenuItem = ({ children, className }) => (
  <div className={className}>{children}</div>
)

export const SidebarMenuButton = ({ children, className, ...props }) => (
  <button className={className} {...props}>{children}</button>
)

export const SidebarTrigger = ({ className, ...props }) => {
  const { setIsOpen, isOpen } = useSidebar()
  
  return (
    <button 
      className={className}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M9 3v18"></path>
      </svg>
    </button>
  )
}