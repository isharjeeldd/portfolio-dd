import { BlogPost } from "@/types/blogs"

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title:
            "UX review presentations: How to create compelling presentations that wow your colleagues and impress your managers",
        slug: "ux-review-presentations",
        author: "Olivia Rhye",
        date: "2023-01-01",
        excerpt:
            "Learn how to create compelling UX review presentations that wow your colleagues and impress your managers. Discover key strategies for clear communication, visual storytelling, and strategic thinking.",
        content: `
      <h2>The Art of UX Review Presentations</h2>
      <p>Creating compelling UX review presentations is an art that combines clear communication, visual storytelling, and strategic thinking. Here are some key strategies to make your presentations stand out:</p>
      
      <h3>Start with a Clear Structure</h3>
      <p>Begin with an overview of what you'll cover, then dive into the details. A good structure might include:</p>
      <ul>
        <li>Problem statement and research goals</li>
        <li>Methodology and participants</li>
        <li>Key findings and insights</li>
        <li>Recommendations and next steps</li>
      </ul>
      
      <h3>Use Visual Evidence</h3>
      <p>Show, don't just tell. Include screenshots, user flows, and video clips of user testing sessions to bring your points to life. Visual evidence makes your arguments more compelling and helps stakeholders understand user pain points.</p>
      
      <h3>Tell a Story</h3>
      <p>Frame your presentation as a narrative. Start with the user's journey, highlight the challenges they face, and show how your proposed solutions will improve their experience. Stories are memorable and help create emotional connections with your audience.</p>
      
      <h3>Focus on Impact</h3>
      <p>Always tie your findings back to business goals and metrics. Whether it's increased conversion rates, reduced support tickets, or improved user satisfaction scores, make the business case for your recommendations clear.</p>
      
      <h3>Keep it Concise</h3>
      <p>Respect your audience's time by being selective about what you include. Focus on the most important insights and recommendations rather than sharing every detail of your research.</p>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Design", "Research", "Presentation"],
    },
    {
        id: "2",
        title: "Migrating to Linear 101",
        slug: "migrating-to-linear-101",
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
        content: `
      <p>Migrating your team's workflow to Linear can significantly improve productivity and project visibility. This guide will walk you through the essential steps to make the transition smooth and successful.</p>
      
      <h2>Why Linear?</h2>
      <p>Before diving into the migration process, it's worth understanding what makes Linear different:</p>
      <ul>
        <li>Speed and performance: Linear is built for speed with keyboard shortcuts and instant updates</li>
        <li>Streamlined interface: Minimal design reduces distractions</li>
        <li>Integrated roadmaps: Visualize project timelines and dependencies</li>
        <li>Automation: Reduce manual work with smart workflows</li>
      </ul>
      
      <h2>Preparation Phase</h2>
      <p>Before migrating, take time to:</p>
      <ol>
        <li>Audit your current project management system</li>
        <li>Define your team structure and workflows</li>
        <li>Clean up and prioritize existing issues</li>
        <li>Plan your workspace organization</li>
      </ol>
      
      <h2>Setting Up Your Linear Workspace</h2>
      <p>Start by configuring your workspace to match your team's needs:</p>
      <ul>
        <li>Create teams based on your organizational structure</li>
        <li>Set up projects to organize work</li>
        <li>Configure custom states and priorities</li>
        <li>Define issue templates for consistency</li>
      </ul>
      
      <h2>Data Migration Strategies</h2>
      <p>Linear offers several ways to import your existing data:</p>
      <ul>
        <li>Direct importers for Jira, GitHub, Asana, and Trello</li>
        <li>API-based custom migration for other tools</li>
        <li>CSV import for spreadsheet-based systems</li>
      </ul>
      
      <h2>Training Your Team</h2>
      <p>Ensure adoption by properly onboarding your team:</p>
      <ul>
        <li>Schedule training sessions focused on daily workflows</li>
        <li>Create a quick reference guide for keyboard shortcuts</li>
        <li>Assign Linear champions to support team members</li>
        <li>Start with a pilot project before full rollout</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Design", "Research"],
    },
    {
        id: "3",
        title: "Building your API Stack",
        slug: "building-your-api-stack",
        author: "Lana Steiner",
        date: "1 Jan 2023",
        excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        content: `
      <p>Building a robust API stack is essential for modern applications. This article explores the key components and best practices for creating a scalable and maintainable API infrastructure.</p>
      
      <h2>Designing Your API</h2>
      <p>Start with a solid design that follows these principles:</p>
      <ul>
        <li>Use RESTful conventions for resource naming and HTTP methods</li>
        <li>Implement consistent error handling and status codes</li>
        <li>Design with versioning in mind from the beginning</li>
        <li>Create comprehensive documentation with examples</li>
      </ul>
      
      <h2>Choosing Your Tech Stack</h2>
      <p>Select technologies that align with your team's expertise and project requirements:</p>
      <ul>
        <li>Backend framework: Node.js/Express, Django, Rails, or Spring Boot</li>
        <li>API specification: OpenAPI/Swagger for documentation</li>
        <li>Authentication: OAuth 2.0, JWT, or API keys</li>
        <li>Database: Consider both SQL and NoSQL options based on data structure</li>
      </ul>
      
      <h2>Testing Strategies</h2>
      <p>Implement comprehensive testing to ensure reliability:</p>
      <ul>
        <li>Unit tests for individual functions and methods</li>
        <li>Integration tests for API endpoints</li>
        <li>Contract tests to verify API specifications</li>
        <li>Performance tests to identify bottlenecks</li>
      </ul>
      
      <h2>Monitoring and Observability</h2>
      <p>Keep your APIs healthy with proper monitoring:</p>
      <ul>
        <li>Implement logging for debugging and audit trails</li>
        <li>Set up performance monitoring for response times</li>
        <li>Track error rates and status code distributions</li>
        <li>Create dashboards for key metrics</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <p>Protect your API with these security measures:</p>
      <ul>
        <li>Implement rate limiting to prevent abuse</li>
        <li>Use HTTPS for all endpoints</li>
        <li>Validate and sanitize all input</li>
        <li>Regularly audit dependencies for vulnerabilities</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Design", "Research"],
    },
    {
        id: "4",
        title: "Grid system for better Design User Interface",
        slug: "grid-system-for-better-design-user-interface",
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        excerpt:
            "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements.",
        content: "",
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Design", "Interface"],
    },
    {
        id: "5",
        title: "Bill Walsh leadership lessons",
        slug: "bill-walsh-leadership-lessons",
        author: "Alec Whitten",
        date: "1 Jan 2023",
        excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        content: `
      <p>Bill Walsh's leadership approach transformed the San Francisco 49ers from one of the worst teams in NFL history to a dynasty that won three Super Bowls. His methods offer valuable lessons for leaders in any field.</p>
      
      <h2>The Standard of Performance</h2>
      <p>Walsh believed in establishing clear standards that went beyond just winning games. He focused on:</p>
      <ul>
        <li>Defining how people should conduct themselves</li>
        <li>Setting expectations for effort and execution</li>
        <li>Creating a culture of excellence in every detail</li>
        <li>Emphasizing process over outcomes</li>
      </ul>
      
      <h2>Teaching as Leadership</h2>
      <p>Walsh saw himself primarily as a teacher, not just a coach:</p>
      <ul>
        <li>He broke complex concepts into teachable components</li>
        <li>Created detailed scripts and playbooks</li>
        <li>Emphasized continuous learning and improvement</li>
        <li>Developed assistant coaches who later became successful head coaches</li>
      </ul>
      
      <h2>The West Coast Offense: Innovation as Advantage</h2>
      <p>Walsh's innovative offensive system changed football forever:</p>
      <ul>
        <li>He developed a timing-based passing game that emphasized precision</li>
        <li>Adapted his system to the talent available rather than forcing players into a rigid system</li>
        <li>Created detailed contingency plans for various scenarios</li>
        <li>Constantly evolved his approach to stay ahead of competitors</li>
      </ul>
      
      <h2>Succession Planning</h2>
      <p>Walsh understood the importance of developing future leaders:</p>
      <ul>
        <li>He created a coaching tree that influenced the entire NFL</li>
        <li>Delegated responsibility to develop his assistants</li>
        <li>Documented processes and philosophies</li>
        <li>Prepared the organization for long-term success beyond his tenure</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Leadership", "Management"],
    },
    {
        id: "6",
        title: "PM mental models",
        slug: "pm-mental-models",
        author: "Demi Wilkinson",
        date: "1 Jan 2023",
        excerpt: "Mental models are simple expressions of complex processes or relationships.",
        content: `
      <p>Mental models help product managers make better decisions by providing frameworks to understand complex problems. Here are some essential mental models every PM should know.</p>
      
      <h2>First Principles Thinking</h2>
      <p>Break down complex problems into their most basic elements:</p>
      <ul>
        <li>Question assumptions and conventional wisdom</li>
        <li>Identify the fundamental truths or components</li>
        <li>Rebuild your understanding from the ground up</li>
        <li>Example: Instead of iterating on existing solutions, ask "What problem are we really solving?"</li>
      </ul>
      
      <h2>Opportunity Cost</h2>
      <p>Every choice means giving up alternatives:</p>
      <ul>
        <li>Evaluate what you're giving up by choosing one option</li>
        <li>Consider the value of the next best alternative</li>
        <li>Apply to resource allocation, feature prioritization, and roadmap planning</li>
        <li>Example: Building feature A means not building features B and C with those same resources</li>
      </ul>
      
      <h2>Jobs To Be Done</h2>
      <p>Focus on what customers are trying to accomplish:</p>
      <ul>
        <li>People "hire" products to do specific jobs in their lives</li>
        <li>Understand the progress customers are trying to make</li>
        <li>Identify functional, emotional, and social dimensions of jobs</li>
        <li>Example: People don't buy a drill because they want a drill; they want a hole</li>
      </ul>
      
      <h2>Second-Order Thinking</h2>
      <p>Consider the consequences beyond immediate effects:</p>
      <ul>
        <li>Ask "And then what?" multiple times</li>
        <li>Anticipate how systems will respond to changes</li>
        <li>Look for unintended consequences</li>
        <li>Example: A free feature might increase acquisition but decrease perceived value</li>
      </ul>
      
      <h2>Inversion</h2>
      <p>Approach problems backward:</p>
      <ul>
        <li>Instead of asking how to succeed, ask how to avoid failure</li>
        <li>Identify what would make your product unsuccessful</li>
        <li>Work backward from desired outcomes</li>
        <li>Example: "What would make our users abandon our product?" then avoid those things</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Product", "Research", "Frameworks"],
    },
    {
        id: "7",
        title: "What is Wireframing?",
        slug: "what-is-wireframing",
        author: "Candice Wu",
        date: "1 Jan 2023",
        excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        content: `
      <p>Wireframing is a fundamental step in the design process that helps visualize the structure and functionality of a digital product before adding visual design elements.</p>
      
      <h2>What is a Wireframe?</h2>
      <p>A wireframe is a low-fidelity representation of a design that:</p>
      <ul>
        <li>Outlines the page structure and layout</li>
        <li>Shows the placement of elements and content</li>
        <li>Communicates functionality without visual distractions</li>
        <li>Serves as a blueprint for the final design</li>
      </ul>
      
      <h2>Why Wireframe?</h2>
      <p>Wireframing offers several benefits in the design process:</p>
      <ul>
        <li>Allows quick iteration and exploration of ideas</li>
        <li>Facilitates early feedback before investing in high-fidelity designs</li>
        <li>Helps identify usability issues and information architecture problems</li>
        <li>Creates alignment among stakeholders and team members</li>
        <li>Saves time and resources by validating concepts early</li>
      </ul>
      
      <h2>Types of Wireframes</h2>
      <p>Wireframes can vary in detail and complexity:</p>
      <ul>
        <li><strong>Low-fidelity:</strong> Simple sketches with basic shapes and placeholders</li>
        <li><strong>Mid-fidelity:</strong> More detailed layouts with accurate proportions and some annotations</li>
        <li><strong>High-fidelity:</strong> Detailed wireframes with accurate content, spacing, and some interactive elements</li>
      </ul>
      
      <h2>Wireframing Process</h2>
      <p>A typical wireframing process includes these steps:</p>
      <ol>
        <li>Research: Understand user needs and business requirements</li>
        <li>Information Architecture: Organize content and define user flows</li>
        <li>Sketching: Create rough drafts of key screens</li>
        <li>Wireframing: Develop more detailed layouts</li>
        <li>Review: Gather feedback from stakeholders and users</li>
        <li>Iteration: Refine based on feedback</li>
        <li>Documentation: Add annotations explaining functionality</li>
      </ol>
      
      <h2>Tools for Wireframing</h2>
      <p>Popular tools used for wireframing include:</p>
      <ul>
        <li>Figma</li>
        <li>Sketch</li>
        <li>Adobe XD</li>
        <li>Balsamiq</li>
        <li>Axure RP</li>
        <li>Miro</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Design", "Research"],
    },
    {
        id: "8",
        title: "How collaboration makes us better designers",
        slug: "how-collaboration-makes-us-better-designers",
        author: "Natali Craig",
        date: "1 Jan 2023",
        excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
        content: `
      <p>Design is increasingly becoming a team sport. This article explores how collaboration enhances the design process and leads to better outcomes.</p>
      
      <h2>Breaking Down Silos</h2>
      <p>Traditional design processes often isolated designers from other disciplines. Modern collaboration:</p>
      <ul>
        <li>Brings together diverse perspectives and expertise</li>
        <li>Integrates design with product, engineering, and business goals</li>
        <li>Creates shared understanding and alignment</li>
        <li>Reduces handoff friction and implementation issues</li>
      </ul>
      
      <h2>Collaborative Design Methods</h2>
      <p>Effective collaboration can be structured through various methods:</p>
      <ul>
        <li>Design studios and workshops</li>
        <li>Pair designing (similar to pair programming)</li>
        <li>Design critiques and feedback sessions</li>
        <li>Cross-functional brainstorming</li>
        <li>User research as a team activity</li>
      </ul>
      
      <h2>Tools That Enable Collaboration</h2>
      <p>Modern design tools have evolved to support collaborative workflows:</p>
      <ul>
        <li>Real-time collaborative editing in Figma</li>
        <li>Version control and branching for design files</li>
        <li>Comment and feedback systems</li>
        <li>Design systems as a collaborative foundation</li>
        <li>Virtual whiteboarding for remote teams</li>
      </ul>
      
      <h2>Overcoming Collaboration Challenges</h2>
      <p>Effective collaboration isn't without obstacles:</p>
      <ul>
        <li>Balancing individual creative expression with team input</li>
        <li>Managing design by committee pitfalls</li>
        <li>Creating psychological safety for honest feedback</li>
        <li>Establishing clear decision-making processes</li>
        <li>Accommodating different working styles and preferences</li>
      </ul>
      
      <h2>Measuring Collaborative Success</h2>
      <p>How to know if your collaborative approach is working:</p>
      <ul>
        <li>Improved design quality and consistency</li>
        <li>Faster time to implementation</li>
        <li>Reduced rework and design debt</li>
        <li>Higher team satisfaction and engagement</li>
        <li>Better alignment between design intent and final product</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Design", "Research"],
    },
    {
        id: "9",
        title: "Our top 10 Javascript frameworks to use",
        slug: "our-top-10-javascript-frameworks-to-use",
        author: "Drew Cano",
        date: "1 Jan 2023",
        excerpt: "JavaScript frameworks make development easy with extensive features and functionalities.",
        content: `
      <p>The JavaScript ecosystem continues to evolve rapidly. Here's our analysis of the top frameworks to consider for your next project.</p>
      
      <h2>1. React</h2>
      <p>Facebook's library for building user interfaces remains dominant:</p>
      <ul>
        <li>Component-based architecture for reusable UI elements</li>
        <li>Virtual DOM for optimized rendering performance</li>
        <li>Massive ecosystem and community support</li>
        <li>Flexible integration with various state management solutions</li>
      </ul>
      
      <h2>2. Vue.js</h2>
      <p>The progressive framework continues to gain popularity:</p>
      <ul>
        <li>Gentle learning curve for beginners</li>
        <li>Comprehensive documentation</li>
        <li>Incrementally adoptable architecture</li>
        <li>Built-in state management and routing solutions</li>
      </ul>
      
      <h2>3. Angular</h2>
      <p>Google's comprehensive framework for enterprise applications:</p>
      <ul>
        <li>Full-featured platform with built-in tools</li>
        <li>TypeScript integration for type safety</li>
        <li>Dependency injection system</li>
        <li>Comprehensive testing utilities</li>
      </ul>
      
      <h2>4. Next.js</h2>
      <p>The React framework for production-ready applications:</p>
      <ul>
        <li>Server-side rendering and static site generation</li>
        <li>Automatic code splitting</li>
        <li>Built-in routing and API routes</li>
        <li>Optimized for performance and SEO</li>
      </ul>
      
      <h2>5. Svelte</h2>
      <p>The compiler-based approach to UI development:</p>
      <ul>
        <li>Compiles to highly efficient vanilla JavaScript</li>
        <li>No virtual DOM overhead</li>
        <li>Less boilerplate code</li>
        <li>Built-in animations and state management</li>
      </ul>
      
      <h2>6. Nuxt.js</h2>
      <p>The intuitive Vue framework:</p>
      <ul>
        <li>Similar benefits to Next.js but for Vue applications</li>
        <li>Automatic route generation</li>
        <li>Server-side rendering capabilities</li>
        <li>Module system for extending functionality</li>
      </ul>
      
      <h2>7. Remix</h2>
      <p>The newest framework focused on web fundamentals:</p>
      <ul>
        <li>Built on web standards and native browser features</li>
        <li>Nested routing with data loading</li>
        <li>Progressive enhancement philosophy</li>
        <li>Strong focus on performance and user experience</li>
      </ul>
      
      <h2>8. Astro</h2>
      <p>The all-in-one web framework:</p>
      <ul>
        <li>Multi-framework support (React, Vue, Svelte in one project)</li>
        <li>Partial hydration for improved performance</li>
        <li>Content-focused with built-in Markdown support</li>
        <li>Island architecture for optimized client-side JavaScript</li>
      </ul>
      
      <h2>9. Solid</h2>
      <p>The reactive library inspired by React:</p>
      <ul>
        <li>Fine-grained reactivity without a virtual DOM</li>
        <li>Familiar React-like syntax</li>
        <li>Excellent performance benchmarks</li>
        <li>Small bundle size</li>
      </ul>
      
      <h2>10. Qwik</h2>
      <p>The resumable framework for instant loading:</p>
      <ul>
        <li>Designed for instant startup performance</li>
        <li>Lazy-loading of code at the component level</li>
        <li>Serialization of application state</li>
        <li>HTML-first approach</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Software Development", "Tools", "SaaS"],
    },
    {
        id: "10",
        title: "Podcast: Creating a better CX Community",
        slug: "podcast-creating-a-better-cx-community",
        author: "Orlando Diggs",
        date: "1 Jan 2023",
        excerpt: "Starting a community doesn't need to be complicated, but how do you get started?",
        content: `
      <p>Building a customer experience (CX) community can transform your business and create lasting relationships. This article explores key strategies for creating and nurturing a thriving CX community.</p>
      
      <h2>Why Build a CX Community?</h2>
      <p>A strong customer experience community offers multiple benefits:</p>
      <ul>
        <li>Creates a sense of belonging among customers</li>
        <li>Provides valuable product feedback and insights</li>
        <li>Reduces support costs through peer-to-peer assistance</li>
        <li>Increases customer retention and loyalty</li>
        <li>Transforms customers into brand advocates</li>
      </ul>
      
      <h2>Starting Your Community</h2>
      <p>Begin with these foundational elements:</p>
      <ul>
        <li>Define clear community goals and purpose</li>
        <li>Select the right platform(s) for your audience</li>
        <li>Create community guidelines and values</li>
        <li>Develop a content strategy to spark engagement</li>
        <li>Recruit initial members to seed discussions</li>
      </ul>
      
      <h2>Fostering Engagement</h2>
      <p>Keep your community active and engaged with these strategies:</p>
      <ul>
        <li>Host regular events like AMAs, webinars, and workshops</li>
        <li>Create exclusive content for community members</li>
        <li>Recognize and reward active contributors</li>
        <li>Facilitate connections between members</li>
        <li>Involve your team in community discussions</li>
      </ul>
      
      <h2>Measuring Community Success</h2>
      <p>Track these metrics to evaluate your community's health:</p>
      <ul>
        <li>Active member growth and retention</li>
        <li>Engagement metrics (posts, comments, reactions)</li>
        <li>Customer satisfaction and NPS scores</li>
        <li>Support deflection rates</li>
        <li>Product adoption influenced by community</li>
      </ul>
      
      <h2>Scaling Your Community</h2>
      <p>As your community grows, consider these strategies:</p>
      <ul>
        <li>Develop a community ambassador program</li>
        <li>Create specialized sub-groups for specific interests</li>
        <li>Implement automation for routine tasks</li>
        <li>Expand your community management team</li>
        <li>Connect online engagement with offline experiences</li>
      </ul>
    `,
        coverImage: "/placeholder.svg?height=600&width=800",
        categories: ["Podcasts", "Customer Success"],
    },
]

export function getAllBlogs(): BlogPost[] {
    return blogPosts
}

export function getRecentBlogs(count = 3, excludeId?: string): BlogPost[] {
    return blogPosts.filter((blog) => !excludeId || blog.id !== excludeId).slice(0, count)
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((blog) => blog.slug === slug)
}