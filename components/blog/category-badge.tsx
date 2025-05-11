import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
    category: string
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
    const getColorClass = (category: string) => {
        switch (category.toLowerCase()) {
            case "design":
                return "bg-[#f0f9ff] text-[#026aa2] dark:bg-[#026aa2]/20 dark:text-[#60cdff]";
            case "interface":
                return "bg-[#ecfdf3] text-[#027a48] dark:bg-[#027a48]/20 dark:text-[#6ce9a6]";
            case "best practices":
                return "bg-[#fdf2fa] text-[#c11574] dark:bg-[#c11574]/20 dark:text-[#ee85c0]";
            case "inclusivity":
                return "bg-[#fcefed] text-[#bc1e1e] dark:bg-[#bc1e1e]/20 dark:text-[#ff8888]";
            case "frontend development":
                return "bg-[#eef4ff] text-[#3538cd] dark:bg-[#3538cd]/20 dark:text-[#8183ff]";
            case "react":
                return "bg-[#f0f9ff] text-[#026aa2] dark:bg-[#026aa2]/20 dark:text-[#60cdff]";
            case "next.js":
                return "bg-[#f9f5ff] text-[#6941c6] dark:bg-[#6941c6]/20 dark:text-[#a78bfa]";
            case "debugging":
                return "bg-[#fff1f3] text-[#c01048] dark:bg-[#c01048]/20 dark:text-[#ff84a0]";
            case "backend development":
                return "bg-[#f8f9fc] text-[#363f72] dark:bg-[#363f72]/20 dark:text-[#8f9bba]";
            case "microservices":
                return "bg-[#fefce8] text-[#92400e] dark:bg-[#92400e]/20 dark:text-[#facc15]";
            case "devops":
                return "bg-[#eef4ff] text-[#1d4ed8] dark:bg-[#1d4ed8]/20 dark:text-[#93c5fd]";
            case "architecture":
                return "bg-[#e0f2fe] text-[#075985] dark:bg-[#075985]/20 dark:text-[#7dd3fc]";
            case "frameworks":
                return "bg-[#fef2f2] text-[#991b1b] dark:bg-[#991b1b]/20 dark:text-[#fca5a5]";
            case "software development":
                return "bg-[#f0fdf4] text-[#166534] dark:bg-[#166534]/20 dark:text-[#6ee7b7]";
            case "tools":
                return "bg-[#f5f3ff] text-[#6b21a8] dark:bg-[#6b21a8]/20 dark:text-[#c4b5fd]";
            case "ai":
                return "bg-[#f0f9ff] text-[#0369a1] dark:bg-[#0369a1]/20 dark:text-[#7dd3fc]";
            case "opinion":
                return "bg-[#fff7ed] text-[#78350f] dark:bg-[#78350f]/20 dark:text-[#fdba74]";
            case "productivity":
                return "bg-[#fefce8] text-[#854d0e] dark:bg-[#854d0e]/20 dark:text-[#fde68a]";
            default:
                return "bg-[#f9f5ff] text-[#6941c6] dark:bg-[#6941c6]/20 dark:text-[#a78bfa]";
        }

    }

    return (
        <span
            className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", getColorClass(category))}
        >
            {category}
        </span>
    )
}