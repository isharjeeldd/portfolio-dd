import { cn } from "@/lib/utils"

interface CategoryBadgeProps {
    category: string
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
    const getColorClass = (category: string) => {
        switch (category.toLowerCase()) {
            case "design":
                return "bg-[#f0f9ff] text-[#026aa2] dark:bg-[#026aa2]/20 dark:text-[#60cdff]"
            case "research":
                return "bg-[#fdf2fa] text-[#c11574] dark:bg-[#c11574]/20 dark:text-[#ee85c0]"
            case "presentation":
                return "bg-[#f9f5ff] text-[#6941c6] dark:bg-[#6941c6]/20 dark:text-[#a78bfa]"
            case "interface":
                return "bg-[#ecfdf3] text-[#027a48] dark:bg-[#027a48]/20 dark:text-[#6ce9a6]"
            case "leadership":
                return "bg-[#f8f9fc] text-[#363f72] dark:bg-[#363f72]/20 dark:text-[#8f9bba]"
            case "management":
                return "bg-[#eef4ff] text-[#3538cd] dark:bg-[#3538cd]/20 dark:text-[#8183ff]"
            case "product":
                return "bg-[#fff6ed] text-[#c4320a] dark:bg-[#c4320a]/20 dark:text-[#ff8f73]"
            case "frameworks":
                return "bg-[#fff1f3] text-[#c01048] dark:bg-[#c01048]/20 dark:text-[#ff84a0]"
            case "software development":
                return "bg-[#f0f9ff] text-[#026aa2] dark:bg-[#026aa2]/20 dark:text-[#60cdff]"
            case "tools":
                return "bg-[#f9f5ff] text-[#6941c6] dark:bg-[#6941c6]/20 dark:text-[#a78bfa]"
            case "saas":
                return "bg-[#fdf2fa] text-[#c11574] dark:bg-[#c11574]/20 dark:text-[#ee85c0]"
            case "podcasts":
                return "bg-[#ecfdf3] text-[#027a48] dark:bg-[#027a48]/20 dark:text-[#6ce9a6]"
            case "customer success":
                return "bg-[#fff6ed] text-[#c4320a] dark:bg-[#c4320a]/20 dark:text-[#ff8f73]"
            default:
                return "bg-[#f9f5ff] text-[#6941c6] dark:bg-[#6941c6]/20 dark:text-[#a78bfa]"
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