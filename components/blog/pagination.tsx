"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from 'next/link'

interface PaginationProps {
    currentPage: number
    totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)

            let start = Math.max(2, currentPage - 1)
            let end = Math.min(totalPages - 1, currentPage + 1)

            if (currentPage <= 3) {
                end = 4
            }

            if (currentPage >= totalPages - 2) {
                start = totalPages - 3
            }

            if (start > 2) {
                pages.push("...")
            }

            for (let i = start; i <= end; i++) {
                pages.push(i)
            }

            if (end < totalPages - 1) {
                pages.push("...")
            }

            pages.push(totalPages)
        }

        return pages
    }

    return (
        <motion.nav
            className="flex justify-between items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <Button variant="ghost" disabled={currentPage === 1} asChild={currentPage !== 1}>
                {currentPage === 1 ? (
                    <span className="flex items-center gap-2 opacity-50">
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </span>
                ) : (
                    <Link href={`/blogs?page=${currentPage - 1}`} className="flex items-center gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Link>
                )}
            </Button>

            <div className="flex items-center gap-1">
                {getPageNumbers().map((page, index) =>
                    typeof page === "number" ? (
                        <Button
                            key={index}
                            variant={currentPage === page ? "default" : "ghost"}
                            size="icon"
                            className="w-9 h-9"
                            asChild={currentPage !== page}
                        >
                            {currentPage === page ? <span>{page}</span> : <Link href={`/blogs?page=${page}`}>{page}</Link>}
                        </Button>
                    ) : (
                        <span key={index} className="px-2">
                            ...
                        </span>
                    ),
                )}
            </div>

            <Button variant="ghost" disabled={currentPage === totalPages} asChild={currentPage !== totalPages}>
                {currentPage === totalPages ? (
                    <span className="flex items-center gap-2 opacity-50">
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </span>
                ) : (
                    <Link href={`/blogs?page=${currentPage + 1}`} className="flex items-center gap-2">
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Link>
                )}
            </Button>
        </motion.nav>
    )
}