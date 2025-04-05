"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"

export function useScrollRestoration() {
    const router = useRouter()

    useEffect(() => {
        if (typeof window === "undefined") {
            return
        }

        const handleRouteChange = () => {
            window.scrollTo(0, 0)
        }

        router.events.on("routeChangeComplete", handleRouteChange)

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router])
}

