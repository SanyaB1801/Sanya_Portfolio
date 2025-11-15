"use client"

import { useEffect } from "react"

const Toast = ({ toast, onDismiss }) => {
  const getVariantStyles = (variant) => {
    switch (variant) {
      case "destructive":
        return "bg-red-900 border-red-700 text-red-100"
      case "success":
        return "bg-green-900 border-green-700 text-green-100"
      default:
        return "bg-gray-800 border-violet-500/20 text-white"
    }
  }

  useEffect(() => {
    if (!toast || !toast.id) {
      return
    }

    const timer = setTimeout(() => {
      onDismiss(toast.id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [toast, onDismiss])

  if (!toast || !toast.id) {
    return null
  }

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg border shadow-lg z-50 min-w-[300px] ${getVariantStyles(
        toast.variant,
      )}`}
    >
      <div className="flex justify-between items-start">
        <div>
          {toast.title && <div className="font-semibold mb-1">{toast.title}</div>}
          {toast.description && <div className="text-sm opacity-90">{toast.description}</div>}
        </div>
        <button onClick={() => onDismiss(toast.id)} className="ml-4 text-lg hover:opacity-70 transition-opacity">
          ×
        </button>
      </div>
    </div>
  )
}

export const Toaster = ({ toasts, onDismiss }) => {
  // Add safety check for toasts array
  if (!toasts || !Array.isArray(toasts)) {
    return null
  }

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {toasts.map((toast) => {
        // Additional safety check for each toast
        if (!toast || !toast.id) {
          return null
        }
        return <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
      })}
    </div>
  )
}

export default Toast
