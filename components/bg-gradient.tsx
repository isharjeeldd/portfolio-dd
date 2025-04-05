"use client"

import React from 'react'

const BgGradient = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            {/* Base background - darker in both modes */}
            <div className="absolute inset-0 bg-gray-100 dark:bg-black" />

            {/* Strong black gradient from left */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/40 via-gray-200/20 to-transparent dark:from-black dark:via-gray-950/90 dark:to-transparent" />

            {/* Static subtle gradient - with darker purple hints */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 via-gray-100/20 to-gray-200/30 dark:from-black dark:via-purple-950/5 dark:to-black/80" />

            {/* Darker purple accent - top right */}
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-300/5 via-transparent to-transparent dark:from-purple-800/8 dark:via-transparent dark:to-transparent" />

            {/* Darker purple accent - bottom left */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/5 via-transparent to-transparent dark:from-purple-900/8 dark:via-transparent dark:to-transparent" />

            {/* Static gradient replacing animated gradient 1 */}
            <div className="absolute inset-0 bg-gradient-to-bl from-gray-200/20 via-transparent to-transparent dark:from-purple-900/10 dark:via-transparent dark:to-transparent" />

            {/* Static gradient replacing animated gradient 2 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/3 via-transparent to-transparent dark:from-purple-800/8 dark:via-transparent dark:to-transparent" />

            {/* Additional left-to-right black gradient (static) */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/30 to-transparent dark:from-black dark:to-transparent opacity-80" />

            {/* Static radial gradient replacing animated pulse */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-purple-300/3 via-transparent to-transparent dark:from-purple-800/8 dark:via-transparent dark:to-transparent" />
        </div>
    )
}

export default BgGradient