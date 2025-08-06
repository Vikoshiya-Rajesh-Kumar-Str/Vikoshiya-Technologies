import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why We Started Vikoshiya Technologies: Our Mission and Vision",
      excerpt: "Discover the story behind Vikoshiya Technologies - from our humble beginnings in Singapore to becoming a comprehensive technology powerhouse, and our mission to empower businesses with exceptional digital solutions.",
      date: "August 1, 2025",
      category: "Company Story",
      image: "https://i.pinimg.com/736x/c9/88/0a/c9880a8abf25f389be7154e8fee18270.jpg"
    },
    {
      id: 2,
      title: "React vs. Next.js: Which One Should You Use for Your Business Website?",
      excerpt: "Choosing between React and Next.js? Here's a breakdown - and why I believe React is still the smartest choice for building fast, flexible business websites.",
      date: "August 1, 2025",
      category: "Web Development",
      image: "https://i.pinimg.com/1200x/41/2e/a7/412ea792b6963690a4a9dce67b73f216.jpg"
    },
    {
      id: 3,
      title: "What is Quality Assurance and Why Every Website Needs It",
      excerpt: "Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever.",
      date: "August 1, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg"
      
    },
    {
      id: 4,
      title: "Manual vs. Automated Testing: Which One Is Right for Your Web App?",
      excerpt: "Manual or automated testing? Here's how I decide which approach fits best - based on the project, timeline, and long-term goals of your web app.",
      date: "August 6, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/1200x/2a/33/c7/2a33c7347de60d0c65be83a72c4495be.jpg"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-bg flex items-center justify-center"
        style={{ '--hero-image': "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights & Innovation</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Explore expert perspectives, industry trends, and company news from the team driving digital transformation. Stay informed, inspired, and ahead of the curve with our thought leadership and technology updates.
          </p>
        </header>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link to={`/blog/${post.id}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read more <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Blog 