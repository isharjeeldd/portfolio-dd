"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast"

interface ShareButtonsProps {
    title: string
    slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [mounted, setMounted] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const url = typeof window !== "undefined" ? `${window.location.origin}/blogs/${slug}` : `/blogs/${slug}`

    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        toast({
            title: "Link copied!",
            description: "The link has been copied to your clipboard.",
            duration: 3000,
        })
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            className="
            fixed z-50
            flex gap-3
            sm:left-6 sm:top-1/2 sm:-translate-y-1/2 sm:flex-col
            left-0 bottom-0 w-full justify-center bg-background/90 backdrop-blur-sm py-3 sm:py-0 sm:w-auto sm:bg-transparent
          "
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={item}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 bg-background/80 hover:bg-primary hover:text-white transition-colors"
                            onClick={() => window.open(shareLinks.twitter, "_blank")}
                        >
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Share on Twitter</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share on Twitter</TooltipContent>
                </Tooltip>
            </motion.div>

            <motion.div variants={item}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 bg-background/80 hover:bg-primary hover:text-white transition-colors"
                            onClick={() => window.open(shareLinks.facebook, "_blank")}
                        >
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Share on Facebook</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share on Facebook</TooltipContent>
                </Tooltip>
            </motion.div>

            <motion.div variants={item}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 bg-background/80 hover:bg-primary hover:text-white transition-colors"
                            onClick={() => window.open(shareLinks.linkedin, "_blank")}
                        >
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">Share on LinkedIn</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share on LinkedIn</TooltipContent>
                </Tooltip>
            </motion.div>

            <motion.div variants={item}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 bg-background/80 hover:bg-primary hover:text-white transition-colors"
                            onClick={copyToClipboard}
                        >
                            <Link2 className="h-4 w-4" />
                            <span className="sr-only">Copy link</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy link</TooltipContent>
                </Tooltip>
            </motion.div>
        </motion.div>
    )
}