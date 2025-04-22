// app/sitemap.ts
import { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-data" // Your blog data file

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.sharjeelafzaal.com"

    const staticRoutes = [
        "",
        "/about",
        "/projects",
        "/contact",
        "/blogs"
    ]

    const dynamicBlogRoutes = blogPosts.map((post) => `/blogs/${post.slug}`)

    const allRoutes = [...staticRoutes, ...dynamicBlogRoutes]

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }))
}