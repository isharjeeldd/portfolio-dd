import { BlogPost } from "@/types/blogs"

export const blogPosts: BlogPost[] = [

  {
    "id": "268d140a-adaf-47b3-803b-5d4a1943b6fd",
    "title": "AI Assistant Coding vs Vibe Coding",
    "slug": "ai-assistant-coding-vs-vibe-coding",
    "author": "Muhammad Sharjeel",
    "date": "2026-01-04",
    "excerpt": "As AI becomes ubiquitous in software development, a dangerous pattern is emerging: developers blindly accepting AI suggestions without understanding the code. This 'vibe coding' approach undermines the fundamentals of being a developer. Here's why understanding code matters more than shipping it, and how to use AI as a proper assistant.",
    "content": `
      <br/>
      <h2>AI Assistant Coding & Vibe Coding</h2>
      <p>As the shift towards using AI in the modern world grows, the use of AI in Software Development has increased exponentially. People now rely on AI more rather than solving a problem using their brain. Now the use of AI itself is not bad if used correctly. I myself use AI everyday as an assistant or a teacher that teaches you new concepts and ways to code. The problem comes when people use it with their sheep-like brain that is incapable of thinking and learning using AI.</p>
      
      <p>First reason I believe is that overall as a society we all have become "TikTok" and "Instagram reel" brained which constantly crave dopamine. People do not want to sit down and focus for hours anymore, rather they want just quick fixes, summaries, someone that can explain in natural language rather than learning from it from a technical perspective. Secondly, people just want that feeling of learning rather than actually putting in the work, biggest reason being one can do all of the work in a matter of seconds using AI, because it's easy and available for free.</p>
      
      <p>Now, as a developer working in the industry, I come across a lot of code which is redundant, messy, vibe coded and most of the time, a junior developer is behind it. When asked "what was the thought process followed for this code?", the answer comes back "because cursor suggested it". This kind of sheep mindset ruins you as a developer, impacts the business in the longer run because there is no structure, no foundation and no actual thought put for the problem that is being solved. Just shipping code that you don't understand doesn't make you a developer, understanding the code does. As a good developer, your job is to learn all those technical concepts and fundamentals which make you a good critical thinker, decision maker, debugger and a problem solver.</p>

      <h2>Vibe Coding?</h2>
      <p><strong>Vibe coding</strong> is the practice of blindly accepting AI-generated code suggestions without understanding what the code does, why it works, or whether it's the right solution for the problem at hand. It's coding by vibes, if you get a good feeling about it, and the AI suggested it, ship it.</p>
      
      <p>This approach treats AI tools like Cursor, GitHub Copilot, or ChatGPT as oracles rather than assistants. Instead of using AI to accelerate learning and problem-solving, vibe coders use it to skip the thinking process entirely. The code might work initially, but when it breaks (and it will), the developer has no foundation to debug or fix it.</p>

      <h2>The Cons of Vibe Coding</h2>
      <p>Vibe coding creates a cascade of problems that extend far beyond the immediate codebase:</p>

      <h3>1. Lack of Understanding</h3>
      <p>When you accept code without understanding it, you're not learning, you're copying. This means:</p>
      <ul>
        <li>You can't explain why a solution works or doesn't work</li>
        <li>You can't modify the code when requirements change</li>
        <li>You can't debug effectively when things break</li>
        <li>You can't make informed decisions about trade-offs</li>
      </ul>
      <p>I've seen developers who can't explain their own code during code reviews. When asked "Why did you use this approach?", the answer is often "The AI suggested it" which is not an answer at all.</p>

      <h3>2. No Foundation or Structure</h3>
      <p>Vibe coding leads to codebases that lack architectural coherence. Without understanding the fundamentals, developers:</p>
      <ul>
        <li>Mix patterns inconsistently (some functional, some OOP, some procedural)</li>
        <li>Create circular dependencies because they don't understand module boundaries</li>
        <li>Write code that works in isolation but breaks when integrated</li>
        <li>Build systems that are impossible to maintain or scale</li>
      </ul>
      <p>Each AI suggestion might be correct in isolation, but without a developer's understanding of the bigger picture, the codebase becomes a patchwork of disconnected solutions.</p>

      <h3>3. Business Impact</h3>
      <p>The long-term cost of vibe coding is significant:</p>
      <ul>
        <li><strong>Technical debt:</strong> Code that works but can't be extended or modified easily</li>
        <li><strong>Slower development:</strong> When you can't understand existing code, every change takes longer</li>
        <li><strong>Higher bug rates:</strong> Code you don't understand is code you can't test properly</li>
        <li><strong>Team velocity decline:</strong> As the codebase grows, onboarding becomes harder and feature development slows</li>
        <li><strong>Increased costs:</strong> More time debugging, more refactoring, more rewrites</li>
      </ul>
      <p>I've worked on projects where entire features had to be rewritten because the original code was so poorly understood that no one could modify it safely.</p>

      <h3>4. Career Stagnation</h3>
      <p>Perhaps the most damaging consequence is personal, vibe coding prevents you from growing as a developer. When you skip the learning process, you:</p>
      <ul>
        <li>Never develop problem-solving skills</li>
        <li>Can't progress beyond junior-level work</li>
        <li>Become dependent on AI tools rather than your own knowledge</li>
        <li>Struggle in interviews or technical discussions</li>
        <li>Can't mentor others or contribute to architectural decisions</li>
      </ul>
      <p>Your career plateaus because you're not building the skills that make senior developers valuable: critical thinking, system design, and deep technical knowledge.</p>

      <h2>The Real Job of a Developer</h2>
      <p>Being a developer isn't about writing code, it's about solving problems. The qualities of a good developer entails:</p>

      <h3>Critical Thinking and Problem-Solving</h3>
      <p>Before writing any code, a good developer:</p>
      <ul>
        <li>Understands the problem deeply, not just the surface requirements</li>
        <li>Considers multiple solutions and their trade-offs</li>
        <li>Thinks about edge cases, error handling, and failure modes</li>
        <li>Evaluates solutions based on maintainability, performance, and scalability</li>
      </ul>
      <p>This is the thinking work that AI can't do for you. AI can suggest code, but it can't understand your business context, your team's constraints, or your long-term goals.</p>

      <h3>Understanding Fundamentals</h3>
      <p>Strong developers have deep knowledge of:</p>
      <ul>
        <li><strong>Core concepts:</strong> Data structures, algorithms, design patterns, system architecture</li>
        <li><strong>Language specifics:</strong> How the language works under the hood, not just syntax</li>
        <li><strong>Best practices:</strong> When to apply them and when to break them</li>
        <li><strong>Trade-offs:</strong> Performance vs. readability, speed vs. maintainability</li>
      </ul>
      <p>This knowledge comes from study, practice, and experience, not from copying AI suggestions.</p>

      <h3>Decision-Making</h3>
      <p>Every line of code is a decision. Good developers make informed decisions by:</p>
      <ul>
        <li>Understanding why one approach is better than another</li>
        <li>Considering the impact on the codebase, team, and users</li>
        <li>Balancing short-term speed with long-term maintainability</li>
        <li>Making choices that align with project goals and constraints</li>
      </ul>
      <p>AI can't make these decisions for you because it doesn't know your context, your team, or your goals.</p>

      <h3>Debugging Skills</h3>
      <p>Debugging is where understanding really matters. When code breaks, you need to:</p>
      <ul>
        <li>Read error messages and stack traces</li>
        <li>Trace execution flow through the codebase</li>
        <li>Understand how different parts interact</li>
        <li>Identify root causes, not just symptoms</li>
        <li>Fix issues without introducing new bugs</li>
      </ul>
      <p>If you don't understand the code, debugging becomes guesswork. You'll try random fixes, copy-paste solutions from Stack Overflow, and hope something works, which is neither efficient nor reliable.</p>

      <h2>How to Use AI as an Assistant</h2>
      <p>AI is a powerful tool when used correctly. Here's how to leverage it without falling into the vibe coding trap:</p>

      <h3>1. AI as a Teacher</h3>
      <p>Use AI to learn, not to skip learning:</p>
      <ul>
        <li><strong>Ask for explanations:</strong> "Explain how this React hook works" instead of "Write a React hook for me"</li>
        <li><strong>Request examples:</strong> "Show me three different ways to handle this problem" and understand the trade-offs</li>
        <li><strong>Get context:</strong> "Why would I use this pattern? What are the alternatives?"</li>
        <li><strong>Learn fundamentals:</strong> Use AI to explain concepts you don't understand, then practice implementing them yourself</li>
      </ul>
      <p>Treat AI like a tutor who helps you understand, not a ghostwriter who does the work for you.</p>

      <h3>2. AI for Code Suggestions (Not Blind Acceptance)</h3>
      <p>When AI suggests code:</p>
      <ul>
        <li><strong>Read and understand it first:</strong> Don't accept until you know what it does</li>
        <li><strong>Question the approach:</strong> Is this the right solution? Are there better alternatives?</li>
        <li><strong>Test it thoroughly:</strong> Verify it works, check edge cases, ensure it fits your architecture</li>
        <li><strong>Modify as needed:</strong> Adapt the suggestion to your specific needs and constraints</li>
        <li><strong>Learn from it:</strong> Understand why the AI suggested this approach, what patterns it used, and how you can apply those patterns elsewhere</li>
      </ul>
      <p>AI suggestions are starting points, not final solutions. Your job is to evaluate, adapt, and own the code.</p>

      <h3>3. Maintaining Ownership and Understanding</h3>
      <p>Every piece of code you ship should be code you understand:</p>
      <ul>
        <li><strong>Own your code:</strong> If you can't explain it, you shouldn't ship it</li>
        <li><strong>Document your decisions:</strong> Write comments explaining why, not just what</li>
        <li><strong>Review before accepting:</strong> Treat AI suggestions like PRs from a junior developer, review them critically</li>
        <li><strong>Build incrementally:</strong> Use AI to help you build, but make sure you understand each step</li>
      </ul>
      <p>Remember: if something breaks at 2 AM, you'll be the one debugging it. Make sure you can.</p>

      <h3>4. Practical Workflow</h3>
      <p>Here's a workflow that keeps you in control:</p>
      <ol>
        <li><strong>Understand the problem:</strong> Think through the requirements and constraints yourself</li>
        <li><strong>Design the solution:</strong> Sketch out an approach before asking AI for help</li>
        <li><strong>Use AI for implementation help:</strong> Ask for code that matches your design, not a complete solution</li>
        <li><strong>Review and understand:</strong> Read every line of AI-generated code and understand it</li>
        <li><strong>Test and refine:</strong> Test the code, fix issues, and adapt it to your needs</li>
        <li><strong>Learn and document:</strong> Understand the patterns used and document your decisions</li>
      </ol>

      <h2>Final Thoughts</h2>
      <p>AI is transforming software development, but it's not replacing developers, it's changing what it means to be a good developer. The developers who thrive will be those who use AI to amplify their skills, not replace their thinking.</p>
      
      <p>Vibe coding might feel productive in the short term, but it's a trap. It creates code you can't maintain, problems you can't solve, and a career that doesn't grow. The real value of a developer isn't in writing code, it's in understanding problems, making decisions, and building systems that work.</p>
      
      <p>Use AI as an assistant, a teacher, and a tool. But never let it become a crutch that prevents you from learning and thinking. Your future self and your codebase will thank you.</p>
      
      <p>Remember: <strong>Just shipping code that you don't understand doesn't make you a developer. Understanding the code does.</strong></p>
    `,
    "coverImage": "/blogs/ai-assistant-coding-vs-vibe-coding.png",
    "categories": ["Software Development"]
  },

  {
    "id": "d87c52fa-b041-4de4-8f8c-f4d9f9bb9df2",
    "title": "Hosting Multiple Domains on One Server with Docker, NGINX & SSL (DevOps for Developers)",
    "slug": "multi-domain-docker-nginx-ssl-lets-encrypt",
    "author": "Muhammad Sharjeel",
    "date": "2025-07-13",
    "excerpt": "As a full-stack developer, I recently had to deploy multiple backend services on one server, each with its own domain and SSL certificate. Here's how I combined Docker, NGINX, and Certbot to build a scalable, production-grade setup — without needing a dedicated DevOps engineer.",
    "content": `
      <br/>
      <h2>Why This Was Worth Learning</h2>
      <p>As a full-stack developer, I usually focus on building features — not server orchestration. But recently, I needed to deploy three independent services (Alara, PolyX, Langflow) on a single cloud server. Each had its own domain name, microservices, databases, and required HTTPS.</p>
      <p>This felt like a DevOps task. But instead of offloading it, I decided to learn it. Here's exactly how I pulled it off with Docker, NGINX, and Certbot.</p>
  
      <h2>Problem Statement</h2>
      <ul>
        <li>One server (GCP VM)</li>
        <li>Three services: <strong>Alara</strong>, <strong>PolyX</strong>, <strong>Langflow</strong></li>
        <li>Each must be accessible from its own domain:</li>
        <ul>
          <li><code>https://alara-agents.com</code></li>
          <li><code>https://poly-x.com</code></li>
          <li><code>https://langflow.app</code></li>
        </ul>
        <li>Each service uses microservices (Node.js, Redis, MongoDB)</li>
        <li>Each service is containerized with Docker</li>
        <li>All domains must have valid SSL certificates (Let's Encrypt)</li>
      </ul>
  
      <h2>Solution Architecture</h2>
      <p>I used a <strong>centralized NGINX reverse proxy</strong> pattern:</p>
      <ol>
        <li>One main NGINX container exposed on ports 80 and 443</li>
        <li>Each app stack runs its own Docker services (on custom ports)</li>
        <li>Domains are routed via NGINX <code>server_name</code> blocks</li>
        <li>SSL certificates are handled via Certbot and mounted into NGINX</li>
      </ol>
  
      <h3>Folder Structure</h3>
      <pre><code>/projects
  ├── nginx-proxy/
  │   ├── docker-compose.yml
  │   └── conf.d/
  │       ├── alara.conf
  │       ├── polyx.conf
  │       └── langflow.conf
  ├── alara/
  │   └── docker-compose.yml
  ├── polyx/
  │   └── docker-compose.yml
  └── langflow/
      └── docker-compose.yml</code></pre>
  
      <h2>Docker Networking Strategy</h2>
      <p>I created a shared Docker network:</p>
      <pre><code>docker network create shared</code></pre>
      <p>Each app and the NGINX container are connected to this shared network. This allows NGINX to proxy to containers by name (e.g., <code>alara-api:3000</code>).</p>
  
      <h2>Central NGINX Setup</h2>
      <p>Here’s a snippet from my main NGINX container’s compose file:</p>
      <pre><code>services:
    nginx:
      image: nginx:latest
      ports:
        - "80:80"
        - "443:443"
      volumes:
        - ./conf.d:/etc/nginx/conf.d
        - /etc/letsencrypt:/etc/letsencrypt
        - /var/www/certbot:/var/www/certbot
      networks:
        - shared</code></pre>
  
      <h3>NGINX Domain Config (alara.conf)</h3>
      <pre><code>server {
    listen 80;
    server_name alara-agents.com;
  
    location /.well-known/acme-challenge/ {
      root /var/www/certbot;
    }
  
    location / {
      return 301 https://$host$request_uri;
    }
  }
  
  server {
    listen 443 ssl;
    server_name alara-agents.com;
  
    ssl_certificate /etc/letsencrypt/live/alara-agents.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/alara-agents.com/privkey.pem;
  
    location / {
      proxy_pass http://alara-api:3000;
      include proxy_params;
    }
  }</code></pre>
  
      <p>I repeated this setup for <code>poly-x.com</code> and <code>langflow.app</code> as well.</p>
  
      <h2>App Port Mapping (Avoiding Conflicts)</h2>
      <p>Each service stack maps its internal ports to unique external ones. For example:</p>
      <pre><code>Alara:
    3100:3000 (API)
    3101:3001 (Auth)
    3102:5000 (Alerts)
  
  PolyX:
    3200:3000
    3201:4000
    3202:5000
  
  Langflow:
    3300:3000
    3301:5000</code></pre>
  
      <p>MongoDB and Redis also get isolated ports per service. This eliminates any conflicts.</p>
  
      <h2>SSL via Certbot</h2>
      <p>I used Certbot in webroot mode (so it works behind NGINX):</p>
      <pre><code>docker run --rm -it \\
    -v /etc/letsencrypt:/etc/letsencrypt \\
    -v /var/www/certbot:/var/www/certbot \\
    certbot/certbot certonly \\
    --webroot --webroot-path=/var/www/certbot \\
    -d alara-agents.com -d poly-x.com -d langflow.app</code></pre>
  
      <p>Certificates are automatically mounted into the NGINX container.</p>
  
      <h2>Auto-Renewal</h2>
      <p>I set up a cron job to renew certificates and reload NGINX monthly:</p>
      <pre><code>0 3 * * * docker run --rm \\
    -v /etc/letsencrypt:/etc/letsencrypt \\
    -v /var/www/certbot:/var/www/certbot \\
    certbot/certbot renew --webroot --webroot-path=/var/www/certbot \\
    && docker exec nginx-proxy nginx -s reload</code></pre>
  
      <h2>Result: 3 Domains, 1 Server, Full HTTPS</h2>
      <ul>
        <li><code>https://alara-agents.com</code> → Alara stack</li>
        <li><code>https://poly-x.com</code> → PolyX stack</li>
        <li><code>https://langflow.app</code> → Langflow stack</li>
      </ul>
      <p>All isolated, independently scalable, and SSL-secure — running on a single server.</p>
  
      <h2>Key Takeaways</h2>
      <ul>
        <li>Use one NGINX reverse proxy to handle all domain routing</li>
        <li>Keep Docker networks shared but services isolated</li>
        <li>Use Certbot in webroot mode and mount volumes into NGINX</li>
        <li>Map ports uniquely per app to prevent service collisions</li>
      </ul>
  
      <h2>Final Thoughts</h2>
      <p>This experience taught me that as a full-stack dev, understanding DevOps makes you 10× more effective — especially when working solo or deploying to production. This setup is now part of my go-to deployment playbook.</p>
      <p>Hope it helps you as much as it helped me!</p>
    `,
    "coverImage": "/blogs/multi-domain-docker-nginx-ssl-lets-encrypt.png",
    "categories": ["DevOps", "Docker", "NGINX", "SSL", "Let's Encrypt", "Deployment"]
  },

  //Taming CORS in a Microservices Monorepo: From Async Validation to a Unified Config
  {
    "id": "b1f4c90e-02b4-4b33-82f2-26a8a5edc0d3",
    "title": "Taming CORS in a Microservices Monorepo: From Async Validation to a Unified Config",
    "slug": "taming-cors-microservices-monorepo",
    "author": "Muhammad Sharjeel",
    "date": "2025-05-11",
    "excerpt": "CORS errors can be frustrating, especially in a microservices monorepo setup. This blog dives into what CORS really is, why it matters, and how I solved the CORS challenge using a shared JSON config file — establishing a single source of truth for all services.",
    "coverImage": "/blogs/taming-cors-microservices-monorepo.png",
    "categories": ["Backend Development", "Microservices", "DevOps", "Architecture"],
    "content": `
  <br/>
  
  <h2>What is CORS?</h2>
  <p>Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers. It restricts web applications running on one origin (domain) from interacting with resources from another unless explicitly allowed.</p>
  
  <p>Let’s say your frontend is hosted at <code>https://app.example.com</code> and your API is at <code>https://api.example.com</code>. By default, browsers will block requests from the frontend to the backend unless the backend server allows it via CORS headers.</p>
  
  <h2>Why CORS is Necessary</h2>
  <p>CORS exists to protect users from malicious websites that attempt to read sensitive data from another origin (like your banking session). Without CORS, any site could fetch data from any API the user is authenticated with — a nightmare for security.</p>
  
  <p>In development, however, it often feels like a headache: “Why is my API call failing even though the backend is up?” More often than not, it’s a CORS misconfiguration.</p>
  
  <h2>How CORS Works (Including Preflight)</h2>
  <p>There are two types of CORS requests:</p>
  <ul>
    <li><strong>Simple Requests:</strong> Like a <code>GET</code> with no custom headers.</li>
    <li><strong>Preflighted Requests:</strong> Any request that modifies data (e.g., <code>POST</code>, <code>PUT</code>) or includes custom headers triggers a preflight check — an initial <code>OPTIONS</code> request sent by the browser to verify if the real request is safe to send.</li>
  </ul>
  
  <p>If your server fails to respond to this <code>OPTIONS</code> request correctly, the real request is never made.</p>
  
  <h2>My CORS Problem: Microservices in a Monorepo</h2>
  <p>I’m working on a platform called PolyX — built using a microservices architecture, all managed in a <strong>Yarn monorepo</strong>. Each service runs independently but shares the same workspace — and that’s where the challenge came in.</p>
  
  <p>I initially allowed each service to define its own list of allowed CORS origins. But in a monorepo setup, this quickly became unmanageable. A new frontend domain? I had to update every service manually. Worse: discrepancies started appearing between environments.</p>
  
  <h2>Early Attempt: Asynchronous Origin Validation</h2>
  <p>My first idea was to validate origins asynchronously — fetching allowed origins from a central store (like Redis or MongoDB) during every request. It was technically flexible, but practically inefficient.</p>
  
  <p>Why? Because:</p>
  <ul>
    <li>Every request triggered a DB read</li>
    <li>This added latency to every API call</li>
    <li>Even OPTIONS (preflight) requests had to go through this check</li>
  </ul>
  
  <p>It was elegant in theory, but a performance and stability bottleneck in practice.</p>
  
  <h2>The Real Solution: A Shared JSON File</h2>
  <p>So, I went back to basics. I created a single JSON file inside the monorepo:</p>
  <pre><code>/poly-auth/poly-common/config/allowed-origins.json</code></pre>
  
  <p>Every microservice now loads its allowed origins from this file at startup. And this is where the magic of a monorepo shines — since everything lives in one place, all services can import and reference the same file easily.</p>
  
  <h3>Sample JSON File</h3>
  <pre><code>{
    "allowedOrigins": [
      "https://admin.example.com",
      "https://dashboard.example.com",
      "https://app.example.com"
    ]
  }</code></pre>
  
  <h2>Why a Single Source of Truth Matters</h2>
  <p>Beyond CORS, this experience taught me the value of <strong>single source of truth (SSOT)</strong> in monorepo architecture:</p>
  
  <ul>
    <li>✅ Reduces config drift across services</li>
    <li>✅ Makes onboarding easier</li>
    <li>✅ Enables automation and CI checks on shared settings</li>
    <li>✅ Avoids bugs caused by inconsistent behavior</li>
  </ul>
  
  <p>This pattern now powers not just CORS — but also shared error codes, status enums, role definitions, and even environment flags.</p>
  
  <h2>Implementing It in Node.js</h2>
  <p>Here’s a basic snippet of how a service loads and uses the JSON config:</p>
  <pre><code>import fs from 'fs';
  import path from 'path';
  
  const ORIGIN_FILE_PATH = path.join(__dirname, '../config/allowed-origins.json');
  const rawOrigins = fs.readFileSync(ORIGIN_FILE_PATH, 'utf-8');
  const { allowedOrigins } = JSON.parse(rawOrigins);
  
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
  }));</code></pre>
  
  <p>This way, no matter which service handles a request, it follows the same rules — with zero runtime calls to databases or external services.</p>
  
  <h2>Lessons Learned</h2>
  <p>Here’s what I learned through this journey:</p>
  <ul>
    <li><strong>Don’t over-engineer early.</strong> CORS doesn’t need to be dynamic for most setups.</li>
    <li><strong>Monorepos simplify shared config.</strong> Lean into that instead of duplicating.</li>
    <li><strong>Performance matters in security middleware.</strong> Especially for preflight requests.</li>
  </ul>
  
  <h2>Final Thoughts</h2>
  <p>CORS errors can feel like black magic at times — but understanding how they work and structuring your architecture with clarity makes all the difference. For me, it wasn’t about a fancy fix. It was about designing with simplicity, maintainability, and shared ownership in mind.</p>
  
  <p>And sometimes, the best solution is the one that lives in a good old JSON file.</p>
      `
  },
  // recent blog post
  {
    "id": "a9d2b5f7-6c35-4e5f-9b2f-ef9e7f45db9c",
    "title": "Debugging Tips for Frontend Developers (React + Next.js)",
    "slug": "debugging-tips-frontend-developers-react-nextjs",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-26",
    "excerpt": "Effective debugging is one of the most valuable skills for frontend developers. Here's a practical guide to debugging with logs, using the debugger keyword, troubleshooting APIs, and improving performance — with a special focus on React and Next.js.",
    "content": `
      <br/>
      <h2>Why Debugging Mastery Matters</h2>
      <p>Debugging isn't just fixing what's broken — it's about understanding the full lifecycle of your application. The earlier you learn this mindset, the faster you’ll grow as a developer.</p>
  
      <h2>Debugging with Logs</h2>
      <p><strong>Logging</strong> is your first and simplest line of defense. Use <code>console.log</code>, <code>console.error</code>, and <code>console.warn</code> effectively to track what your code is doing at every step.</p>
  
      <h3>Example: Logging API Request/Response</h3>
      <pre><code>async function fetchUserData() {
    console.log("Starting API call...");
    try {
      const response = await fetch('/api/user');
      const data = await response.json();
      console.log("API call success:", data);
      return data;
    } catch (error) {
      console.error("API call failed:", error);
    }
  }</code></pre>
      <p>Notice how we log <strong>before</strong> starting the call, and separately log the <strong>successful</strong> and <strong>error</strong> paths.</p>
  
      <h2>Using the <code>debugger</code> Keyword</h2>
      <p>When logging isn’t enough, the <code>debugger</code> keyword lets you pause code execution and inspect live values and the call stack in DevTools.</p>
  
      <h3>Example: Freezing the Code with Debugger</h3>
      <pre><code>function calculateTotal(price, tax) {
    const total = price + tax;
    debugger; // Execution will pause here
    return total;
  }
  
  const finalAmount = calculateTotal(100, 20);
  console.log("Final Amount:", finalAmount);</code></pre>
      <p>When you reach <code>debugger</code>, the browser will pause execution. You can inspect variables like <code>price</code>, <code>tax</code>, and <code>total</code> right inside DevTools.</p>
  
      <h2>Debugging APIs and Network Issues</h2>
      <p>React and Next.js apps are API-heavy. Knowing how to debug API calls is crucial.</p>
      <ul>
        <li>Always log the <strong>request payload</strong> and <strong>API response</strong>.</li>
        <li>Check the <strong>Network</strong> tab in DevTools to inspect headers, status codes, and timings.</li>
        <li>Look for common mistakes: incorrect URLs, missing auth headers, wrong HTTP methods, or parsing errors.</li>
      </ul>
  
      <h3>Example: API Call Debugging</h3>
      <pre><code>async function loginUser(credentials) {
    console.log("Sending login request with credentials:", credentials);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      console.log("Login response:", result);
    } catch (error) {
      console.error("Login API failed:", error);
    }
  }</code></pre>
  
      <h2>Checking API Response Time</h2>
      <p>Use the DevTools Network tab to analyze:</p>
      <ul>
        <li><strong>DNS Lookup</strong></li>
        <li><strong>Connection time</strong></li>
        <li><strong>Server processing time</strong></li>
        <li><strong>Download time</strong></li>
      </ul>
      <p>Identify if slowness is happening on your end (frontend) or backend (server).</p>
  
      <h2>Special Tips for React and Next.js</h2>
      <h3>In React:</h3>
      <ul>
        <li>Use <code>React Developer Tools</code> extension to inspect props and state visually.</li>
        <li>Log inside <code>useEffect</code> to trace when effects re-run.</li>
      </ul>
  
      <h3>In Next.js:</h3>
      <ul>
        <li>Use <code>console.log</code> inside <code>getServerSideProps</code> and <code>API Routes</code>.</li>
        <li>Remember that server-side logs appear in the Node.js terminal (not browser).</li>
      </ul>
  
      <h2>Real-World Debugging Scenario</h2>
      <h3>Bug: Button Click Not Working</h3>
      <pre><code>function MyButton() {
    const handleClick = () => {
      console.log("Button clicked!");
      // Suppose something is supposed to happen here
    };
  
    return (
      &lt;button onClick={handleClick}>Click Me&lt;/button>
    );
  }</code></pre>
  
      <p>If clicking doesn't log anything:</p>
      <ul>
        <li>Check if the event handler is wired correctly (<code>onClick</code> vs <code>onclick</code> typo?)</li>
        <li>Use <code>debugger</code> inside <code>handleClick</code> to pause execution.</li>
        <li>Check if any parent container is swallowing the event (like a <code>preventDefault</code> somewhere).</li>
      </ul>
  
      <h2>Building a Debugging Mindset</h2>
      <ul>
        <li><strong>Don't guess.</strong> Observe and investigate.</li>
        <li><strong>Isolate issues.</strong> Comment out blocks to find culprits faster.</li>
        <li><strong>Master DevTools.</strong> Especially the Console, Network, and Sources tabs.</li>
        <li><strong>Read errors carefully.</strong> They usually tell you exactly what's wrong if you pay attention.</li>
      </ul>
  
      <h2>Tools to Amplify Your Debugging</h2>
      <ul>
        <li><strong>React DevTools</strong> — Visualize component hierarchy, props, and state.</li>
        <li><strong>Redux DevTools</strong> — If using Redux, track actions and state changes easily.</li>
        <li><strong>VSCode Debugger</strong> — Set breakpoints directly inside your code editor for seamless inspection.</li>
      </ul>
  
      <h2>Final Thoughts</h2>
      <p>Great developers aren't the ones who never face bugs. They're the ones who <strong>debug efficiently</strong> and <strong>learn faster</strong> from every problem.</p>
      <p>Master these debugging fundamentals now, and you'll separate yourself from the average developers much faster!</p>
    `,
    "coverImage": "/blogs/debugging-tips-frontend-developers-react-nextjs.png",
    "categories": ["Frontend Development", "React", "Next.js", "Debugging"]
  },

  // Blog 1: My New Blog
  {
    "id": "da8d010d-4a72-4ac5-9dbc-e657563352c4",
    "title": "Launching My New Portfolio Website",
    "slug": "launching-my-new-portfolio-website",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "I'm thrilled to launch my new portfolio website — a blend of design precision and development finesse. Here's a breakdown of the technologies used, design choices made, and the philosophy behind the build.",
    "content": `
      <br/>
      <h2>Why a New Portfolio?</h2>
      <p>As a full-stack developer, your personal website should be a reflection of your evolving craft. My old portfolio no longer represented my capabilities, so I decided to rebuild from the ground up — with speed, accessibility, and aesthetic balance at its core.</p>
    
      <h2>Tech Stack Breakdown</h2>
      <p>This version is built using a modern frontend stack that allows rapid iteration, excellent performance, and delightful developer experience:</p>
      <ul>
        <li><strong>Next.js 15</strong> – The foundation of the site, utilizing the App Router for structure and performance.</li>
        <li><strong>ShadCN UI</strong> – For accessible, headless UI components styled with Tailwind.</li>
        <li><strong>Aceternity UI</strong> – Used for micro-interactions and unique, prebuilt design elements.</li>
        <li><strong>Tailwind CSS</strong> – Enables utility-first styling with full design control.</li>
        <li><strong>Framer Motion</strong> – Adds smooth transitions and animations that elevate the user experience.</li>
      </ul>
    
      <h2>Design Principles</h2>
      <p>I followed a minimalist, content-first design language with a focus on:</p>
      <ul>
        <li>Typography and spacing to improve readability.</li>
        <li>Dark mode as the default for a sleek look.</li>
        <li>Centralized content in the hero section, shifting to left-aligned grids in blogs and projects for usability.</li>
      </ul>
    
      <h2>Developer Experience (DX)</h2>
      <p>From a coding perspective, everything is optimized for maintainability:</p>
      <ul>
        <li>Folder structure is modular, aligned with App Router conventions.</li>
        <li>All components are reusable and wrapped in Radix primitives where necessary.</li>
        <li>Used <code>clsx</code> and <code>tailwind-merge</code> for safe, dynamic class merging.</li>
      </ul>
    
      <h2>Using Generative AI</h2>
      <p>One of the biggest productivity boosts came from integrating generative AI into the workflow. I used <strong>ChatGPT</strong> not only for code suggestions and debugging, but also to bounce off structural and UX ideas — acting almost like a second pair of eyes in the room.</p>
      <p>Additionally, I relied on <strong>v0.dev</strong> to quickly scaffold beautiful UI components that matched my design direction. It helped me move faster while keeping things visually consistent.</p>
      <p>These tools didn’t replace creativity — they amplified it. If you’re not already using generative AI in your build pipeline, I highly recommend exploring it. The speed and support it provides are game-changers.</p>
    
      <h2>GitHub Repository</h2>
      <p>The source code for this portfolio is fully open-source and available here:</p>
      <p><a href="https://github.com/isharjeeldd/portfolio-dd" target="_blank" rel="noopener noreferrer">🔗 github.com/isharjeeldd/portfolio-dd</a></p>
    
      <h2>What’s Next?</h2>
      <p>This site isn't just static — it's growing. Future additions will include:</p>
      <ul>
        <li>Dynamic blogs powered by MDX.</li>
        <li>Project walkthroughs with interactive demos.</li>
        <li>Developer notes and design insights from real-world builds.</li>
      </ul>
    
      <h2>Fork, Learn, Build</h2>
      <p>This project is licensed under the GNU GPL, which means you're free to fork, modify, and share. Just make sure your derivative works follow the same license terms.</p>
      <p><em>If you find something valuable in this portfolio, feel free to star, fork, or reach out — I’d love to see how you build on it.</em></p>
    `,
    "coverImage": "/blogs/launching-my-new-portfolio-website.png",
    "categories": ["Design", "Frameworks", "Software Development", "Tools"],
  },
  // Blog 2: Getting Started with Next.js
  {
    "id": "1ba3cea4-06a9-48e4-81f4-aef1bff6ea5c",
    "title": "Getting Started with Next.js: Structure, Tips & Deployment",
    "slug": "getting-started-with-nextjs",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "A developer-friendly introduction to Next.js — learn how to scaffold projects, understand folder structure, configure features, and deploy to Vercel seamlessly.",
    "content": `
    <br/>
      <h2>What is Next.js?</h2>
      <p>Next.js is a powerful React-based framework that enables developers to build fast, SEO-friendly web applications with minimal setup. Whether you're building a static marketing page, a full-stack SaaS product, or a blog — Next.js handles routing, rendering modes, and performance out of the box.</p>

      <h2>Why Choose Next.js?</h2>
      <ul>
        <li><strong>File-based routing:</strong> No need for React Router. Just drop a file in <code>/app</code> or <code>/pages</code> and it becomes a route.</li>
        <li><strong>Server-side rendering & static generation:</strong> Easily switch between SSR, SSG, or client-side rendering.</li>
        <li><strong>Built-in API routes:</strong> Create full-stack apps without needing a separate backend.</li>
        <li><strong>Seamless Vercel deployment:</strong> Optimized for Vercel hosting.</li>
      </ul>

      <hr />

      <h2>Project Setup</h2>
      <p>Let’s create a new Next.js app using the App Router approach (recommended in Next.js 13+).</p>

      <pre><code>npx create-next-app@latest my-nextjs-app --experimental-app</code></pre>

      <p>After the CLI prompts, your project will be initialized with the following folder structure:</p>

      <h3>Project Structure Overview</h3>
      <pre><code>.
      ├── app/                // App Router entrypoint
      │   ├── layout.tsx      // Root layout (wrapping component)
      │   ├── page.tsx        // Homepage ("/")
      │   └── (routes)/       // Sub-routes as directories
      ├── components/         // Shared UI components
      ├── public/             // Static assets (e.g. images, fonts)
      ├── styles/             // Tailwind/global styles
      ├── lib/                // Utilities, helper functions
      ├── .env.local          // Environment variables
      ├── tailwind.config.ts  // Tailwind configuration
      ├── next.config.js      // Framework-level config
      └── package.json
      </code></pre>

      <p>This modular layout promotes separation of concerns and scalability.</p>

      <hr />

      <h2>Adding Tailwind CSS</h2>
      <p>Tailwind helps you build modern UIs rapidly. To install it:</p>

      <pre><code>npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p</code></pre>

      <p>Update your <code>tailwind.config.ts</code> to include:</p>

      <pre><code>"content": ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]</code></pre>

      <p>And in your global CSS file (usually <code>globals.css</code>):</p>

      <pre><code>@tailwind base;
      @tailwind components;
      @tailwind utilities;
      </code></pre>

      <hr />

      <h2>Routing with the App Router</h2>
      <p>Next.js App Router introduces nested layouts, dynamic routing, and server components by default.</p>

      <h4>Create a route:</h4>
      <pre><code>// app/about/page.tsx
      export default function AboutPage() {
        return &lt;h1&gt;About Me&lt;/h1&gt;
      }</code></pre>

      <p>This will now be available at <code>/about</code>.</p>

      <h4>Nested Layouts:</h4>
      <pre><code>// app/dashboard/layout.tsx
      export default function DashboardLayout({ children }) {
        return (
          &lt;div&gt;
            &lt;Sidebar /&gt;
            {children}
          &lt;/div&gt;
        )
      }</code></pre>

      <p>This layout wraps all routes under <code>/dashboard</code>.</p>

      <hr />

      <h2>Environment Configuration</h2>
      <p>Create a <code>.env.local</code> file in your root for environment-specific settings:</p>

      <pre><code>
      NEXT_PUBLIC_API_BASE_URL=https://api.example.com
      NEXT_PUBLIC_ENV=development
      </code></pre>

      <p>Access these with <code>process.env.NEXT_PUBLIC_*</code> in your codebase.</p>

      <hr />

      <h2>Useful Libraries to Add</h2>
      <ul>
        <li><strong>clsx / tailwind-merge</strong> – Handle conditional classNames.</li>
        <li><strong>shadcn/ui</strong> – Prebuilt headless UI components with Tailwind.</li>
        <li><strong>framer-motion</strong> – For page transitions and motion effects.</li>
        <li><strong>zod</strong> – For schema validation in forms or APIs.</li>
      </ul>

      <hr />

      <h2>Deploying to Vercel (Free Hosting)</h2>
      <ol>
        <li>Push your code to GitHub.</li>
        <li>Go to <a href="https://vercel.com" target="_blank">vercel.com</a> and sign in.</li>
        <li>Click <strong>“New Project”</strong> and import your GitHub repo.</li>
        <li>Vercel auto-detects the framework and deploys your app instantly.</li>
      </ol>

      <p>Bonus: You get previews on every commit and custom domains. You can also add environment variables from the Vercel dashboard.</p>

      <hr />

      <h2>Final Thoughts</h2>
      <p>Next.js offers a scalable foundation whether you're just starting out or building enterprise-level applications. Understanding the project structure and deployment process will help you ship better, faster.</p>

      <p>If you're new to the ecosystem, start small — build a portfolio, a blog, or a dashboard UI. The tooling is designed to grow with you.</p>

      <h2>Useful Links</h2>
      <ul>
        <li><a href="https://nextjs.org/docs" target="_blank">Next.js Docs</a></li>
        <li><a href="https://vercel.com/docs" target="_blank">Vercel Deployment Guide</a></li>
        <li><a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS</a></li>
      </ul>
      `,
    "coverImage": "/blogs/getting-started-with-nextjs.png",
    "categories": ["Frameworks", "Software Development", "Tools"],
  },

  // Blog 3: AI Developer - Threat or Stunt?
  {
    "id": "419a2d55-6193-4afd-8e6d-e5a680e2ed74",
    "title": "Is the ‘AI Developer’ a Threat to Jobs – or a Marketing Stunt?",
    "slug": "ai-developer-threat-or-stunt",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "AI dev tools are booming — but are they replacing developers or just reshaping workflows? Here's the balanced view.",
    "content": `
    <br/>
    <h2>The Fear Around AI Developers</h2>
    <p>With the rapid rise of tools like GitHub Copilot, ChatGPT, and even auto-code generation platforms, a question echoes across tech circles: <strong>Will AI take over developer jobs?</strong> The concern is valid. We've seen similar patterns in other industries — automation replacing factory workers, self-service kiosks reshaping retail, and now AI touching the once "untouchable" realm of software development.</p>

    <p>Headlines exaggerate this fear with phrases like “AI writing code faster than humans” or “One AI developer equals 10 engineers.” While attention-grabbing, these claims oversimplify a complex reality.</p>

    <h2>The Reality: Amplification, Not Replacement</h2>
    <p>AI is best viewed as a tool — a <em>very smart assistant</em>. It doesn't create from scratch with deep understanding. It recognizes patterns, suggests snippets, and helps speed up repetitive tasks. But creativity, problem-solving, architecture decisions, and debugging nuance? These still belong to human developers.</p>

    <p>Tools like Copilot are trained on existing codebases. That means they're great at reproducing known patterns, but lack contextual insight about a project’s unique goals or constraints. They can't ask, "Should we optimize for performance or maintainability?" — a decision only a human can make based on business logic, team capacity, or user needs.</p>

    <h2>The Shift in Developer Roles</h2>
    <p>Instead of replacing developers, AI is shifting what it means to be a developer. Here’s how:</p>
    <ul>
      <li><strong>Less manual repetition:</strong> Tasks like writing CRUD operations or basic component scaffolding can be partially automated.</li>
      <li><strong>More emphasis on system design:</strong> Developers now spend more time on higher-order thinking — architecture, user experience, security models.</li>
      <li><strong>Rise of prompt engineering:</strong> A new skill is emerging — how well you can instruct AI matters just as much as how well you can write code.</li>
    </ul>

    <p>In short, AI is shifting the <em>center of gravity</em> of a developer’s responsibilities, not eliminating the role altogether.</p>

    <h2>What This Means for Junior Developers</h2>
    <p>This is where most of the fear stems from. Junior roles often involve boilerplate code, documentation, and simple debugging — tasks that AI is increasingly good at. So where does that leave entry-level talent?</p>

    <p>While some responsibilities may shrink, new ones will emerge:</p>
    <ul>
      <li><strong>Code reviewers and testers:</strong> AI-generated code still needs human validation.</li>
      <li><strong>AI-tool operators:</strong> Understanding how to correctly use AI tools will be a key differentiator.</li>
      <li><strong>Interface and system thinkers:</strong> Roles that bridge UX and logic will gain more value.</li>
    </ul>

    <p>Just like calculators didn’t remove the need for mathematicians — AI won’t remove the need for developers. It just raises the bar for value creation.</p>

    <h2>The Marketing Layer</h2>
    <p>“AI Developer” is also a shiny new marketing term. Startups brand themselves as being run by AI to attract funding. Enterprises push AI-native tooling to seem forward-thinking. But behind most AI developer products are still teams of traditional software engineers refining the AI’s boundaries, fixing bugs, and ensuring reliability.</p>

    <p>It’s important to understand that much of the “AI dev” narrative is hype-driven. Most current AI tooling is still in co-pilot mode, not auto-pilot. The tech is impressive — but it's not magic.</p>

    <h2Final Thoughts</h2>
    <p>AI in development is not a threat — it’s a catalyst. It pushes us to evolve faster. Instead of memorizing syntax, we’ll optimize workflows. Instead of repeating known patterns, we’ll engineer smarter systems. And while some job roles may shift or fade, new ones will undoubtedly emerge.</p>

    <p>So is the “AI Developer” a threat to jobs? No. It’s more of a <strong>mirror</strong> — reflecting back to us which parts of our role are mechanical and which are irreplaceably human.</p>

    <p>Embrace the tools. Learn their limits. And then build beyond them.</p>
      `,
    "coverImage": "/blogs/ai-developer-threat-or-stunt.png",
    "categories": ["AI", "Software Development", "Opinion"],
  },

  // Blog 4: Using Generative AI to Speed Up Processes
  {
    "id": "70970440-7088-4d51-a03e-35c6403d2f3d",
    "title": "Using Generative AI to Speed Up Creative and Dev Workflows",
    "slug": "using-generative-ai-to-speed-up",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "From ChatGPT to v0.dev — here's how generative AI helps streamline UI design, prototyping, coding, and problem-solving in modern workflows.",
    "content": `
    <br/>
    <h2>The Rise of Generative AI in Development</h2>
    <p>Generative AI has gone from a buzzword to a practical tool in everyday development and design workflows. It’s no longer about writing entire applications for you — it’s about <strong>accelerating the thinking and building process</strong>. As a developer and designer, I’ve experimented with several tools and found real value in the ones that help reduce friction in early-stage ideation, layout planning, and prototyping.</p>

    <h2>Tools I Use Regularly</h2>
    <p>Two tools in particular have become part of my creative workflow:</p>

    <h3>v0.dev</h3>
    <p>Created by the team behind Vercel, <a href="https://v0.dev" target="_blank">v0.dev</a> is a generative UI tool that turns prompts into Tailwind-based React components. You can describe a layout — like “a hero section with a CTA and three feature cards” — and v0 will scaffold a fully functional component for you. It’s an excellent starting point, especially when you're battling a blank screen or short on time.</p>

    <h3>ChatGPT</h3>
    <p>From brainstorming component structures to explaining unfamiliar error messages, ChatGPT is now an extension of my IDE. It’s incredibly useful for:</p>
    <ul>
      <li>Scaffolding component boilerplate</li>
      <li>Generating regex or edge-case functions</li>
      <li>Quickly understanding libraries or methods</li>
      <li>Generating design content like placeholder copy or accessibility guidelines</li>
    </ul>

    <h2>When and Where to Use AI</h2>
    <p>AI is most powerful when used for <strong>support tasks</strong>. These include:</p>
    <ul>
      <li>Generating boilerplate code (forms, layouts, validation schemas)</li>
      <li>Inspiration for UI layouts or empty states</li>
      <li>Creating first drafts of copy or documentation</li>
      <li>Brainstorming multiple approaches to a feature</li>
    </ul>

    <p>However, AI tools should not be blindly trusted for production-level decisions or complex system architecture. That still requires experience, domain knowledge, and thoughtful consideration.</p>

    <h2>Benefits of Generative AI in Dev Workflows</h2>
    <p>Here are the advantages I’ve experienced when integrating AI tools into my design and development process:</p>

    <ul>
      <li><strong>Speed:</strong> What used to take 30 minutes of structuring now takes 5.</li>
      <li><strong>Unblocking:</strong> AI helps you push through creative or cognitive stalls.</li>
      <li><strong>Accessibility:</strong> Non-designers or non-devs can now prototype or experiment with ideas more easily.</li>
    </ul>

    <h2>Limitations and Trade-offs</h2>
    <p>While helpful, generative AI still comes with caveats:</p>

    <ul>
      <li><strong>Overconfidence:</strong> AI may suggest broken or non-performant code that <em>looks</em> correct.</li>
      <li><strong>Surface-level reasoning:</strong> It doesn’t understand business context or long-term implications.</li>
      <li><strong>Creativity gap:</strong> Outputs may be derivative of existing patterns — not groundbreaking.</li>
      <li><strong>Ownership:</strong> Licensing and copyright of AI-generated content can be legally ambiguous.</li>
    </ul>

    <h2>How I Combine Both Worlds</h2>
    <p>I typically start with a generative tool to scaffold the structure — whether it’s a UI layout or a code snippet. Then I manually refine the logic, design decisions, and accessibility layer. This hybrid approach keeps me productive without compromising quality or creativity.</p>

    <h2>Final Thoughts</h2>
    <p>Generative AI isn’t here to replace developers or designers. It’s here to <strong>augment the creative process</strong>. Think of it as your brainstorming partner — fast, non-judgmental, and always available. But like any tool, its real value lies in <em>how</em> you use it, and whether you know when to stop relying on it and trust your own instincts instead.</p>

    <p>If you're not experimenting with these tools yet, you're missing out on a productivity boost — not because AI is perfect, but because it's good enough to help you move faster without losing control.</p>
      `,
    "coverImage": "/blogs/using-generative-ai-to-speed-up.png",
    "categories": ["AI", "Tools", "Productivity"],
  },

  // Blog 5: Docker + NGINX for Microservices
  {
    "id": "2183cfd0-343f-4420-8fcc-a6a0dc17c73b",
    "title": "Using Docker & NGINX to Build a Suite of Microservices",
    "slug": "docker-nginx-microservices",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "Explore how to use Docker and NGINX to containerize and orchestrate a scalable microservices suite. Includes setup tips, architecture advice, and real-world tradeoffs.",
    "content": `
    <br/>
    <h2>Why Microservices?</h2>
    <p>Modern applications are increasingly being built using a microservices architecture, where independent services communicate through APIs. This makes them more scalable, maintainable, and deployable. But managing those services locally and in production can be a nightmare without proper tooling.</p>

    <p>This is where <strong>Docker</strong> and <strong>NGINX</strong> step in. Docker helps you containerize each service, while NGINX can be used as a reverse proxy to route incoming requests appropriately. Together, they provide a lightweight and flexible setup for building your own service-based architecture.</p>

    <h2>Setting Up the Project</h2>
    <p>Let’s say you’re building two separate microservices: <code>service-a</code> and <code>service-b</code>. Each runs independently, and we use NGINX to unify them under one domain.</p>

    <h3>Project Structure</h3>
    <pre><code>
    ├── service-a/
    │   ├── Dockerfile
    │   └── ...
    ├── service-b/
    │   ├── Dockerfile
    │   └── ...
    ├── nginx.conf
    └── docker-compose.yml
    </code></pre>

    <h3>docker-compose.yml</h3>
    <p>This is your orchestration file, which defines how containers are built and networked.</p>

    <pre><code>version: '3.8'

    services:
      service-a:
        build: ./service-a
        ports:
          - "3001:3000"
      
      service-b:
        build: ./service-b
        ports:
          - "3002:3000"

      nginx:
        image: nginx:latest
        ports:
          - "80:80"
        volumes:
          - ./nginx.conf:/etc/nginx/nginx.conf
        depends_on:
          - service-a
          - service-b
    </code></pre>

    <h3>nginx.conf</h3>
    <p>This file tells NGINX how to route requests to each service:</p>

    <pre><code>http {
      server {
        listen 80;

        location /service-a/ {
          proxy_pass http://service-a:3000/;
        }

        location /service-b/ {
          proxy_pass http://service-b:3000/;
        }
      }
    }
    </code></pre>

    <p>Now, when you access <code>localhost/service-a</code> or <code>localhost/service-b</code>, your requests will be routed to the correct container.</p>

    <h2>Advantages of This Setup</h2>
    <ul>
      <li><strong>Isolation:</strong> Each service runs in its own container, with its own dependencies and runtime environment.</li>
      <li><strong>Portability:</strong> You can ship your app across dev, staging, and production with consistent behavior.</li>
      <li><strong>Scalability:</strong> Spin up more instances of a single service without affecting others.</li>
      <li><strong>Ease of Local Testing:</strong> Easily test how services interact with each other using just a few Docker commands.</li>
    </ul>

    <h2>Challenges and Caveats</h2>
    <p>While this setup is powerful, it comes with some tradeoffs:</p>
    <ul>
      <li><strong>Configuration Complexity:</strong> Managing NGINX config and inter-container networking can get tricky as the number of services increases.</li>
      <li><strong>Monitoring Overhead:</strong> You’ll need tools like Prometheus, Grafana, or ELK Stack to monitor logs, health, and performance.</li>
      <li><strong>Cold Start Time:</strong> Spinning up several containers might slow down your local dev environment, depending on your machine.</li>
    </ul>

    <h2>Optimizing the Workflow</h2>
    <p>To keep things manageable as your suite grows:</p>
    <ul>
      <li>Use a <code>.env</code> file to store shared port values, secrets, and environment modes.</li>
      <li>Implement health checks in your <code>docker-compose.yml</code> so services don’t start until dependencies are ready.</li>
      <li>Consider using a service mesh like Istio or Traefik if you plan to move into Kubernetes later.</li>
    </ul>

    <h2>Real-World Use Cases</h2>
    <p>This architecture is a great foundation for any of the following:</p>
    <ul>
      <li>A dashboard + backend API combo (separate front-end and API containers)</li>
      <li>Auth, billing, and notification services, each in their own container</li>
      <li>A lightweight CMS, analytics engine, and user-facing app running side-by-side</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Combining Docker and NGINX gives you a clean, developer-friendly way to build, test, and deploy microservice-based applications. It takes some configuration work upfront, but the benefits in maintainability and scalability are well worth it.</p>

    <p>If you're building projects that need to grow modularly, learning this workflow early can save you countless headaches down the line.</p>
      `,
    "coverImage": "/blogs/docker-nginx-microservices.png",
    "categories": ["DevOps", "Software Development", "Tools"],
  },

  // Blog 6: Accessible Design Matters
  {
    "id": "170540d8-b7e0-49dd-8911-69757d17af47",
    "title": "What Is Accessible Design and Why It Matters",
    "slug": "what-is-accessible-design",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "Accessibility isn’t a nice-to-have. It’s a necessity. Here's why accessible design matters — and how to get it right in your UI and frontend code.",
    "content": `
  <br/>
    <h2>Defining Accessible Design</h2>
    <p>Accessible design refers to the practice of building digital interfaces that everyone can use — regardless of ability, device, or context. It includes everything from making sure your site works well with screen readers to ensuring users can navigate via keyboard or understand visuals with limited color perception.</p>

    <p>It’s not just about compliance — it’s about inclusivity. A well-designed app should never leave someone behind because of a visual, auditory, cognitive, or motor limitation.</p>

    <h2>Why Accessibility Matters</h2>
    <p>According to the World Health Organization, over <strong>1 billion people</strong> — about 15% of the global population — live with some form of disability. And yet, a surprising number of websites and applications still exclude these users, either unintentionally or through neglect of basic accessibility practices.</p>

    <p>Designing with accessibility in mind benefits everyone. For example:</p>
    <ul>
      <li>Captions help not just the deaf, but users in noisy environments.</li>
      <li>High-contrast text benefits users with vision loss — and those using devices outdoors.</li>
      <li>Keyboard navigation isn’t just for accessibility — it enhances productivity for power users.</li>
    </ul>

    <h2>Core Principles of Accessible UI Design</h2>
    <p>Here are some of the most important foundations of an accessible interface:</p>

    <h3>Semantic HTML</h3>
    <p>Always use the right element for the job. A button should be a <code>&lt;button&gt;</code>, not a styled <code>&lt;div&gt;</code>. Use headings to create a content hierarchy (<code>&lt;h1&gt; - &lt;h6&gt;</code>), use lists appropriately, and label form inputs with <code>&lt;label&gt;</code> tags.</p>

    <h3>Keyboard Accessibility</h3>
    <p>All interactive elements — buttons, forms, links, menus — should be reachable and operable using only the keyboard. Use <code>tabIndex</code> responsibly and ensure that <strong>focus states</strong> are visible.</p>

    <h3>Screen Reader Support</h3>
    <p>Use ARIA attributes wisely to add context where semantic HTML isn’t enough. For example:</p>
    <pre><code>&lt;button aria-label="Close modal"&gt;&times;&lt;/button&gt;</code></pre>
    <p>Screen readers translate visual cues into audio for blind users — but only if the code provides enough semantic detail.</p>

    <h3>Color Contrast</h3>
    <p>Text should have enough contrast against the background to remain legible for people with low vision or color blindness. Tools like <a href="https://webaim.org/resources/contrastchecker/" target="_blank">WebAIM Contrast Checker</a> help you meet the WCAG (Web Content Accessibility Guidelines) minimum of a 4.5:1 contrast ratio for normal text.</p>

    <h3>Alt Text for Images</h3>
    <p>Decorative images should be marked with empty <code>alt=""</code> attributes. Informative images should describe what’s essential. For example:</p>
    <pre><code>&lt;img src="team-photo.jpg" alt="Our design team collaborating on wireframes" /&gt;</code></pre>

    <h2>Tips for Making Your UI More Accessible</h2>
    <ul>
      <li><strong>Use semantic HTML</strong> as the first line of accessibility support.</li>
      <li><strong>Test with screen readers</strong> like VoiceOver (macOS) or NVDA (Windows).</li>
      <li><strong>Ensure keyboard-only navigation</strong> works throughout your site or app.</li>
      <li><strong>Follow WCAG guidelines</strong> — especially WCAG 2.1 Level AA, which most standards use as a baseline.</li>
      <li><strong>Label your inputs clearly</strong>, and use descriptive <code>aria-label</code> or <code>aria-labelledby</code> where necessary.</li>
      <li><strong>Don’t rely solely on color</strong> to convey meaning. Add text or icons to clarify status or messages.</li>
    </ul>

    <h2>Accessibility Is Not a Feature — It's a Foundation</h2>
    <p>Accessibility is not something to be tacked on at the end of a project. It needs to be part of your development and design process from the beginning. The more you embed these principles early on, the easier they are to maintain — and the more welcoming your product becomes to a broader audience.</p>

    <p>Inaccessible interfaces aren’t just bad design — they’re broken experiences for the people who need them most.</p>

    <h2>Resources to Learn More</h2>
    <ul>
      <li><a href="https://www.w3.org/WAI/" target="_blank">W3C Web Accessibility Initiative</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank">MDN Web Docs – Accessibility</a></li>
      <li><a href="https://a11yproject.com/" target="_blank">The A11Y Project</a></li>
    </ul>

    <p>Start small — fix one accessibility issue at a time. Every improvement makes your app better, more inclusive, and more impactful.</p>
      `,
    "coverImage": "/blogs/what-is-accessible-design.png",
    "categories": ["Design", "Interface", "Inclusivity"],
  },

  // Blog 7: Grid Systems in UI
  {
    "id": "7",
    "title": "Grid Systems: The Foundation of Great UI Design",
    "slug": "grid-system-ui-design",
    "author": "Muhammad Sharjeel",
    "date": "2025-04-13",
    "excerpt":
      "Want cleaner, more balanced layouts? A grid system brings structure, rhythm, and clarity to your UI — and Tailwind makes it easier than ever to implement.",
    "content": `
    <br/>
    <h2>Understanding Grid Systems</h2>
    <p>At its core, a grid system is a layout structure that helps you organize content across a consistent visual framework. Whether you’re designing a landing page, dashboard, or blog layout, grids ensure your UI feels organized, balanced, and intentional.</p>

    <p>In web design, the most common form is the <strong>12-column grid</strong> — a flexible structure that can be easily divided into halves, thirds, fourths, and more. This flexibility makes it the perfect choice for responsive design, where different screen sizes require adaptable layouts.</p>

    <h2>Why Use a Grid System?</h2>
    <p>Without a grid, layouts tend to look unstructured or visually chaotic. Grid systems solve that by offering these key benefits:</p>

    <ul>
      <li><strong>Visual consistency:</strong> Aligning elements along a grid improves spacing, proportions, and alignment across the page.</li>
      <li><strong>Responsive behavior:</strong> Grids make it easier to design interfaces that adapt to different screen sizes gracefully.</li>
      <li><strong>Design scalability:</strong> When components follow a grid, you can mix and match them across pages with minimal visual disruption.</li>
      <li><strong>User comprehension:</strong> Structured layouts guide the eye better and make information easier to scan and understand.</li>
    </ul>

    <h2>Grid System in Tailwind CSS</h2>
    <p>Tailwind CSS makes it incredibly easy to implement grid-based layouts using utility classes. Here's a basic example using the popular 12-column layout:</p>

    <pre><code>&lt;div className="grid grid-cols-12 gap-4"&gt;
      &lt;div className="col-span-4"&gt;Sidebar&lt;/div&gt;
      &lt;div className="col-span-8"&gt;Main Content&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>

    <p>This setup divides the page into 12 columns. The sidebar takes 4 columns, and the main content takes 8 — a balanced 1/3 to 2/3 ratio. Tailwind's grid utilities also allow for responsive variations:</p>

    <pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-12 gap-6"&gt;
      &lt;div className="md:col-span-3"&gt;Sidebar&lt;/div&gt;
      &lt;div className="md:col-span-9"&gt;Main&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>

    <p>On smaller screens, both sections stack vertically; on larger screens, they snap into their respective grid spans.</p>

    <h2>Common Grid Use Cases</h2>
    <p>Grid systems are widely used across all types of UIs, including:</p>

    <ul>
      <li><strong>Marketing Pages:</strong> Centered content with asymmetric feature layouts.</li>
      <li><strong>Dashboards:</strong> Sidebar navigation with main content areas and widgets.</li>
      <li><strong>Image Galleries:</strong> Uniform or masonry-style image grids.</li>
      <li><strong>Forms:</strong> Side-by-side input fields that collapse on mobile.</li>
    </ul>

    <h2>Grid vs. Flexbox</h2>
    <p>While <code>flexbox</code> excels at one-dimensional layout (either row or column), <code>grid</code> is better suited for two-dimensional layouts. Use flex when you're distributing items in a single row (like buttons or nav links), and use grid when you’re managing the overall page structure.</p>

    <h2>Designing Beyond the Grid</h2>
    <p>While grids create structure, design is never one-size-fits-all. You should still experiment with breaking the grid for intentional visual contrast — such as offset images, overlapping text, or interactive animations. Just ensure that your overall rhythm isn’t compromised in the process.</p>

    <h2>Final Thoughts</h2>
    <p>If you want to build interfaces that feel cohesive and scalable, mastering grid systems is essential. You’ll not only speed up your layout process but also dramatically improve the visual clarity of your designs. Combine grid principles with a utility-first framework like Tailwind, and you’ve got a recipe for scalable, clean, and modern UIs.</p>

    <p>Start with structure, layer in creativity, and never underestimate the power of invisible rules guiding a beautiful layout.</p>
      `,
    "coverImage": "/blogs/grid-system-ui-design.png",
    "categories": ["Design", "Interface", "Best Practices"],
  },
]

export async function getAllBlogs(): Promise<BlogPost[]> {
  return blogPosts
}

export async function getRecentBlogs(count = 3, excludeId?: string): Promise<BlogPost[]> {
  return blogPosts.filter((blog) => !excludeId || blog.id !== excludeId).slice(0, count)
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((blog) => blog.slug === slug)
}