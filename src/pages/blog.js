import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogIndexPage = () => {
  return ( 
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div className="bg-gray-50">
        <main className="c3-container">
        
          <section>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 my-4">Blog posts goes here</h1>

          </section>
        </main>
      </div>
    </Layout>
  );
}
 
export default BlogIndexPage;