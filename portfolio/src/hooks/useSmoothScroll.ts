import { useEffect } from "react"

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const targetId = hash.replace("#", "")
        const elem = document.getElementById(targetId)
        if (elem) {
          setTimeout(() => {
            elem.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    handleHashChange() // Handle initial load
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])
}
