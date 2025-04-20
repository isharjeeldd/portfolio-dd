"use client"

import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CustomButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(true)
        updateMousePosition(e)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false)
    }, [])

    const updateMousePosition = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }
    }, [])

    const getAnimationProps = useCallback(() => {
        if (!buttonRef.current) return {}

        const buttonWidth = buttonRef.current.offsetWidth
        const buttonHeight = buttonRef.current.offsetHeight
        const maxDimension = Math.max(buttonWidth, buttonHeight) * 2

        const xPosition = mousePosition.x - maxDimension / 2
        const yPosition = mousePosition.y - maxDimension / 2

        return {
            initial: { width: 0, height: 0, x: mousePosition.x, y: mousePosition.y },
            animate: { width: maxDimension, height: maxDimension, x: xPosition, y: yPosition },
            exit: { width: 0, height: 0, x: mousePosition.x, y: mousePosition.y },
        }
    }, [mousePosition])

    return (
        <motion.button
            ref={buttonRef}
            className={`relative overflow-hidden px-6 py-3 rounded-full font-semibold text-sm
                  border border-[#e11d48]
                  text-[#e11d48] hover:text-white
                  dark:text-white
                  ${className}`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.95 }}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute bg-[#e11d48] rounded-full"
                        {...getAnimationProps()}
                        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                    />
                )}
            </AnimatePresence>
            <span className="relative z-10">{children}</span>
        </motion.button>
    )
}

export interface CustomButton2Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    target?: React.HTMLAttributeAnchorTarget;
    size?: "sm" | "md" | "lg" | "xl"
    textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl"
    gradientOnHover?: boolean
    spinSpeed?: "slow" | "medium" | "fast"
    children: React.ReactNode
    className?: string
}

export const CustomButton2 = ({
    href,
    target,
    size = "md",
    textSize = "base",
    gradientOnHover = true,
    spinSpeed = "medium",
    children,
    className,
    ...props
}: CustomButton2Props) => {
    // Size mappings
    const sizeClasses = {
        sm: "px-4 py-2",
        md: "px-6 py-2.5",
        lg: "px-8 py-3",
        xl: "px-10 py-4",
    }

    // Text size mappings
    const textSizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
    }

    // Get animation style based on speed
    const getAnimationStyle = (speed: "slow" | "medium" | "fast") => {
        const durations = {
            slow: 20,
            medium: 12,
            fast: 6,
        }

        return {
            animation: `spin ${durations[speed]}s linear infinite`,
        }
    }

    const buttonContent = (
        <>
            <div className="absolute inset-0 flex items-center [container-type:inline-size]">
                <div
                    className="absolute h-[100cqw] w-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgba(0,0,0,0.2)_0deg,transparent_60deg,transparent_300deg,rgba(0,0,0,0.2)_360deg)] dark:bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-70 dark:opacity-60 transition duration-300"
                    style={getAnimationStyle(spinSpeed)}
                ></div>
            </div>
            <div className="absolute inset-[1px] rounded-full bg-white/95 dark:bg-black/80 border border-zinc-200 dark:border-[#4c2a74] border-opacity-90 dark:border-opacity-90"></div>
            {gradientOnHover && (
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-purple-100 to-zinc-100 dark:from-[#0a0314] dark:via-[#1f0d35] dark:to-[#12071e] opacity-0 transition-opacity duration-300 group-hover:opacity-95 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/5 dark:after:from-black/70 after:to-transparent"></div>
            )}
            <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-black/5 dark:bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
            <div className={cn("relative inline-flex items-center gap-2", textSizeClasses[textSize])}>{children}</div>
        </>
    )

    const baseClasses =
        "bg-white dark:bg-[#3a2c9d] group relative inline-flex items-center overflow-hidden rounded-full transition"

    // If href is provided, render as Link
    if (href) {
        return (
            <Link href={href} target={target} className={cn(baseClasses, sizeClasses[size], className)}>
                {buttonContent}
            </Link>
        )
    }

    // Otherwise render as button
    return (
        <button type={props.type ?? 'submit'} className={cn(baseClasses, sizeClasses[size], className)} {...props}>
            {buttonContent}
        </button>
    )
}