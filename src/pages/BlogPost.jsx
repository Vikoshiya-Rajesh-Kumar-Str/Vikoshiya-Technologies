import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const BlogPost = () => {
  const { id } = useParams()

  // Blog posts data - same as in Blog.tsx
  const blogPosts = [
    {
      id: 1,
      title: "Why We Started Vikoshiya Technologies: Our Mission and Vision",
      excerpt: "Discover the story behind Vikoshiya Technologies - from our humble beginnings in Singapore to becoming a comprehensive technology powerhouse, and our mission to empower businesses with exceptional digital solutions.",
      content: `
        <p>In 2012, a vision took root in Singapore - a vision that would eventually span continents and evolve into something much greater than we initially imagined. What started as Vikoshiya's journey in electrical and instrumentation has now blossomed into a comprehensive technology powerhouse, with our latest chapter opening in Virudhunagar, India, in 2025.</p>
        
        <h2>The Journey That Shaped Our Purpose</h2>
        <p>Our story isn't just about business expansion; it's about understanding what truly matters in the digital age. Over more than a decade, we've witnessed firsthand how technology can transform lives, businesses, and entire communities. From our early days working with electrical systems in Singapore to expanding into media in 2015 and infrastructure in 2016, each step taught us valuable lessons about quality, reliability, and the importance of genuine partnerships.</p>
        
        <p>But it was in 2025, as we ventured into the technology sector, that our true mission crystallized. We realized that the digital world was filled with companies that promised the moon but delivered mediocre results. Businesses were struggling to find partners who truly understood their needs, who cared about their success beyond just completing a project.</p>
        
        <h2>Our Mission: Building Digital Excellence with Heart</h2>
        <p>At Vikoshiya Technologies, our mission is simple yet profound: To empower businesses with exceptional web development, quality assurance, and ecommerce solutions that drive real growth while fostering lasting partnerships built on trust, transparency, and genuine care.</p>
        
        <p>We didn't start this company just to write code or run tests. We started it because we believe that every business deserves a technology partner who:</p>
        <ul>
          <li>Listens first, codes second - Understanding your vision is more important than showcasing our technical prowess</li>
          <li>Delivers quality that lasts - We're not interested in quick fixes; we build solutions that grow with your business</li>
          <li>Stands by their work - When we say we'll support you, we mean it for the long haul</li>
          <li>Treats your success as our success - Your growth is our greatest achievement</li>
        </ul>
        
        <h2>The Problems We're Solving</h2>
        <p>In our years of experience across different industries, we've identified critical gaps in the technology services landscape:</p>
        
        <h3>1. The Trust Deficit</h3>
        <p>Too many businesses have been burned by agencies that overpromise and underdeliver. We're here to restore faith in what a true technology partnership should look like.</p>
        
        <h3>2. One-Size-Fits-All Solutions</h3>
        <p>Every business is unique, yet many providers offer cookie-cutter solutions. We believe in crafting bespoke digital experiences tailored to your specific needs and goals.</p>
        
        <h3>3. The Communication Gap</h3>
        <p>Technical jargon and poor communication plague the industry. We speak your language - business language - and keep you informed every step of the way.</p>
        
        <h3>4. Short-Term Thinking</h3>
        <p>Many providers disappear after project completion. We're building relationships that span years, not projects.</p>
        
        <h2>Our Vision: Transforming Digital Partnerships</h2>
        <p>Our vision extends far beyond being just another web development company. We envision a future where businesses and technology partners collaborate as true allies, where digital transformation is accessible to companies of all sizes, and where quality and integrity are the foundation of every interaction.</p>
        
        <p>We see ourselves as:</p>
        <ul>
          <li><strong>Digital Transformation Enablers</strong> - Helping businesses navigate the complex digital landscape with confidence, providing not just services but strategic guidance that drives meaningful growth.</li>
          <li><strong>Quality Champions</strong> - Setting new standards for what businesses should expect from their technology partners - where excellence isn't an exception, it's the baseline.</li>
          <li><strong>Innovation Catalysts</strong> - Staying ahead of technological trends so our clients can focus on what they do best while we handle the complexities of modern web development, quality assurance, and ecommerce solutions.</li>
          <li><strong>Community Builders</strong> - Creating a network of successful businesses that have grown through strategic digital investments, fostering a community where knowledge and success are shared.</li>
        </ul>
        
        <h2>What This Means for You</h2>
        <p>When you partner with Vikoshiya Technologies, you're not just hiring a service provider - you're gaining a dedicated ally in your business journey. Here's what our mission and vision translate to in practical terms:</p>
        
        <h3>Immediate Impact:</h3>
        <ul>
          <li>Custom web solutions that reflect your brand and drive conversions</li>
          <li>Rigorous quality assurance that ensures your digital products work flawlessly</li>
          <li>Ecommerce platforms that turn visitors into loyal customers</li>
          <li>Transparent communication and regular progress updates</li>
        </ul>
        
        <h3>Long-Term Partnership:</h3>
        <ul>
          <li>Ongoing support and maintenance to keep your digital assets performing optimally</li>
          <li>Strategic advice on technology trends and opportunities</li>
          <li>Scalable solutions that grow with your business</li>
          <li>A team that genuinely cares about your continued success</li>
        </ul>
        
        <h2>Our Commitment to Excellence</h2>
        <p>We've learned that excellence isn't just about technical skills - though we certainly have those. It's about the complete experience: how we communicate, how we solve problems, how we handle challenges, and how we celebrate successes together.</p>
        
        <p>Our commitment includes:</p>
        <ul>
          <li><strong>Honest Work</strong> - Every project approached with integrity and transparency</li>
          <li><strong>Lasting Relationships</strong> - Building partnerships that extend far beyond project completion</li>
          <li><strong>Smart Solutions</strong> - Creating practical, efficient solutions that actually work</li>
          <li><strong>Quality First</strong> - Every deliverable meeting our high standards for performance and security</li>
          <li><strong>Care & Commitment</strong> - Genuine investment in your success and growth</li>
          <li><strong>Growth Focused</strong> - Designing solutions that scale with your business ambitions</li>
        </ul>
        
        <h2>Looking Forward: The Future We're Building</h2>
        <p>As we continue to grow and evolve, our core mission remains unchanged. We're building a company that businesses can trust, rely on, and grow with. We're proving that in an industry often characterized by complexity and confusion, clarity and care can prevail.</p>
        
        <p>We're excited about the future - not just for Vikoshiya Technologies, but for every business we'll have the privilege to partner with. Whether you're a startup taking your first steps into the digital world or an established company looking to transform your online presence, we're here to ensure your journey is successful, sustainable, and genuinely rewarding.</p>
        
        <h2>Ready to Start Your Journey?</h2>
        <p>Our story is still being written, and we'd love for your business to be part of the next chapter. We're not just offering services; we're offering a partnership built on the values that have guided us for over a decade: quality, integrity, and an unwavering commitment to your success.</p>
        
        <p>Because at Vikoshiya Technologies, we don't just build websites, conduct tests, or create ecommerce platforms. We build relationships, solve problems, and help dreams become digital realities.</p>
        
        <p><strong>Let's build something meaningful - together.</strong></p>
      `,
      date: "August 1, 2025",
      category: "Company Story",
      image: "https://i.pinimg.com/736x/c9/88/0a/c9880a8abf25f389be7154e8fee18270.jpg",
      author: "Muthuramakrishnan",
      authorImage: "/src/assets/profile.png"
    },
    {
      id: 2,
      title: "React vs. Next.js: Which One Should You Use for Your Business Website?",
      excerpt: "Choosing between React and Next.js? Here's a breakdown - and why I believe React is still the smartest choice for building fast, flexible business websites.",
      content: `
        <p>When starting a business website, one of the first tech decisions you'll face is whether to go with plain React or a framework like Next.js. Both are powerful - but they serve different purposes. Since we build most of our client projects at Vikoshiya Technologies using React, I wanted to share why we made that choice - and why it might be right for your business too.</p>
    
        <h2>Understanding the Basics</h2>
        <p><strong>React</strong> is a JavaScript library for building UI components. It’s flexible, fast, and highly customizable. Think of it like the engine of a car - you can build what you want, your way.</p>
        <p><strong>Next.js</strong> is a React-based framework that adds structure, routing, and server-side features. It’s great for SEO-heavy and content-focused sites.</p>
    
        <h2>Where React Shines (And Why We Use It)</h2>
        <p>Here’s why I personally prefer React for most business web applications:</p>
        <ul>
          <li><strong>Complete Flexibility:</strong> React lets us control every part of the architecture, so we can tailor solutions exactly to business requirements.</li>
          <li><strong>Single Page Application (SPA):</strong> For modern apps with dashboards, forms, and interactions, SPAs built in React give a faster and smoother experience.</li>
          <li><strong>Frontend-Only Simplicity:</strong> With APIs and headless backends, React keeps your frontend clean and focused - no unnecessary server complexity.</li>
          <li><strong>Custom Routing:</strong> We can build custom flows and navigation without being locked into file-based routes like in Next.js.</li>
        </ul>
    
        <h2>When Next.js Might Be Better</h2>
        <p>That said, I do respect what Next.js brings to the table. It's a great choice if:</p>
        <ul>
          <li>You need <strong>server-side rendering (SSR)</strong> for SEO-heavy pages like blogs or news portals.</li>
          <li>You want built-in routing and API handling out of the box.</li>
          <li>You’re building a content-rich marketing site where SEO is a top priority.</li>
        </ul>
    
        <h2>Performance & SEO</h2>
        <p>People often say Next.js is better for SEO - but with proper meta tags, dynamic routing, and tools like React Helmet, we’ve consistently achieved excellent SEO results in our React builds. Plus, React’s performance is unmatched when it comes to interactive UI and frontend speed.</p>
    
        <h2>Our Take at Vikoshiya Technologies</h2>
        <p>We build high-performance business applications, admin panels, ecommerce stores, and product UIs - all using React + Vite + Tailwind. This stack gives us the power to move fast and customize deeply without unnecessary overhead.</p>
        <p>If we ever need SEO-driven landing pages, we pair React with tools like Astro or a static CMS - not always Next.js.</p>
    
        <h2>Final Verdict</h2>
        <p>If your site needs rich interactivity, flexibility, and fast frontend performance, go with <strong>React</strong>. If you need out-of-the-box routing, SSR, and a more opinionated structure, consider <strong>Next.js</strong>.</p>
    
        <p>At the end of the day, both are excellent. But for most businesses we work with - especially product-driven companies or custom applications - <strong>React is the winner</strong>.</p>
      `,
      date: "August 1, 2025",
      category: "Web Development",
      image: "https://i.pinimg.com/1200x/41/2e/a7/412ea792b6963690a4a9dce67b73f216.jpg",
      author: "Rajesh Kumar",
      authorImage: "/src/assets/RK.png"
    },
    {
      id: 3,
      title: "What is Quality Assurance and Why Every Website Needs It",
      excerpt: "Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever.",
      content: `
        <p>Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever. At Vikoshiya Technologies, having evolved from precision-focused electrical and instrumentation systems in Singapore, we understand that quality isn't optional - it's essential.</p>
        
        <h2>What is Quality Assurance?</h2>
        <p>Quality Assurance (QA) is the systematic process of ensuring your website functions flawlessly across all scenarios. It's not just about finding bugs - it's about preventing them, optimizing performance, ensuring security, and delivering exceptional user experiences.</p>
        
        <p>Think of QA as your website's comprehensive health check-up. It's the difference between hoping your website works and knowing it works.</p>
        
        <h2>Key Components of Website QA</h2>
        
        <h3>1. Functional Testing</h3>
        <p>Ensuring every feature works as intended - forms, checkout processes, user registration, and third-party integrations.</p>
        
        <h3>2. Performance Testing</h3>
        <p>Verifying your website handles real-world traffic with fast load speeds and optimal server response times.</p>
        
        <h3>3. Security Testing</h3>
        <p>Protecting against cyber threats through vulnerability assessments and compliance validation.</p>
        
        <h3>4. Compatibility Testing</h3>
        <p>Ensuring consistent experiences across browsers, devices, and operating systems.</p>
        
        <h3>5. User Experience Testing</h3>
        <p>Validating intuitive navigation, conversion optimization, and accessibility compliance.</p>
        
        <h2>Why Every Website Needs QA</h2>
        
        <h3>Brand Protection</h3>
        <ul>
          <li>88% of users won't return after a bad website experience</li>
          <li>One negative experience gets shared with 15+ people on average</li>
          <li>Poor mobile sites lose 40% of potential conversions</li>
        </ul>
        
        <h3>Financial Impact</h3>
        <ul>
          <li>Single hour of downtime costs e-commerce sites thousands</li>
          <li>Post-launch fixes cost 10-100x more than prevention</li>
          <li>Poor quality increases customer acquisition costs by 200-400%</li>
        </ul>
        
        <h3>Security & Compliance</h3>
        <ul>
          <li>Data breaches affect 1 in 4 companies annually</li>
          <li>Average breach cost: $4.45 million</li>
          <li>GDPR non-compliance fines up to €20 million</li>
        </ul>
        
        <h3>SEO Benefits</h3>
        <ul>
          <li>Page speed directly affects search rankings</li>
          <li>Mobile-friendliness impacts visibility</li>
          <li>User engagement metrics influence rankings</li>
        </ul>
        
        <h2>The Hidden Costs of Skipping QA</h2>
        <p>Without proper QA, businesses face:</p>
        <ul>
          <li>Multiplied customer acquisition costs</li>
          <li>Overwhelming support ticket volumes</li>
          <li>Expensive emergency fixes</li>
          <li>Lost SEO investments and reduced organic traffic</li>
        </ul>
        
        <h2>Our QA Methodology at Vikoshiya Technologies</h2>
        
        <h3>1. Requirements Analysis</h3>
        <p>Understanding your business objectives and technical requirements for customized QA strategy.</p>
        
        <h3>2. Comprehensive Testing</h3>
        <p>Rigorous protocols covering functionality, performance, security, and user experience.</p>
        
        <h3>3. Detailed Reporting</h3>
        <p>Clear documentation with prioritized recommendations and resolution support.</p>
        
        <h3>4. Post-Launch Monitoring</h3>
        <p>Ongoing quality monitoring to maintain optimal performance as your website evolves.</p>
        
        <h2>Specialized QA for Different Needs</h2>
        
        <h3>E-commerce Platforms</h3>
        <ul>
          <li>Payment gateway security</li>
          <li>Shopping cart functionality</li>
          <li>Inventory management</li>
          <li>Order processing workflows</li>
        </ul>
        
        <h3>Corporate Websites</h3>
        <ul>
          <li>Lead generation optimization</li>
          <li>Brand consistency</li>
          <li>CRM integrations</li>
          <li>Professional presentation</li>
        </ul>
        
        <h3>Web Applications</h3>
        <ul>
          <li>User authentication systems</li>
          <li>API integrations</li>
          <li>Workflow automation</li>
          <li>Scalability testing</li>
        </ul>
        
        <h2>Why Choose Vikoshiya Technologies</h2>
        
        <h3>Proven Experience</h3>
        <p>Our decade-long journey from Singapore's precision engineering to India's tech innovation has taught us that quality is non-negotiable.</p>
        
        <h3>Integrated Approach</h3>
        <p>Unlike standalone QA providers, we seamlessly integrate quality assurance with our web development and e-commerce services.</p>
        
        <h3>Business-Focused Testing</h3>
        <p>We test for business success, not just technical correctness, maximizing your website's ability to achieve objectives.</p>
        
        <h3>Long-term Partnership</h3>
        <p>Quality assurance is ongoing. We provide continued support as your website evolves and grows.</p>
        
        <h2>Taking Action</h2>
        <p>Quality assurance isn't just recommended - it's essential for success in today's digital landscape. Whether launching a new website or upgrading existing platforms, comprehensive QA protects your investment and drives business growth.</p>
        
        <p>Ready to ensure your website delivers the quality your business deserves? Let's discuss how our QA services can protect your investment, enhance your reputation, and drive digital success.</p>
        
        <p>Because when it comes to website quality, hoping for the best isn't a strategy - ensuring the best is.</p>
      `,
      date: "August 1, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
      author: "Muthuramakrishnan",
      authorImage: "/src/assets/profile.png"
    },
    {
      id: 4,
      title: "Manual vs. Automated Testing: Which One Is Right for Your Web App?",
      excerpt: "Manual or automated testing? Here's how I decide which approach fits best - based on the project, timeline, and long-term goals of your web app.",
      content: `
        <p>When you're building a web application - especially one meant for real users and real growth - testing is not optional. One of the most common questions I get from clients is: should we go with manual testing or invest in automation?</p>
    
        <p>As someone who’s worked closely with QA engineers and managed multiple web projects at Vikoshiya Technologies, I’ve learned that the answer isn’t always black and white. Let's break it down.</p>
    
        <h2>What Is Manual Testing?</h2>
        <p>Manual testing is exactly what it sounds like - humans clicking through the app, checking if features behave as expected, and reporting bugs. It’s flexible, intuitive, and great for catching unexpected issues like design flaws or strange edge cases.</p>
    
        <h3>When I Recommend Manual Testing:</h3>
        <ul>
          <li>Early-stage MVPs or short-term projects</li>
          <li>Features still changing frequently</li>
          <li>User experience and UI feedback is critical</li>
          <li>Quick exploratory or smoke tests</li>
        </ul>
    
        <p>In fact, for many new client apps, we always begin with manual testing. It’s fast to set up, and allows us to iterate quickly during development sprints.</p>
    
        <h2>What Is Automated Testing?</h2>
        <p>Automated testing involves writing scripts or code that test your application automatically. These tests can be run again and again - after every code change - saving time and catching bugs early.</p>
    
        <h3>When I Recommend Automated Testing:</h3>
        <ul>
          <li>Large-scale web apps with stable features</li>
          <li>Critical business flows (checkout, login, dashboard)</li>
          <li>Long-term projects that require CI/CD pipelines</li>
          <li>Apps with multiple releases and updates</li>
        </ul>
    
        <p>At Vikoshiya, we use tools like Cypress, Playwright, and Jest to create automated test suites that run as part of our deployment pipeline. They save us time and give clients confidence in every release.</p>
    
        <h2>Manual vs. Automated: Pros and Cons</h2>
        <table>
          <thead>
            <tr><th>Manual Testing</th><th>Automated Testing</th></tr>
          </thead>
          <tbody>
            <tr><td>Flexible & intuitive</td><td>Fast & repeatable</td></tr>
            <tr><td>No coding required</td><td>Initial setup takes time</td></tr>
            <tr><td>Good for UI/UX feedback</td><td>Great for regression testing</td></tr>
            <tr><td>Prone to human error</td><td>Can miss visual issues</td></tr>
          </tbody>
        </table>
    
        <h2>So, Which One Should You Choose?</h2>
        <p>Honestly, it depends on your app's stage and scale. My go-to strategy is to <strong>start with manual</strong>, then <strong>introduce automation gradually</strong> as the product stabilizes.</p>
        <p>This hybrid approach has worked best for our projects - it gives us speed and flexibility early on, and reliability as the app grows.</p>
    
        <h2>Final Thoughts</h2>
        <p>Manual testing is a great starting point. Automated testing is your long-term ally. If you're building a serious web app, you'll need both at different stages.</p>
        <p>If you’re unsure which direction to go, reach out. I’d be happy to take a look at your web app and help you build a smart QA roadmap.</p>
      `,
      date: "August 6, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/1200x/2a/33/c7/2a33c7347de60d0c65be83a72c4495be.jpg",
      author: "Rajesh Kumar",
      authorImage: "/src/assets/RK.png"
    }
  ]

  // Find the blog post by ID
  const post = blogPosts.find(p => p.id === parseInt(id || '0'))

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <img
                src={post.authorImage}
                alt="Author"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image - moved above content */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Article Content - now below image */}
          <article className="prose max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-12
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-blue-800 prose-h2:mb-6 prose-h2:mt-10
            prose-p:text-base prose-p:text-gray-800 prose-p:leading-7 prose-p:mb-7 prose-p:mt-0 prose-p:font-normal
            prose-li:text-base prose-li:text-gray-700 prose-li:mb-3 prose-li:pl-1
            prose-ul:pl-6 prose-ol:pl-6">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-600">Share this article:</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/" target="_blank" className="text-blue-600 hover:text-blue-700" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://whatsapp.com/channel/0029Vb6Oqf3ISTkIJqCVf03t" target="_blank" className="text-blue-600 hover:text-blue-700" aria-label="Whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://facebook.com/yourcompany" target="_blank" className="text-blue-600 hover:text-blue-700" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/yourcompany" target="_blank" className="text-blue-600 hover:text-blue-700" aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
              <Link
                to="/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Back to Blog
              </Link>
            </div>
          </footer>
        </div>
      </div>

      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default BlogPost 