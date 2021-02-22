import React from "react";
import ContactForm from "../components/ContactForm";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <main className="c3-container">
        <section className="max-w-screen-md mx-auto">
          <ContactForm />
        </section>
      </main>

      <section className="mt-8 bg-gray-100 flex justify-center">
        <div className="inline-block text-sm mb-4 py-16">

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block my-4">Visit Course Cube</span>
            <span className="block text-indigo-600 text-2xl font-bold my-2">CourseCube Private Limited</span>
          </h2>

          <div className="text-xl">
            <div className="font-extralight py-2">
              <p>#57, 1st Floor, 17th Cross, 7th Main</p>
              <p>NS Palya, BTM Layout-2nd Stage</p>
              <p>Bengaluru - 560076</p>
            </div>
            <div className="font-light">
              <p>Phone :- 77950 99 999</p>
              <p>Email :- training@coursecube.com</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default ContactPage;
