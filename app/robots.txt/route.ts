import { NextResponse } from 'next/server';

export function GET() {
    const content = `
User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://www.sharjeelafzaal.com/sitemap.xml
`;

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}