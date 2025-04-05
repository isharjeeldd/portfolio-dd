import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Blog Post Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                The blog post you're looking for doesn't exist or has been moved to another location.
            </p>
            <Button asChild>
                <Link href="/blogs">Return to Blog</Link>
            </Button>
        </div>
    )
}