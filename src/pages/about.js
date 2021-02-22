import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";
import AboutAuthor from '../components/AboutAuthor';
import CoursesTought from "../components/CousesTought";
import CarouselBanner from '../components/CarouselBanner';

function AboutPage() {
  return (
    <Layout carouselComponent={<CarouselBanner/>}>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <main className="c3-container">

        <section>
          <AboutAuthor />
          <CoursesTought />
        </section>
        
      </main>
    </Layout>
  );
}

export default AboutPage;
